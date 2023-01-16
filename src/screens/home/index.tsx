import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
const Home = () => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">No items found</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
