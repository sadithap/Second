import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

function PrimaryButton({ children, onpressed }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.content, styles.pressed] : styles.content
        }
        onPress={onpressed}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    margin: 8,
    overflow: "hidden",
  },
  content: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.25,
  },
});
