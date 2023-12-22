import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import HomeScreen from "./src/homeScreen";
import { StatusBar } from "expo-status-bar"; // Import StatusBar correctly

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
      <StatusBar style="light" backgroundColor="#6366f1" translucent={false} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#453f3d'
  },
});
