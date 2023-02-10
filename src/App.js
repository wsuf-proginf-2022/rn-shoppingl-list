import { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import ShoppingListInput from "./components/ShoppingListInput";

const heightY = Dimensions.get("window").height;

export default function App() {
  const [isAddPopupVisible, setIsAddPopupVisible] = useState(false);
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
