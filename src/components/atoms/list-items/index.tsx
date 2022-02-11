import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface listItemsProps {
  text: string;
  onClick?: () => void;
}
const ListItems: React.FC<listItemsProps> = ({ text, onClick }) => {
  return (
    <Text style={styles.list}>
      <View style={styles.listItem}>
        <Text>{text}</Text>
        <View>
          <TouchableOpacity onPress={onClick}>
            <Text style={styles.remove}>x</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Text>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: "orange",
    textAlign: "left",
    marginTop: 2,
    marginBottom: 5,
    color: "black",
  },
  listItem: {
    display: "flex",
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  remove: {
    color: "red",
    fontWeight: "bold",
    borderWidth: 1,
    height: 25,
    width: 25,
    borderColor: "black",
    textAlign: "center",
    borderRadius: 50,
    fontSize: 18,
    marginRight: 5,
  },
});
export default ListItems;
