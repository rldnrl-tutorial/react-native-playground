import { useState } from "react";
import { Modal, StyleSheet, View, Image } from "react-native";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

type GoalFormProps = {
  visible: boolean;
  onAddGoal: (goalText: string) => void;
  onCancel: () => void;
};

export function GoalForm({ visible, onAddGoal, onCancel }: GoalFormProps) {
  const [goalText, setGoalText] = useState("");

  const handleInputGoal = (text: string) => {
    setGoalText(text);
  };

  const handleAddGoal = () => {
    onAddGoal(goalText);
    setGoalText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View
        className="w-full px-4 justify-between"
        style={styles.formContainer}>
        <Input
          className="w-[100%] mb-2"
          placeholder="Your course goals"
          value={goalText}
          onChangeText={handleInputGoal}
        />
        <View className="w-full">
          <View className="w-full mb-2">
            <Button className="w-full" size="sm" onPress={handleAddGoal}>
              Add Goal
            </Button>
          </View>
          <View className="w-full mb-2">
            <Button
              size="sm"
              className="w-full"
              variant="destructive"
              onPress={onCancel}>
              Cancel
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingVertical: 56,
  },
  buttonContainer: {
    width: 100,
  },
});
