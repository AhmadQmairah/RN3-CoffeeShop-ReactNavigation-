import { createStackNavigator } from "react-navigation-stack";
import React, { Component } from "react";
import { List, Content, Icon } from "native-base";
import UserName from "../Components/Profile/UserName";
import Login from "../Components/Login";
const MyStackNav = createStackNavigator(
  {
    Login: Login,
    Profile: UserName
  },
  {
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon type="FontAwesome" name="user" size={20} />
      )
    },
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
