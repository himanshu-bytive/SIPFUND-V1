import React, { useState, useRef, useEffect, useContext } from "react";
import {
  StyleSheet,
  Button,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Alert,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { Styles, Config, Colors, FormValidate } from "../../common";
import {
  Ionicons,
  AntDesign,
  EvilIcons,
  Entypo,
  FontAwesome5,
} from "react-native-vector-icons";
import { Image, Header, CheckBox } from "react-native-elements";
import { MyImage, InvestmentFundType } from "../../components";

function InvestmentListScreens(props) {
  const pageActive = useRef(false);
  const {
    phone,
    investment,
    newInvestment,
    token,
    configs,
    isFetching,
    myInvestlist,
    myInvestments,
    fundDetails,
  } = props;
  const [sumInvestment, setSumInvestment] = useState([]);

  const updateInvestments = (data) => {
    setSumInvestment(data);
    myInvestments(data);
  };

  const getSip = (value) => {
    if (!isNaN(value)) {
      return Number(value);
    }
    return 0;
  };

  const handleDelete = (productCode) => {
    let investments = myInvestlist;
    for (let index in investments) {
      if (investments[index]?.schemes.productCode === productCode) {
        delete investments[index];
        break;
      }
    }
    myInvestments(investments);
    props.navigation.replace("InvestmentList");
  };

  const getHoldings = (data) => {
    let formatted = [];
    let format = {};
    for (let item in data) {
      format = {
        category: data[item].fund_type,
        amount: data[item].schemes.sip,
        schemeName: data[item].schemes.name,
        imagePath: data[item].schemes.imagePath,
        amc_code: data[item].schemes.amc_code,
        productCode: data[item].schemes.productCode,
      };
      formatted.push(format);
    }
    return formatted;
  };

  const getParams = (data, sum) => {
    return {
      userPhoneNumber: phone,
      planName: "Aggressive Funds",
      sip_date: "",
      userID: "",
      holdings: getHoldings(data),
      planCreatedAt: "",
      investmentPlanAmount: sum,
      paidAmount: sum,
    };
  };

  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <TouchableOpacity
            onPress={() => props.navigation.navigate("InvestmentDetail")}
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
            <Text style={styles.child_text}>Recommended Funds and Amounts</Text>
            <Text style={styles.amount}>My Investment Amount</Text>
          </View>
          <View style={styles.child_sec}>
            <MyImage
              width="112"
              height="118"
              svg={true}
              url={investment.planImagePath}
            />
            <Text style={styles.sip}>
              {configs.selectedOption === "SIP"
                ? "SIP Per Month"
                : "LumpSum Amount"}
            </Text>
            <Text style={styles.amount_text}>₹ {configs.invest}</Text>
          </View>
        </View>
        {console.log("CONFIGS=", configs)}
        {configs && configs.selectedOption && (
          <InvestmentFundType
            setSum={(value) => {
              setSumInvestment(Number(value));
            }}
            selectedOption={configs.selectedOption}
            myInvestments={updateInvestments}
            data={myInvestlist}
            handleDelete={handleDelete}
            onPress={(item) => {
              fundDetails(item);
              props.navigation.navigate("FundsDetails");
            }}
          />
        )}
      </ScrollView>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("InvestmentSearch")}
      >
        <Text style={styles.more_funds}>I would like to add more funds</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          /* Calculate sum of all the investments */
          let sum = 0;
          for (let item in sumInvestment) {
            sum = sum + getSip(sumInvestment[item].schemes.sip);
          }

          /* Don't allow if sum of all investments exceed the amount */
          if (sum > Number(configs.invest)) {
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
                    let params = getParams(
                      myInvestlist.filter((value) => !isNaN(value.schemes.sip)),
                      sum
                    );
                    newInvestment(params, token);
                    props.navigation.navigate("InvestmentSubmit");
                  },
                },
              ],
              { cancelable: false }
            );
          } else if (sum < Number(configs.invest)) {
            alert("Invested amount less than the total!");
          } else {
            let params = getParams(
              myInvestlist.filter((value) => !isNaN(value.schemes.sip)),
              sum
            );
            newInvestment(params, token);
            props.navigation.navigate("InvestmentSubmit");
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
  education: {
    flexDirection: "row",
    marginHorizontal: 10,
    padding: 20,
  },
  education_sec: {
    width: "70%",
    paddingTop: 20,
  },
  goals_2: {
    height: 112,
    width: 118,
  },
  child: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.RED,
  },
  child_text: {
    fontSize: 13,
    color: Colors.DEEP_GRAY,
    paddingVertical: 5,
    fontWeight: "bold",
  },
  botton_box: {
    backgroundColor: Colors.RED,
    marginHorizontal: 30,
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.DEEP_GRAY,
    paddingVertical: 10,
    marginBottom: 20,
  },
  get_otp: {
    color: Colors.WHITE,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  //  new

  sip: {
    fontSize: 13,
    fontWeight: "bold",
    color: Colors.DEEP_GRAY,
  },
  amount: {
    paddingTop: 60,
    fontSize: 20,
    fontWeight: "bold",
  },
  amount_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.RED,
    paddingTop: 5,
  },

  // hybride
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
    height: 39,
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
    marginRight: 10,
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
    marginTop: 20,
  },
  hybridimg: {
    width: 39,
    height: 43,
  },
});
const mapStateToProps = (state) => ({
  token: state.auth.token,
  phone: state.auth.phone,
  isFetching: state.investmentplan.isFetching,
  investment: state.investmentplan.investment,
  configs: state.investmentplan.configs,
  myInvestlist: state.investmentplan.myInvestlist,
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { InvestmentPlanActions } = require("../../store/InvestmentPlanRedux");
  const { FundDetailActions } = require("../../store/FundDetailRedux");
  return {
    ...stateProps,
    ...ownProps,
    investmentConfig: (data) => {
      InvestmentPlanActions.investmentConfig(dispatch, data);
    },
    myInvestments: (data) => {
      InvestmentPlanActions.myInvestments(dispatch, data);
    },
    newInvestment: (params, token) => {
      InvestmentPlanActions.newInvestment(dispatch, params, token);
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
)(InvestmentListScreens);
