import { ImageBackground, SafeAreaView, StyleSheet, } from "react-native";
import StartMenu from "./screens/StartMenu";
import Game from "./screens/Game";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App() {
const [textInput, setInputInput] = useState("");

let screen= <StartMenu textValue={changeText} />

function changeText(text){
  setInputInput(text);
}

if(textInput){
  screen= <Game textValue={changeText}/>
}

  return (
    <LinearGradient colors={["#4e0329", "#DDB52F"]} style={styles.screen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.screen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.screen}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
