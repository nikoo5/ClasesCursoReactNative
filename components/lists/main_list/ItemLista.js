import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../Button";

const ItemLista = (props) => {
  return (
    <View style={[styles.item, styles.shadow]}>
      <Text>{props.text}</Text>
      <View style={styles.buttonDelete}>
        <Button
          text="X"
          textStyle={styles.buttonDeleteText}
          onPress={props.onPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: "#F5F5F6",
  },
  buttonDelete: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
  },
  buttonDeleteText: {
    fontSize: 20,
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

export default ItemLista;
