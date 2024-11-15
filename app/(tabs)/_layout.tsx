import { Tabs } from 'expo-router';
import React from 'react';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useLanguage } from '@/contexts/LanguageContext';

// Calcula tamaños dinámicos para íconos y texto
const { width } = Dimensions.get('window');
const ICON_SIZE = Math.min(width * 0.07, 30); // Escalable al 7% del ancho, máx. 30
const FONT_SIZE = Math.min(width * 0.045, 14); // Escalable al 4.5% del ancho, máx. 14

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { translations } = useLanguage();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          height: 60, // Ajusta la altura del tab bar
          paddingBottom: 10, // Asegura que el contenido esté centrado
          paddingTop: 5,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: FONT_SIZE, // Texto escalable
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: translations['home'],
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'home' : 'home-outline'}
              color={focused ? '#CE0615' : color}
              size={ICON_SIZE} // Tamaño escalable del ícono
            />
          ),
          tabBarAccessibilityLabel: translations['home'], // Accesibilidad
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: translations['search'],
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'search' : 'search-outline'}
              color={focused ? '#CE0615' : color}
              size={ICON_SIZE} // Tamaño escalable del ícono
            />
          ),
          tabBarAccessibilityLabel: translations['search'], // Accesibilidad
        }}
      />
    </Tabs>
  );
}
