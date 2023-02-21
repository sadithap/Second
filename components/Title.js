import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/colors";

function Title({ children }) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary2,
    textAlign: "center",
    borderWidth: 2,
    borderColor: colors.primary2,
    padding: 12,
    margin: 12,
  },
});
