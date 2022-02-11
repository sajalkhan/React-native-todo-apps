import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import RandomButton from "../../atoms/Button";
import InputText from "../../atoms/Input-text";

interface focusInputProps {
  addSubject: (text: string) => void;
}

const FocusInput: React.FC<focusInputProps> = ({ addSubject }) => {
  const [text, setText] = useState<string>("");

  const handleClick = () => {
    addSubject(text);
    setText("");
  };

  return (
    <View style={styles.inputContainer}>
      <InputText value={text} handleChange={(e: string) => setText(e)} />
      <RandomButton title="+" handleClick={handleClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default FocusInput;
