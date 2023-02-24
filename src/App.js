import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  FlatList,
} from "react-native";

import ShoppingListInput from "./components/ShoppingListInput";
import ShoppingListItem from "./components/ShoppingListItem";
import { getShoppingList, storeShoppingList } from "./localStorage";

const heightY = Dimensions.get("window").height;

export default function App() {
  const [isAddPopupVisible, setIsAddPopupVisible] = useState(false);
  const [shoppingListItems, setShoppingListItems] = useState([]);

  const addToShoppingList = (item) => {
    const newItems = [
      ...shoppingListItems,
      { key: Math.random().toString(), value: item },
    ];
    setShoppingListItems(newItems);
    storeShoppingList(newItems);
    // shopingListItems = ['item', 'item']; // wrong
    // shoppingListItems = [ { key: '2134rwef', value: 'citrom' } ] // correct
  };

  const deleteFromShoppingList = (key) => {
    const newShoppingListItems = shoppingListItems.filter(
      (item) => item.key !== key
    );
    setShoppingListItems(newShoppingListItems);
    storeShoppingList(newShoppingListItems);
  };

  const loadShoppingList = async () => {
    const storedShoppingList = await getShoppingList();
    if (storedShoppingList) {
      console.log("loaded shopping list from local storage");
      setShoppingListItems(storedShoppingList);
    }
  };

  useEffect(() => {
    loadShoppingList();
  }, []);

  useEffect(() => {
    console.log("shoppingListItems: ", shoppingListItems);
  }, [shoppingListItems]);

  return (
    <View style={styles.appContainer}>
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
      <View style={styles.shoppingList}>
        <FlatList
          data={shoppingListItems}
          renderItem={(data) => (
            <ShoppingListItem
              id={data.item.key}
              title={data.item.value}
              onDelete={deleteFromShoppingList}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    padding: 40,
  },
  appTitle: {
    fontSize: heightY * 0.03,
    marginVertical: 30,
    textAlign: "center",
  },
  shoppingList: {
    width: "100%",
    marginTop: 20,
    alignSelf: "flex-start",
    flex: 1,
  },
});
