import Auth from "./AuthTab";
import Coffee from "./CoffeeTab";
import Order from "./OrdersTab";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { List, Content, Icon } from "native-base";
const BottomTabNav = createBottomTabNavigator(
  {
    Auth: Auth,
    Coffee: Coffee,
    Order: Order
  },
  {
    tabBarOptions: {
      inactiveBackgroundColor: "white",
      showLabel: false,

      inactiveTintColor: "white",
      activeBackgroundColor: "#b8cdd0",
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: "rgb(20,90,100)"
      }
    }
  }
);

export default BottomTabNav;
