import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import FabButton from "../../components/FabButton";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/category/categoryActions";
import EmptyContent from "../../components/EmptyContent";
import { ProductAttrib } from "../../interfaces/ProductAttrib";
import { ProductModel } from "../../interfaces/ProductModel";
import DisplayList from "../../components/equipments/DisplayList";

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
        {/* Attributes DisplayList */}
        <DisplayList catId={route.params.id} category={category} />
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
