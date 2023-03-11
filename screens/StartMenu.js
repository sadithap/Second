import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import colors from "../constants/colors";
import Card from "../components/Card";

const StartMenu = ({ textValue }) => {
  const [inputNumber, setInputNumber] = useState("");

  function textChange(textValue) {
    setInputNumber(textValue);
  }

  function resetText() {
    setInputNumber("");
  }

  function confirmText() {
    const intText = parseInt(inputNumber);

    if (isNaN(intText) || intText < 1 || intText > 99) {
      Alert.alert("Invalid input!", "Please enter value between 1-99", [
        { text: "OK", style: "destructive", onPress: resetText },
      ]);
      return;
    }

    textValue(inputNumber);
  }

  return (
    <Card>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={textChange}
        value={inputNumber}
      />
      <View style={styles.buttonsLayout}>
        <View style={styles.buttonLayout}>
          <PrimaryButton onpressed={resetText}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonLayout}>
          <PrimaryButton onpressed={confirmText}>Confirm</PrimaryButton>
        </View>
      </View>
    </Card>
  );
};

export default StartMenu;

const styles = StyleSheet.create({
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: colors.primary2,
    borderBottomWidth: 2,
    color: colors.primary2,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsLayout: {
    flexDirection: "row",
  },
  buttonLayout: {
    flex: 1,
  },
});
