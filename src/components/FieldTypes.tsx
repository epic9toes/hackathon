import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { Divider, IconButton, MD3Colors, Text } from "react-native-paper";
import { InputTypeValue } from "../interfaces/InputTypeValue";

type Props = {
  onSelect: any;
  onCancel: any;
};

const dataTypes: Array<InputTypeValue> = [
  { label: "Text", type: "text" },
  { label: "Date", type: "date" },
  { label: "Checkbox", type: "checkbox" },
  { label: "Number", type: "number" },
];
const FieldTypes = ({ onSelect, onCancel }: Props) => {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.content}>
        <Text variant="labelLarge">Select Field Type</Text>
        <IconButton
          onPress={onCancel}
          icon="close"
          iconColor={MD3Colors.error50}
          size={26}
        />
      </View>
      {dataTypes.map((x, i) => (
        <View key={x.type}>
          <TouchableOpacity
            style={{ paddingVertical: 10 }}
            onPress={() => onSelect(x)}
          >
            <Text variant="bodyLarge">{x.label}</Text>
          </TouchableOpacity>
          {i !== dataTypes.length - 1 && <Divider />}
        </View>
      ))}
    </View>
  );
};

export default FieldTypes;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
