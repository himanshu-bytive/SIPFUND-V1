import React, { useState, useRef, useEffect, useContext } from "react";
import { StyleSheet, Button, View, ImageBackground, TouchableOpacity, Text, Dimensions, KeyboardAvoidingView, ScrollView, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { Styles, Config, Colors, FormValidate } from "../../common";
import { MyImage } from "../../components";
import { Ionicons, AntDesign, EvilIcons, Entypo, FontAwesome5 } from "react-native-vector-icons";
import { Image, Header, CheckBox } from "react-native-elements";

function InvestmentSubmitScreens(props) {
  const pageActive = useRef(false);
  const { investment, configs, isFetching, myInvestlist } = props;

  const [sum, setSum] = useState(0);

  useEffect(() => {
    let total = 0;
    for (let item in myInvestlist.filter((value) => !isNaN(value.schemes.sip))) {
      total = total + Number(myInvestlist.filter((value) => !isNaN(value.schemes.sip))[item].schemes.sip);
    }
    setSum(parseInt(total, 10));
  }, [myInvestlist]);

  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}>
            <AntDesign name={"arrowleft"} size={40} color={Colors.RED} />
          </TouchableOpacity>
        }
        containerStyle={styles.header}
        backgroundColor={Colors.LIGHT_WHITE}
        centerComponent={<Image source={require("../../../assets/icon.png")} style={styles.logimg} />}
        rightComponent={
          <View style={{ marginTop: 20, marginRight: 10 }}>
            <AntDesign name={"shoppingcart"} size={40} color={Colors.RED} />
          </View>
        }
      />

      <ScrollView>
        <View style={styles.education}>
          <View style={styles.child_sec}>
            <MyImage width="112" height="118" svg={true} url={investment.planImagePath} />
          </View>
          <View style={styles.education_sec}>
            <Text style={styles.child}>Summary</Text>
            <Text style={styles.child_text}>Investment Plan</Text>
          </View>
        </View>

        <Text style={styles.mygoal}>
          My Investment : <Text style={styles.my_goal}>{investment.investmentPlan}</Text>
        </Text>

        <View style={styles.fund_sec}>
          <Text style={styles.fund_secleft}>Fund List</Text>
          <Text style={styles.fund_secright}>₹ {sum}</Text>
        </View>

        {/* Axis Asset Management Company Ltd */}
        {myInvestlist
          .filter((value) => !isNaN(value.schemes.sip))
          .map((item, key) => (
            <View key={key} style={styles.sbi_sec}>
              <Image source={{ uri: item.schemes.imagePath }} style={styles.Hybrid} />
              <Text style={styles.sbi_text}>{item.schemes.name}</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.price}>₹ {item.schemes.sip}</Text>
              </View>
            </View>
          ))}
      </ScrollView>
      <TouchableOpacity onPress={() => props.navigation.navigate("Upi", { cart: myInvestlist.filter((value) => !isNaN(value.schemes.sip)), sum: sum, fromCart: false, fromPlanGoals: false, isLumpsum: props.navigation.state.params.isLumpsum })} style={styles.botton_box}>
        <Text style={styles.get_otp}>MAKE PAYMENT</Text>
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

  header: {
    borderBottomColor: Colors.BLACK,
    borderBottomWidth: 1,
  },

  education: {
    flexDirection: "row",
    marginHorizontal: 20,
    padding: 20,
  },
  child_sec: { width: "30%" },
  education_sec: {
    width: "70%",
    marginLeft: 30,
  },
  goals_2: {
    height: 112,
    width: 118,
  },
  child: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.DEEP_GRAY,
  },
  child_text: {
    fontSize: 18,
    color: Colors.RED,
    paddingVertical: 10,
    fontWeight: "bold",
  },
  formsec: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Colors.DEEP_GRAY,
    marginHorizontal: 20,
    padding: 10,
  },
  Midcap: {
    fontSize: 18,
    paddingLeft: 10,
  },
  results: {
    fontSize: 12,
    marginLeft: 50,
    marginTop: 5,
    color: Colors.DEEP_GRAY,
  },
  sbi_sec: {
    flexDirection: "row",
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: Colors.DEEP_GRAY,
    paddingBottom: 10,
    marginVertical: 5,
  },
  Hybrid: {
    width: 32,
    height: 36,
  },
  sbi_text: {
    marginLeft: 10,
    fontSize: 15,
    width: "70%",
  },
  price: {
    paddingTop: 10,
    fontSize: 15,
    paddingRight: 10,
    textAlign: "right",
    fontWeight: "bold",
  },
  fund_sec: {
    flexDirection: "row",
    backgroundColor: Colors.LIGHT_GRAY,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  fund_secright: {
    position: "absolute",
    right: 0,
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 10,
    paddingRight: 10,
  },
  fund_secleft: {
    fontSize: 18,
    fontWeight: "bold",
  },
  mygoal: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 20,
    color: Colors.RED,
    marginBottom: 20,
  },
  my_goal: {
    color: Colors.DEEP_GRAY,
    fontWeight: "normal",
  },
  add: {
    marginVertical: 20,
    textAlign: "center",
    color: Colors.RED,
    fontSize: 18,
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
  childbottom: {
    flexDirection: "row",
    paddingLeft: 20,
  },

  sf: {
    width: 16,
    height: 16,
  },
  year: {
    fontSize: 15,
    paddingLeft: 10,
  },
});
const mapStateToProps = (state) => ({
  token: state.auth.token,
  users: state.auth.users,
  isFetching: state.investmentplan.isFetching,
  myInvestlist: state.investmentplan.myInvestlist,
  investment: state.investmentplan.investment,
  configs: state.investmentplan.configs,
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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(InvestmentSubmitScreens);
