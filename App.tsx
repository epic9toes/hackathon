import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import MyDrawer from "./src/navigation/DrawerNavigator";
import CategoryNavigator from "./src/navigation/CategoryNavigator";
import store from "./src/redux/store";

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#6200EE",
      secondary: "#BB86FC",
    },
  };

  const RootStack = createNativeStackNavigator();

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <RootStack.Screen name="DrawerNav" component={MyDrawer} />
            <RootStack.Screen name="Category" component={CategoryNavigator} />
          </RootStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
