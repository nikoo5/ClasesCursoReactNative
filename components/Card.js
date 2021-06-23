import React from "react"
import { StyleSheet, View } from "react-native";

const Card = (props) => {    
    return (
      <View style={{ ...styles.card, ...styles.shadow, ...props.style }}>
        {props.children}
      </View>
    );
}

const styles = StyleSheet.create({
  card: {
      width: "100%",
      padding: 10,
      backgroundColor: "#FFFFFF",
      borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
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

export default Card