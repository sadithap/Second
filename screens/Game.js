import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {Ionicons} from "@expo/vector-icons"
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import colors from "../constants/colors";
import Card from "../components/Card";

let minimum = 1;
let maximum = 99;
const Game = ({ textValue , onGameOver}) => {
  const [guess, setGuess] = useState(randomNumber(1, 99));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log("Answer : " + textValue + ", Guess : " + guess);
    console.log("Minimum : " + minimum + ", Maximum : " + maximum);
    if (guess == textValue) {
      console.log("Ketemu");
      console.log(index);
      onGameOver(index,guess);
    }
  }, [guess, textValue, onGameOver]);

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

  return (
    <View style={styles.screen}>
      <Subtitle>Opponent Guess</Subtitle>
      <Title>{guess}</Title>
      <Card>
        <Text style={styles.texthighlow}>Higher or Lower</Text>
        <View style={styles.buttonsLayout}>
          <View style={styles.buttonLayout}>
            <PrimaryButton onpressed={givingHint.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} color="white"></Ionicons>
            </PrimaryButton>
          </View>
          <View style={styles.buttonLayout}>
            <PrimaryButton onpressed={givingHint.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white"></Ionicons>
            </PrimaryButton>
          </View>
        </View>
      </Card>
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
  buttonsLayout: {
    flexDirection: "row",
  },
  buttonLayout: {
    flex: 1,
  },
  texthighlow: {
    color: colors.primary2,
    fontFamily: "open-sans-bold",
  },
});
