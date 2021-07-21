import React from "react";
import { Button, ImageEditor, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
      <View style={styles.detail}>
        <View>
          <Text>Cantidad: {item.quantity}</Text>
        </View>
        <View>
          <Text>${item.price}</Text>
        </View>
        <Button
          title="X"
          onPress={() => onDelete(item.id)}
          color={Colors.accentColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 8,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  header: {
    fontFamily: "open-sans-bold",
  },
  detail: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    fontFamily: "open-sans",
  },
});

export default CartItem;
