import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import FabButton from "../../components/FabButton";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { ProductModel } from "../../interfaces/ProductModel";
import { useDispatch } from "react-redux";
import { addCategory } from "../../redux/category/categoryActions";
import uuid from "react-native-uuid";
import UpdateCategory from "../../components/category/UpdateCategory";

const Categories = () => {
  const dispatch = useDispatch();

  const categories: ProductModel[] = useSelector(
    (state: any) => state.categories
  );

  const navigation = useNavigation<any>();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Gello</Text>
      {categories.map((x) => (
        <UpdateCategory item={x} key={x.id} />
      ))}

      <FabButton
        icon="plus"
        onPress={() => {
          dispatch(
            addCategory({
              id: uuid.v4().toString(),
              name: "New Category " + categories.length + 1,
              attributes: [],
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
