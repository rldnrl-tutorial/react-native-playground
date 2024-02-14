import { StyleSheet, View } from "react-native";
import { StartGameScreen } from "./screens/start-game.screen";

import "./styles.css";

export default function App() {
  return (
    <View style={styles.container}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
