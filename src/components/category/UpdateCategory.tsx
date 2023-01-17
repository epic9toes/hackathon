import { Keyboard, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { TextInput, Button, Card } from "react-native-paper";
import { ProductModel } from "../../interfaces/ProductModel";
import FieldGen from "../FieldGen";

import FieldTypes from "../../components/FieldTypes";
import { InputTypeValue } from "../../interfaces/InputTypeValue";
import { useDispatch } from "react-redux";

import {
  addCategoryAttribute,
  changeCategoryName,
  changeCategoryTitleAttribute,
  removeCategory,
  removeCategoryAttribute,
  updateCategoryAttribute,
} from "../../redux/category/categoryActions";
import uuid from "react-native-uuid";
import CategoryFieldList from "./CategoryFieldList";
import { useNavigation } from "@react-navigation/native";

const RightContent = (onDispatch: any) => (
  <Button
    style={{ marginRight: 10 }}
    icon="delete"
    mode="contained"
    onPress={onDispatch}
  >
    Delete
  </Button>
);

type Props = {
  item: ProductModel;
};
const UpdateCategory = ({ item }: Props) => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [isTitle, setisTitle] = useState(false);

  if (item)
    return (
      <View>
        <Card style={styles.cardContainer}>
          <Card.Title
            title={item.name ? item.name : "Unnamed!"}
            right={() =>
              RightContent(() => {
                dispatch(removeCategory(item.id));
                Keyboard.dismiss();
                navigation.goBack();
              })
            }
          />

          <Card.Content>
            <TextInput
              mode="outlined"
              label="Category Name"
              value={item.name ? item.name : ""}
              onChangeText={(text) =>
                dispatch(changeCategoryName(text, item.id))
              }
            />
            {/* Fields here */}
            {item.attributes.map((x, i) => (
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
                setVisible(!visible);
                Keyboard.dismiss();
              }}
            >
              Add New Field
            </Button>
            {item.attributes.length > 1 && (
              <Button mode="outlined" onPress={() => setisTitle(!isTitle)}>
                Change Title Field
              </Button>
            )}
          </Card.Actions>
          {visible && (
            <Card.Content>
              <View style={{ flexDirection: "row" }}>
                <FieldTypes
                  onSelect={(x: InputTypeValue) => {
                    dispatch(
                      addCategoryAttribute(item.id, {
                        ...x,
                        name: "",
                        id: uuid.v4().toString(),
                      })
                    );
                    setVisible(false);
                  }}
                />
              </View>
            </Card.Content>
          )}
          {isTitle && (
            <Card.Content>
              <View style={{ flexDirection: "row" }}>
                <CategoryFieldList
                  items={item.attributes}
                  onSelect={(x: string) => {
                    dispatch(changeCategoryTitleAttribute(x, item.id));
                    setisTitle(false);
                  }}
                />
              </View>
            </Card.Content>
          )}
        </Card>
      </View>
    );
  return null;
};

export default UpdateCategory;

const styles = StyleSheet.create({
  cardContainer: { paddingVertical: 15, marginVertical: 5 },
});
