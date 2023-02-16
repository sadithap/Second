import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

const Game = () => {
  return (
    <View style={styles.screen}>
      <Text>Title Game</Text>
      <View style={styles.guess}>
        <Text>Higher or Lower</Text>
        <View style={styles.buttonsLayout}>
          <View style={styles.buttonLayout}>
          <PrimaryButton>+</PrimaryButton>
          </View>
          <View style={styles.buttonLayout}>
          <PrimaryButton>-</PrimaryButton>
          </View>
        </View>
      </View>
      <View>
        <Text>Log guesses</Text>
      </View>
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  guess: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginVertical: 12,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    elevation: 4, //style bayangan untuk android
    shadowColor: "black", //style shadow untuk bayangan pada IOS
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonsLayout: {
    flexDirection: "row",
  },
  buttonLayout: {
    flex: 1,
  },
});
