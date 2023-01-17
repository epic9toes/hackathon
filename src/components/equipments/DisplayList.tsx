import { StyleSheet } from "react-native";
import React from "react";
import { Button, Card } from "react-native-paper";
import { ProductAttrib } from "../../interfaces/ProductAttrib";
import GenerateInput from "./GenerateInput";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../../redux/category/categoryActions";

type Props = {
  category: any;
  catId: string;
};
const DisplayList = ({ category, catId }: Props) => {
  const dispatch = useDispatch();

  return category.items.map((item: any, idx: number) => (
    <Card key={idx} style={{ marginBottom: 10 }}>
      <Card.Title
        title={
          category.titleAttribute
            ? item[category.titleAttribute]
            : item[category.attributes[0].name]
        }
      />

      <Card.Content>
        {category.attributes.map((x: ProductAttrib) => (
          <GenerateInput
            onChange={({ key, value }: any) => {
              // Update store
              item[key] = value;
              dispatch(updateItem(catId, key, value, idx));
            }}
            key={x.id}
            value={item[x.name]}
            type={x}
          />
        ))}
      </Card.Content>
      <Card.Actions>
        <Button
          icon="delete"
          mode="contained"
          onPress={() => dispatch(removeItem(catId, idx))}
        >
          Remove
        </Button>
      </Card.Actions>
    </Card>
  ));
};

export default DisplayList;

const styles = StyleSheet.create({});
