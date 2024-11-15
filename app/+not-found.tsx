import { Link, Stack } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { playSound } from '../utils/playSound';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFoundScreen() {
  const { language, setLanguage } = useLanguage();
  const { translations } = useLanguage();
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <View style={styles.content}>
          <ThemedText type="title" style={styles.title}>{translations["not_found_title"]}</ThemedText>
          <ThemedText style={styles.message}>{translations["not_found_desc"]}</ThemedText>
          <Pressable onPress={() => playSound(require('@/assets/sounds/back.mp3'))}>
          <Link href="/" style={styles.link}>
            <ThemedText type="link" style={styles.linkText}>{translations["return_to_start"]}</ThemedText>
          </Link>
          </Pressable>
        </View>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa', // Color de fondo claro
    padding: 20,
  },
  content: {
    alignItems: 'center',
    maxWidth: 300,
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333', // Color de texto principal
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#666', // Color de texto secundario
    textAlign: 'center',
    marginBottom: 30,
  },
  link: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: '#CE0615', // Color de fondo del botón
    borderRadius: 8,
  },
  linkText: {
    color: '#fff', // Color de texto del botón
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
