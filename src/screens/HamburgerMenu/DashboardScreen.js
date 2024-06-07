/** @format */

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
  BackHandler,
  ScrollView,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import { Styles, Config, Colors, FormValidate } from "../../common";
import { Entypo, AntDesign } from "react-native-vector-icons";
import { Header, Overlay } from "react-native-elements";
import Cart from "../../components/Cart";
import moment from "moment";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const investmentData = [
  { title: "Long Term", image: require("../../../assets/term1.png") },
  { title: "Tax Saving Funds", image: require("../../../assets/term2.png") },
  { title: "Better Than", image: require("../../../assets/term3.png") },
  { title: "Tax Saving Funds", image: require("../../../assets/term4.png") },
  { title: "Better Than FD", image: require("../../../assets/term5.png") },
  { title: "Aggressive Funds", image: require("../../../assets/term6.png") },
];

function DashboardScreen(props) {
  const {
    steps,
    summaryRetrieve,
    goalSummary,
    goalSummaryRetrieve,
    token,
    users,
  } = props;
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    if (token) {
      goalSummary({ phoneNumber: users?.mobileNo }, token);
      goalSummaryRetrieve({ phoneNumber: users?.mobileNo }, token);
    }
  }, [token]);

  const backAction = () => {
    props.navigation.navigate("Home");
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);
  const [currentValue, setCurrentValue] = useState(0);
  const [InvestedValue, setInvestedValue] = useState(0);
  const [ProfitLoss, setProfitLoss] = useState(0);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("didFocus", () => {
      getData();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [summaryRetrieve]);

  const getData = () => {
    if (summaryRetrieve?.currentValue && summaryRetrieve?.totalInvestment) {
      setCurrentValue(parseFloat(summaryRetrieve?.currentValue.toFixed(2)));
      setInvestedValue(parseFloat(summaryRetrieve?.totalInvestment.toFixed(2)));
      setProfitLoss(
        (
          parseFloat(summaryRetrieve?.currentValue.toFixed(2)) -
          parseFloat(summaryRetrieve?.totalInvestment.toFixed(2))
        ).toFixed(2)
      );
    } else {
      setCurrentValue(0);
      setInvestedValue(0);
      setProfitLoss(0);
    }
  };

  useEffect(() => {
    getData();
  }, [summaryRetrieve]);

  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <TouchableOpacity
            onPress={() => props.navigation.toggleDrawer()}
            style={{ marginTop: 20 }}
          >
            <Entypo name={"menu"} size={30} color={Colors.RED} />
          </TouchableOpacity>
        }
        rightComponent={
          <Cart
            nav={() => {
              props.navigation.navigate("TopRatedList", {
                fromScreen: "dashboard",
              });
            }}
          />
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
        <View style={styles.education1}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.child5}>Summary</Text>
            <Text style={styles.value}>
              Value as of {moment(new Date()).format("DD-MM-YYYY")}
            </Text>
            <Text style={styles.rupees}>
              ₹ {currentValue}
              {/* {parseInt(summary?.summary?.currentValue)
                ? summary?.summary?.currentValue
                : "0.00"} */}
            </Text>
            <Text style={styles.value}>Current Value</Text>
          </View>

          <View style={styles.value_sec}>
            <View style={styles.Profit}>
              <Text style={styles.investment}>{`₹ ${
                InvestedValue
                // summary?.summary?.totalinvestment
                //   ? summary?.summary?.totalinvestment
                //   : 0
              }`}</Text>
              <Text style={styles.investment2}>Investment</Text>
            </View>
            <View style={styles.Profit}>
              <Text style={styles.investment}>
                ₹ {ProfitLoss}
                {/* {(
                  summary?.summary?.currentValue -
                  summary?.summary?.totalinvestment
                ).toFixed(2)} */}
              </Text>
              <Text style={styles.investment2}>Profit/Loss</Text>
            </View>
          </View>
        </View>
        {/* Holdings_sec....... */}

        <View style={styles.transaction_sec}>
          <Text style={styles.transaction}>Holdings</Text>
        </View>

        <View style={styles.holdings_sec}>
          <TouchableOpacity
            onPress={() => {
              if (steps > 5) {
                props.navigation.navigate("Goals");
              } else {
                Alert.alert(
                  "Not Allowed!",
                  "You have no holdings.Please complete the account opening process and upload the required documents, upon activation of your account, you can start investment. Do you want to continue?",
                  [
                    {
                      text: "Cancel",
                      onPress: () => null,
                      style: "cancel",
                    },
                    {
                      text: "YES",
                      onPress: () =>
                        props.navigation.navigate("RegisterDetails"),
                    },
                  ]
                );
              }
            }}
          >
            <View style={styles.Switch_sec}>
              <View style={styles.box}>
                <Image
                  source={require("../../../assets/mutual_7.png")}
                  style={styles.fundsmg}
                />
              </View>
              <Text style={styles.transaction}>Holdings</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("ExternalHolding")}
          >
            <View style={styles.Switch_sec}>
              <View style={styles.box}>
                <Image
                  source={require("../../../assets/mutual_8.png")}
                  style={styles.fundsmg}
                />
              </View>
              <Text style={styles.transaction}>External</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.transaction_sec}>
          <Text style={styles.transaction}>Transaction</Text>
        </View>

        {/* Transaction section */}
        <View style={styles.history_sec}>
          <TouchableOpacity
            onPress={() => {
              if (steps > 5) {
                props.navigation.navigate("Switch");
              } else {
                Alert.alert(
                  "Not Allowed!",
                  "You have no holdings to switch.Please complete the account opening process and upload the required documents, upon activation of your account, you can start investment. Do you want to continue?",
                  [
                    {
                      text: "Cancel",
                      onPress: () => null,
                      style: "cancel",
                    },
                    {
                      text: "YES",
                      onPress: () =>
                        props.navigation.navigate("RegisterDetails"),
                    },
                  ]
                );
              }
            }}
          >
            <View style={styles.Switch_sec}>
              <View style={styles.box}>
                <Image
                  source={require("../../../assets/mutual_10.png")}
                  style={styles.fundsmg}
                />
              </View>
              <Text style={styles.transaction}>Switch</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (steps > 5) {
                props.navigation.navigate("Redeem");
              } else {
                Alert.alert(
                  "Not Allowed!",
                  "You have no holdings to redeem.Please complete the account opening process and upload the required documents, upon activation of your account, you can start investment. Do you want to continue?",
                  [
                    {
                      text: "Cancel",
                      onPress: () => null,
                      style: "cancel",
                    },
                    {
                      text: "YES",
                      onPress: () =>
                        props.navigation.navigate("RegisterDetails"),
                    },
                  ]
                );
              }
            }}
          >
            <View style={styles.Switch_sec}>
              <View style={styles.box}>
                <Image
                  source={require("../../../assets/mutual_6.png")}
                  style={styles.fundsmg}
                />
              </View>
              <Text style={styles.transaction}>Redeem</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (steps > 5) {
                props.navigation.navigate("TransactionHistory");
              } else {
                Alert.alert(
                  "Not Allowed!",
                  "You have no holdings.Please complete the account opening process and upload the required documents, upon activation of your account, you can start investment. Do you want to continue?",
                  [
                    {
                      text: "Cancel",
                      onPress: () => null,
                      style: "cancel",
                    },
                    {
                      text: "YES",
                      onPress: () =>
                        props.navigation.navigate("RegisterDetails"),
                    },
                  ]
                );
              }
            }}
          >
            <View style={styles.Switch_sec}>
              <View style={styles.box}>
                <Image
                  source={require("../../../assets/mutual_9.png")}
                  style={styles.fundsmg}
                />
              </View>
              <Text style={styles.transaction}>Transaction {"\n"}History</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.history_sec2}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Owner")}>
            <View style={styles.Switch_sec}>
              <View style={styles.box}>
                <Image
                  source={require("../../../assets/choice.png")}
                  style={styles.fundsmg}
                />
              </View>
              <Text style={styles.transaction}>Own{"\n"} Choice</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  logimg: {
    height: 65,
    width: 203,
    marginTop: 10,
  },
  transaction_sec: {
    backgroundColor: "#C3CFD9",
    marginHorizontal: 5,
    borderRadius: 5,
  },
  transaction: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  history_sec: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
    marginHorizontal: 10,
  },
  history_sec2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 7,
    marginHorizontal: 10,
  },
  Switch_sec: {
    alignItems: "center",
  },
  box: {
    backgroundColor: Colors.WHITE,
    marginHorizontal: 10,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,
    elevation: 4,
  },
  fundsmg: {
    height: 32,
    width: 36,
  },
  holdings_sec: {
    flexDirection: "row",
    marginHorizontal: 70,

    marginVertical: 40,
    justifyContent: "space-between",
  },
  value_sec: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  child5: {
    fontSize: 25,
    fontWeight: "bold",
  },
  value: {
    fontSize: 12,
    fontWeight: "bold",
    // paddingVertical: 5,
    color: Colors.DEEP_GRAY,
  },
  rupees: {
    fontSize: 20,
    color: Colors.RED,
    fontWeight: "bold",
  },
  Profit: {
    alignItems: "center",
  },
  investment2: {
    fontSize: 12,
    fontWeight: "bold",
    color: Colors.DEEP_GRAY,
    marginVertical: 10,
  },
  education1: {
    // marginTop: -140,
    marginHorizontal: 20,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: Colors.GRAY_LIGHT,
    marginVertical: 10,
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    marginVertical: 20,
  },
});
const mapStateToProps = (state) => ({
  token: state.auth.token,
  users: state.auth.users,
  steps: state.home.steps,
  summaryRetrieve: state.goals.summaryRetrieve,
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { AuthActions } = require("../../store/AuthRedux");
  const { GoalsActions } = require("../../store/GoalsRedux");

  return {
    ...stateProps,
    ...ownProps,
    logOut: () => {
      AuthActions.logOut(dispatch);
    },
    goalSummary: (params, token) => {
      GoalsActions.goalSummary(dispatch, params, token);
    },
    goalSummaryRetrieve: (params, token) => {
      GoalsActions.goalSummaryRetrieve(dispatch, params, token);
    },
  };
};
export default connect(
  mapStateToProps,
  undefined,
  mapDispatchToProps
)(DashboardScreen);
