import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import FabButton from "../../components/FabButton";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { ProductModel } from "../../interfaces/ProductModel";
import { addCategory } from "../../redux/category/categoryActions";
import uuid from "react-native-uuid";
import UpdateCategory from "../../components/category/UpdateCategory";
import EmptyContent from "../../components/EmptyContent";

const Categories = () => {
  const dispatch = useDispatch();

  const categories: ProductModel[] = useSelector(
    (state: any) => state.categories
  );

  const navigation = useNavigation<any>();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {categories.map((x) => (
        <UpdateCategory item={x} key={x.id} />
      ))}

      {categories.length === 0 && <EmptyContent text={"No Category yet!"} />}

      <FabButton
        icon="plus"
        onPress={() => {
          dispatch(
            addCategory({
              id: uuid.v4().toString(),
              name: "New Category " + (categories.length + 1),
              attributes: [],
              items: [],
            })
          );
          navigation.navigate("Category");
        }}
      />
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
