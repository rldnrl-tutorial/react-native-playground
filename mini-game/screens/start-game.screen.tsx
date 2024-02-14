import { StyleSheet, View } from "react-native";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export function StartGameScreen() {
  return (
    <View style={styles.container}>
      <Input
        keyboardType="number-pad"
        className="h-[50px] w-[80px] text-[32px] my-[8px] font-bold text-center"
        maxLength={2}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View className="flex-row gap-2">
        <View style={styles.buttonContainer}>
          <Button size="sm" className="w-full" style={styles.button}>
            Reset
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button size="sm" className="w-full" style={styles.button}>
            Confirm
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
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
