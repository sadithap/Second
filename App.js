import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";
import StartMenu from "./screens/StartMenu";
import Game from "./screens/Game";
import GameOver from "./screens/GameOver";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import colors from "./constants/colors";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [textInput, setInputInput] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [totalGuess, setTotalGuess] = useState(0);
  const [guess, setGuess] = useState("");
  
  const [isLoading] = useFonts({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),}
  );

  if(!isLoading){
    <AppLoading/>
  };

  let screen = <StartMenu textValue={changeText} />;

  function changeText(text) {
    setInputInput(text);
    setGameOver(false);
  }

  function restart(){
    setGameOver(false);
    setInputInput(null);
    setTotalGuess(0);
    setGuess(null);
    screen =<StartMenu textValue={changeText} />
  }

  function onGameOver(paraTotalGuess, paraGuess) {
    setTotalGuess(paraTotalGuess);
    setGuess(paraGuess);
    setGameOver(true);
  }

  if (textInput) {
    screen = <Game textValue={textInput} onGameOver={onGameOver} />;
  }

  if (gameOver && textInput) {
    console.log(totalGuess);
    screen = <GameOver total={totalGuess} guess={guess} restart={restart}/>;
  }

  return (
    <LinearGradient
      colors={[colors.primary1, colors.primary2]}
      style={styles.screen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.screen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.safearea}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  safearea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
