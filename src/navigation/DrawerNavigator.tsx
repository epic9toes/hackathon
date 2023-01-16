import { createDrawerNavigator } from "@react-navigation/drawer";
import Categories from "../screens/Categories";
import Equipments from "../screens/equipments";
import Home from "../screens/home";
import { useSelector } from "react-redux";
import { ProductModel } from "../interfaces/ProductModel";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  const categories: ProductModel[] = useSelector(
    (state: any) => state.categories
  );

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={Home} />
      {categories.map((x, i) => (
        <Drawer.Screen name={x.name} key={x.id} component={Equipments} />
      ))}
      <Drawer.Screen name="Categories" component={Categories} />
    </Drawer.Navigator>
  );
}
