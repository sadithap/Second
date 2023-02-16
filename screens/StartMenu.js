import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

const StartMenu = ({textValue}) => {
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
    <View style={styles.inputContainer}>
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
    </View>
  );
};

export default StartMenu;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    elevation: 4, //style bayangan untuk android
    shadowColor: "black", //style shadow untuk bayangan pada IOS
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#DDB52F",
    borderBottomWidth: 2,
    color: "#DDB52F",
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
