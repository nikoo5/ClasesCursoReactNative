import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from "react-native";

export default function App() {
  const [itemName, setItemName] = useState("");
  const [listItems, setListItems] = useState([]);

  const handleAddItem = () => {
    if (itemName.trim() != "") {
      setListItems([
        ...listItems,
        { id: Math.random().toString(), value: itemName },
      ]);
      setItemName("");
    }
  };

  const handleDeleteItem = (id) => {
    setListItems(listItems.filter(x => x.id != id));
  }

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
          value={itemName}
          onChangeText={setItemName}
        ></TextInput>
        <Button title="ADD" color="#007769" onPress={handleAddItem} />
      </View>

      <ScrollView style={styles.itemList}>
        {
          listItems.map((item, index) => {
            return (
              <View style={[styles.item, styles.shadow]}>
                <Text>{item.value}</Text>
                <View style={styles.buttonDelete}>
                  <Button title="X" color="#007769" onPress={() => {handleDeleteItem(item.id)}} />
                </View>
              </View>
            );
          })
        }
      </ScrollView>
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
