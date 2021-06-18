import React from "react"
import { Modal, StyleSheet, Text, View } from "react-native"
import Button from "./Button";

const CustomModal = (props) => {
  return (
    <Modal animationType="fade" visible={props.visible} transparent={true}>
      <View style={styles.modalScreen}>
        <View style={[styles.modalConteiner, styles.shadow]}>
          <View style={styles.modalMessageContainer}>
            <Text>{props.text}</Text>
          </View>
          <View style={styles.modalButtonsContainer}>
            <Button
              text={props.textCancel}
              buttonStyle={styles.modalButton}
              onPress={props.onCancel}
            />
            <Button
              text={props.textConfirm}
              buttonStyle={styles.modalButton}
              onPress={props.onConfirm}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalScreen: {
    flex: 1,
    backgroundColor: "#000000AA",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  modalConteiner: {
    width: "100%",
    height: 100,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  modalMessageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  modalButton: {
    maxWidth: 50,
    height: 30,
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

export default CustomModal;