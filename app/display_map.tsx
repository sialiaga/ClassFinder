import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Link, Redirect, useGlobalSearchParams } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { playSound } from '@/utils/playSound';
import { classrooms } from '@/classrooms/classrooms';
import { Classroom } from "@/classrooms/typesClassrooms";
import { capitalize } from '@/utils/capitalize';
import { useLanguage } from '@/contexts/LanguageContext';
import { styleTitleLayout } from '@/utils/styleTitleLayout';

const { width, height } = Dimensions.get('window');

const ICON_SIZE = Math.min(width * 0.1, 50);
const FONT_SIZE = Math.min(width * 0.05, 30);
const FONT_BACK_SIZE = Math.min(width * 0.05, 20);
const FONT_TITLE = Math.min(width * 0.05, 50);

const campus_id: string = "campus"

export default function displayMap() {
  const { id } = useGlobalSearchParams<{ id: string }>();

  const [classroom, setClassroom] = useState<Classroom | undefined>(undefined);
  const [selectedResourceType, setSelectedResourceType] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const { language, setLanguage } = useLanguage();
  const { translations } = useLanguage();

  useEffect(() => {
    if (id && id in classrooms) {
      setClassroom(classrooms[id as keyof typeof classrooms]);
      setSelectedResourceType(classrooms[id as keyof typeof classrooms]?.resources[0].type || null);
    }
  }, [id]);

  if (id === undefined || !(id in classrooms)) {
    return <Redirect href={{ pathname: '/default' }} />;
  }


  const handleResourceTypeChange = (type: string) => {
    setSelectedResourceType(type);
    setCurrentIndex(0);
  };

  const selectedResources = classroom?.resources.find(res => res.type === selectedResourceType)?.resources || [];

  const nextImage = () => {
    if (currentIndex < selectedResources.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const previousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <Pressable onPress={() => playSound(require('@/assets/sounds/back.mp3'))}>
          <Link href="/search" asChild>
            <View style={styles.backButtonContent}>
              <Icon name="chevron-left" size={20} color="#CE0615" style={styles.iconBack} />
              <Text style={styles.backText}>{translations['search']}</Text>
            </View>
          </Link>
        </Pressable>
      </View>

      {classroom?.id && String(classroom.id) !== "campus" && (
        <View style={styles.campusButtonContainer}>
          <Pressable onPress={() => playSound(require('@/assets/sounds/openmap.mp3'))}>
            <Link
              href={{ pathname: `/display_map`, params: { id: "campus" } }}
              asChild
            >
              <View style={styles.campusButtonContent}>
                <Icon
                  name="map"
                  size={ICON_SIZE * 0.6}
                  color="#CE0615"
                  style={styles.iconCampus}
                />
                <Text style={styles.campusText}>Campus</Text>
              </View>
            </Link>
          </Pressable>
        </View>
      )}


      <Text style={styles.title}>
        {classroom?.title && classroom.title[language]
          ? classroom.title[language]
          : styleTitleLayout(classroom?.id ?? "")}
      </Text>

      <Text style={styles.subtitle}>
        {classroom?.title && classroom.title[language]
          ? ""
          : `${translations["building"]} ${capitalize(classroom?.build ?? "")}, ${translations["floor"]} ${classroom?.floor ?? ""}, ${translations["number"]} ${classroom?.number ?? ""}`}
      </Text>




      {classroom && classroom.resources && classroom.resources.length > 1 && (
        <View style={styles.resourceTypeButtons}>
          {classroom.resources.map((resource) => (
            <TouchableOpacity key={resource.type} onPress={() => {
              handleResourceTypeChange(resource.type);
              playSound(require('@/assets/sounds/click.mp3'))
            }}>
              <Text style={[styles.resourceType, selectedResourceType === resource.type && styles.selectedResourceType]}>
                {translations['route']} {capitalize(resource.type
                  .replace("normal", "general ")
                  .replace("alt", "♿ ")
                  .replace("M", `${translations["men"]} `)
                  .replace("W", `${translations["women"]} `))}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {selectedResources.length > 0 && (
        <View style={styles.imageContainer}>
          <Image
            source={selectedResources[currentIndex]} // Usamos la imagen asociada al recurso
            style={styles.resourceImage}
            resizeMode="contain"
          />
          {selectedResources.length > 1 && (
            <View style={styles.navigationButtons}>
              <TouchableOpacity
                onPress={() => { playSound(require('@/assets/sounds/turnpage.mp3')); previousImage() }}
                style={[styles.navButton, currentIndex === 0 && styles.disabledButton]}
                disabled={currentIndex === 0}
              >
                <Text style={styles.navButtonText}>{translations['back_img']}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { playSound(require('@/assets/sounds/turnpage.mp3')); nextImage() }}
                style={[styles.navButton, currentIndex === selectedResources.length - 1 && styles.disabledButton]}
                disabled={currentIndex === selectedResources.length - 1}
              >
                <Text style={styles.navButtonText}>{translations['next_img']}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: width * 0.075,
    marginTop: 60,
  },
  subtitle: {
    fontSize: width * 0.03,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
  backButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: FONT_BACK_SIZE,
    color: '#CE0615',
    marginLeft: 10,
  },
  campusButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 15,
  },
  campusButtonContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  campusText: {
    fontSize: FONT_BACK_SIZE,
    color: '#CE0615',
    marginRight: 0,
  },
  iconBack: {
    marginRight: 5,
  },
  iconCampus: {
    marginLeft: 0,
  },
  resourceTypeButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  resourceType: {
    fontSize: FONT_SIZE * 0.7,
    margin: 5, // Espaciado entre botones
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    textAlign: 'center', // Centra el texto dentro de cada botón
  },
  selectedResourceType: {
    backgroundColor: '#CE0615',
    color: '#fff',
  },
  imageContainer: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Asegura que el contenedor de la imagen ocupe todo el ancho
  },
  resourceImage: {
    width: width * 0.8, // 90% del ancho de la pantalla
    height: height * 0.6,
    aspectRatio: 0.75, // Proporción de 3:4
  },
  navigationButtons: {
    flexDirection: 'row',
    marginTop: 10
  },
  navButton: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#CE0615',
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: '#999999',
  },
  navButtonText: {
    color: '#fff',
    fontSize: FONT_SIZE,
  },
});
