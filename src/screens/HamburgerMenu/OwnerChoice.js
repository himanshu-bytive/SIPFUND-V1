import React, { useState, useRef, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  TextInput,
  BackHandler,
  ToastAndroid,
} from "react-native";
import { connect } from "react-redux";
import { Styles, Config, Colors } from "../../common";
import { MySelectPicker } from "../../components";
import { AntDesign } from "react-native-vector-icons";
import { Image, Header, Overlay } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

function OwnerChoice(props) {
  const pageActive = useRef(false);
  const {
    token,
    isFetching,
    mainCategory,
    mainCat,
    subCatagorys,
    subCat,
    fetchScheme,
    schemeCat,
    schemeGo,
    choices,
    addItomToSip,
    addItemSucces,
    setAddItemSucces,
  } = props;
  const [catList, setCatList] = useState([]);
  const [subcatList, setSubCatList] = useState([]);
  const [schemeList, setSchemeList] = useState([]);
  const [dataAvailable, setDataAvailable] = useState(false);

  useEffect(() => {
    if (addItemSucces) {
      ToastAndroid.show("Cart Succesfully Created", ToastAndroid.LONG);
      setAddItemSucces();
    }
  }, [addItemSucces]);

  useEffect(() => {
    if (token) {
      mainCategory(token);
    }
  }, [token]);

  useEffect(() => {
    if (mainCat) {
      const stateList = mainCat.map((item) => ({
        value: item,
        label: String(item),
      }));
      setCatList(stateList);
    }
  }, [mainCat]);

  useEffect(() => {
    if (subCat) {
      const subcatList = subCat.map((item) => ({
        value: item,
        label: String(item),
      }));
      setSubCatList(subcatList);
    }
  }, [subCat]);

  useEffect(() => {
    if (schemeCat) {
      const schemeList = schemeCat.map((item) => ({
        value: item.productISIN,
        label: String(item.productName),
      }));
      setSchemeList(schemeList);
    }
  }, [schemeCat]);

  useEffect(() => {
    if (choices && pageActive.current) {
      pageActive.current = false;
      //props.navigation.navigate('TopRatedHome')
      setDataAvailable(true);
    }
  }, [choices]);

  const [state, setState] = useState({
    catagory: "",
    subcatagory: "",
    scheme: "",
  });

  const [errors, setErrors] = useState({
    catagory: null,
    subcatagory: null,
    scheme: null,
  });

  const catAction = async (catagory) => {
    if (catagory) {
      setState({ ...state, catagory });
      subCatagorys({ catagory }, token);
    }
  };

  const subcatAction = async (subcatagory) => {
    if (subcatagory) {
      setState({ ...state, subcatagory });
      fetchScheme({ subcatagory }, token);
    }
  };

  const schemeAction = async () => {
    if (state.scheme) {
      pageActive.current = true;
      schemeGo({ isin: state.scheme }, token);
    }
  };
  const monthsArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [visible, setVisible] = useState(false);
  const [selectTab, setSelectTab] = useState("SIP");
  const [states, setStates] = useState({
    amount: "5000",
    date: 5,
    productName: "",
    productCode: "",
    amcCode: "",
    amcName: "",
    imagePath: "",
  });

  const invest = (imagePath, amcCode, amcName, productCode, productName) => {
    setStates({
      ...states,
      productCode,
      productName,
      amcCode,
      amcName,
      imagePath,
    });
    console.log("imagePath", imagePath);
    console.log("amcCode", amcCode);
    console.log("amcName", amcName);
    console.log("productCode", productCode);
    console.log("productName", productName);
    setVisible(!visible);
  };
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const addToCartLumpSum = () => {
    if (+states.amount < 1000) {
      alert("Amount is less than minimum amount");
      return;
    }
    let params = {
      cartDetails: {
        trxn_nature: "N",
        amc: states.amcCode,
        amc_name: states.amcName,
        folio: "",
        product_code: states.productCode,
        product_name: states.productName,
        reinvest: "Z",
        amount: states.amount,
        sip_amount: states.amount,
        image_path: states.imagePath,
      },
    };
    console.log("params", params);
    console.log("token=", token);
    addItomToSip(params, token);
    setVisible(false);
  };
  const addToCartSip = () => {
    if (+states.amount < 1000) {
      alert("Amount is less than minimum amount");
      return;
    }
    let fromDate = sipFromDate();
    let endDate = sipEndDate();
    let params = {
      cartDetails: {
        trxn_nature: "S",
        sip_period_day: states.date,
        sip_from_date: fromDate,
        sip_freq: "OM",
        sip_end_date: endDate,
        sip_amount: states.amount,
        reinvest: "Z",
        product_name: states.productName,
        product_code: states.productCode,
        folio: "",
        amount: states.amount,
        amc_name: states.amcName,
        amc: states.amcCode,
        image_path: states.imagePath,
      },
    };
    console.log("params", params);
    console.log("token=", token);
    addItomToSip(params, token);
    setVisible(false);
  };
  const sipFromDate = () => {
    const date = new Date();

    return (
      date.getDate() +
      "-" +
      monthsArr[date.getMonth()] +
      "-" +
      date.getFullYear()
    );
  };
  const sipEndDate = () => {
    const date = new Date();

    return (
      date.getDate() +
      "-" +
      monthsArr[date.getMonth()] +
      "-" +
      (parseInt(date.getFullYear(), 10) + 30)
    );
  };
  const toggleTab = (value) => {
    setSelectTab(value);
  };

  const plusMinus = (type, value) => {
    if (type === "plus") {
      let date = parseInt(value) + 1;
      if (date > 30) {
        date = 30;
        alert("It cannot go above");
      }
      setStates({ ...states, date });
    } else {
      let date = parseInt(value) - 1;
      if (date < 1) {
        date = 1;
        alert("It cannot go below");
      }
      setStates({ ...states, date });
    }
  };

  const backAction = () => {
    props.navigation.navigate("dashboard");
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <TouchableOpacity
            onPress={() => props.navigation.navigate("dashboard")}
            style={{ marginTop: 20 }}
          >
            <AntDesign name={"arrowleft"} size={40} color={Colors.RED} />
          </TouchableOpacity>
        }
        containerStyle={Styles.header}
        backgroundColor={Colors.LIGHT_WHITE}
        centerComponent={
          <Image
            source={require("../../../assets/icon.png")}
            style={styles.logimg}
          />
        }
        rightComponent={
          <TouchableOpacity
            onPress={() => props.navigation.navigate("TopRatedList")}
            style={{ marginTop: 20, marginRight: 10 }}
          >
            <AntDesign name={"shoppingcart"} size={40} color={Colors.RED} />
          </TouchableOpacity>
        }
      />
      {isFetching && (
        <View style={Styles.loading}>
          <ActivityIndicator color={Colors.BLACK} size="large" />
        </View>
      )}
      <ScrollView style={styles.containerScroll}>
        <View style={styles.report_sec}>
          <View>
            <MySelectPicker
              values={catList}
              defultValue={state.catagory}
              error={errors.catagory}
              onChange={(catagory) => {
                setErrors({ ...errors, catagory: null });
                catAction(catagory);
              }}
            />
          </View>

          <View>
            <MySelectPicker
              values={subcatList}
              defultValue={state.subcatagory}
              error={errors.subcatagory}
              onChange={(subcatagory) => {
                setErrors({ ...errors, subcatagory: null });
                subcatAction(subcatagory);
              }}
            />
          </View>

          <View>
            <MySelectPicker
              values={schemeList}
              defultValue={state.scheme}
              error={errors.scheme}
              onChange={(scheme) => {
                setErrors({ ...errors, scheme: null });
                setState({ ...state, scheme });
              }}
            />
            <View style={{ margin: 15, flexDirection: "row-reverse" }}>
              <TouchableOpacity
                onPress={() => schemeAction()}
                style={styles.botton_box}
              >
                <Text style={styles.get_otp}>GO</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {dataAvailable ? (
          <View style={styles.axis_asset}>
            <View style={styles.company}>
              <View>
                <Image
                  source={{
                    uri: `https://sipfund.sfo2.digitaloceanspaces.com/product-AMC-images/${choices[0]?.nseProductDetail.productAMCImage}`,
                  }}
                  style={styles.axisimg}
                />
              </View>
              <View style={styles.axiswid}>
                <Text style={styles.axis}>
                  {choices[0]?.nseProductDetail?.productName}
                </Text>
                <Text style={styles.axis2}>{choices[0]?.text2}</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    invest(
                      `https://sipfund.sfo2.digitaloceanspaces.com/product-AMC-images/${choices[0]?.nseProductDetail.productAMCImage}`,
                      choices[0]?.nseProductDetail?.amcCode,
                      choices[0]?.nseProductDetail?.amcName,
                      choices[0]?.nseProductDetail?.productCode,
                      choices[0]?.nseProductDetail.productName
                    )
                  }
                  style={styles.botton_box}
                >
                  <Text style={styles.get_otp}>INVEST</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.value_sec}>
              <View style={styles.mininvestment}>
                <Text style={styles.min}>Min. Investment</Text>
                <Text style={styles.min}>
                  {choices[0]?.nseProductDetail.minimumSIPAmount > 1000
                    ? "₹" + 1000
                    : "₹" + choices[0]?.nseProductDetail.minimumSIPAmount}
                </Text>
              </View>
              <View style={styles.mininvestment}>
                <Text style={styles.min}>AUM</Text>
                <Text style={styles.min}>
                  {"₹" + choices[0]?.api["PSRP-TotalMarketValueNet"]}
                </Text>
              </View>
              <View style={styles.mininvestment}>
                <Text style={styles.min}>Returns</Text>
                <Text style={styles.min}>
                  {parseInt(
                    choices[0]?.nseProductDetail.productCurrentNavValue
                  ).toFixed(2) + "%"}
                </Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: Colors.GREY_1,
                marginTop: 10,
              }}
            ></View>
          </View>
        ) : (
          <View style={styles.category_sec}>
            <Text style={styles.category}>First select category.</Text>
            <Text style={styles.category}>Then select subcategory.</Text>
            <Text style={styles.category}>Then select scheme.</Text>
            <Text style={styles.category}>Press GO.</Text>
            <Text style={styles.category}>
              For changing scheme please press the scheme nameagain
            </Text>
          </View>
        )}
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
          <View style={styles.pop_top}>
            <View style={styles.click_sec}>
              <View
                style={
                  selectTab == "SIP"
                    ? styles.buttom_botton2
                    : styles.buttom_botton
                }
              >
                <TouchableOpacity onPress={() => toggleTab("SIP")}>
                  <Text
                    style={
                      selectTab == "SIP" ? styles.sip_text2 : styles.sip_text
                    }
                  >
                    SIP
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={
                  selectTab == "LUMPSUM"
                    ? styles.buttom_botton2
                    : styles.buttom_botton
                }
              >
                <TouchableOpacity onPress={() => toggleTab("LUMPSUM")}>
                  <Text
                    style={
                      selectTab == "LUMPSUM"
                        ? styles.sip_text2
                        : styles.sip_text
                    }
                  >
                    Lumpsum
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {selectTab == "SIP" && (
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 50,
                  }}
                >
                  <View style={styles.amount_sec}>
                    <Text style={styles.amount_tex}>Amount</Text>
                    <View style={styles.bordersec}>
                      <TextInput
                        value={states.amount}
                        keyboardType="numeric"
                        onChangeText={(amount) =>
                          setStates({ ...states, amount })
                        }
                        placeholder="5000"
                        style={styles.amount_tex2}
                      />
                    </View>
                  </View>
                  <View style={styles.amount_sec}>
                    <Text style={styles.amount_tex}>Date</Text>
                    <View style={[styles.bordersec, { flexDirection: "row" }]}>
                      <Text style={styles.new}>{states.date}</Text>
                      <View>
                        <TouchableOpacity
                          onPress={() => plusMinus("plus", states.date)}
                        >
                          <AntDesign name="caretup" size={15} color="#C0392B" />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => plusMinus("minus", states.date)}
                        >
                          <AntDesign
                            name="caretdown"
                            size={15}
                            color="#C0392B"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity
                    onPress={addToCartSip}
                    style={styles.buttom_botton2box}
                  >
                    <Text style={styles.sip_text2}>Add To Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {selectTab == "LUMPSUM" && (
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    paddingHorizontal: 50,
                  }}
                >
                  <View style={styles.amount_sec}>
                    <Text style={styles.amount_tex}>Amount</Text>
                    <View style={styles.bordersec}>
                      <TextInput
                        value={states.amount}
                        keyboardType="numeric"
                        onChangeText={(amount) =>
                          setStates({ ...states, amount })
                        }
                        placeholder="5000"
                        style={styles.amount_tex2}
                      />
                    </View>
                  </View>
                </View>

                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity
                    onPress={addToCartLumpSum}
                    style={styles.buttom_botton2box}
                  >
                    <Text style={styles.sip_text2}>Add To Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </Overlay>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  container_sec: {
    margin: 10,
  },
  containerScroll: {
    width: "100%",
  },
  logimg: {
    height: 65,
    width: 203,
    marginTop: 10,
  },

  investment_summary: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: Colors.DEEP_GRAY,
  },

  schemetype1: {
    color: Colors.DEEP_GRAY,
    marginVertical: 20,
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 10,
  },
  botton_box: {
    paddingHorizontal: 20,
    backgroundColor: Colors.RED,
    marginLeft: 5,
  },
  get_otp: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  category_sec: {
    alignItems: "center",
    marginTop: "30%",
  },
  category: {
    fontSize: 13,
    textAlign: "center",
  },
  returnsbox: { flexDirection: "row" },

  axis_asset: {
    marginTop: 60,
    marginHorizontal: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  company: {
    flexDirection: "row",
  },
  axis: {
    marginLeft: 10,
    fontSize: 15,
  },
  axiswid: { width: "68%" },
  axis2: {
    marginLeft: 10,
    fontSize: 12,
    color: Colors.DEEP_GRAY,
    paddingTop: 3,
  },
  axisimg: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  botton_box: {
    width: 80,
    backgroundColor: Colors.RED,
    height: 20,
  },
  get_otp: {
    color: Colors.WHITE,
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 4,
  },
  value_sec: {
    flexDirection: "row",
    marginLeft: 50,
  },
  mininvestment: {
    width: "33%",
    alignItems: "center",
  },
  min: {
    fontSize: 12,
  },
  footer_sec: {
    flexDirection: "row",
    marginHorizontal: 40,
    marginVertical: 30,
    justifyContent: "space-between",
  },
  rupees: {
    width: 40,
    height: 37,
  },
  rupees_sec: { alignItems: "center" },
  rupees_text: { fontSize: 12 },
  pop_top: { marginHorizontal: 30 },
  click_sec: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  buttom_botton: {
    width: "46%",
    borderWidth: 1,
    borderColor: Colors.RED,
    borderRadius: 5,
    marginHorizontal: 2,
    alignItems: "center",
  },
  buttom_botton2: {
    width: "45%",
    borderRadius: 5,
    backgroundColor: Colors.RED,
    marginHorizontal: 2,
    alignItems: "center",
  },
  sip_text: {
    fontSize: 20,
    color: Colors.RED,
    fontWeight: "bold",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  sip_text2: {
    fontSize: 20,
    color: Colors.WHITE,
    fontWeight: "bold",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  amount_sec: { alignItems: "center" },
  bordersec: {
    borderWidth: 1,
    borderColor: Colors.GRAY_DEEP_1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 3,
  },
  new: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
  },
  buttom_botton2box: {
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: Colors.RED,
    marginLeft: 2,
    alignItems: "center",
    marginVertical: 30,
    paddingHorizontal: 30,
  },
  amount_tex2: {
    color: Colors.DEEP_GRAY,
    width: 100,
    textAlign: "center",
    paddingVertical: 5,
    fontSize: 18,
  },
  amount_tex: { fontSize: 18 },
});

