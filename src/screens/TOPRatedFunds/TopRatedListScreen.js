import React, { useState, useRef, useEffect, useContext } from "react";
import {
  StyleSheet,
  Button,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  TextInput,
  ActivityIndicator,
  ToastAndroid,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import { Styles, Config, Colors, FormValidate } from "../../common";
import { TopRatedFundType } from "../../components";
import {
  Ionicons,
  AntDesign,
  Entypo,
  FontAwesome5,
} from "react-native-vector-icons";
import { Image, Header, CheckBox } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

function TopRatedListScreen(props) {
  const {
    token,
    cartDetails,
    getCartDetails,
    deleteItemFromCart,
    fundDetails,
    users,
  } = props;

  const [cartEmpty, setCartEmpty] = useState();
  const [cart, setCart] = useState([]);
  const [selectTab, setSelectTab] = useState(
    props.navigation.state.params?.currentTab
      ? props.navigation.state.params?.currentTab
      : "SIP"
  );
  const toggleTab = (value) => {
    setSelectTab(value);
  };
  const [sipTotal, setSipTotal] = useState(0);
  const [lumpsumTotal, setLumpsumTotal] = useState(0);
  const [paymentCart, setPaymentCart] = useState();

  useEffect(() => {
    getCartDetails(token);
  }, []);

  useEffect(() => {
    if (cartDetails) {
      setCart(cartDetails.cartDetails);

      let sip = 0;
      let lump = 0;
      for (var item in cartDetails.cartDetails) {
        if (cartDetails.cartDetails[item].trxn_nature === "S") {
          sip = sip + Number(cartDetails.cartDetails[item].amount);
        } else if (cartDetails.cartDetails[item].trxn_nature === "N") {
          lump = lump + Number(cartDetails.cartDetails[item].amount);
        }
      }
      setSipTotal(sip);
      setLumpsumTotal(lump);
    }
  }, [cartDetails]);

  const deleteItem = (key) => {
    let data = cart;
    for (let item in data) {
      if (data[item].product_name === key) {
        console.log(data[item]);
        let params = [data[item]._id];
        deleteItemFromCart(params, token);
        delete data[item];
        getCartDetails(token);
        break;
      }
    }
    ToastAndroid.show("Item deleted succesfully!", ToastAndroid.LONG);
    props.navigation.replace("TopRatedList", { currentTab: selectTab });
  };

  const getFundType = () => {
    return selectTab === "SIP" ? "S" : "N";
  };

  useEffect(() => {
    let type = getFundType();
    if (!cart || cart.filter((item) => item.trxn_nature === type).length === 0)
      setCartEmpty(true);
    else setCartEmpty(false);
  }, [selectTab, cart]);

  const [folio, setFolio] = useState();

  useEffect(() => {
    if (folio?.folio && cart) {
      let tmp = cart;
      for (let i in tmp) {
        if (folio?.id === tmp[i]?._id) {
          let fund = tmp[i];
          fund.folio = folio?.folio;
          tmp.splice(i, 1);
          tmp = [...tmp, fund];
          //setPaymentCart(tmp);
          return;
        }
      }
    }
  }, [folio]);

  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <TouchableOpacity
            onPress={() =>
              props.navigation.state.params?.fromScreen
                ? props.navigation.navigate(
                    props.navigation.state.params?.fromScreen
                  )
                : props.navigation.goBack()
            }
            style={{ marginTop: 20 }}
          >
            <AntDesign name={"arrowleft"} size={40} color={Colors.RED} />
          </TouchableOpacity>
        }
        containerStyle={styles.header}
        backgroundColor={Colors.LIGHT_WHITE}
        centerComponent={
          <Image
            source={require("../../../assets/icon.png")}
            style={styles.logimg}
          />
        }
      />

      {/* SIP_sec */}

      <View style={styles.sip_sec}>
        <TouchableOpacity
          onPress={() => toggleTab("SIP")}
          style={selectTab == "SIP" ? styles.sip_left : styles.lumpsum}
        >
          <Text style={selectTab == "SIP" ? styles.sip : styles.lump}>SIP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleTab("LUMPSUM")}
          style={selectTab == "LUMPSUM" ? styles.sip_left : styles.lumpsum}
        >
          <Text style={selectTab == "LUMPSUM" ? styles.sip : styles.lump}>
            LUMPSUM
          </Text>
        </TouchableOpacity>
      </View>

      {/* My Selected Funds_sec */}
      <ScrollView style={styles.containerScroll}>
        <View style={styles.fund_sec}>
          <Text style={styles.selected}>My Selected Funds</Text>
          <Text style={styles.month}>
            {selectTab === "SIP" ? "SIP Per Month" : "Lumpsum"}
          </Text>
        </View>

        {/* Monthly Investment_sec */}

        <View style={styles.fund_sec}>
          <Text style={styles.investment}>
            {selectTab === "SIP" ? "Monthly Investment" : "One Time Investment"}
          </Text>
          <Text style={styles.price}>
            ₹ {selectTab === "SIP" ? sipTotal : lumpsumTotal}
          </Text>
        </View>

        {selectTab === "SIP" &&
          cart &&
          cart
            .filter((item) => item.trxn_nature === "S")
            .map((item, key) => (
              <TopRatedFundType
                key={item?._id}
                deleteItem={deleteItem}
                fromSIP={true}
                item={item}
                onPress={() => {
                  fundDetails(item);
                  props.navigation.navigate("FundsDetails", {
                    fromScreen: "TopRatedList",
                  });
                }}
                folio={folio}
                setFolio={(val) => setFolio(val)}
              />
            ))}
        {selectTab === "LUMPSUM" &&
          cart &&
          cart
            .filter((item) => item.trxn_nature === "N")
            .map((item, key) => (
              <TopRatedFundType
                key={item?._id}
                deleteItem={deleteItem}
                item={item}
                onPress={() => {
                  fundDetails(item);
                  props.navigation.navigate("FundsDetails", {
                    fromScreen: "TopRatedList",
                  });
                }}
                folio={folio}
                setFolio={(val) => setFolio(val)}
              />
            ))}
      </ScrollView>
      {!cart ||
      (selectTab === "SIP" &&
        cart.filter((item) => item.trxn_nature === "S").length === 0) ||
      (selectTab === "LUMPSUM" &&
        cart.filter((item) => item.trxn_nature === "N").length === 0) ? (
        <View style={{ flexGrow: 1, alignSelf: "center" }}>
          <Text style={{ fontSize: 20 }}>{"No items in the cart"}</Text>
        </View>
      ) : (
        <></>
      )}

      <TouchableOpacity
        onPress={() => props.navigation.navigate("TopRatedHome")}
      >
        <Text style={styles.more_funds}>I would like to add more funds</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (users?.IIN == 0) {
            Alert.alert(
              "Not Allowed!",
              "Please complete the account opening process and upload the required documents, upon activation of your account, you can start your investment. Do you want to continue?",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                {
                  text: "OK",
                  onPress: () => props.navigation.navigate("RegisterDetails"),
                },
              ]
            );

            return;
          }
          let type = getFundType();
          let tmpCart;
          if (paymentCart?.cartDetails) {
            tmpCart = paymentCart?.cartDetails;
          } else {
            tmpCart = cart;
          }
          if (
            !tmpCart ||
            tmpCart.filter((item) => item.trxn_nature === type).length === 0
          ) {
            Alert.alert("Cart Empty", "There are no funds to check-out!");
          } else {
            props.navigation.navigate("TopRatedSubmit", {
              cart: tmpCart.filter((item) => item.trxn_nature === type),
              isLumpsum: type === "N" ? true : false,
              planName:
                props.navigation.state.params?.planName || "Top Rated Funds",
            });
          }
        }}
        style={[
          styles.botton_box,
          {
            backgroundColor: cartEmpty ? "darkgray" : Colors.RED,
          },
        ]}
      >
        <Text style={styles.get_otp}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  logimg: {
    height: 65,
    width: 203,
    marginTop: 10,
  },

  header: {
    borderBottomColor: Colors.BLACK,
    borderBottomWidth: 1,
  },
  containerScroll: {
    width: "100%",
  },
  sip_sec: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 30,
  },
  sip_left: {
    width: "50%",
    borderBottomWidth: 2,
    borderBottomColor: Colors.RED,
  },
  lumpsum: {
    width: "50%",
    borderBottomWidth: 1,
    borderBottomColor: Colors.DEEP_GRAY,
  },
  sip: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: Colors.RED,
  },
  lump: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
    color: Colors.BLACK,
  },
  fund_sec: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 10,
  },
  selected: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.DEEP_GRAY,
  },
  month: {
    fontSize: 13,
    fontWeight: "bold",
    color: Colors.DEEP_GRAY,
    position: "absolute",
    right: 0,
  },
  investment: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.RED,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.RED,
    position: "absolute",
    right: 0,
  },
  hybrid_sec: {
    marginHorizontal: 15,
    marginVertical: 20,
  },
  hybrid: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.RED,
    marginVertical: 10,
    marginLeft: 10,
  },
  more_funds: {
    fontSize: 18,
    color: Colors.RED,
    textAlign: "center",
    marginTop: 10,
  },
  botton_box: {
    backgroundColor: Colors.RED,
    marginHorizontal: 30,
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.DEEP_GRAY,
    paddingVertical: 10,
  },
  get_otp: {
    color: Colors.WHITE,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
const mapStateToProps = (state) => ({
  token: state.auth.token,
  users: state.auth.user,
  cartDetails: state.cartActions.cart,
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { AuthActions } = require("../../store/AuthRedux");
  const { CartActions } = require("../../store/CartActionsRedux");
  const { FundDetailActions } = require("../../store/FundDetailRedux");
  return {
    ...stateProps,
    ...ownProps,
    logOut: () => {
      AuthActions.logOut(dispatch);
    },
    getCartDetails: (token) => {
      CartActions.cartDetails(dispatch, token);
    },
    deleteItemFromCart: (params, token) => {
      CartActions.deletCart(dispatch, params, token);
    },
    fundDetails: (data) => {
      FundDetailActions.fundDetails(dispatch, data);
    },
  };
};
export default connect(
  mapStateToProps,
  undefined,
  mapDispatchToProps
)(TopRatedListScreen);
