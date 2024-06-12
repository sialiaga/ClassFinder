import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function C204Screen() {
  const [images, setImages] = useState([
    require('../../assets/images/I-204_1_D.png'),
    require('../../assets/images/I-204_2_D.png')
  ]);
  const [toggle, setToggle] = useState(false);

  const toggleImages = () => {
    if (toggle) {
      setImages([
        require('../../assets/images/I-204_1_D.png'),
        require('../../assets/images/I-204_2_D.png')
      ]);
    } else {
      setImages([
        require('../../assets/images/I-204_1_E.png'),
        require('../../assets/images/I-204_2_E.png')
      ]);
    }
    setToggle(!toggle);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>I-204</Text>
        <TouchableOpacity onPress={toggleImages} style={[styles.button, toggle ? styles.buttonActive : null]}>
          <Image source={require('../../assets/images/discapacidad.png')} style={styles.buttonImage} />
        </TouchableOpacity>
        <Image source={images[0]} style={styles.image} />
        <Image source={images[1]} style={styles.image} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 330,
    height: 400,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 30, // Ajuste la distancia al componente de imagen
  },
  buttonActive: {
    opacity: 0.5, // Cambia la opacidad cuando está activo
  },
  buttonImage: {
    width: 30,
    height: 30,
  },
});
