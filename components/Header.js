import React from "react"
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

const Header = (props) => {
    return (
      <View>
        <View style={styles.statusBar}></View>
        <View style={styles.container}>
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#004f04",
    height: 36,
  },
  container: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#2e7d32",
    borderTopColor: "#60ac5d",
    borderTopWidth: 1,
    borderBottomColor: "#004f04",
    borderBottomWidth: 1
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});

export default Header;