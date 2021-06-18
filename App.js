import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TextInput
          style={styles.inputAddItem}
          placeholder="Agregar un Item..."
        ></TextInput>
        <Button title="ADD" />
      </View>

      <View style={styles.itemList}>
        <View style={styles.item}>
          <Text>Item 1</Text>
          <Button title="X" />
        </View>

        <View style={styles.item}>
          <Text>Item 2</Text>
          <Button title="X" />
        </View>

        <View style={styles.item}>
          <Text>Item 2</Text>
          <Button title="X" />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  topBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  inputAddItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginRight: 10,
  },
  itemList: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  item: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
});
