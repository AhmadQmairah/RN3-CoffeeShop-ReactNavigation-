import React, { Component } from "react";

export default class cart extends Component {
  render() {
    return (
      <view>
        <button onPress={() => alert("cart")}>
          <Icon type="FontAwesome" name="shopping-cart" />
        </button>
      </view>
    );
  }
}
