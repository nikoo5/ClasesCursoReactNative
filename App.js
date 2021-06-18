import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "./components/Button";
import CustomModal from "./components/CustomModal";
import CustomStatusBar from "./components/CustomStatusBar";
import Header from "./components/Header";
import Input from "./components/Input";
import Lista from "./components/lists/main_list/Lista";

export default function App() {
  const [itemName, setItemName] = useState("");
  const [listItems, setListItems] = useState([
    { id: "1", value: "Item 1" },
    { id: "2", value: "Item 1" },
    { id: "3", value: "Item 3" },
    { id: "4", value: "Item 4" },
    { id: "5", value: "Item 5" },
    { id: "6", value: "Item 6" },
    { id: "7", value: "Item 7" },
    { id: "8", value: "Item 8" },
  ]);

  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState({})

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
    setItemSelected(listItems.filter(x => x.id == id)[0]);
    setModalVisible(true);
  }

  const handleModalNo = () => {
    setModalVisible(false);
    setItemSelected({});
  }

  const handleModalYes = (id) => {
    setListItems(listItems.filter(x => x.id != id));
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <CustomModal
        visible={modalVisible}
        textCancel="NO"
        textConfirm="SI"
        text={
          '¿Esta seguro que desea eliminar el item "' +
          itemSelected.value +
          '"?'
        }
        onCancel={handleModalNo}
        onConfirm={() => handleModalYes(itemSelected.id)}
      />

      <CustomStatusBar />
      <Header />

      <View style={styles.inputContainer}>
        <Input
          placeholder="Agregar un item..."
          value={itemName}
          onChangeText={setItemName}
        />
        <Button
          text="AGREGAR"
          buttonStyle={styles.buttonAdd}
          onPress={handleAddItem}
        />
      </View>

      <Lista data={listItems} onDelete={handleDeleteItem} />
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
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  buttonAdd: {
    maxWidth: 100
  },

  
});
