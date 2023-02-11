import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const ShoppingListItem = ({ title, onDelete, id }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onDelete(id);
      }}
    >
      <Text style={styles.shoppingListItem}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shoppingListItem: {
    backgroundColor: "#b2ddf7",
    padding: 15,
    marginBottom: 5,
    borderRadius: 20,
    // border radius miatt:
    overflow: "hidden",
  },
});

export default ShoppingListItem;
