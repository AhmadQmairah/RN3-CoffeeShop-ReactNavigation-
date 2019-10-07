import { createStackNavigator } from "react-navigation-stack";
import React, { Component } from "react";
import Home from "../Components/HomePage";
import List from "../Components/CoffeeList";
import Detail from "../Components/CoffeeDetail";
import Login from "../Components/Login";
import { Content, Icon } from "native-base";
import Cart from "../Components/CoffeeCart";
const MyStackNav = createStackNavigator(
  {
    ListScreen: List,
    DetailScreen: Detail
  },
  {
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon type="FontAwesome" name="coffee" size={20} />
      )
    },
    initialRouteName: "ListScreen",
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
