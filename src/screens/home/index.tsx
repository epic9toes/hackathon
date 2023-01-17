import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import { ProductModel } from "../../interfaces/ProductModel";
import { useSelector } from "react-redux";
import EmptyContent from "../../components/EmptyContent";
import DisplayList from "../../components/equipments/DisplayList";

const Home = () => {
  const categories: ProductModel[] = useSelector(
    (state: any) => state.categories
  );
  return (
    <View style={styles.container}>
      {categories && categories.length === 0 && (
        <EmptyContent text="No items found!" />
      )}
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text variant="titleLarge" style={{ marginVertical: 15 }}>
              {item.name}
            </Text>
            {item.items.length === 0 && (
              <EmptyContent text={`${item.name} has no items yet!`} />
            )}
            <DisplayList catId={item.id} category={item} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
