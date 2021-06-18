import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Lista de Compra</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    width: "100%",
    backgroundColor: "#00796b",
    paddingHorizontal: 25,
    justifyContent: "center",
    borderTopColor: "#48a697",
    borderBottomColor: "#004c40",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 22,
  },
});

export default Header;