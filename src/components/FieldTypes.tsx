import { StyleSheet, View } from "react-native";
import React from "react";
import { Chip, Text } from "react-native-paper";
import { InputTypeValue } from "../interfaces/InputTypeValue";

type Props = {
  onSelect: any;
};

const dataTypes: Array<InputTypeValue> = [
  { label: "Text", type: "text" },
  { label: "Date", type: "date" },
  { label: "Checkbox", type: "checkbox" },
  { label: "Number", type: "number" },
];
const FieldTypes = ({ onSelect }: Props) => {
  return (
    <View style={styles.contentContainer}>
      {dataTypes.map((x, i) => (
        <Chip
          style={{ marginRight: 5 }}
          key={i + ""}
          onPress={() => {
            onSelect(x);
          }}
        >
          <Text variant="bodyLarge">{x.label}</Text>
        </Chip>
      ))}
    </View>
  );
};

export default FieldTypes;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    marginVertical: 15,
  },
});
