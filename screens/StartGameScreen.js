import React, { useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../components/Button";
import Card from "../components/Card";


const StartGameScreen = (props) => {
    const [number, setNumber] = useState(null);

    const handleInputNumber = (value) => {
      const valueInt = parseInt(value);
      if (valueInt >= 0 && valueInt <= 99) {
        setNumber(valueInt);
      } else {
          setNumber("");
      }
    };

    const handleCleanNumber = () => {
      setNumber("");
    };

    const handleConfirmNumber = () => {

    }

    return (
      <View style={styles.screen}>
        <Text style={styles.text}>Comenzar el Juego</Text>
        <Card style={styles.container}>
          <Text>Ingrese el Número</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            placeholder="__"
            value={number.toString()}
            onChangeText={handleInputNumber}
            maxLength={2}
          />
          <View style={styles.buttonsContainer}>
            <Button
              title="LIMPIAR"
              type="secondary"
              onPress={handleCleanNumber}
            />
            <Button title="CONFIRMAR" onPress={handleConfirmNumber} />
          </View>
        </Card>
      </View>
    );
    
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    paddingTop: 20,
    marginHorizontal: 20
  },
  container: {
    marginTop: 30,
  },
  text: {
    fontSize: 24
  },   
  input: {
    fontSize: 48,
    textAlign: "center",
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 50,
    marginTop: 20
  },
});

export default StartGameScreen;