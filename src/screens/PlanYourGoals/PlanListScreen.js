import React, { useState, useRef, useEffect, useContext } from "react";
import {
  StyleSheet,
  Button,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import { Styles, Config, Colors, FormValidate } from "../../common";
import {
  Ionicons,
  AntDesign,
  Entypo,
  FontAwesome5,
} from "react-native-vector-icons";
import { Image, Header, CheckBox, colors } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { MyImage, GoalFundType } from "../../components";
import Cart from "../../components/Cart";

function PlanListScreen(props) {
  const pageActive = useRef(false);
  const {
    token,
    goalDetail,
    isFetching,
    mygolelist,
    myGoles,
    fundDetails,
    planYourGoalsDetails,
  } = props;

  const handleDelete = (productCode) => {
    let goals = mygolelist;
    for (let index in goals) {
      if (goals[index]?.schemeInfo.productCode === productCode) {
        delete goals[index];
        break;
      }
    }
    myGoles(goals);
    props.navigation.replace("PlanList");
  };

  const getSip = (value) => {
    if (!isNaN(value)) {
      return Number(value);
    }
    return 0;
  };

  const getHoldings = () => {
    return [];
  };

  const getParams = () => {
    return {
      userPhoneNumber: "",
      goal: {
        name: goalDetail?.goal,
        numberOfYears: goalDetail?.additionalInfo.time_years,
        totalAmount: "",
        yearOfComplition: "",
        holdings: getHoldings(),
        createdAt: "",
      },
    };
  };

  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
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
          <Cart
            nav={() => {
              props.navigation.navigate("TopRatedList");
            }}
          />
        }
      />
      {isFetching && (
        <View style={Styles.loading}>
          <ActivityIndicator color={Colors.BLACK} size="large" />
        </View>
      )}
      <ScrollView style={styles.containerScroll}>
        {/* SIP_sec */}
        <View style={styles.education}>
          <View style={styles.child_sec}>
            <MyImage
              width="117"
              height="117"
              svg={true}
              url={goalDetail?.goalImagePath}
            />
          </View>
          <View style={styles.education_sec}>
            <Text style={styles.child}>{goalDetail?.goal}</Text>
            <Text style={styles.child_text}>{goalDetail?.goalDescription}</Text>
          </View>
        </View>

        {/* My Selected Funds_sec */}

        <View style={styles.fund_sec}>
          <Text style={styles.month}>
            {props.navigation.state.params.isLumpsum === true
              ? "LumpSum Amount"
              : "SIP Per Month"}
          </Text>
        </View>

        {/* Monthly Investment_sec */}

        <View style={styles.fund_sec}>
          <Text style={styles.investment}>
            {props.navigation.state.params.isLumpsum === true
              ? ""
              : "Monthly Investment"}
          </Text>
          {/* {planYourGoalsDetails && ( */}
          <Text style={styles.price}>{`₹${planYourGoalsDetails.toFixed(
            0
          )}`}</Text>
          {/* )} */}
        </View>

        <GoalFundType
          data={mygolelist}
          myGoles={myGoles}
          selectedOption={
            props.navigation.state.params.isLumpsum === true ? "LUMPSUM" : "SIP"
          }
          onPress={(item) => {
            fundDetails(item);
            props.navigation.navigate("FundsDetails");
          }}
          handleDelete={handleDelete}
        />
      </ScrollView>
      <TouchableOpacity onPress={() => props.navigation.navigate("PlanSearch")}>
        <Text style={styles.add}>I would like to add more funds</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          let sum = 0;
          console.log("GOAL LIST=", mygolelist);
          for (let item in mygolelist) {
            sum = sum + getSip(mygolelist[item].schemeInfo.sip);
          }

          let goals = mygolelist.filter((item) => {
            return parseInt(item.schemeInfo.sip) > 0 ? true : false;
          });
          console.log("GOALS=", goals);

          if (goals) {
            for (let item in goals) {
              if (
                parseInt(goals[item].schemeInfo.sip) <
                parseInt(goals[item].schemeInfo.default_min_amount)
              ) {
                alert("Amount is less than minimum ammount");
                return;
              }
            }
          }

          /* Don't allow if sum of all investments exceed the amount */
          if (sum > Number(planYourGoalsDetails).toFixed(0)) {
            Alert.alert(
              "Amount exceeds total",
              "Total invested amount exceeds the amount specified. Proceed?",
              [
                {
                  text: "Don't",
                  onPress: () => console.log("Cancel Pressed"),
                },
                {
                  text: "Yes, please",
                  onPress: () => {
                    //let params = getParams(
                    //myInvestlist.filter((value) => !isNaN(value.schemes.sip)),
                    //sum
                    //);
                    //newInvestment(params, token);
                    props.navigation.navigate("PlanSubmit", {
                      sum: sum,
                      isLumpsum: props.navigation.state.params.isLumpsum,
                    });
                  },
                },
              ],
              { cancelable: false }
            );
          } else if (sum < Number(planYourGoalsDetails).toFixed(0)) {
            alert("Invested amount less than the total!");
          } else {
            //let params = getParams(
            //myInvestlist.filter((value) => !isNaN(value.schemes.sip)),
            //sum
            //);
            //newInvestment(params, token);
            props.navigation.navigate("PlanSubmit", {
              sum: sum,
              isLumpsum: props.navigation.state.params.isLumpsum,
            });
          }
        }}
        style={styles.botton_box}
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
    borderBottomWidth: 1,
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
  },
  fund_sec: {
    flexDirection: "row",
    marginHorizontal: 25,
    marginTop: 20,
  },
  fund_sec2: {
    flexDirection: "row",
    marginHorizontal: 25,
    marginTop: 20,
    marginBottom: 30,
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
    color: Colors.DEEP_GRAY,
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
  axis_asset: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: Colors.WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    padding: 10,
  },
  company: {
    flexDirection: "row",
  },
  management: {
    marginLeft: 10,
    width: "65%",
  },
  axis: {
    fontSize: 15,
  },
  moderately: {
    fontSize: 12,
    color: Colors.DEEP_GRAY,
  },
  axisimg: {
    height: 44,
    width: 39,
  },
  checkbox: {
    position: "absolute",
    right: -20,
    top: -15,
  },
  border_sec: {
    flexDirection: "row",
    marginTop: 10,
  },
  border: {
    width: "85%",
    marginRight: 7,
  },
  icons: {
    width: "10%",
    marginTop: -15,
  },
  selectfolio_sec: {
    flexDirection: "row",
  },
  select: {
    alignItems: "center",
    width: "31%",
  },
  no: {
    fontSize: 15,
    color: Colors.DEEP_GRAY,
  },
  new: {
    fontSize: 18,
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

  education: {
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: Colors.WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  education_sec: {
    width: "60%",
    marginTop: 10,
    paddingTop: 30,
  },
  goals_2: {
    height: 145,
    width: 145,
  },
  child: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 20,
    color: Colors.DEEP_GRAY,
  },
  child_text: {
    fontSize: 16,
    color: Colors.RED,
    paddingTop: 10,
    paddingLeft: 20,
    fontWeight: "bold",
  },
  planyour: {
    width: 414,
    height: 756,
  },
  add: {
    marginVertical: 20,
    textAlign: "center",
    color: Colors.RED,
    fontSize: 18,
  },
});
const mapStateToProps = (state) => ({
  token: state.auth.token,
  users: state.auth.users,
  isFetching: state.goals.isFetching,
  goalDetail: state.goals.goalDetail,
  mygolelist: state.goals.mygolelist,
  planYourGoalsDetails: state.goals.planYourGoalsDetails,
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { GoalsActions } = require("../../store/GoalsRedux");
  const { FundDetailActions } = require("../../store/FundDetailRedux");
  return {
    ...stateProps,
    ...ownProps,
    singleDetails: (params, token) => {
      GoalsActions.singleDetails(dispatch, params, token);
    },
    myGoles: (data) => {
      GoalsActions.myGoles(dispatch, data);
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
)(PlanListScreen);
