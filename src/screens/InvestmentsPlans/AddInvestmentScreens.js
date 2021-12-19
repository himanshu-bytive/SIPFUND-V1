import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Header, Image } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "react-native-vector-icons";
import { connect } from "react-redux";
import { Colors, Styles } from "../../common";
import { MyImage } from "../../components";

function AddInvestmentScreens(props) {
  const investInput = useRef(null);
  const pageActive = useRef(false);
  const { investment, isFetching, investmentConfig } = props;
  const [invest, setInvest] = useState("");
  const [investError, setInvestError] = useState(null);
  const [selectTab, setSelectTab] = useState("SIP");
  const toggleTab = (value) => {
    investInput.current.focus();
    setSelectTab(value);
  };

  useEffect(() => {
    investInput.current.focus();
  }, []);

  const checkFormula = (value) => {
    // console.log(value)
  };

  const calculateReturnAmount = (
    amount,
    noOfYears,
    expectedReturnPercentage
  ) => {
    let maturityAmount = 0;

    if (selectTab === "SIP") {
      const monthlyReturnPercentage = expectedReturnPercentage / 12;
      maturityAmount =
        (amount *
          (Math.pow(1 + monthlyReturnPercentage / 100, noOfYears * 12) - 1)) /
        (monthlyReturnPercentage / 100);
    } else if (selectTab === "One Time") {
      maturityAmount =
        amount * Math.pow(1 + expectedReturnPercentage / 100, noOfYears);
    }

    const formattedMaturityAmount = currencyFormat(maturityAmount.toFixed(2));

    return formattedMaturityAmount;
  };

  function currencyFormat(x) {
    if (x < 10000) {
      x = x.toString();
      var afterPoint = "";
      if (x.indexOf(".") > 0)
        afterPoint = x.substring(x.indexOf("."), x.length);
      x = Math.floor(x);
      x = x.toString();
      var lastThree = x.substring(x.length - 3);
      var otherNumbers = x.substring(0, x.length - 3);
      if (otherNumbers != "") lastThree = "," + lastThree;
      var res =
        otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
        lastThree +
        afterPoint;
    } else {
      res = `${(x / 100000).toFixed(2)}L`;
    }
    return res;
  }

  const submitForm = () => {
    if (invest) {
      let params = {
        invest: invest,
        selectedOption: selectTab,
      };
      investmentConfig(params);
      props.navigation.navigate("InvestmentList");
    } else {
      setInvestError("Add Investment");
      alert("Enter Investment Amount");
    }
  };

  const inputAmount = (text) => {
    let newText = "";
    let numbers = "0123456789";

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        // your call back function
        alert("please enter numbers only");
      }
    }
    setInvest(newText);
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
          <View style={{ marginTop: 20, marginRight: 10 }}>
            <AntDesign name={"shoppingcart"} size={40} color={Colors.RED} />
          </View>
        }
      />
      {isFetching && (
        <View style={Styles.loading}>
          <ActivityIndicator color={Colors.BLACK} size="large" />
        </View>
      )}
      <ScrollView>
        <View style={styles.education}>
          <View style={styles.education_sec}>
            <Text style={styles.child}>{investment.investmentPlan}</Text>
            <Text style={styles.child_text}>What amount I can invest?</Text>
          </View>
          <View style={styles.child_sec}>
            <MyImage
              width="145"
              height="145"
              svg={true}
              url={investment.planImagePath}
            />
          </View>
        </View>
        {/* button */}

        <View style={styles.click_sec}>
          <View
            style={
              selectTab == "SIP" ? styles.buttom_botton2 : styles.buttom_botton
            }
          >
            <TouchableOpacity onPress={() => toggleTab("SIP")}>
              <Text
                style={selectTab == "SIP" ? styles.sip_text2 : styles.sip_text}
              >
                SIP
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={
              selectTab == "One Time"
                ? styles.buttom_botton2
                : styles.buttom_botton
            }
          >
            <TouchableOpacity onPress={() => toggleTab("One Time")}>
              <Text
                style={
                  selectTab == "One Time" ? styles.sip_text2 : styles.sip_text
                }
              >
                Lump Sum
              </Text>
            </TouchableOpacity>
          </View>
          {/* <View style={(selectTab == 'STP') ? styles.buttom_botton2 : styles.buttom_botton}>
                        <TouchableOpacity onPress={() => toggleTab('STP')}>
                            <Text style={(selectTab == 'STP') ? styles.sip_text2 : styles.sip_text}>STP</Text>
                        </TouchableOpacity>
                    </View> */}
        </View>
        {/* button  end new*/}

        <Text style={styles.childtext}>Investment</Text>
        <View
          style={[
            styles.investcost_sec,
            { borderColor: investError ? Colors.RED : Colors.GREY_1 },
          ]}
        >
          <TextInput
            ref={investInput}
            style={styles.cost}
            keyboardType="numeric"
            placeholder={"RS "}
            onChangeText={(value) => {
              setInvestError(null);
              inputAmount(value);
              checkFormula(value);
            }}
            value={invest}
          />
        </View>
        {/* <Text style={styles.number}>Sixteen thousand</Text> */}
        <View style={styles.yearly_section}>
          <View>
            <Text style={styles.cost_top}>
              ₹ {calculateReturnAmount(invest, 5, 12)}
            </Text>
            <Text style={styles.cost_botton}>In 5 Years</Text>
          </View>
          <View>
            <Text style={styles.cost_top}>
              ₹ {calculateReturnAmount(invest, 7, 12)}
            </Text>
            <Text style={styles.cost_botton}>In 7 Years</Text>
          </View>
          <View>
            <Text style={styles.cost_top}>
              ₹ {calculateReturnAmount(invest, 10, 12)}
            </Text>
            <Text style={styles.cost_botton}>In 10 Years</Text>
          </View>
        </View>
        <Text style={styles.return}>Note : Assuming returns at 12%</Text>
        {/* Axis Asset Management Company Ltd */}
      </ScrollView>

      <TouchableOpacity onPress={() => submitForm()} style={styles.botton_box}>
        <Text style={styles.get_otp}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logimg: {
    height: 65,
    width: 203,
    marginTop: 10,
  },
  education: {
    flexDirection: "row",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  education_sec: {
    width: "70%",
    paddingTop: 10,
  },
  goals_2: {
    height: 118,
    width: 112,
  },
  child: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.RED,
  },
  child_text: {
    fontSize: 18,
    color: Colors.DEEP_GRAY,
    paddingVertical: 10,
    fontWeight: "bold",
    marginTop: 30,
  },
  botton_box: {
    backgroundColor: Colors.RED,
    marginHorizontal: 30,
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.DEEP_GRAY,
    paddingVertical: 10,
  },
  get_otp: {
    color: Colors.WHITE,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  //  botton
  click_sec: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },

  buttom_botton: {
    width: "48%",
    borderWidth: 1,
    borderColor: Colors.DEEP_GRAY,
    borderRadius: 8,
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: Colors.LIGHT_GRAY,
  },
  buttom_botton2: {
    width: "48%",
    borderRadius: 8,
    backgroundColor: Colors.RED,
    paddingVertical: 20,
    alignItems: "center",
  },

  sip_text: {
    fontSize: 20,
    color: Colors.DEEP_GRAY,
    fontWeight: "bold",
  },
  sip_text2: {
    fontSize: 20,
    color: Colors.WHITE,
    fontWeight: "bold",
  },
  childtext: {
    fontSize: 20,
    color: Colors.RED,
    paddingVertical: 10,
    fontWeight: "bold",
    marginLeft: 20,
  },
  investcost_sec: {
    marginHorizontal: 30,
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
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.GREY_1,
    borderRadius: 5,
  },
  cost: {
    fontSize: 21,
    color: Colors.DEEP_GRAY,
    paddingLeft: 10,
  },
  number: {
    paddingLeft: 50,
    paddingVertical: 15,
    fontSize: 15,
    color: Colors.DEEP_GRAY,
  },
  yearly_section: {
    backgroundColor: Colors.PINK,
    marginVertical: 20,
    paddingHorizontal: 30,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cost_top: {
    fontSize: 20,
    color: Colors.RED,
    fontWeight: "bold",
  },
  cost_botton: {
    fontSize: 15,
    color: Colors.DEEP_GRAY,
    fontWeight: "bold",
  },
  return: {
    marginLeft: 20,
    fontWeight: "bold",
    color: Colors.DEEP_GRAY,
    fontSize: 18,
  },
});
const mapStateToProps = (state) => ({
  token: state.auth.token,
  users: state.auth.users,
  isFetching: state.investmentplan.isFetching,
  investment: state.investmentplan.investment,
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { InvestmentPlanActions } = require("../../store/InvestmentPlanRedux");
  return {
    ...stateProps,
    ...ownProps,
    investmentConfig: (data) => {
      InvestmentPlanActions.investmentConfig(dispatch, data);
    },
  };
};
export default connect(
  mapStateToProps,
  undefined,
  mapDispatchToProps
)(AddInvestmentScreens);
