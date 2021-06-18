import React from "react"
import { StyleSheet, TextInput } from "react-native";

const Input = (props) => {
    return (
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
      ></TextInput>
    );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#004c40",
    marginRight: 10,
  },
});

export default Input;