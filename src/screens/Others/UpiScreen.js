import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import { Styles, Config, Colors, FormValidate } from "../../common";
import { AntDesign, Entypo } from "react-native-vector-icons";
import { Image, Header, CheckBox } from "react-native-elements";
import WebView from "react-native-webview";

function UpiScreen(props) {
  const {
    token,
    profile,
    user,
    checkout,
    umrn,
    getUMRN,
    isFetching,
    error,
    webUrl,
    resetWebUrl,
    deletCart,
    getCartDetails,
  } = props;

  const [clicked, setClicked] = useState(false);
  //const [webUrl, setWebUrl] = useState("");
  const [webViewActive, setWebViewActive] = useState(false);

  //const loadUrl = (url) => {
  //setWebViewActive(true);
  //setWebUrl(url);
  //};

  useEffect(() => {
    if (webUrl) {
      setWebViewActive(true);
    }
  }, [webUrl]);

  useEffect(() => {
    if (isFetching === false && clicked && error) {
      setWebViewActive(false);
      //setWebUrl("");
      resetWebUrl();
      props.navigation.navigate("Profile");
      props.navigation.navigate("Home");
    }
  }, [isFetching, error]);

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
  const fromDate = () => {
    const date = new Date();

    return (
      ("00" + date.getDate()).match(/\d{2}$/) +
      "-" +
      monthsArr[date.getMonth()] +
      "-" +
      date.getFullYear()
    );
  };
  const endDate = () => {
    const date = new Date();

    return (
      ("00" + date.getDate()).match(/\d{2}$/) +
      "-" +
      monthsArr[date.getMonth()] +
      "-" +
      (parseInt(date.getFullYear(), 10) + 30)
    );
  };

  const sipFromDate = (default_date) => {
    const date = new Date();

    let month = date.getMonth();
    let year = date.getFullYear();

    if (month === 11) {
      month = 0;
      year = year + 1;
    }

    month = month + 2;

    //let day = default_date;
    //if (month === 2) {
    //day = parseInt(day, 10) + 2;
    //if (default_date >= 28) {
    //month = 2;
    //day = 2;
    //}
    //}

    let day = default_date;
    if (!default_date || default_date == 0) day = 1;

    return ("00" + day).match(/\d{2}$/) + "-" + monthsArr[month] + "-" + year;
  };
  const sipEndDate = (default_date) => {
    const date = new Date();

    let month = date.getMonth();
    let year = date.getFullYear();

    if (month === 11) {
      month = 0;
      year = year + 1;
    }

    month = month + 2;

    //let day = default_date;
    //if (month === 2) {
    //day = parseInt(day, 10) + 2;
    //if (default_date >= 28) {
    //month = 2;
    //day = 2;
    //}
    //}

    let day = default_date;
    if (!default_date || default_date == 0) day = 1;

    return (
      ("00" + day).match(/\d{2}$/) +
      "-" +
      monthsArr[month] +
      "-" +
      (parseInt(year, 10) + 30)
    );
  };

  const getPeriodDay = (day, month) => {
    month = month + 2;
    if (month === 2) {
      day = parseInt(day, 10) + 2;
      if (day >= 28) {
        month = 2;
        day = 2;
      }
    }
    return day;
  };

  const getTransactions = (data) => {
    let formatted = [];
    let format = {};
    const d = new Date();
    for (let item in data) {
      let i = data[item];
      delete i.image_path;
      format = {
        ...i,
        folio: "",
        sip_amount: data[item].amount,
      };
      //if (props.navigation.state.params.fromCart) {
      //format = {
      //amc: data[item].amc,
      //amount: data[item].sip_amount,
      //folio: "",
      //product_code: data[item].product_code,
      //reinvest: "Z",
      //sip_amount: data[item].amount,
      //sip_freq: "OM",
      //sip_from_date: data[item]?.sip_from_date
      //? data[item]?.sip_from_date
      //: sipFromDate(
      //data[item]?.sipDates
      //? data[item]?.sipDates[0]
      //: data[item]?.default_date
      //),
      //sip_end_date: data[item]?.sip_end_date
      //? data[item]?.sip_end_date
      //: sipEndDate(
      //data[item]?.sipDates
      //? data[item]?.sipDates[0]
      //: data[item]?.default_date
      //),
      ////sip_period_day: getPeriodDay(d.getDate(), d.getMonth()),
      //sip_period_day: data[item]?.sip_period_day
      //? data[item]?.sip_period_day
      //: data[item].sipDates[0],
      //};
      //} else if (props.navigation.state.params.fromPlanGoals) {
      //format = {
      //amc: data[item].schemeInfo.amc_code,
      //amount: data[item].schemeInfo.sip,
      //folio: "",
      //product_code: data[item].schemeInfo.productCode,
      //reinvest: "Z",
      //sip_amount: data[item].schemeInfo.sip
      //? data[item].schemeInfo?.sip
      //: props.navigation.state.params?.showModified
      //? data[item].schemeInfo?.allocationAmountModifiled
      //? data[item].schemeInfo?.allocationAmountModifiled.toFixed(0)
      //: 0
      //: data[item].schemeInfo?.allocationAmount
      //? data[item].schemeInfo?.allocationAmount.toFixed(0)
      //: 0,
      //sip_end_date: sipEndDate(data[item].schemeInfo.sipDates[0]),
      //sip_freq: "OM",
      //sip_from_date: sipFromDate(data[item].schemeInfo.sipDates[0]),
      ////sip_period_day: getPeriodDay(d.getDate(), d.getMonth()),
      //sip_period_day:
      //data[item].schemeInfo.sipDates[0] == 0
      //? 1
      //: data[item].schemeInfo.sipDates[0],
      //};
      //} else {
      //format = {
      //amc: data[item].amc_code,
      //amount: data[item].sip,
      //folio: "",
      //product_code: data[item].productCode,
      //reinvest: "Z",
      //sip_amount: data[item].sip,
      //sip_end_date: sipEndDate(data[item].sipDates[0]),
      //sip_freq: "OM",
      //sip_from_date: sipFromDate(data[item].sipDates[0]),
      ////sip_period_day: getPeriodDay(d.getDate(), d.getMonth()),
      //sip_period_day:
      //data[item].sipDates[0] == 0 ? 1 : data[item].sipDates[0],
      //};
      //}
      formatted.push(format);
    }
    return formatted;
  };

  const getPaymentMode = (upi, mandate) => {
    if (upi) {
      return "UPI";
    } else if (mandate) {
      return "M";
    } else {
      return "OL";
    }
  };

  const getParams = (upi, mandate) => {
    return {
      service_request: {
        ac_no: profile?.AC_NO,
        ach_amt: props.navigation.state.params?.sum,
        ach_enddate: endDate(),
        ach_fromdate: fromDate(),
        advisory_charge: " ",
        bank: profile?.BANK_NAME,
        billdesk_bank: profile?.BANK_NAME,
        cheque_deposit_mode: " ",
        Client_callback_url: "www.sipfund.com",
        dd_charge: " ",
        debit_amount_type: "M",
        demat_user: "N",
        dp_id: " ",
        euin: " ",
        euin_opted: "N",
        ifsc_code: profile?.IFSC_CODE,
        iin: user?.IIN,
        instrm_ac_no: " ",
        instrm_amount: props.navigation.state.params?.sum,
        instrm_bank: profile?.BANK_NAME,
        instrm_branch: " ",
        instrm_charges: " ",
        instrm_date: " ",
        instrm_no: " ",
        micr: " ",
        neft_ifsc: " ",
        no_of_nominee: "0",
        nominee1_addr1: " ",
        nominee1_addr2: " ",
        nominee1_addr3: " ",
        nominee1_city: " ",
        nominee1_dob: " ",
        nominee1_guard_name: " ",
        nominee1_guard_pan: " ",
        nominee1_name: " ",
        nominee1_percent: " ",
        nominee1_pincode: " ",
        nominee1_relation: " ",
        nominee1_state: " ",
        nominee2_dob: " ",
        nominee2_guard_name: " ",
        nominee2_guard_pan: " ",
        nominee2_name: " ",
        nominee2_percent: " ",
        nominee2_relation: " ",
        nominee3_dob: " ",
        nominee3_guard_name: " ",
        nominee3_guard_pan: " ",
        nominee3_Name: " ",
        nominee3_percent: " ",
        nominee3_relation: " ",
        nominee_flag: "C",
        payment_mode: getPaymentMode(upi, mandate),
        poa: "N",
        remarks: " ",
        Return_paymnt_flag: "Y",
        rtgs_code: " ",
        sip_ac_type: profile?.AC_TYPE,
        sip_acc_no: profile?.AC_NO,
        sip_bank: profile?.BANK_NAME,
        sip_branch: profile?.BRANCH_NAME,
        sip_ifsc_code: profile?.IFSC_CODE,
        sip_micr_no: " ",
        sub_broker_arn_code: " ",
        sub_broker_code: " ",
        sub_trxn_type: props.navigation.state.params?.isLumpsum ? "N" : "S",
        trans_count: props.navigation.state.params?.cart.length,
        trxn_acceptance: upi || mandate ? "OL" : "ALL",
        trxn_execution: " ",
        umrn: mandate ? umrn.UMRN_NO : " ",
        until_cancelled: "Y",
        utr: "",
        groupId: props.navigation.state.params?.groupId,
        groupType: props.navigation.state.params?.groupType,
        groupName: props.navigation.state.params?.groupName,
      },
      childtrans: getTransactions(props.navigation.state?.params?.cart),
      //childtrans: props.navigation.state?.params?.cart,
    };
  };

  const handleWebviewStateChange = (webViewState) => {
    if (webViewState.url && webViewState.url.includes("play.google.com")) {
      resetWebUrl();
      setWebViewActive(false);
      deletCart(
        props.navigation.state?.params?.cart.map((item) => item._id),
        token
      );
      getCartDetails(token);
      props.navigation.navigate("Profile");
      props.navigation.navigate("Home");
    }
  };

  return (
    <>
      {isFetching && (
        <View
          style={{
            backgroundColor: "#fffe",
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
            position: "absolute",
            zIndex: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size={60} color="black" />
        </View>
      )}
      <View style={styles.container}>
        <Header
          leftComponent={
            <TouchableOpacity
              onPress={() => props.navigation.toggleDrawer()}
              style={{ marginTop: 25 }}
            >
              <Entypo name={"menu"} size={30} color={Colors.RED} />
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
        <ScrollView style={Styles.containerScroll}>
          <View style={styles.container}>
            <View>
              <Text style={styles.payusing}>Pay Using</Text>
            </View>
            <View style={styles.mainbox}>
              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => {
                    let params = getParams(true, false);
                    setClicked(true);
                    //console.log(JSON.stringify(params, null, 2));
                    checkout(params, token);
                  }}
                  style={[styles.botton_box, styles.botton_box_none]}
                >
                  <Image
                    source={require("../../../assets/Upi_img.png")}
                    style={styles.upiImage}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => {
                    let params = getParams(false, false);
                    setClicked(true);
                    checkout(params, token);
                  }}
                  style={styles.botton_box}
                >
                  <Text style={styles.get_otp}>Internet Banking</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => {
                    let params = getParams(false, true);
                    setClicked(true);
                    checkout(params, token, true);
                  }}
                  style={styles.botton_box}
                >
                  <Text style={styles.get_otp}>e-Mandate</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        {webViewActive && (
          <View
            style={{
              position: "absolute",
              backgroundColor: "white",
              zIndex: 100,
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").height,
            }}
          >
            <Header
              leftComponent={
                <TouchableOpacity
                  onPress={() => {
                    setWebViewActive(false);
                    //setWebUrl("");
                    resetWebUrl();
                    props.navigation.navigate("Profile");
                    props.navigation.navigate("Home");
                  }}
                  style={{ marginTop: 20 }}
                >
                  <AntDesign name={"arrowleft"} size={30} color={Colors.RED} />
                </TouchableOpacity>
              }
              rightComponent={
                <View
                  style={{
                    marginTop: 25,
                    borderWidth: 1,
                    backgroundColor: Colors.WHITE,
                    borderColor: Colors.RED,
                    padding: 5,
                    borderRadius: 7,
                  }}
                >
                  <Text style={styles.textkn}>
                    {user?.name
                      ? `${user?.name[0]}${user?.name.split(" ").pop()[0]}`
                      : ""}
                  </Text>
                </View>
              }
              backgroundColor={Colors.LIGHT_WHITE}
              containerStyle={Styles.header}
              centerComponent={
                <Image
                  source={require("../../../assets/icon.png")}
                  style={styles.logimg}
                />
              }
            />
            <WebView
              source={{ uri: webUrl }}
              onNavigationStateChange={handleWebviewStateChange}
            />
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    borderBottomColor: Colors.BLACK,
    borderBottomWidth: 1,
  },
  logimg: {
    height: 65,
    width: 203,
    marginTop: 10,
  },
  upiImage: {
    height: 43,
    width: 122,
  },
  textkn: {
    fontSize: 22,
    color: Colors.RED,
    fontWeight: "bold",
  },
  payusing: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 20,
  },
  mainbox: {
    margin: 5,
    width: "80%",
    backgroundColor: "#f9f9f9",
    borderRadius: 20,
    alignItems: "center",
  },
  button: {
    width: "90%",
    borderWidth: 1,
    borderColor: Colors.RED,
    borderStyle: "solid",
    marginVertical: 20,
  },
  botton_box: {
    alignItems: "center",
    //marginVertical: 10,
    paddingVertical: 10,
    height: 60,
    //marginTop: 20,
  },
  botton_box_none: {
    //marginTop: 5,
    //marginBottom: 5,
  },
  get_otp: {
    color: Colors.BLACK,
    fontSize: 20,
    fontWeight: "bold",
    textAlignVertical: "center",
    flex: 1,
  },
});
const mapStateToProps = (state) => ({
  token: state.auth.token,
  users: state.auth.users,
  profile: state.auth.profile,
  user: state.auth.user,
  umrn: state.checkout.umrn,
  isFetching: state.checkout.fetching,
  error: state.checkout.error,
  webUrl: state.checkout.webUrl,
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { AuthActions } = require("../../store/AuthRedux");
  const { CheckoutActions } = require("../../store/CheckoutRedux");
  const { CartActions } = require("../../store/CartActionsRedux");
  return {
    ...stateProps,
    ...ownProps,
    logOut: () => {
      AuthActions.logOut(dispatch);
    },
    getProfile: (params, token) => {
      AuthActions.getProfile(dispatch, params, token);
    },
    checkout: (params, token, mandate) => {
      CheckoutActions.checkoutButton(dispatch, params, token, mandate);
    },
    getUMRN: (iin, token) => {
      CheckoutActions.getUMRN(dispatch, iin, token);
    },
    resetWebUrl: () => {
      CheckoutActions.resetWebUrl(dispatch);
    },
    deletCart: (items, token) => {
      CartActions.deletCart(dispatch, items, token);
    },
    getCartDetails: (token) => {
      CartActions.cartDetails(dispatch, token);
    },
  };
};
export default connect(
  mapStateToProps,
  undefined,
  mapDispatchToProps
)(UpiScreen);
