import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Vibration,
} from "react-native";
import FocusInput from "./src/components/molecules/focus-input";
import ListItems from "./src/components/atoms/list-items";

const App = () => {
  const [subject, setSubject] = useState<string[]>([]);

  const handleSubject = (subject: string): void => {
    subject && setSubject((prev) => [...prev, subject]);
  };

  const handleRemove = (item: string): void => {
    item && setSubject(subject.filter((data) => data !== item));
    Vibration.vibrate(2);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>React Native Todo Apps</Text>
        <FocusInput addSubject={(text) => handleSubject(text)} />
        <SafeAreaView style={styles.list}>
          <FlatList
            data={subject}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <ListItems text={item} onClick={() => handleRemove(item)} />
            )}
          />
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252250",
    position: "relative",
  },
  text: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 20,
  },
  list: {
    width: "60%",
    position: "absolute",
    left: "15%",
    top: "60%",
  },
});

export default App;
