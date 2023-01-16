import { StyleSheet, View } from "react-native";
import React from "react";
import { IconButton, MD3Colors, Text, TextInput } from "react-native-paper";
import { ProductAttrib } from "../interfaces/ProductAttrib";

type Props = {
  inputType: ProductAttrib;
  onRemove: any;
  onTextChange: any;
};
const FieldGen = ({ inputType, onRemove, onTextChange }: Props) => {
  return (
    <View style={styles.content}>
      <TextInput
        mode="outlined"
        label="Field"
        value={inputType.name}
        style={{ flex: 0.8 }}
        onChangeText={(text) => onTextChange(text)}
      />
      <Text variant="labelLarge">{inputType.label}</Text>
      <IconButton
        icon="delete"
        iconColor={MD3Colors.error50}
        size={28}
        onPress={onRemove}
      />
    </View>
  );
};

export default FieldGen;

const styles = StyleSheet.create({
  content: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
});
