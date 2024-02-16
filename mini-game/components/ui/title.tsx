import { PropsWithChildren } from "react";
import { Text } from "react-native";

export function Title({ children }: PropsWithChildren) {
  return (
    <Text className="text-xl text-center border-[2px] p-3 rounded font-[open-sans-bold]">
      {children}
    </Text>
  );
}
