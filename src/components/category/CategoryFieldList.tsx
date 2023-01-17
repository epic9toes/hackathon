import { StyleSheet, View } from "react-native";
import React from "react";
import { ProductAttrib } from "../../interfaces/ProductAttrib";
import { Chip, Text } from "react-native-paper";

type Props = {
  onSelect: any;
  items: ProductAttrib[];
};

const CategoryFieldList = ({ items, onSelect }: Props) => {
  return (
    <View style={styles.contentContainer}>
      {items.map((x, i) => (
        <Chip
          style={{ marginRight: 5 }}
          key={i + ""}
          onPress={() => {
            onSelect(x.name);
          }}
        >
          <Text variant="bodyLarge">{x.name}</Text>
        </Chip>
      ))}
    </View>
  );
};

export default CategoryFieldList;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    marginVertical: 15,
  },
});
