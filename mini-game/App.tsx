import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { StartGameScreen } from "./screens/start-game.screen";
import { GameScreen } from "./screens/game.screen";
import { GameOverScreen } from "./screens/game-over.screen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import "./styles.css";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [isGameOver, setIsGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const handlePickNumber = (pickNumber: number) => {
    setUserNumber(pickNumber);
    setIsGameOver(false);
  };

  const handleGameOver = () => {
    setIsGameOver(true);
  };

  const handleStartNewGame = () => {
    setUserNumber(null);
    setGuessRounds(0);
    setIsGameOver(true);
  };

  const onLayoutRootView = async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  };

  let screen = <StartGameScreen onPickNumber={handlePickNumber} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />;
  }

  if (isGameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={handleStartNewGame}
      />
    );
  }

  if (!fontLoaded) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.container}>
      {screen}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
