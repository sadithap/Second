import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Title from "../components/Title";
import colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";
const GameOver = ({ guess , total }) => {

  console.log(guess);
  console.log(total);
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.img}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.detail}>
        Comp need <Text style={styles.subdetail}>{guess}</Text> guess(es) for
        guessing number <Text style={styles.subdetail}>{total}</Text>.
      </Text>
      <View>
        <PrimaryButton>Restart</PrimaryButton>
      </View>
    </View>

  );
};

export default GameOver;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 5,
    borderColor: colors.primary1,
    margin: 32,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  detail: {
    marginVertical: 20,
    fontSize: 20,
    fontFamily: "open-sans-bold",
  },
  subdetail: {
    color: colors.primary2,
  },
});
