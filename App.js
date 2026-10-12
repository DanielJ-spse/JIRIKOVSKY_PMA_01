import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

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

      <View style={styles.udalosti}>
        {tasks.map((i) => {
          <Text>{i}</Text>;
        })}
      </View>
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

  udalosti: {
    flex: 3,
    backgroundColor: "#eca2a2",
  },
});
