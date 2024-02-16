import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "~/components/ui/button";
import { Title } from "~/components/ui/title";

type GameOverScreenProps = {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
};

export function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}: GameOverScreenProps) {
  return (
    <View className="flex-1 p-6 items-center justify-center">
      <Title>GAME OVER!</Title>
      <View
        className="w-[300px] h-[300px] rounded-[150px] border-[3px] m-[36px]"
        style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          className="w-full h-full"
        />
      </View>
      <View>
        <Text className="font-[open-sans] text-2xl text-center mb-6">
          Your phone needed{" "}
          <Text className="font-[open-sans-bold]">{roundsNumber}</Text> rounds
          to guess the number{" "}
          <Text className="font-[open-sans-bold]">{userNumber}</Text>.
        </Text>
      </View>
      <Button size="sm" onPress={onStartNewGame}>
        Start New Game
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    overflow: "hidden",
  },
});
