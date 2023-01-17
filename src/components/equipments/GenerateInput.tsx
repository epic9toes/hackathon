import { Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { ProductAttrib } from "../../interfaces/ProductAttrib";
import { Switch, TextInput, Text, Button } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

type Props = {
  value: string;
  type: ProductAttrib;
  onChange: any;
};
const GenerateInput = ({ type, value, onChange }: Props) => {
  const [show, setShow] = useState(false);

  const onChangeEvent = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    onChange({ value: new Date(currentDate).toDateString(), key: type.name });
    setShow(false);
  };
  switch (type.type) {
    case "text":
    case "number":
      return (
        <TextInput
          keyboardType={type.type === "number" ? "number-pad" : "default"}
          mode="outlined"
          label={type.name}
          value={value}
          onChangeText={(text) => onChange({ key: type.name, value: text })}
        />
      );
    case "checkbox":
      return (
        <View
          style={[
            styles.box,
            {
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 2,
              paddingHorizontal: 10,
            },
          ]}
        >
          <Text variant="labelLarge">{type.name}</Text>
          <Switch
            value={Boolean(value) || false}
            onValueChange={(val) => {
              onChange({ value: val, key: type.name });
            }}
          />
        </View>
      );
    case "date":
      return (
        <Pressable onPress={() => setShow(!show)} style={styles.box}>
          <Text>
            {type.name}: {value}
          </Text>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date(value || Date.now())}
              mode={"date"}
              is24Hour={true}
              onChange={onChangeEvent}
            />
          )}
        </Pressable>
      );

    default:
      return null;
  }
};

export default GenerateInput;

const styles = StyleSheet.create({
  box: {
    borderWidth: 0.8,
    padding: 15,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});
