import { Text, View, Pressable, StyleSheet } from "react-native";
import { cn } from "~/lib/utils";

type GoalItemProps = {
  goal: {
    text: string;
    id: string;
  };
  onDeleteGoal: (id: string) => void;
};

export function GoalItem({ goal, onDeleteGoal }: GoalItemProps) {
  const handleDeleteGoal = () => {
    onDeleteGoal(goal.id);
  };

  return (
    <View className={cn("mb-2 rounded-lg border border-slate-200")}>
      <Pressable
        android_ripple={{ color: "#cccccc", borderless: false }}
        onPress={handleDeleteGoal}>
        {({ pressed }) => (
          <Text className={cn("p-4 rounded-lg", pressed && "opacity-70")}>
            {goal.text}
          </Text>
        )}
      </Pressable>
    </View>
  );
}
