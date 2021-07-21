import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ShowCart from "../components/ShowCart";
import { addItem } from "../store/actions/cart.actions";

const BreadDetailScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const item = useSelector((state) => state.breads.selected) || {};
  
  const handlerAddToCart = () => {
    dispatch(addItem(item))
  }
  
  return (
    <View style={styles.screen}>
      <View style={styles.detail}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.text}>{item.description}</Text>
        <Text style={styles.text}>${item.price}</Text>
        <Text style={styles.text}>{item.weight}gr</Text>
        <Button title="AGREGAR AL CARRITO" onPress={handlerAddToCart} />
      </View>
      <ShowCart navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  detail: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10
  },
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
  },
  text: {
    fontSize: 18,
    fontFamily: "open-sans",
  },
});

export default BreadDetailScreen;
