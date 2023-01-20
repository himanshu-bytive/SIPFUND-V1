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
import {
  MySelectPicker,
  MyTextInput,
  TopRatedFundType,
} from "../../components";
import {
  Ionicons,
  AntDesign,
  Entypo,
  FontAwesome5,
} from "react-native-vector-icons";
import { Image, Header, CheckBox, Overlay } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function TopRatedListScreen(props) {
  const {
    token,
    cartDetails,
    getCartDetails,
    deleteItemFromCart,
    fundDetails,
    nseDetails,
    fatcaDetails,
    userDetails,
    updateRegister,
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
  const [showNseInputs, setShowNseInputs] = useState(false);
  const [extraNseDetails, setExtraNseDetails] = useState();

  const mobileEmailRelation = [
    { value: "Self", label: "Self" },
    { value: "Spouse", label: "Spouse" },
    { value: "Dependent Children", label: "Dependent Children" },
    { value: "Dependent Siblings", label: "Dependent Siblings" },
    { value: "Dependent Parents", label: "Dependent Parents" },
    { value: "Guardian", label: "Guardian" },
    { value: "PMS", label: "PMS" },
    { value: "Custodian", label: "Custodian" },
    { value: "POA", label: "POA" },
  ];

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

  const handleNseDetailsUnavailability = (data) => {
    setExtraNseDetails(data);
    setShowNseInputs(true);
  };

  const handleSubmitExtraNseDetails = () => {
    let updatedData = {
      nseDetails: {
        ...nseDetails,
        ...extraNseDetails,
      },
      userDetails,
      fatcaDetails,
    };
    updateRegister(updatedData, token);
    setShowNseInputs(false);
  };

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
          /* Check if details are enough for nse */
          if (
            !nseDetails["Email_relation"] ||
            !nseDetails["Mobile_relation"] ||
            !nseDetails["NOM1_PAN"] ||
            !nseDetails["NOMINEE_OPTED"]
          ) {
            handleNseDetailsUnavailability({
              ["Email_relation"]: nseDetails["Email_relation"],
              ["Mobile_relation"]: nseDetails["Mobile_relation"],
              ["NOM1_PAN"]: nseDetails["NOM1_PAN"],
              ["NOMINEE_OPTED"]: nseDetails["NOMINEE_OPTED"] || "N",
            });
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
              planName: props.navigation.state.params?.planName,
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
      <Overlay visible={showNseInputs}>
        <Icon
          name="close"
          style={styles.overlayCloseIcon}
          size={25}
          onPress={() => setShowNseInputs(false)}
        />
        <Text style={styles.nseInfoText}>
          As per the regulatory requirement, the following information is
          mandatory before processing payment.
        </Text>
        <View style={styles.overlayContainer}>
          <Text style={styles.occupation}>
            {"Mobile Relation"}
            <Text style={styles.error}>*</Text>
          </Text>
          <MySelectPicker
            values={mobileEmailRelation}
            placeholder={"Select Mobile Relation"}
            defultValue={extraNseDetails?.Mobile_relation}
            onChange={(phone) => {
              setExtraNseDetails({
                ...extraNseDetails,
                ["Mobile_relation"]: phone,
              });
            }}
          />

          <Text style={styles.occupation}>
            {"Email Relation"}
            <Text style={styles.error}>*</Text>
          </Text>
          <MySelectPicker
            values={mobileEmailRelation}
            placeholder={"Select email Relation"}
            defultValue={extraNseDetails?.Email_relation}
            onChange={(mailRelation) => {
              setExtraNseDetails({
                ...extraNseDetails,
                ["Email_relation"]: mailRelation,
              });
            }}
          />

          <CheckBox
            title="I Want to Add Nominee"
            containerStyle={styles.checkbox_style}
            textStyle={{ color: Colors.BLACK, fontSize: 12, marginLeft: 5 }}
            checked={extraNseDetails?.NOMINEE_OPTED === "Y"}
            checkedColor={Colors.BLACK}
            uncheckedColor={Colors.BLACK}
            onPress={() => {
              setExtraNseDetails({
                ...extraNseDetails,
                NOMINEE_OPTED:
                  extraNseDetails?.NOMINEE_OPTED === "Y" ? "N" : "Y",
              });
            }}
          />

          {extraNseDetails?.NOMINEE_OPTED === "Y" ? (
            <>
              <Text style={styles.occupation}>
                {"Nominee PAN"}
                <Text style={styles.error}>*</Text>
              </Text>
              <MyTextInput
                placeholder={"Nominee PAN"}
                value={extraNseDetails?.NOM1_PAN}
                maxLength={10}
                onChangeText={(nominate1pan) => {
                  setExtraNseDetails({
                    ...extraNseDetails,
                    NOM1_PAN: nominate1pan,
                  });
                }}
              />
            </>
          ) : null}

          <TouchableOpacity
            onPress={handleSubmitExtraNseDetails}
            style={styles.botton_box}
          >
            <Text style={styles.get_otp}>Next</Text>
          </TouchableOpacity>
        </View>
      </Overlay>
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
  overlayCloseIcon: {
    alignSelf: "flex-end",
    marginRight: 5,
    marginVertical: 5,
  },
  nseInfoText: {
    maxWidth: "90%",
    fontSize: 16,
    paddingVertical: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  overlayContainer: {
    //width: "85%",
  },
  error: {
    color: "#ff0000",
    padding: 5,
  },
  occupation: {
    fontSize: 15,
    color: Colors.DEEP_GRAY,
    fontWeight: "bold",
    marginTop: 10,
  },
  checkbox_style: {
    marginVertical: 10,
  },
});
const mapStateToProps = (state) => ({
  token: state.auth.token,
  nseDetails: state.registration.nseDetails,
  fatcaDetails: state.registration.fatcaDetails,
  userDetails: state.registration.userDetails,
  cartDetails: state.cartActions.cart,
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { AuthActions } = require("../../store/AuthRedux");
  const { CartActions } = require("../../store/CartActionsRedux");
  const { FundDetailActions } = require("../../store/FundDetailRedux");
  const { RegistrationActions } = require("../../store/RegistrationRedux");
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
    updateRegister: (params, token) => {
      RegistrationActions.updateRegister(dispatch, params, token);
    },
  };
};
export default connect(
  mapStateToProps,
  undefined,
  mapDispatchToProps
)(TopRatedListScreen);
