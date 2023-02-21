import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import colors from "../constants/colors";

let minimum = 1;
let maximum = 99;
const Game = ({ textValue }) => {
  const [guess, setGuess] = useState(randomNumber(minimum, maximum));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log("Answer : " + textValue + ", Guess : " + guess);
    console.log("Minimum : " + minimum + ", Maximum : " + maximum);
    if (guess == textValue) console.log("Ketemu");
  });

  function randomNumber(min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNum;
  }

  function givingHint(status) {
    if (
      (status === "lower" && guess < textValue) ||
      (status === "higher" && guess > textValue)
    ) {
      Alert.alert("Don't lie!", "Be honest", [
        { text: "OK", style: "destructive" },
      ]);
      return;
    }
    if (status === "lower") {
      maximum = guess;
    }
    if (status === "higher") {
      minimum = guess;
    }
    setGuess(randomNumber(minimum, maximum));
    setIndex((currentValue) => {
      return currentValue + 1;
    });
  }

  function pressLow() {
    if (guess < textValue) {
      Alert.alert("Don't lie!", "Be honest", [
        { text: "OK", style: "destructive" },
      ]);
      return;
    }
    setGuess(randomNumber(minimum, guess));
    setIndex((currentValue) => {
      return currentValue + 1;
    });
    console.log("Answer : " + textValue + ", Guess : " + guess);
    console.log("Minimum : " + minimum + ", Maximum : " + maximum);
  }

  function pressHigh() {
    if (guess > textValue) {
      Alert.alert("Don't lie!", "Be honest", [
        { text: "OK", style: "destructive" },
      ]);
      return;
    }
    setGuess(randomNumber(guess, maximum));
    setIndex((currentValue) => {
      return currentValue + 1;
    });
    console.log("Answer : " + textValue + ", Guess : " + guess);
    console.log("Minimum : " + minimum + ", Maximum : " + maximum);
  }

  return (
    <View style={styles.screen}>
      <Subtitle>Opponent Guess</Subtitle>
      <Title>{guess}</Title>
      <View style={styles.guess}>
        <Text style={styles.texthighlow}>Higher or Lower</Text>
        <View style={styles.buttonsLayout}>
          <View style={styles.buttonLayout}>
            <PrimaryButton onpressed={givingHint.bind(this, "higher")}>+</PrimaryButton>
          </View>
          <View style={styles.buttonLayout}>
            <PrimaryButton onpressed={givingHint.bind(this, "lower")}>-</PrimaryButton>
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
  },
  guess: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginVertical: 12,
    backgroundColor: colors.primary1,
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
  texthighlow: {
    color: colors.primary2,
  },
});
