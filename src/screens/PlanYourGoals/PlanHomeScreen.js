import React, { useState, useRef, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  BackHandler,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { Styles, Config, Colors, FormValidate, Utility } from "../../common";
import { MySlider, GoalFundType, MyImage } from "../../components";
import {
  Ionicons,
  AntDesign,
  Entypo,
  FontAwesome5,
} from "react-native-vector-icons";
import { Image, Header } from "react-native-elements";
import Cart from "../../components/Cart";

function PlanHomeScreen(props) {
  const pageActive = useRef(false);
  const {
    token,
    goalDetail,
    mygolelist,
    isFetching,
    golesConfig,
    myGoles,
    fundDetails,
    singleDetails,
    setPlanYourGoalDetails,
    //toggleLoading,
    setChildName,
  } = props;

  const [additionalInfo, setAdditionalInfo] = useState({});
  const [amount, setAmount] = useState(1000);
  const [time, setTime] = useState(0);
  const [investment, setInvestment] = useState(100000);
  const [inflation, setInflation] = useState(2.49);
  const [returnRate, setReturnRate] = useState(5);

  const [inflationAdjusted, setInflationAdjusted] = useState(0);
  const [sipAmount, setSipAmount] = useState(0);
  const [requiredInvestment, setRequiredInvestment] = useState(0);
  const [lumpsumAmount, setLumpsumAmount] = useState(0);

  const [name, setName] = useState("");

  const [selectTab, setSelectTab] = useState("SIP");
  const toggleTab = (value) => {
    setSelectTab(value);
  };

  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const backAction = () => {
      props.navigation.state.params?.toggleLoading(false);
      props.navigation.navigate("Home");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    props.navigation.state.params?.toggleLoading(false);
  }, []);

  useEffect(() => {
    if (goalDetail.additionalInfo && !updated) {
      setAdditionalInfo(goalDetail.additionalInfo);
      if (goalDetail.additionalInfo.current_living_cost) {
        setAmount(goalDetail.additionalInfo.current_living_cost);
      } else if (goalDetail.additionalInfo.current_edu_cost) {
        setAmount(goalDetail.additionalInfo.current_edu_cost);
      } else {
        setAmount(goalDetail.additionalInfo.current_cost_amt_req_min);
      }
      if (time === 0) setTime(goalDetail.additionalInfo.time_years);
      setInvestment(goalDetail.additionalInfo.current_investment);
      setUpdated(true);
    }
  }, [goalDetail]);

  useEffect(() => {
    let requiredCorp;
    if (goalDetail?.goal === "Retirement") {
      const futureCost = amount * Math.pow(1 + inflation / 100, time);
      requiredCorp = futureCost * (100 / returnRate) * 12;
    } else {
      requiredCorp = amount * Math.pow(1 + inflation / 100, time);
    }
    if (requiredCorp <= 0 || !isFinite(requiredCorp)) {
      setInflationAdjusted(0);
    } else {
      setInflationAdjusted(requiredCorp.toFixed(2));
    }
    const constant2 =
      requiredCorp - investment * Math.pow(1 + returnRate / 100, time);
    const rate1 = returnRate / 1200;
    const sipAmount1 =
      constant2 * ((1 - (1 + rate1)) / (1 - Math.pow(1 + rate1, time * 12)));
    if (sipAmount1 <= 0 || !isFinite(sipAmount1)) {
      setSipAmount(0);
      setRequiredInvestment(0);
      setLumpsumAmount(0);
    } else {
      setSipAmount(sipAmount1.toFixed(2));
      setRequiredInvestment(sipAmount1 * time * 12);
      setLumpsumAmount(constant2 / Math.pow(1 + returnRate / 100, time));
    }
  }, [amount, time, investment, inflation, returnRate]);

  const startGoal = (value) => {
    //if (name === "" && goalDetail?.goal === "Child's Education") {
    //alert("Child's name is required!");
    //return;
    //}
    setChildName(name);
    if (selectTab === "SIP") {
      if (sipAmount < 1) {
        alert(`Can't proceed further with ₹${sipAmount}!`);
        return;
      }
      value = Number(sipAmount);
    } else {
      if (lumpsumAmount < 1) {
        alert(`Can't proceed further with ₹${lumpsumAmount}!`);
        return;
      }
      value = Number(lumpsumAmount);
    }
    setPlanYourGoalDetails(value);
    props.navigation.navigate("PlanList", {
      isLumpsum: selectTab === "LUMPSUM" ? true : false,
    });
  };

  const getYear = () => {
    let date = new Date();
    let year = date.getFullYear();

    return year + Number(time);
  };

  useEffect(() => {
    if (token) {
      singleDetails({ goal: goalDetail?.goal, years: Number(time) }, token);
    }
  }, [time]);

  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <TouchableOpacity
            onPress={() => {
              props.navigation.state.params?.toggleLoading(false);
              props.navigation.navigate("Home");
            }}
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
            style={Styles.headerImg}
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
      <ScrollView style={Styles.containerScroll}>
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

        {goalDetail?.goal === "Child's Education" && (
          <View
            style={[
              styles.vijay_sec,
              styles.vijay,
              { justifyContent: "space-between", alignItems: "center" },
            ]}
          >
            <Text style={styles.child2}>Name of child</Text>
            <TextInput
              style={{
                textAlign: "left",
                borderWidth: 0.5,
                borderRadius: 5,
                padding: 5,
                flex: 1,
                marginLeft: 10,
              }}
              value={name}
              placeholder="Name of the child"
              onChangeText={(val) => setName(val)}
              maxLength={30}
            />
          </View>
        )}
        <View style={[styles.vijay_sec, styles.vijay]}>
          <Text style={styles.child2}>{additionalInfo?.currentcostlabel}</Text>
          <Text style={styles.childtext}>₹{amount}</Text>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          {additionalInfo.current_cost_amt_req_max && (
            <MySlider
              value={Number(amount)}
              change={(amount) => setAmount(amount.toFixed(0))}
              min={Number(additionalInfo.current_investment_min)}
              max={Number(additionalInfo.current_investment_max)}
              steps={100}
            />
          )}
        </View>

        <View style={[styles.vijay_sec, styles.vijay]}>
          <Text style={styles.child2}>{additionalInfo?.timelabel}</Text>
          <Text style={styles.childtext}>{time}Y</Text>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          {additionalInfo.time_when_req_min && (
            <MySlider
              value={Number(time)}
              change={(time) => setTime(time.toFixed(0))}
              min={Number(additionalInfo.time_when_req_min)}
              max={Number(additionalInfo.time_when_req_max)}
              steps={1}
            />
          )}
        </View>

        <View style={[styles.vijay_sec, styles.vijay]}>
          <Text style={styles.child2}>{additionalInfo?.inflationlabel}</Text>
          <Text style={styles.childtext}>{inflation}%</Text>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <MySlider
            value={Number(inflation)}
            change={(amount) => setInflation(amount.toFixed(2))}
            min={1}
            max={20}
            steps={0.05}
          />
        </View>

        <View style={[styles.vijay_sec, styles.vijay]}>
          <Text style={styles.child2}>{additionalInfo?.returnratelabel}</Text>
          <Text style={styles.childtext}>{returnRate}%</Text>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <MySlider
            value={Number(returnRate)}
            change={(amount) => setReturnRate(amount.toFixed(2))}
            min={1}
            max={20}
            steps={0.5}
          />
        </View>

        <View style={[styles.vijay_sec, styles.vijay]}>
          <Text style={styles.child2}>
            {additionalInfo?.currentinvestlable}
          </Text>
          <Text style={styles.childtext}>₹{investment}</Text>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          {additionalInfo.current_investment_max && (
            <MySlider
              value={Number(investment)}
              change={(investment) => setInvestment(investment.toFixed(0))}
              min={Number(additionalInfo.current_investment_min)}
              max={Number(additionalInfo.current_investment_max)}
              steps={100}
            />
          )}
        </View>

        <Text style={styles.note}>
          Note : Assuming current inflation rate at {inflation}% and expected
          return rate on saving as {returnRate}%.
        </Text>

        <View style={styles.click_sec}>
          <TouchableOpacity
            onPress={() => toggleTab("SIP")}
            style={
              selectTab == "SIP" ? styles.buttom_botton2 : styles.buttom_botton
            }
          >
            <Text
              style={selectTab == "SIP" ? styles.sip_text2 : styles.sip_text}
            >
              SIP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => toggleTab("LUMPSUM")}
            style={
              selectTab == "LUMPSUM"
                ? styles.buttom_botton2
                : styles.buttom_botton
            }
          >
            <Text
              style={
                selectTab == "LUMPSUM" ? styles.sip_text2 : styles.sip_text
              }
            >
              Lumpsum
            </Text>
          </TouchableOpacity>
        </View>

        {/* image_sec end */}
        <View style={{ marginHorizontal: 20 }}>
          <View
            style={{ borderWidth: 2, borderColor: Colors.GRAY_LIGHT }}
          ></View>
        </View>

        {/* SIP */}
        {selectTab == "SIP" && (
          <View>
            <View style={styles.calender}>
              <View style={styles.date}>
                <FontAwesome5
                  name={"calendar-alt"}
                  size={30}
                  color={Colors.RED}
                />
                <Text style={styles.datered}>{getYear()}</Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  marginLeft: 10,
                  borderColor: Colors.GRAY_LIGHT,
                }}
              ></View>
              <Text style={styles.datered}>
                ₹{Number(requiredInvestment).toFixed(0)}
              </Text>
            </View>
            <Text style={styles.requird}>
              Required amount to achieve your GOAL
            </Text>
            <View
              style={{
                borderWidth: 1,
                marginHorizontal: 20,
                marginVertical: 10,
                borderColor: Colors.GRAY_LIGHT,
              }}
            ></View>
            <Text style={styles.rupeestext}>
              ₹{Number(sipAmount).toFixed(0)}
            </Text>
            <Text style={styles.requird}>Monthly SIP required</Text>
            <View style={styles.want}>
              <Text style={styles.want_text}>
                I want to know total monthly amount to be invested to achieve my
                goal
              </Text>
            </View>
          </View>
        )}

        {/* LUMPSUM */}
        {selectTab == "LUMPSUM" && (
          <View>
            <View style={styles.calender}>
              <View style={styles.date}>
                <FontAwesome5
                  name={"calendar-alt"}
                  size={30}
                  color={Colors.RED}
                />
                <Text style={styles.datered}>{getYear()}</Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  marginLeft: 10,
                  borderColor: Colors.GRAY_LIGHT,
                }}
              ></View>
              <Text style={styles.datered}>
                ₹{Number(requiredInvestment).toFixed(0)}
              </Text>
            </View>

            <Text style={styles.requird}>
              Required amount to achieve your GOAL
            </Text>
            <View
              style={{
                borderWidth: 1,
                marginHorizontal: 20,
                marginVertical: 10,
                borderColor: Colors.GRAY_LIGHT,
              }}
            ></View>
            <Text style={styles.rupeestext}>
              ₹{Number(lumpsumAmount).toFixed(0)}
            </Text>
            <Text style={styles.requird}>Lumpsum Amount</Text>
          </View>
        )}
      </ScrollView>
      <TouchableOpacity onPress={startGoal} style={styles.botton_box}>
        <Text style={styles.get_otp}>START GOAL</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderRadius: 10,
    borderColor: Colors.DEEP_GRAY,
    paddingVertical: 15,
  },
  get_otp: {
    color: Colors.WHITE,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  education: {
    flexDirection: "row",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: Colors.GRAY_LIGHT,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
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
    width: "70%",
    paddingTop: 20,
  },
  goals_2: {
    height: 117,
    width: 117,
  },
  child: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
    color: Colors.DEEP_GRAY,
  },
  child_text: {
    fontSize: 20,
    color: Colors.RED,
    paddingTop: 15,
    paddingLeft: 20,
    fontWeight: "bold",
  },
  planyour: {
    width: 414,
    height: 756,
  },

  // vijay_sec

  vijay_sec: {
    flexDirection: "row",
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: Colors.GREY_1,
    paddingVertical: 10,
  },
  child2: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.DEEP_GRAY,
    maxWidth: "75%",
  },
  childtext: {
    position: "absolute",
    right: 0,
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 10,
  },
  vijay: {
    borderBottomWidth: 0,
  },
  note: {
    marginHorizontal: 20,
    fontWeight: "bold",
    fontSize: 15,
    color: Colors.DEEP_GRAY,
    marginTop: 10,
  },

  click_sec: {
    flexDirection: "row",
    padding: 20,
  },
  buttom_botton: {
    width: "50%",
    borderWidth: 1,
    borderColor: Colors.RED,
    borderRadius: 5,
    marginHorizontal: 2,
    alignItems: "center",
  },
  buttom_botton2: {
    width: "50%",
    borderRadius: 5,
    backgroundColor: Colors.RED,
    marginHorizontal: 2,
    alignItems: "center",
  },
  sip_text: {
    fontSize: 20,
    color: Colors.RED,
    fontWeight: "bold",
    paddingVertical: 7,
  },
  sip_text2: {
    fontSize: 20,
    color: Colors.WHITE,
    fontWeight: "bold",
    paddingVertical: 7,
  },

  // calender

  calender: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  date: { flexDirection: "row" },
  datered: {
    color: Colors.RED,
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 5,
    fontWeight: "bold",
  },
  requird: {
    textAlign: "center",
    fontSize: 15,
    color: Colors.RED,
  },
  rupeestext: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.RED,
    paddingBottom: 20,
  },

  want: {
    backgroundColor: Colors.LIGHT_WHITE,
    marginVertical: 20,
  },
  want_text: {
    textAlign: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.DEEP_GRAY,
  },
  hybridimg: {
    width: 39,
    height: 43,
  },
  fund_sec_top: {
    backgroundColor: Colors.WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginHorizontal: 10,
    paddingBottom: 40,
  },
  circle: {
    height: 35,
    width: 35,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.DEEP_GRAY,
    paddingLeft: 2,
  },
});
const mapStateToProps = (state) => ({
  token: state.auth.token,
  users: state.auth.users,
  isFetching: state.goals.isFetching,
  goalDetail: state.goals.goalDetail,
  mygolelist: state.goals.mygolelist,
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
    golesConfig: (data) => {
      GoalsActions.golesConfig(dispatch, data);
    },
    myGoles: (data) => {
      GoalsActions.myGoles(dispatch, data);
    },
    fundDetails: (data) => {
      FundDetailActions.fundDetails(dispatch, data);
    },
    setPlanYourGoalDetails: (props) => {
      GoalsActions.setPlanYourGoalDetails(dispatch, props);
    },
    setChildName: (name) => {
      GoalsActions.setChildName(dispatch, name);
    },
    //toggleLoading: (value) => {
    //GoalsActions.toggleLoading(dispatch, value);
    //},
  };
};
export default connect(
  mapStateToProps,
  undefined,
  mapDispatchToProps
)(PlanHomeScreen);
