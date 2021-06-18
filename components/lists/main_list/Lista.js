import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ItemLista from "./ItemLista";

const Lista = (props) => {
  return (
    <FlatList
      style={styles.itemList}
      data={props.data}
      keyExtractor={(item) => item.id}
      renderItem={(data) => (
        <ItemLista
          text={data.item.value}
          onPress={() => props.onDelete(data.item.id)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemList: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingHorizontal: 10,
  },
});

export default Lista;
