import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

type Props = {
  onPress: any;
  icon: string;
};
const FabButton = ({ onPress, icon }: Props) => (
  <FAB icon={icon} style={styles.fab} onPress={onPress} />
);

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default FabButton;
