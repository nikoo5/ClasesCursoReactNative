import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.statusBar}></View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Lista de Compra</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputAddItem}
          placeholder="Agregar un Item..."
        ></TextInput>
        <Button title="ADD" color="#007769" />
      </View>

      <View style={styles.itemList}>
        <View style={[styles.item, styles.shadow]}>
          <Text>Item 1</Text>
          <View style={styles.buttonDelete}>
            <Button title="X" color="#007769" />
          </View>
        </View>

        <View style={[styles.item, styles.shadow]}>
          <Text>Item 2</Text>
          <View style={styles.buttonDelete}>
            <Button title="X" color="#007769" />
          </View>
        </View>

        <View style={[styles.item, styles.shadow]}>
          <Text>Item 3</Text>
          <View style={styles.buttonDelete}>
            <Button title="X" color="#007769" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#E1E2E1",
  },
  headerContainer: {
    height: 60,
    width: "100%",
    backgroundColor: "#00796b",
    paddingHorizontal: 25,
    justifyContent: "center",
    borderTopColor: "#48a697",
    borderBottomColor: "#004c40",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  statusBar: {
    width: "100%",
    height: 28,
    backgroundColor: "#004c40",
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 22,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  inputAddItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#004c40",
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
    borderRadius: 10,
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: "#F5F5F6",
  },
  buttonDelete: {
    width: 35,
    height: 35,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
