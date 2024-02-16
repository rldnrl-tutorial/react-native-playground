import { PropsWithChildren } from "react";
import { Text, View } from "react-native";

export function NumberContainer({ children }: PropsWithChildren) {
  return (
    <View className="border-[4px] border-slate-500 rounded p-6 m-6 items-center justify-center">
      <Text className="text-slate-500 text-4xl font-[open-sans]">
        {children}
      </Text>
    </View>
  );
}
