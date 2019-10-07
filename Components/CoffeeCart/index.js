import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

//Data
import items from "../../data/items";
import { withNavigation } from "react-navigation";
const CoffeeCart = props => {
  let cartItems;
  if (items) {
    cartItems = items.map(item => <CartItem item={item} key={item.id} />);
  }

  return (
    <List>
      {cartItems}
      <Button full danger>
        <Text>Checkout</Text>
      </Button>
      <Button full danger onPress={() => props.navigation.navigate("history")}>
        <Text>History</Text>
      </Button>
    </List>
  );
};

export default observer(CoffeeCart);
