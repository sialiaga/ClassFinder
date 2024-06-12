import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function C201Screen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>C-106</Text>
        <Image source={require('../../assets/images/1-201.png')} style={styles.image} />
        <Image source={require('../../assets/images/2-201.png')} style={styles.image} />
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
    marginTop: 50, // Add margin to the top to move the container down
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
});
