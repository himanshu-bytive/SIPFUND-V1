import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { AntDesign } from "react-native-vector-icons";
import { Colors } from "../common";

const Cart = (props) => {
  const { cart, nav } = props;
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    if (cart) {
      setCartItemCount(cart?.cartDetails.length);
    }
  }, [cart]);

  return (
    <TouchableOpacity onPress={() => nav()} style={{ marginTop: 20 }}>
      <View style={styles.container}>
        <AntDesign name={"shoppingcart"} size={30} color={Colors.RED} />
        <View>
          <View style={styles.cartNum}>
            <Text
              style={{
                color: Colors.WHITE,
              }}
            >
              {cartItemCount}
            </Text>
          </View>
          <View style={{ flex: 1 }} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  cartNum: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.GRAY_2,
    padding: 2.5,
    marginLeft: -10,
    marginTop: -5,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
});

const mapStateToProps = (state) => ({
  cart: state.cartActions.cart,
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...ownProps,
  };
};

export default connect(mapStateToProps, undefined, mapDispatchToProps)(Cart);
