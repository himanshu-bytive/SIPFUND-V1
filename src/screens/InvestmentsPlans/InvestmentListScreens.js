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
  TextInput,
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
import Cart from "../../components/Cart";

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
    const [categories, setCategories] = useState([])

    useEffect(() => {
            setCategories(Object.keys(myInvestlist))
    }, [props.navigation.state.params?.refresh, myInvestlist])

  const getSip = (value) => {
    if (!isNaN(value)) {
      return Number(value);
    }
    return 0;
  };

  const handleDelete = (productCode) => {
    let investments = myInvestlist;
      let keys = Object.keys(investments)
    for (let category in keys) {
        for(let item in investments[keys[category]]) {
            if(investments[keys[category]][item].isin === productCode) {
                if(investments[keys[category]].length === 1) {
                    delete investments[keys[category]]
    myInvestments(investments);
    props.navigation.replace("InvestmentList");
                    return
                } else {
                    //delete investments[keys[category]][item]
                    investments[keys[category]].splice(item, 1)
    myInvestments(investments);
    props.navigation.replace("InvestmentList");
                    return
                }
            }
        }
    }
  };

  const getHoldings = (data) => {
    let formatted = [];
    let format = {};
    for (let item in data) {
      format = {
        category: data[item].fund_type,
        amount: data[item].sip,
        schemeName: data[item].name,
        imagePath: data[item].imagePath,
        amc_code: data[item].amc_code,
        productCode: data[item].productCode,
          sipDates: data[item].sipDates
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
          <Cart
            nav={() => {
              props.navigation.navigate("TopRatedList");
            }}
          />
        }
      />
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
        {/* {console.log("CONFIGS=", configs)} */}
        {/*configs && configs.selectedOption && (
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
              props.navigation.navigate("FundsDetails", {
                fromScreen: "InvestmentList",
              });
            }}
            handleClicked={() => {
              setClicked(true);
            }}
          />
        )*/}
      {categories.map(category => {
          return (
              <>
          <Text style={[styles.hybrid, {marginLeft: 20}]}>{category}</Text>
          {myInvestlist[category].map((item, index) => (
            <View key={item?.productCode} style={styles.axis_asset}>
              <View style={[styles.company, {justifyContent: item?.type === 'new' ? 'space-between' : 'flex-start'}]}>
                  <Image
                    source={{ uri: item?.imagePath }}
                    style={styles.axisimg}
                  />
                  <View style={styles.management}>
                    <Text numberOfLines={1} style={styles.axis}>{item?.name}</Text>
                    <Text style={styles.moderately}>{item?.productCode}</Text>
                  </View>
                <AntDesign
                  style={{
                    display: item?.type === "new" ? "flex" : "none",
                  }}
                  name="delete"
                  size={24}
                  color="#C0392B"
                  onPress={() => handleDelete(item?.isin)}
                />
              </View>

              <View style={styles.border_sec}>
                <View style={styles.border}>
                  <View
                    style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY }}
                  ></View>
                </View>
                <View style={styles.icons}>
                  <TouchableOpacity
                    style={styles.circle}
                    onPress={() => {
                        fundDetails(item)
                        props.navigation.navigate('FundsDetails', {fromScreen: 'InvestmentList'})}
                    }
                  >
                    <AntDesign name="right" size={30} color="#C0392B" />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.select}>
                  <Text style={styles.no}>Min Investment</Text>
                  <Text>₹{item?.investment ? item?.investment : "1000"}</Text>
                </View>
                {configs?.selectedOption && configs?.selectedOption === "SIP" && (
                  <View style={styles.select}>
                    <Text style={styles.no}>SIP Date</Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.new}>
                        {item?.date ? item?.date : "5"}
                      </Text>
                      <View style={{ flexDirection: "column" }}>
                        <TouchableOpacity
                          onPress={() =>
                            plusMinus("plus", item?.date ? item?.date : "5")
                          }
                        >
                          <AntDesign name="caretup" size={15} color="#C0392B" />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() =>
                            plusMinus("minus", item?.date ? item?.date : "5")
                          }
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
                )}

                <View style={styles.select}>
                  <Text style={styles.no}>
                    {configs.selectedOption === "SIP" ? "SIP Amount" : "Amount"}
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.new}>₹</Text>
                    <TextInput
                      style={[styles.new, {minWidth: 30}]}
                      keyboardType={"numeric"}
                      maxLength={8}
                      placeholder={"0"}
                      onChangeText={(v) => {
                          let data = myInvestlist;
                          data[category][index].sip = v
                          myInvestments(data)
                      }}
                    />
                  </View>
                </View>
              </View>
              </View>
          ))}
              </>

          );
          })}
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
          for (let category in categories) {
              for(let item in myInvestlist[categories[category]]) {
                  let amount = getSip(myInvestlist[categories[category]][item].sip);
                  if(amount < item.default_min_amount) {
                    alert("Amount is less than minimum amount");
                    return;
                  }
                  sum = sum + amount
              }
          }

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
              let data = []
              for(let category in categories) {
                  for(let item in myInvestlist[categories[category]]) {
                      if(!isNaN(myInvestlist[categories[category]][item].sip)) {
                        data.push(myInvestlist[categories[category]][item])
                      }
                  }
              }
            let params = getParams(data, sum)
                    newInvestment(params, token);
                      console.log(params, token)
                    props.navigation.navigate("InvestmentSubmit", {
                      isLumpsum: props.navigation.state.params.isLumpsum,
                    });
                  },
                },
              ],
              { cancelable: false }
            );
          } else if (sum < Number(configs.invest)) {
            alert("Invested amount less than the total!");
          } else {
              let data = []
              for(let category in categories) {
                  for(let item in myInvestlist[categories[category]]) {
                      if(!isNaN(myInvestlist[categories[category]][item].sip)) {
                        data.push(myInvestlist[categories[category]][item])
                      }
                  }
              }
            let params = getParams(data, sum)
            newInvestment(params, token);
            props.navigation.navigate("InvestmentSubmit", {
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
    textAlign: "center",
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
      flex: 1,
    flexDirection: "row",
      alignItems: 'center',
  },
  management: {
    marginLeft: 10,
    width: '70%',
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
    resizeMode: 'contain'
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
