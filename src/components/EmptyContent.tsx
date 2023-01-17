import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

type Props = {
  text: string;
};
const EmptyContent = ({ text }: Props) => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">{text}</Text>
    </View>
  );
};

export default EmptyContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
