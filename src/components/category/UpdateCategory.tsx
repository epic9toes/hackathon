import { Keyboard, StyleSheet, View } from "react-native";
import React, { useMemo, useRef } from "react";
import { Text, TextInput, Button, Card } from "react-native-paper";
import { ProductModel } from "../../interfaces/ProductModel";
import FieldGen from "../FieldGen";

import FieldTypes from "../../components/FieldTypes";
import { InputTypeValue } from "../../interfaces/InputTypeValue";
import { useDispatch } from "react-redux";

import BottomSheet from "@gorhom/bottom-sheet";
import {
  addCategoryAttribute,
  changeCategoryName,
  removeCategoryAttribute,
  updateCategoryAttribute,
} from "../../redux/category/categoryActions";
import uuid from "react-native-uuid";

type Props = {
  item: ProductModel;
};
const UpdateCategory = ({ item }: Props) => {
  const dispatch = useDispatch();

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  // variables
  const snapPoints = useMemo(() => ["25%", "40%"], []);
  return (
    <View>
      <Card style={styles.cardContainer}>
        <Card.Title title={item.name} />
        <Card.Content>
          <TextInput
            mode="outlined"
            label="Category Name"
            value={item.name}
            onChangeText={(text) => dispatch(changeCategoryName(text, item.id))}
          />
          {/* Fields here */}
          {item?.attributes.map((x, i) => (
            <FieldGen
              onTextChange={(text: string) => {
                const attributes = item.attributes;
                attributes[i].name = text ? text : "Field";
                dispatch(updateCategoryAttribute(text, item.id, i));
              }}
              onRemove={() => {
                const attributes = item.attributes;
                attributes.splice(i, 1);
                dispatch(removeCategoryAttribute(item.id, i));
              }}
              key={x.id}
              inputType={x}
            />
          ))}
        </Card.Content>

        <Card.Actions>
          <Button
            icon="plus"
            mode="contained"
            onPress={() => {
              Keyboard.dismiss();
              bottomSheetRef.current?.expand();
            }}
          >
            Add New Field
          </Button>
          <Button mode="outlined" onPress={() => console.log("Pressed")}>
            Change Title Field
          </Button>
        </Card.Actions>
      </Card>

      {/* Menu  */}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <FieldTypes
          onSelect={(x: InputTypeValue) => {
            dispatch(
              addCategoryAttribute(item.id, {
                ...x,
                name: "",
                id: uuid.v4().toString(),
              })
            );
            bottomSheetRef.current?.close();
          }}
          onCancel={() => bottomSheetRef.current?.close()}
        />
      </BottomSheet>
    </View>
  );
};

export default UpdateCategory;

const styles = StyleSheet.create({
  cardContainer: { paddingVertical: 15, marginVertical: 5 },
});
