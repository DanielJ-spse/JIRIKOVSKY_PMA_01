import { StyleSheet, Text } from "react-native";

export default function Item({ title }) {
  return <Text style={styles.taskItem}>{title}</Text>;
}

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: "red",
    margin: 5,
    borderRadius: 8,
    padding: 5,
    fontSize: 16,
  },
});
