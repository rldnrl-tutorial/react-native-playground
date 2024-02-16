import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
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
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Title } from "~/components/ui/title";

type StartGameScreenProps = {
  onPickNumber: (pickNumber: number) => void;
};

export function StartGameScreen({ onPickNumber }: StartGameScreenProps) {
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const [enteredNumber, setEnteredNumber] = useState("");

  const handleResetNumber = () => {
    setEnteredNumber("");
  };

  const handleAlertClose = () => {
    setOpenAlertModal(false);
    handleResetNumber();
  };

  const handleConfirmInput = () => {
    const number = parseInt(enteredNumber);

    if (isNaN(number) || number <= 0 || number > 99) {
      setOpenAlertModal(true);
      return;
    }

    onPickNumber(number);
  };

  return (
    <View className="flex-1 mt-[100px] items-center">
      <Title>Guess My Number</Title>
      <View className="w-full p-6">
        <Card className="w-full">
          <CardHeader className="justify-center items-center">
            <CardTitle>Enter Number</CardTitle>
          </CardHeader>
          <CardContent className="justify-center items-center">
            <Input
              value={enteredNumber}
              onChangeText={setEnteredNumber}
              keyboardType="number-pad"
              className="h-[50px] w-[80px] text-[32px] my-[8px] font-bold text-center"
              maxLength={2}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </CardContent>
          <CardFooter>
            <View className="flex-row gap-2">
              <View style={styles.buttonContainer}>
                <Button
                  size="sm"
                  className="w-full"
                  style={styles.button}
                  onPress={handleResetNumber}>
                  Reset
                </Button>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  size="sm"
                  className="w-full"
                  style={styles.button}
                  onPress={handleConfirmInput}>
                  Confirm
                </Button>
              </View>
            </View>
          </CardFooter>
        </Card>
      </View>

      <AlertDialog open={openAlertModal} className="w-full max-w-xl">
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Invalid number!</AlertDialogTitle>
            <AlertDialogDescription>
              Number has to be a number between 1 and 99.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              size="sm"
              variant="destructive"
              onPress={handleAlertClose}>
              Okay
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonContainer: {
    flex: 1,
    width: 100,
  },
  button: {
    elevation: 2,
  },
});
