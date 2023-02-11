import React, { useState } from "react";
import {
  View,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ShoppingListInput = ({ visible, onCancel }) => {
  const [enteredShoppingListItem, setEnteredShoppingListItem] = useState("");

  const inputHandler = (enteredText) => {
    setEnteredShoppingListItem(enteredText);
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.container}>
        <TextInput
          placeholder="What to buy?"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={enteredShoppingListItem}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onCancel();
              setEnteredShoppingListItem("");
            }}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log("adding item..");
            }}
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
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
    flexDirection: "column",
  },
  textInput: {
    width: "70%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    // android  shadow
    elevation: 8,
    // ios shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    // common styles
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default ShoppingListInput;
