import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import FabButton from "../../components/FabButton";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  getCategory,
  removeItem,
  updateItem,
} from "../../redux/category/categoryActions";
import EmptyContent from "../../components/EmptyContent";
import { ProductAttrib } from "../../interfaces/ProductAttrib";
import GenerateInput from "../../components/equipments/GenerateInput";
import { Card, Button } from "react-native-paper";
import { ProductModel } from "../../interfaces/ProductModel";

const Equipments = ({ route }: any) => {
  const dispatch = useDispatch();
  const categories = useSelector((state: any) => state.categories);
  const category: ProductModel = categories.find(
    (x: any) => x.id === route.params.id
  );

  return (
    <>
      <ScrollView style={styles.container}>
        {category && category.items.length === 0 && (
          <EmptyContent text="No Equipment yet!" />
        )}
        {category &&
          category.items.map((item: any, idx: number) => (
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
                      dispatch(updateItem(route.params.id, key, value, idx));
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
                  onPress={() => dispatch(removeItem(route.params.id, idx))}
                >
                  Remove
                </Button>
              </Card.Actions>
            </Card>
          ))}
      </ScrollView>
      <FabButton
        icon="plus"
        onPress={() => {
          let item: any = {};
          if (category && category.attributes.length) {
            category.attributes.forEach((element: ProductAttrib) => {
              item[element.name] = "";
            });
            dispatch(addItem(route.params.id, item));
            // console.log(item);
          }
        }}
      />
    </>
  );
};

export default Equipments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
