import { createStackNavigator } from "react-navigation-stack";

import Home from "../Components/HomePage";
import List from "../Components/CoffeeList";
import Detail from "../Components/CoffeeDetail";
import Login from "../Components/Login";
import Cart from "../Components/CoffeeCart";
const MyStackNav = createStackNavigator(
  {
    HomeScreen: Home,
    ListScreen: List,
    DetailScreen: Detail,
    Login: Login,
    Cart: Cart
  },
  {
    initialRouteName: "Login",
    cardStyle: { backgroundColor: "rgb(20,90,100)" },
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100) "
      },
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default MyStackNav;
