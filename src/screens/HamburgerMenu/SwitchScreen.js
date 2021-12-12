import React, { useState, useRef, useEffect, useContext } from "react";
import {
  StyleSheet,
  Button,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  TextInput,
  ActivityIndicator,
  ScrollView,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import { Styles, Config, Colors, FormValidate } from "../../common";
import { Entypo, AntDesign } from "react-native-vector-icons";
import { Header, Overlay, CheckBox, colors } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const mutualfund = [
  {
    title: "Axis Treasury Advantage Fund - Growth",
    text: "Folio",
    number: "91075739541",
    text1: "Units",
    number1: "9.211",
    text2: "Value",
    number2: "22372.87",
    text3: "Switch To",
    text4: "Select Scheme",
    button: "ADD",
  },
  {
    title: "Axis Treasury Advantage Fund - Growth",
    text: "Folio",
    number: "91075739541",
    text1: "Units",
    number1: "9.211",
    text2: "Value",
    number2: "22372.87",
    text3: "Switch To",
    text4: "Select Scheme",
    button: "ADD",
  },
];

function SwitchScreen(props) {
  const {
    token,
    fetchTransactionDetails,
    panNumber,
    isInn,
    user,
    switchRes,
    externalSwitch,
    getSchemeList,
    schemeDetails,
    setAmcCode,
    amcScheme,
    setSwitchCheckoutDetails,
    setSwitchExternalCheckoutDetails,
    targetCode,
    targetReinvest,
    userDetails,
    nseDetails,
    fatcaDetails,
  } = props;
  const [selectTab, setSelectTab] = useState("SWITCH");

  const [schemeindex, setSchemeIndex] = useState(null);
  // const [radio, setRadio] = useState(false);
  const [amount, setAmount] = useState(true);
  const [amountValue, setAmountValue] = useState();
  const [allUnits, setAllUnits] = useState(false);
  const [toggle, setToggle] = useState();
  const [addedScheme, setAddedScheme] = useState([]);
  const [keys, setKeys] = useState([]);
  // const [externalIndex, setExternalIndex] = useState(null);
  const toggleTab = (value) => {
    setSelectTab(value);
  };

  useEffect(() => {
    if (userDetails !== null) {
      console.log("User Details=", userDetails);
    }
    if (nseDetails !== null) {
      console.log("NSE Details=", nseDetails);
    }
    if (user !== null) {
      console.log("User=", user);
    }
    if (fatcaDetails !== null) {
      console.log("fatcaDetails=", fatcaDetails);
    }
  }, [userDetails, nseDetails, user, fatcaDetails]);

  useEffect(() => {
    if (user !== null) {
      let params = {
        pan: user.pan,
        // pan: "AUZPS9522L",
      };
      console.log("params=", params);
      fetchTransactionDetails(params, token);
    }
  }, [user]);

  useEffect(() => {
    console.log("Added Scheme=", addedScheme);
    console.log("typeOf=", typeof addedScheme);
  }, [addedScheme]);

  const selectScheme = (params, index) => {
    if (keys.indexOf(index) !== -1) {
      remove(index);
    }
    console.log("Index=", index);
    setAmcCode(params);
    setSchemeIndex(index);
    getSchemeList(params, token);
    props.navigation.navigate("SchemeList");
  };

  const toggleRadio = (key, identifier) => {
    console.log("key=", key);
    console.log("Identifier=", identifier);
    setToggle(key);
    if (identifier === "AMOUNT") {
      setAmount(true);
      setAllUnits(false);
    } else {
      setAllUnits(true);
      setAmount(false);
    }
  };

  // const externalScheme = (params, index) => {
  //   console.log("Index=", index);
  //   setAmcCode(params);
  //   setExternalIndex(index);
  //   getSchemeList(params, token);
  //   props.navigation.navigate("SchemeList");
  // };

  const add = (
    key,
    longName,
    units,
    folio,
    value,
    identifier,
    productAmcName,
    amcCode,
    productCode,
    sourceReinvest
  ) => {
    if (keys.indexOf(key) === -1) {
      if (key === schemeindex) {
        console.log("AMOUNT=", typeof amountValue);
        console.log("value=", typeof value);
        if (amount && +amountValue > value) {
          console.log("here");
          Alert.alert("Alert", "Amount should be less than value");
          return;
        }
        let value;
        let valueName;
        if (amount === true) {
          valueName = "Amount";
          value = amountValue;
        } else {
          valueName = "Unit";
          value = units;
        }
        let newElement = {
          key: key,
          amcCode: amcCode,
          productAmcName: productAmcName,
          productCode: productCode,
          targetCode: targetCode,
          sourceReinvest: sourceReinvest,
          targetReinvest: targetReinvest,
          fromScheme: longName,
          toScheme: amcScheme,
          folioNo: folio,
          valueName: valueName,
          value: value,
          type: identifier,
        };
        setKeys((prevState) => [...prevState, key]);
        setAddedScheme((prevState) => [...prevState, newElement]);
        console.log("NEwss ElementSSSSSS=", newElement);
      }
    } else {
      if (key === schemeindex) {
        if (amount > value) {
          Alert.alert("Alert", "Amount should be less than value");
          return;
        }
        let keyIndex = keys.indexOf(key);
        let value;
        let valueName;
        if (amount === true) {
          valueName = "Amount";
          value = amountValue;
        } else {
          valueName = "Unit";
          value = units;
        }
        let newElement = {
          key: key,
          amcCode: amcCode,
          productAmcName: productAmcName,
          productCode: productCode,
          targetCode: targetCode,
          sourceReinvest: sourceReinvest,
          targetReinvest: targetReinvest,
          fromScheme: longName,
          toScheme: amcScheme,
          folioNo: folio,
          valueName: valueName,
          value: value,
          type: identifier,
        };
        setAddedScheme((prevState) => prevState[keyIndex] === newElement);
        console.log("New Element=", newElement);
      }
    }
  };

  const remove = (key) => {
    let filteredArray = addedScheme.filter((item) => item.key !== key);
    setAddedScheme(filteredArray);
    let filteredKeys = keys.filter((item) => item !== key);
    setKeys(filteredKeys);
  };

  const SwitchCheckout = () => {
    console.log("SwitchCheckOut");
    let filteredArray = addedScheme.filter((item) => item.type === "SWITCH");
    if (filteredArray.length >= 1) {
      setSwitchCheckoutDetails(filteredArray);
      props.navigation.navigate("SwitchCheckout");
    }
  };
  const SwitchExternalCheckout = () => {
    console.log("ExternalCheckOut");
    let filteredArray = addedScheme.filter((item) => item.type === "EXTERNAL");
    if (filteredArray.length >= 1) {
      setSwitchExternalCheckoutDetails(filteredArray);
      props.navigation.navigate("SwitchCheckout");
    }
  };

  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <TouchableOpacity
            onPress={() => props.navigation.navigate("dashboard")}
            style={{ marginTop: 20 }}
          >
            <AntDesign name={"arrowleft"} size={30} color={Colors.RED} />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Toprated")}
            style={{ marginTop: 20 }}
          >
            <AntDesign name={"shoppingcart"} size={30} color={Colors.RED} />
          </TouchableOpacity>
        }
        backgroundColor={Colors.LIGHT_WHITE}
        containerStyle={styles.header}
        centerComponent={
          <Image
            source={require("../../../assets/icon.png")}
            style={styles.logimg}
          />
        }
      />
      <ScrollView style={styles.containerScroll}>
        <View style={styles.switch_sec}>
          <Text style={styles.transaction}>Switch</Text>
          <View style={styles.tab_sec}>
            <TouchableOpacity
              onPress={() => toggleTab("SWITCH")}
              style={selectTab == "SWITCH" ? styles.tab1 : styles.tab2}
            >
              <Text
                style={selectTab == "SWITCH" ? styles.switch : styles.switchAct}
              >
                SWITCH
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => toggleTab("EXTERNAL")}
              style={selectTab == "EXTERNAL" ? styles.tab1 : styles.tab2}
            >
              <Text
                style={
                  selectTab == "EXTERNAL" ? styles.switch : styles.switchAct
                }
              >
                EXTERNAL SWITCH
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Axis Mutual Fund_sec... */}

        {selectTab === "SWITCH" &&
          switchRes !== null &&
          switchRes.map((item, index) => (
            <View style={styles.fund_sec}>
              <View style={styles.axis_sec}>
                <Text style={styles.axis}>
                  {item.nseSchemeDetails.productAmcName}
                </Text>
              </View>
              <View style={styles.growth_sec}>
                <Text style={styles.axis_treasury}>{item.scheme}</Text>
                <View style={styles.value_sec}>
                  <View style={styles.folio_sec}>
                    <Text style={styles.folio}>Folio</Text>
                    <Text style={styles.folio}>{item.folio_no}</Text>
                  </View>

                  <View style={styles.folio_sec}>
                    <Text style={styles.folio}>Units</Text>
                    <Text style={styles.folio}>
                      {parseFloat(item.units).toFixed(3)}
                    </Text>
                  </View>

                  <View style={styles.folio_sec}>
                    <Text style={styles.folio}>value</Text>
                    <Text style={styles.folio}>
                      {parseFloat(item.currentValue).toFixed(3)}
                    </Text>
                  </View>
                </View>
                <Text style={styles.folio}>Switch To</Text>

                <TouchableOpacity
                  onPress={() =>
                    selectScheme(item.amc_code, `${index}${item.scheme}`)
                  }
                >
                  <View style={styles.scheme_sec}>
                    <Text style={styles.select}>
                      {schemeindex !== null &&
                      schemeindex === `${index}${item.scheme}` &&
                      amcScheme !== null
                        ? amcScheme
                        : "Select Scheme"}
                    </Text>
                    <AntDesign name="right" size={15} />
                  </View>
                </TouchableOpacity>
                <View style={styles.units_sec}>
                  <CheckBox
                    containerStyle={{
                      backgroundColor: Colors.TRANSPARENT,
                      borderColor: Colors.TRANSPARENT,
                    }}
                    checkedColor={
                      keys !== [] &&
                      keys.indexOf(`${index}${item.scheme}`) === -1
                        ? Colors.RED
                        : Colors.GRAY_DEEP_1
                    }
                    checked={
                      toggle === `${index}${item.scheme}` && amount === false
                        ? false
                        : true
                    }
                    title="Amount"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    onPress={() =>
                      toggleRadio(`${index}${item.scheme}`, "AMOUNT")
                    }
                    disabled={
                      keys !== [] &&
                      keys.indexOf(`${index}${item.scheme}`) === -1
                        ? false
                        : true
                    }
                  />

                  <CheckBox
                    containerStyle={{
                      backgroundColor: Colors.TRANSPARENT,
                      borderColor: Colors.TRANSPARENT,
                    }}
                    checked={
                      toggle === `${index}${item.scheme}` && allUnits === true
                        ? true
                        : false
                    }
                    checkedColor={
                      keys !== [] &&
                      keys.indexOf(`${index}${item.scheme}`) === -1
                        ? Colors.RED
                        : Colors.GRAY_DEEP_1
                    }
                    title="All Units"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    onPress={() =>
                      toggleRadio(`${index}${item.scheme}`, "ALLUNITS")
                    }
                    disabled={
                      keys !== [] &&
                      keys.indexOf(`${index}${item.scheme}`) === -1
                        ? false
                        : true
                    }
                  />
                </View>
                <View style={styles.input_box}>
                  {toggle === `${index}${item.scheme}` && allUnits === true ? (
                    <TextInput
                      style={styles.inputsec}
                      placeholder={`${parseFloat(item.units).toFixed(3)}`}
                      editable={false}
                      selectTextOnFocus={false}
                    />
                  ) : (
                    <TextInput
                      style={styles.inputsec}
                      placeholder="Enter Amount"
                      onChangeText={setAmountValue}
                      editable={
                        keys !== [] &&
                        keys.indexOf(`${index}${item.scheme}`) === -1
                          ? true
                          : false
                      }
                    />
                  )}
                  {keys !== [] &&
                  keys.indexOf(`${index}${item.scheme}`) === -1 ? (
                    <Text />
                  ) : (
                    <TouchableOpacity
                      onPress={() => remove(`${index}${item.scheme}`)}
                    >
                      <Entypo name={"cross"} size={30} color={Colors.RED} />
                    </TouchableOpacity>
                  )}

                  {keys !== [] &&
                  keys.indexOf(`${index}${item.scheme}`) === -1 ? (
                    <TouchableOpacity
                      onPress={() =>
                        add(
                          `${index}${item.scheme}`,
                          item.scheme,
                          item.units,
                          item.folio_no,
                          item.currentValue,
                          "SWITCH",
                          item.nseSchemeDetails.productAmcName,
                          item.amc_code,
                          item.nseSchemeDetails.productCode,
                          item.nseSchemeDetails.reinvestTag
                        )
                      }
                      style={styles.botton_box}
                    >
                      <Text style={styles.get_otp}>ADD</Text>
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.disabledBox}>
                      <Text style={styles.disabled}>ADDED</Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          ))}
        {selectTab === "EXTERNAL" &&
          externalSwitch !== null &&
          externalSwitch.map((item, index) => (
            <View style={styles.fund_sec}>
              <View style={styles.axis_sec}>
                <Text style={styles.axis}>
                  {item.nseSchemeDetails.productAmcName}
                </Text>
              </View>
              <View style={styles.growth_sec}>
                <Text style={styles.axis_treasury}>{item.scheme}</Text>
                <View style={styles.value_sec}>
                  <View style={styles.folio_sec}>
                    <Text style={styles.folio}>Folio</Text>
                    <Text style={styles.folio}>{item.folio_no}</Text>
                  </View>

                  <View style={styles.folio_sec}>
                    <Text style={styles.folio}>Units</Text>
                    <Text style={styles.folio}>
                      {parseFloat(item.units).toFixed(3)}
                    </Text>
                  </View>

                  <View style={styles.folio_sec}>
                    <Text style={styles.folio}>value</Text>
                    <Text style={styles.folio}>
                      {parseFloat(item.currentValue).toFixed(3)}
                    </Text>
                  </View>
                </View>
                <Text style={styles.folio}>Switch To</Text>
                <TouchableOpacity
                  onPress={() =>
                    selectScheme(item.amc_code, `${index}${item.scheme}`)
                  }
                >
                  <View style={styles.scheme_sec}>
                    <Text style={styles.select}>
                      {schemeindex !== null &&
                      schemeindex === `${index}${item.scheme}` &&
                      amcScheme !== null
                        ? amcScheme
                        : "Select Scheme"}
                    </Text>
                    <AntDesign name="right" size={15} />
                  </View>
                </TouchableOpacity>
                <View style={styles.units_sec}>
                  <CheckBox
                    containerStyle={{
                      backgroundColor: Colors.TRANSPARENT,
                      borderColor: Colors.TRANSPARENT,
                    }}
                    checkedColor={
                      keys !== [] &&
                      keys.indexOf(`${index}${item.scheme}`) === -1
                        ? Colors.RED
                        : Colors.GRAY_DEEP_1
                    }
                    checked={
                      toggle === `${index}${item.scheme}` && amount === false
                        ? false
                        : true
                    }
                    title="Amount"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    onPress={() =>
                      toggleRadio(`${index}${item.scheme}`, "AMOUNT")
                    }
                    disabled={
                      keys !== [] &&
                      keys.indexOf(`${index}${item.scheme}`) === -1
                        ? false
                        : true
                    }
                  />
                  <CheckBox
                    containerStyle={{
                      backgroundColor: Colors.TRANSPARENT,
                      borderColor: Colors.TRANSPARENT,
                    }}
                    checked={
                      toggle === `${index}${item.scheme}` && allUnits === true
                        ? true
                        : false
                    }
                    checkedColor={
                      keys !== [] &&
                      keys.indexOf(`${index}${item.scheme}`) === -1
                        ? Colors.RED
                        : Colors.GRAY_DEEP_1
                    }
                    title="All Units"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    onPress={() =>
                      toggleRadio(`${index}${item.scheme}`, "ALLUNITS")
                    }
                    disabled={
                      keys !== [] &&
                      keys.indexOf(`${index}${item.scheme}`) === -1
                        ? false
                        : true
                    }
                  />
                </View>
                <View style={styles.input_box}>
                  {toggle === `${index}${item.scheme}` && allUnits === true ? (
                    <TextInput
                      style={styles.inputsec}
                      placeholder={`${parseFloat(item.units).toFixed(3)}`}
                      editable={false}
                      selectTextOnFocus={false}
                    />
                  ) : (
                    <TextInput
                      style={styles.inputsec}
                      placeholder="Enter Amount"
                      onChangeText={setAmountValue}
                      editable={
                        keys !== [] &&
                        keys.indexOf(`${index}${item.scheme}`) === -1
                          ? true
                          : false
                      }
                    />
                  )}
                  {keys !== [] &&
                  keys.indexOf(`${index}${item.scheme}`) === -1 ? (
                    <Text />
                  ) : (
                    <TouchableOpacity
                      onPress={() => remove(`${index}${item.scheme}`)}
                    >
                      <Entypo name={"cross"} size={30} color={Colors.RED} />
                    </TouchableOpacity>
                  )}
                  {keys !== [] &&
                  keys.indexOf(`${index}${item.scheme}`) === -1 ? (
                    <TouchableOpacity
                      onPress={() =>
                        add(
                          `${index}${item.scheme}`,
                          item.scheme,
                          item.units,
                          item.folio_no,
                          item.currentValue,
                          "EXTERNAL",
                          item.nseSchemeDetails.productAmcName
                        )
                      }
                      style={styles.botton_box}
                    >
                      <Text style={styles.get_otp}>ADD</Text>
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.disabledBox}>
                      <Text style={styles.disabled}>ADDED</Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          ))}
      </ScrollView>
      <TouchableOpacity
        onPress={() =>
          selectTab === "SWITCH" ? SwitchCheckout() : SwitchExternalCheckout()
        }
        style={styles.botton_box2}
      >
        <Text style={styles.proceed}>PROCEED</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D6DB",
  },

  logimg: {
    height: 65,
    width: 203,
    marginTop: 10,
  },
  switch_sec: {
    backgroundColor: Colors.RED,
  },
  transaction: {
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: Colors.WHITE,
  },
  tab_sec: {
    flexDirection: "row",
  },
  tab1: {
    width: "50%",
    alignItems: "center",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.WHITE,
  },
  tab2: {
    width: "50%",
    alignItems: "center",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.RED,
  },
  switch: {
    color: Colors.WHITE,
    fontSize: 13,
  },
  switchAct: {
    color: Colors.GREY_1,
    fontSize: 13,
  },
  fund_sec: {
    backgroundColor: Colors.WHITE,
    marginHorizontal: 15,
    marginTop: 10,
  },
  axis_sec: {
    backgroundColor: "#838793",
  },
  axis: {
    fontSize: 16,
    color: Colors.WHITE,
    marginLeft: 10,
    marginVertical: 10,
  },
  growth_sec: {
    padding: 10,
  },
  axis_treasury: {
    fontSize: 13,
    marginBottom: 10,
  },
  value_sec: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  // folio_sec: {
  //   width: "34%",
  //   fontSize: 15,
  //   color: Colors.DEEP_GRAY,
  // },
  folio: {
    fontSize: 15,
    color: Colors.DEEP_GRAY,
  },
  scheme_sec: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  select: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.DEEP_GRAY,
  },
  units_sec: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  amount: {
    fontSize: 12,
    color: Colors.DEEP_GRAY,
  },
  input_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  inputsec: {
    borderBottomWidth: 1,
    borderColor: Colors.DEEP_GRAY,
    width: "60%",
    fontSize: 16,
  },
  botton_box: {
    width: "30%",
    backgroundColor: Colors.RED,
    paddingVertical: 10,
  },
  get_otp: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  disabledBox: {
    width: "30%",
    backgroundColor: Colors.LIGHT_RED1,
    paddingVertical: 10,
  },
  disabled: {
    color: Colors.GRAY_LIGHT,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  botton_box2: {
    backgroundColor: Colors.RED,
    paddingVertical: 10,
    marginBottom: 20,
    marginHorizontal: 15,
  },
  proceed: {
    color: Colors.WHITE,
    fontSize: 16,
    textAlign: "center",
  },
});