const mapStateToProps = (state) => ({
  token: state.auth.token,
  users: state.auth.users,
  isFetching: state.ownerChoice.isFetching,
  mainCat: state.ownerChoice.mainCat,
  subCat: state.ownerChoice.subCat,
  schemeCat: state.ownerChoice.schemeCat,
  choices: state.ownerChoice.choices,
  addItemSucces: state.cartActions.addItemSucces,
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { OwnerChoiceActions } = require("../../store/OwnerChoiceRedux");
  const { CartActions } = require("../../store/CartActionsRedux");
  return {
    ...stateProps,
    ...ownProps,
    mainCategory: (token) => {
      OwnerChoiceActions.mainCategory(dispatch, token);
    },
    subCatagorys: (params, token) => {
      OwnerChoiceActions.subCatagorys(dispatch, params, token);
    },
    fetchScheme: (params, token) => {
      OwnerChoiceActions.fetchScheme(dispatch, params, token);
    },
    schemeGo: (params, token) => {
      OwnerChoiceActions.schemeGo(dispatch, params, token);
    },
    addItomToSip: (params, token) => {
      CartActions.addItomToSip(dispatch, params, token);
    },
    setAddItemSucces: () => {
      CartActions.setAddItemSucces(dispatch);
    },
  };
};
export default connect(
  mapStateToProps,
  undefined,
  mapDispatchToProps
)(OwnerChoice);
