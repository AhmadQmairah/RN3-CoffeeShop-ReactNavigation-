import { createStackNavigator } from "react-navigation-stack";
import React, { Component } from "react";
import history from "../Components/Profile/OrderHistory";
import Cart from "../Components/CoffeeCart";
import { List, Content, Icon } from "native-base";
const MyStackNav = createStackNavigator(
  {
    cart: Cart,
    history: history
  },
  {
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon type="FontAwesome" name="shopping-cart" size={20} />
      )
    },
    initialRouteName: "cart",
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
