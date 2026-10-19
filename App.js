import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  r,
} from "react-native";
import Item from "./src/components/item";

export default function App() {
  const [item, setItem] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddItem() {
    setTasks([...tasks, item]);
  }

  function handleInputText(text) {
    setItem(text);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInputText}
          style={styles.input}
          placeholder="zadaj task..."
        />
        <Button onPress={handleAddItem} title="ADD" />
      </View>

      <ScrollView style={styles.udalosti}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <Item title={item} />}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
  },

  inputContainer: {
    flex: 1,
    backgroundColor: "#5a5353",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },

  input: {
    borderWidth: 3,
    borderRadius: 4,
    borderColor: "#3f1fdc",
  },
});
