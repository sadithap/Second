import { ImageBackground, SafeAreaView, StyleSheet, StatusBar} from "react-native";
import StartMenu from "./screens/StartMenu";
import Game from "./screens/Game";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import colors from "./constants/colors";

export default function App() {
const [textInput, setInputInput] = useState("");

let screen= <StartMenu textValue={changeText} />

function changeText(text){
  setInputInput(text);
}

if(textInput){
  screen= <Game textValue={textInput}/>
}

  return (
    <LinearGradient colors={[colors.primary1, colors.primary2]} style={styles.screen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.screen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.safearea}>
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
  safearea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
