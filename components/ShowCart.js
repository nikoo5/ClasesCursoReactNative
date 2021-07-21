import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import Colors from "../constants/Colors";

const ShowCart = ({ navigation }) => {
  const handleShowCart = () => {
    navigation.navigate("Cart");
  };

  const cart = useSelector((state) => state.cart.list) || [];

  if (cart.length > 0) {
    return (
      <View>
        <Button
          title="Ver Carrito"
          onPress={handleShowCart}
          color={Colors.accentColor}
        />
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({});

export default ShowCart;
