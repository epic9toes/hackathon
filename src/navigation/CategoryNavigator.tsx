import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddNewCat from "../screens/Categories/AddNewCat";

const AuthStack = createNativeStackNavigator();

const CategoryNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="NewCat" component={AddNewCat} />
    </AuthStack.Navigator>
  );
};

export default CategoryNavigator;
