import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export interface roundedButtonProps {
  title: string;
  handleClick: () => void;
}

const RoundedButton: React.FC<roundedButtonProps> = ({
  title,
  handleClick,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleClick}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    color: "white",
  },
  text: {
    color: "white",
  },
});
export default RoundedButton;
