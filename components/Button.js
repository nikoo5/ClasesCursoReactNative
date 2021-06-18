import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Button = (props) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={props.onPress}
        style={[styles.container, styles.shadow, props.buttonStyle]}
      >
        <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#007769",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3
  },
  text: {
      color: "#FFFFFF",
      textAlign: "center"
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
  }
});

export default Button;