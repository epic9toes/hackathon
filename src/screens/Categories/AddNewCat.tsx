import { StyleSheet, View } from "react-native";
import React from "react";
import { IconButton, MD3Colors, Button } from "react-native-paper";
import GlobalStyles from "../../CSS/global";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import UpdateCategory from "../../components/category/UpdateCategory";

const AddNewCat = () => {
  const categories = useSelector((state: any) => state.categories);

  const navigation = useNavigation<any>();
  if (categories)
    return (
      <View style={[GlobalStyles.container, styles.container]}>
        <IconButton
          icon="chevron-left"
          iconColor={MD3Colors.error50}
          size={36}
          onPress={() => navigation.goBack()}
        />
        {/* Category Start */}
        <UpdateCategory item={categories[categories.length - 1]} />
        {/* Category End */}
        <Button
          style={{ marginTop: 15 }}
          mode="contained"
          onPress={() => {
            // dispatch(addCategory(item));
            navigation.goBack();
          }}
        >
          Completed
        </Button>
      </View>
    );

  return null;
};

export default AddNewCat;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
