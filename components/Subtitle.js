import { StyleSheet, Text, View } from "react-native";
import React from "react";

function Subtitle({ children }) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    margin: 12,
  },
});