const mapStateToProps = (state) => ({
  token: state.auth.token,
  users: state.auth.users,
  panNumber: state.auth.panNumber,
  isInn: state.registration.isInn,
  user: state.auth.user,
  switchRes: state.switch.switchRes,
  externalSwitch: state.switch.externalSwitch,
  schemeDetails: state.switch.schemeDetails,
  amcScheme: state.switch.amcScheme,
  targetCode: state.switch.targetCode,
  targetReinvest: state.switch.targetReinvest,
  userDetails: state.registration.userDetails,
  nseDetails: state.registration.nseDetails,
  fatcaDetails: state.registration.fatcaDetails,
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { AuthActions } = require("../../store/AuthRedux");
  const { SwitchActions } = require("../../store/SwitchRedux");
  return {
    ...stateProps,
    ...ownProps,
    logOut: () => {
      AuthActions.logOut(dispatch);
    },
    fetchTransactionDetails: (params, token) => {
      SwitchActions.fetchTransactionDetails(dispatch, params, token);
    },
    getSchemeList: (params, token) => {
      SwitchActions.getSchemeList(dispatch, params, token);
    },
    setAmcCode: (params) => {
      SwitchActions.setAmcCode(dispatch, params);
    },
    setSwitchCheckoutDetails: (params) => {
      SwitchActions.setSwitchCheckoutDetails(dispatch, params);
    },
    setSwitchExternalCheckoutDetails: (params) => {
      SwitchActions.setSwitchExternalCheckoutDetails(dispatch, params);
    },
  };
};
export default connect(
  mapStateToProps,
  undefined,
  mapDispatchToProps
)(SwitchScreen);
