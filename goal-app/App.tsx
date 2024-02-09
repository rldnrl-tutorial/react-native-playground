import { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { GoalForm } from "./features/app/goal-form";
import { GoalItem } from "./features/app/goal-item";

import "./styles.css";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goalList, setGoalList] = useState<{ text: string; id: string }[]>([]);

  const handleStartAddGoal = () => {
    setModalIsVisible(true);
  };

  const handleClose = () => {
    setModalIsVisible(false);
  };

  const handleAddGoal = (goalText: string) => {
    setGoalList((prevGoalList) => [
      ...prevGoalList,
      { text: goalText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  };

  const handleDeleteGoal = (id: string) => {
    setGoalList((prevGoalList) =>
      prevGoalList.filter((goal) => goal.id !== id)
    );
  };

  return (
    <View className="px-4" style={styles.appContainer}>
      <View>
        <Button className="w-full" size="sm" onPress={handleStartAddGoal}>
          Add New Goal
        </Button>
      </View>
      <GoalForm
        visible={modalIsVisible}
        onAddGoal={handleAddGoal}
        onCancel={handleClose}
      />
      <Separator className="my-4" />
      <View>
        <FlatList
          data={goalList}
          renderItem={({ item }) => (
            <GoalItem goal={item} onDeleteGoal={handleDeleteGoal} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
  },
});
