import React from "react";
import { View, Modal, Text, TouchableOpacity, StyleSheet } from "react-native";

const ShoppingListInput = ({ visible, onCancel }) => {
  return (
    <Modal animationType="slide" visible={visible}>
      <View>
        <Text>What to buy?</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            onCancel();
          }}
        >
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
});

export default ShoppingListInput;
