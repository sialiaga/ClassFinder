import SearchBar from "../../components/SearchBar";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, useWindowDimensions, Pressable, Dimensions } from "react-native";
import { useGlobalSearchParams, Link } from "expo-router";
import Fuse from "fuse.js";
import Icon from "react-native-vector-icons/FontAwesome5";

import { speakText } from "../../utils/TextToSpeech";
import { playSound } from "../../utils/playSound";
import { classrooms } from "@/classrooms/classrooms";
import { Classroom, ClassroomTypes } from "@/classrooms/typesClassrooms";
import { capitalize } from "@/utils/capitalize";
import { useLanguage } from "@/contexts/LanguageContext";

import { styleTitleLayout } from '@/utils/styleTitleLayout';
import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";

const itemsToString = (items: Classroom[]): string => {
  return items.filter((item) => item.show === true).map(item => `${item.id}`).join('. ');
};

const { width, height } = Dimensions.get('window');

const ICON_SIZE = Math.min(width * 0.1, 30);
const FONT_SIZE = Math.min(width * 0.05, 20);
const FONT_BACK_SIZE = Math.min(width * 0.05, 20);
const FONT_TITLE = Math.min(width * 0.05, 50);

export default function SearchScreen() {
  const { query } = useGlobalSearchParams<{ query: string }>();
  const { width } = useWindowDimensions();

  const [searchText, setSearchText] = useState(query ?? "");
  const [filteredItems, setFilteredItems] = useState<Classroom[]>(Object.values(classrooms));

  const { translations } = useLanguage();

  const [favorites, setFavorites] = useState<string[]>([]);

  const [showingFavorites, setShowingFavorites] = useState(false);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem("favorites");
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error("Error loading favorites: ", error);
      }
    };
    loadFavorites();
  }, []);

  useEffect(() => {
    const saveFavorites = async () => {
      try {
        await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
      } catch (error) {
        console.error("Error saving favorites: ", error);
      }
    };
    saveFavorites();
  }, [favorites]);

  const toggleFavoritesFilter = () => {
    setShowingFavorites((prev) => !prev);
    setFilteredItems((prev) =>
      !showingFavorites
        ? Object.values(classrooms).filter((item) => isFavorite(item.id))
        : Object.values(classrooms)
    );
  };


  const isFavorite = (id: string) => favorites.includes(id);


  useEffect(() => {
    const filterSingleCharacter = (char: string, itemsToFilter: Classroom[]) => {
      return itemsToFilter.filter((classroom) =>
        classroom.build.toLowerCase().startsWith(char.toLowerCase())
      );
    };
  
    const filterMultipleCharacters = (text: string, itemsToFilter: Classroom[]) => {
      const options = {
        keys: ["id", "build", "floor", "number"],
        includeScore: true,
        threshold: 0.1,
      };
  
      const fuse = new Fuse(itemsToFilter, options); // Se filtra solo el subconjunto (favoritos o todos)
      const result = fuse.search(text);
      return result.map(({ item }) => item);
    };
  
    const applyFilters = () => {
      const allItems = Object.values(classrooms);
  
      // Si el filtro de favoritos está activo, filtrar primero los favoritos
      const itemsToFilter = showingFavorites
        ? allItems.filter((item) => favorites.includes(item.id))
        : allItems;
  
      // Aplicar lógica de búsqueda con Fuse
      if (searchText.trim() === "") {
        setFilteredItems(itemsToFilter);
      } else if (searchText.trim().length === 1) {
        setFilteredItems(filterSingleCharacter(searchText.trim(), itemsToFilter));
      } else {
        setFilteredItems(filterMultipleCharacters(searchText.trim(), itemsToFilter));
      }
    };
  
    applyFilters();
  }, [searchText, classrooms, favorites, showingFavorites]);

  useEffect(() => {
    if (query !== undefined) {
      setSearchText(query);
    }
  }, [query]);



  const getItemWidth = () => {
    const padding = 20; // Total horizontal padding
    const gap = 20; // Gap between items
    return (width - padding - gap) / 2; // Divide available width by 2 for two columns
  };

  function toggleFavorite(id: string): void {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        // Si ya está en favoritos, lo elimina
        return prevFavorites.filter((fav) => fav !== id);
      } else {
        // Si no está en favoritos, lo agrega
        return [...prevFavorites, id];
      }
    });
  }

  return (
    <View style={styles.container}>

      <View style={styles.backButtonContainer}>
        <Pressable onPress={() => playSound(require('@/assets/sounds/back.mp3'))}>
          <Link href="/" asChild>
            <View style={styles.backButtonContent}>
              <Icon name="chevron-left" size={FONT_SIZE} color="#CE0615" style={styles.icon} />
              <Text style={styles.backText}>{translations['back']}</Text>
            </View>
          </Link>
        </Pressable>
      </View>

      <Pressable style={styles.filterButton} onPress={toggleFavoritesFilter}>
        <Text style={styles.filterText}>
          {showingFavorites ? "Mostrar Todos" : "Mostrar Favoritos"}
        </Text>
      </Pressable>

      <View style={styles.instructionContainer}>
        <Icon name="chevron-right" size={FONT_SIZE} color="#CE0615" style={styles.icon} />
        <Text style={styles.instructionText}>{translations['name_classroom']}</Text>
        <a
          onClick={() => speakText(`${translations["search_speak"]} ${itemsToString(filteredItems)}`)}
          style={styles.iconContainer}
        >
          <Icon name="volume-up" size={40} color="#000000" />
        </a>
      </View>

      <View>
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          onSubmit={() => { }}
        />
      </View>

      <FlatList
        data={filteredItems.filter((item) => item.show === true)}
        keyExtractor={(item) => `${item.build}-${item.number}`}
        numColumns={2}
        extraData={width}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <Pressable onPress={() => playSound(require('@/assets/sounds/click.mp3'))}>
            <Link href={{ pathname: `/display_map`, params: { id: item.id } }} style={styles.link}>
              <View style={[styles.buttonContainer, { width: getItemWidth() }]}>
                <View style={styles.titleContainer}>
                  <Icon
                    name={
                      item.type === ClassroomTypes.WC
                        ? "restroom"
                        : item.type === ClassroomTypes.CLASS
                          ? "chalkboard-teacher"
                          : item.type === ClassroomTypes.OTHER
                            ? "info"
                            : item.type === ClassroomTypes.CAFE
                              ? "coffee"
                              : "question-circle" // Ícono predeterminado
                    }
                    size={ICON_SIZE} // Ajusta el tamaño según sea necesario
                    color="#FFFFFF"
                    style={{}} // Espaciado entre texto e ícono
                  />
                  <Text style={styles.title}>{`${styleTitleLayout(item.id)}`}</Text>
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.infoText}>{translations['building']}: {capitalize(item.build)}</Text>
                  <Text style={styles.infoText}>{translations['floor']}: {item.floor}</Text>
                  <Text style={styles.infoText}>{translations['number']}: {item.number}</Text>
                </View>
              </View>
            </Link>
            <Pressable
              style={[
                styles.favoriteButton,
                isFavorite(item.id) && styles.favoriteButtonActive,
              ]}
              onPress={() => toggleFavorite(item.id)}
            >
              <Icon
                name={isFavorite(item.id) ? "heart" : "heart"}
                size={ICON_SIZE * 0.8}
                color={isFavorite(item.id) ? "#CE0615" : "#888"}
              />
            </Pressable>
          </Pressable>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No se encontraron salas.</Text>
        }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 5,
  },
  favoriteButtonActive: {
    backgroundColor: "#FFDADA", // Fondo rojo claro cuando está activo
  },
  filterButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#CE0615",
    borderRadius: 5,
    alignItems: "center",
  },
  filterText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: FONT_SIZE,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
  },
  backButtonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 10,
  },
  backButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: FONT_BACK_SIZE,
    color: '#CE0615',
    marginLeft: 5, // Ajusta el espacio entre el icono y el texto
  },
  container: {
    flex: 1,
    padding: 10,
  },
  instructionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centrar horizontalmente
    marginBottom: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: '#8B0000',
    padding: 10,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: FONT_TITLE,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoContainer: {
    backgroundColor: '#f4f4f4',
    padding: 15,
    alignItems: 'flex-start',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  infoText: {
    fontSize: FONT_SIZE,
    color: '#000',
  },
  link: {
    flex: 1,
  },
  instructionText: {
    fontSize: FONT_SIZE,
    fontWeight: 'bold',
    marginLeft: 10, // Espaciado entre el ícono y el texto
  },
  listContent: {
    flexGrow: 1,
  },
  icon: {
    marginRight: 10, // Separar el ícono del texto
  },
  iconContainer: {
    alignSelf: 'flex-end',
    marginLeft: 'auto', // Moves it to the far right within the flex container
  },
});