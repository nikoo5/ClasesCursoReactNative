import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.appScreen}>
      <Header title="Adivina el Número" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  appScreen: {
    flex: 1
  }
});
