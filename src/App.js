import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";

import ShoppingListInput from "./components/ShoppingListInput";

const heightY = Dimensions.get("window").height;

export default function App() {
  const [isAddPopupVisible, setIsAddPopupVisible] = useState(false);
  const [shoppingListItems, setShoppingListItems] = useState([]);

  const addToShoppingList = (item) => {
    setShoppingListItems([
      ...shoppingListItems,
      { key: Math.random().toString(), value: item },
    ]);
    // shopingListItems = ['item', 'item']; // wrong
    // shoppingListItems = [ { key: '2134rwef', value: 'citrom' } ] // correct
  };

  useEffect(() => {
    console.log("shoppingListItems: ", shoppingListItems);
  }, [shoppingListItems]);

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Create Shopping List!</Text>
      <Button
        title="Add new item"
        onPress={() => {
          setIsAddPopupVisible(true);
        }}
      />
      <ShoppingListInput
        visible={isAddPopupVisible}
        onAdd={addToShoppingList}
        onCancel={() => {
          setIsAddPopupVisible(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  appTitle: {
    fontSize: heightY * 0.03,
    marginVertical: 30,
    textAlign: "center",
  },
});
