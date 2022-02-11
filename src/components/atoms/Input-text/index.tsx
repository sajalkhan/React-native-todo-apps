import React from "react";
import { TextInput, StyleSheet } from "react-native";

type inputText = {
  handleChange?: (text: string) => void;
  value?: string;
};

const InputText: React.FC<inputText> = ({ handleChange, value }) => {
  return (
    <TextInput
      value={value}
      style={styles.input}
      onChangeText={handleChange}
      placeholder="Type here your subject!"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderStyle: "solid",
    padding: 10,
    width: "60%",
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "white",
    marginRight: 10,
  },
});
export default InputText;
