import React, { useState, useEffect, ReactNode } from "react";
import {
  Image,
  StyleSheet,
  View,
  Button,
  Text,
  Pressable,
  Switch,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome5"; // Importamos el ícono de FontAwesome
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay, withSpring } from "react-native-reanimated";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

import { speakText } from "../../utils/TextToSpeech";
import { playSound } from "../../utils/playSound";
import { useLanguage } from "@/contexts/LanguageContext";



interface AnimatedButtonWrapperProps {
  delay: number;
  children: ReactNode;  // Add the children prop type
}

const AnimatedButtonWrapper: React.FC<AnimatedButtonWrapperProps> = ({ children, delay }) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(50);
  

  useEffect(() => {
    opacity.value = withDelay(delay, withTiming(1, { duration: 500 }));
    translateY.value = withDelay(delay, withTiming(0, { duration: 500 }));
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View style={[styles.buttonWrapper, animatedStyle]}>
      {children}
    </Animated.View>
  );
};


export default function HomeScreen() {
  // how to set the language options
  const { language, setLanguage } = useLanguage();
  const { translations } = useLanguage();
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <ParallaxScrollView 

      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/portada_universidad.jpg")}
          style={styles.universityBackground}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">{translations['welcome']}</ThemedText>
      <HelloWave />
      <a 
        onClick={() => speakText("Bienvenido. Buscar por edificio. Humanidades. Ciencias. Biblioteca. Ingenieria. Reloj. Mecano. ESE. Central. Mapa de Campus")}
        style={styles.iconContainer}
      >
        <Icon name="volume-up" size={40} color="#ffffff"/>
      </a>
    </ThemedView>
      
      <View style={styles.sectionContainer}>
        <View style={styles.sectionTitleContainer}>
          
          <Icon name="chevron-right" size={20} color="#CE0615" style={styles.icon} /> 

          <Text style={styles.sectionTitle}>{translations['search_building']}</Text>
          
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
              <AnimatedButtonWrapper delay={0}>
            <Pressable
              style={[styles.button, { backgroundColor: "#f4f4f4", borderWidth: 1, borderColor: "#bdbebf" }]}
              onPress={() => playSound(require('@/assets/sounds/humanidades.mp3'))} 
              >
                <Link href="/search?query=h" asChild>
                  <View style={styles.buttonWrapper}>
                  <Icon name="book" size={40} color="#CE0615" style={styles.icon} /> 

                    <Text style={styles.buttonText}>Humanidades</Text>
                  </View>
                </Link>
              </Pressable>
            </AnimatedButtonWrapper>
            </View>
            <View style={styles.buttonWrapper}>
            <AnimatedButtonWrapper delay={0}>
            <Pressable
              style={[styles.button, { backgroundColor: "#f4f4f4", borderWidth: 1, borderColor: "#bdbebf" }]} 
              onPress={() => playSound(require('@/assets/sounds/ciencias.mp3'))}
              >
                <Link href="/search?query=c" asChild>
                  <View style={styles.buttonWrapper}>
                  <Icon name="flask" size={40} color="#CE0615" style={styles.icon} /> 
                    <Text style={styles.buttonText}>Ciencias</Text>
                  </View>
                </Link>
              </Pressable>
            </AnimatedButtonWrapper>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
            <AnimatedButtonWrapper delay={0}>
            <Pressable
              style={[styles.button, { backgroundColor: "#f4f4f4", borderWidth: 1, borderColor: "#bdbebf" }]} 
              onPress={() => playSound(require('@/assets/sounds/biblioteca.mp3'))} 
              >
                <Link href="/search?query=b" asChild>
                  <View style={styles.buttonWrapper}>
                  <Icon name="place-of-worship" size={40} color="#CE0615" style={styles.icon} /> 
                    <Text style={styles.buttonText}>Biblioteca</Text>
                  </View>
                </Link>
              </Pressable>
              </AnimatedButtonWrapper>
            </View>
            <View style={styles.buttonWrapper}>
            <AnimatedButtonWrapper delay={0}>
            <Pressable
              style={[styles.button, { backgroundColor: "#f4f4f4", borderWidth: 1, borderColor: "#bdbebf" }]} 
              onPress={() => playSound(require('@/assets/sounds/ingenieria.mp3'))} 
              >
                <Link href="/search?query=i" asChild>
                  <View style={styles.buttonWrapper}>
                  <Icon name="screwdriver" size={40} color="#CE0615" style={styles.icon} /> 

                    <Text style={styles.buttonText}>Ingeniería</Text>
                  </View>
                </Link>
              </Pressable>
            </AnimatedButtonWrapper>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
            <AnimatedButtonWrapper delay={0}>
            <Pressable
              style={[styles.button, { backgroundColor: "#f4f4f4", borderWidth: 1, borderColor: "#bdbebf" }]} 
              onPress={() => playSound(require('@/assets/sounds/reloj.mp3'))} 
              >
                <Link href="/search?query=r" asChild>
                  <View style={styles.buttonWrapper}>
                  <Icon name="clock" size={40} color="#CE0615" style={styles.icon} /> 
                    <Text style={styles.buttonText}>Reloj</Text>
                  </View>
                </Link>
              </Pressable>
              </AnimatedButtonWrapper>
            </View>
            <View style={styles.buttonWrapper}>
            <AnimatedButtonWrapper delay={0}>
            <Pressable
              style={[styles.button, { backgroundColor: "#f4f4f4", borderWidth: 1, borderColor: "#bdbebf" }]} 
              onPress={() => playSound(require('@/assets/sounds/mecano.mp3'))} 
              >
                <Link href="/working" asChild>
                  <View style={styles.buttonWrapper}>
                  <Icon name="dungeon" size={40} color="#CE0615" style={styles.icon} /> 
                    <Text style={styles.buttonText}>Mecano</Text>
                  </View>
                </Link>
              </Pressable>
            </AnimatedButtonWrapper>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
            <AnimatedButtonWrapper delay={0}>
            <Pressable
              style={[styles.button, { backgroundColor: "#f4f4f4", borderWidth: 1, borderColor: "#bdbebf" }]} 
              onPress={() => playSound(require('@/assets/sounds/ese.mp3'))} 
              >
                <Link href="/working" asChild>
                  <View style={styles.buttonWrapper}>
                  <Icon name="school" size={40} color="#CE0615" style={styles.icon} /><Text style={styles.buttonText}>ESE</Text>
                  </View>
                </Link>
              </Pressable>
              </AnimatedButtonWrapper>
            </View>
            <View style={styles.buttonWrapper}>
            <AnimatedButtonWrapper delay={0}>
            <Pressable
              style={[styles.button, { backgroundColor: "#f4f4f4", borderWidth: 1, borderColor: "#bdbebf" }]} 
              onPress={() => playSound(require('@/assets/sounds/central.mp3'))} 
              >
                <Link href="/search?query=ce" asChild>
                  <View style={styles.buttonWrapper}>
                  <Icon name="landmark" size={40} color="#CE0615" style={styles.icon} /><Text style={styles.buttonText}>Central</Text>
                  </View>
                </Link>
              </Pressable>
            </AnimatedButtonWrapper>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.sectionContainer}>
      <AnimatedButtonWrapper delay={0}>
            <Pressable
              style={[styles.button, { backgroundColor: "#f4f4f4", borderWidth: 1, borderColor: "#bdbebf" }]} 
              onPress={() => playSound(require('@/assets/sounds/openmap.mp3'))} 
              >
          <Link href={{ pathname: `/display_map`, params: { id: "campus" } }} asChild>
            <View style={styles.buttonWrapper}>
            <Icon name="map" size={40} color="#CE0615" style={styles.icon} />               
            <Text style={styles.buttonText}>Mapa de Campus</Text>
            </View>
          </Link>
        </Pressable>
        </AnimatedButtonWrapper>
      </View>

      <View style={styles.languageContainer}>
        <TouchableOpacity style={styles.languagePickerWrapper}>
          <Picker
            selectedValue={language}
            style={styles.languagePicker}
            onValueChange={setLanguage}
            dropdownIconColor="#333" // Cambia el color del ícono de dropdown
          >
            <Picker.Item label="Español" value="es" />
            <Picker.Item label="English" value="en" />
          </Picker>
        </TouchableOpacity>
      </View>


    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({

  titleContainer: {
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    width: '100%',
    gap: 8,
    padding: 20,
  },
  universityBackground: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    position: "absolute",
    bottom: 0,
    left: 0,
    
  },
  smallButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  smallButtonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#000000", // White color
    lineHeight: 8,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  //f0f0f0
  sectionContainer: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 1 - 0,
    marginTop: 20,
  },
  sectionTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    marginRight: 10,
  },
  buttonContainer: {
    padding: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  languageContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  
  languagePickerWrapper: {
    width: 200,
    height: 50,
    backgroundColor: "#fff", // Fondo blanco o personalizable
    borderRadius: 25, 
    justifyContent: "center",
    paddingHorizontal: 20,
    overflow: "hidden", 
    elevation: 3, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  
  languagePicker: {
    width: "100%", 
    color: "#333", 
    backgroundColor: "transparent", 
  },
  
  languageIcon: {
    width: 30,
    height: 30,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
    aspectRatio: 1,
    alignItems: "center", // Center the text under the button
    justifyContent: "center",
  },
  buttonEmoji: {
    fontSize: 35, // Ajusta este valor para cambiar el tamaño del emoji
  },
  buttonText: {
    textAlign: "center", // Center the text horizontally
    marginTop: 30, // Optional: Add some space between the button and the text
    fontSize: 18,
    backgroundColor: "f4f4f4",
    padding: 5,
    borderRadius: 10,
  },


  button: {
    flex: 1,
    marginHorizontal: 5,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20, // Ajusta este valor para hacer los bordes más redondeados
  },

  icon: {},
  
  listContent: {
    flexGrow: 1,
  },

  iconContainer: {
    alignSelf: 'flex-end',
    marginLeft: 'auto', // Moves it to the far right within the flex container
  },

});
