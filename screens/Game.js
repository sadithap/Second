import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import colors from "../constants/colors";
import Card from "../components/Card";

let minimum = 1;
let maximum = 99;

const Game = ({ textValue, onGameOver }) => {
  const [guess, setGuess] = useState(randomNumber(1, 99));
  const [index, setIndex] = useState(1);
  const [detailGuess, setDetailGuess] = useState([guess]);
  
  useEffect(() => {
    console.log("Answer : " + textValue + ", Guess : " + guess);
    console.log("Minimum : " + minimum + ", Maximum : " + maximum);
    if (guess == textValue) {
      console.log("Ketemu");
      console.log(index);
      onGameOver(index, guess);
    }
  }, [guess, textValue, onGameOver]);

  useEffect(() => {
    minimum = 1;
    maximum = 99;
  }, []); // empty [] will trigger only when the UI rendered the first time not every update.

  function randomNumber(min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNum;
  }

  function rapeatitiveGuess(newest){
    if(guess == newest){
      newest=randomNumber(minimum,maximum);
      rapeatitiveGuess(newest);
    }
    else{
      setGuess(newest);
      setDetailGuess((prevGuess) => {return [...prevGuess, newest]});
    
    }
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
    let newest=guess;
    rapeatitiveGuess(newest);
    setIndex((currentValue) => {
      return currentValue + 1;
    });
    //setDetailGuess((prevDetailGuess) => {[...prevDetailGuess, guess]});
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
        <FlatList data={detailGuess} renderItem={(itemData) => <Text>{itemData.item}</Text>} keyExtractor={(item, index) => {return index}} />
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
