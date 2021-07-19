import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const BreadDetailScreen = () => {
  const item = useSelector((state) => state.breads.selected) || {};
  console.log(item)
  
  return (
    <View style={styles.screen}>
      <View style={styles.detail}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.text}>{item.description}</Text>
        <Text style={styles.text}>${item.price}</Text>
        <Text style={styles.text}>{item.weight}gr</Text>
      </View>      
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingBottom: 10,
  },
  detail: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
