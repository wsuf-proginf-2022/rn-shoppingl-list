import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Store shopping list in local storage
 * @param {array} shoppingList
 *
 */
export const storeShoppingList = async (shoppingList) => {
  try {
    const jsonValue = JSON.stringify(shoppingList);
    await AsyncStorage.setItem("@MyStorage:ShoppingList", jsonValue);
    console.log("Shopping list stored");
  } catch (_error) {
    window.alert("Error storing shopping list");
  }
};

export const getShoppingList = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@MyStorage:ShoppingList");
    console.log("JSON value: ", JSON.parse(jsonValue));
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (_e) {
    window.alert("Error getting shopping list");
  }
};

export const removeShoppingList = async () => {
  try {
    await AsyncStorage.removeItem("@MyStorage:ShoppingList");
  } catch (_e) {
    window.alert("Error removing shopping list");
  }
};
