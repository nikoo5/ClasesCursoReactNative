import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';


const Button = (props) => {
    const color = {backgroundColor: props.type == "secondary" ? Colors.secondary.main : Colors.primary.main };
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          ...color,
          ...styles.button,
          ...styles.shadow,
          ...props.buttonStyle,
        }}
        onPress={props.onPress}
        onLongPress={props.onLongPress}
      >
        <Text style={{ ...styles.text, ...styles.textStyle }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
      color: Colors.primary.text
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

export default Button;