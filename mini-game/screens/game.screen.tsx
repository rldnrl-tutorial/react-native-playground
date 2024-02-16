import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NumberContainer } from "~/components/games/number-container";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Title } from "~/components/ui/title";

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

enum Direction {
  Lower = "lower",
  Greater = "greater",
}

type GameScreenProps = {
  onGameOver: () => void;
  userNumber: number;
};

let minBoundary = 1;
let maxBoundary = 100;

export function GameScreen({ userNumber, onGameOver }: GameScreenProps) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const handleAlertClose = () => {
    setOpenAlertModal(false);
  };

  const handlerNextGuess = (direction: Direction) => {
    if (
      (direction === Direction.Lower && currentGuess < userNumber) ||
      (direction === Direction.Greater && currentGuess > userNumber)
    ) {
      setOpenAlertModal(true);
      return;
    }

    if (direction === Direction.Lower) {
      maxBoundary = currentGuess;
    } else if (direction === Direction.Greater) {
      minBoundary = currentGuess;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  };

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  return (
    <View className="flex-1 p-6">
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Card className="gap-2 m-6">
          <CardHeader className="justify-center items-center">
            <CardTitle className="font-[open-sans-bold]">
              Higher or lower
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-row gap-2">
            <View style={styles.buttonContainer}>
              <Button
                size="sm"
                className="w-full"
                onPress={() => handlerNextGuess(Direction.Greater)}>
                <Ionicons name="add" size={24} color="white" />
              </Button>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                size="sm"
                className="w-full"
                onPress={() => handlerNextGuess(Direction.Lower)}>
                <Ionicons name="remove" size={24} color="white" />
              </Button>
            </View>
          </CardContent>
        </Card>
      </View>

      <View>
        {guessRounds.map((guessRound) => (
          <Text key={guessRound}>{guessRound}</Text>
        ))}
      </View>

      <AlertDialog open={openAlertModal} className="w-full max-w-xl">
        <AlertDialogContent className="w-full max-w-xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Don't lie!</AlertDialogTitle>
            <AlertDialogDescription>
              You know that this is wrong...
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              size="sm"
              variant="destructive"
              onPress={handleAlertClose}>
              Cancel
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    width: 100,
  },
});
