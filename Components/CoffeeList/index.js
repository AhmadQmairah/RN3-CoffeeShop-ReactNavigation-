import React, { Component } from "react";
import { observer } from "mobx-react";
import cart from "./cart";
// NativeBase Components
import { List, Content, Icon } from "native-base";

//Components
import CoffeeItem from "./CoffeeItem";

// Data
import cafes from "../../data/cafes";

const CoffeeList = props => {
  let shops;
  if (cafes) {
    shops = cafes.map(cafe => <CoffeeItem cafe={cafe} key={cafe.id} />);
  }

  return (
    <Content>
      <List>{shops}</List>
    </Content>
  );
};
CoffeeList.navigationOptions = ({ navigation }) => {
  return {
    title: "Coffee List",
    headerLeft: null,
    headerRight: (
      <Icon
        type="FontAwesome"
        name="shopping-cart"
        onPress={() => navigation.navigate("Cart")}
      />
    )
  };
};

export default observer(CoffeeList);
