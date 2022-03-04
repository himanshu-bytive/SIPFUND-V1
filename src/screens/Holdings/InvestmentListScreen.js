import React, { useState, useRef, useEffect, useContext } from "react";
import {
  StyleSheet,
  Button,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { Styles, Config, Colors, FormValidate } from "../../common";
import { MyImage } from "../../components";
import {
  Ionicons,
  AntDesign,
  FontAwesome,
  FontAwesome5,
} from "react-native-vector-icons";
import { Image, Header, CheckBox } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

function InvestmentListScreen(props) {
  const pageActiveInvest = useRef(false);
  const {
    token,
    summary,
    investments,
    InvestmentSummaryDetails,
    investmentPlans,
    investment,
    users,
  } = props;
  const [data, setData] = useState([]);

  //useEffect(() => {
  //if (summary?.plans) {
  //let data = summary?.plans ? summary?.plans : [];
  //let newData = {};
  //for (let item of data) {
  //if (item.details.planName in newData === false) {
  //newData[item.details.planName] = item;
  //}
  //}
  //setData(newData);
  //}
  //}, [summary]);

  const investDetails = (item) => {
    InvestmentSummaryDetails(item);
    props.navigation.navigate("InvestDetail");
  };

  useEffect(() => {
    if (investment && pageActiveInvest.current) {
      pageActiveInvest.current = false;
      props.navigation.navigate("InvestmentDetail");
    }
  }, [investment]);

  return (
    <View style={styles.container}>
      {/* Header_sec */}
      <View style={Styles.Header_top}>
        <Header
          leftComponent={
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={{ marginTop: 25 }}
            >
              <AntDesign name={"arrowleft"} size={30} color={Colors.RED} />
            </TouchableOpacity>
          }
          backgroundColor={Colors.PEACH}
          backgroundColor={Colors.PEACH}
          centerComponent={
            <Image
              source={require("../../../assets/icon.png")}
              style={styles.logimg}
            />
          }
          rightComponent={
            <View style={Styles.headerkn}>
              <Text style={Styles.textkn}>
                {users?.name
                  ? `${users?.name[0]}${users?.name.split(" ").pop()[0]}`
                  : ""}
              </Text>
            </View>
          }
        />
        <Image
          source={require("../../../assets/Goles_4logo.png")}
          style={styles.Goles_4logo}
        />
        <Text style={styles.text_goals}>
          {summary?.plans[0]?.holdings[0]?.trxnDetails.length > 0
            ? "INVESTMENT PLAN SET AS OF NOW"
            : "No investment Plan set as of now !"}
        </Text>
      </View>

      {/* container_box_sec */}
      <ScrollView style={styles.containerScroll}>
        <Text style={styles.Investments}>My Investments</Text>
        {/*<View style={styles.mainbox}>
          {Object.keys(data).map((item, key) => (
            <TouchableOpacity
              key={key}
              onPress={() => investDetails(data[item])}
            >
              <View style={styles.container_box}>
                <Image
                  source={{ uri: data[item].details?.holdings[0]?.imagePath }}
                  style={styles.longtermimg}
                />
                <Text style={styles.Longterm}>{item}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.Investments}>Invest Now</Text>*/}
        <View style={styles.mainbox}>
          {summary?.plans[0]?.holdings[0]?.trxnDetails.map((item, key) => (
            <TouchableOpacity
              key={key}
              onPress={(item) => {
                investmentPlans(item, token);
                pageActiveInvest.current = true;
              }}
            >
              <View style={styles.container_box}>
                <Image
                  style={{
                    height: 50,
                    width: 50,
                  }}
                  source={{
                    uri: `https://sipfund.sfo2.digitaloceanspaces.com/product-AMC-images/${item?.imagePath}`,
                  }}
                />
                <Text style={styles.Longterm}>{item?.productName}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerScroll: {
    width: "100%",
  },
  logimg: {
    height: 65,
    width: 203,
    marginTop: 10,
  },
  Goles_4logo: {
    height: 96,
    width: 96,
  },
  text_goals: {
    fontSize: 20,
    marginVertical: 15,
  },
  Investments: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 40,
    marginVertical: 20,
  },
  mainbox: {
    alignItems: "center",
  },
  container_box: {
    width: Dimensions.get("window").width - 20,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
    borderColor: "#F7EDED",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  longtermimg: {
    height: 80,
    width: 80,
  },
  Longterm: {
    marginLeft: 10,
    fontSize: 18,
    maxWidth: "80%",
    color: Colors.BLACK,
  },
});

const mapStateToProps = (state) => ({
  token: state.auth.token,
  users: state.auth.user,
  summary: state.goals.summary,
  investments: state.investmentplan.investments,
  investment: state.investmentplan.investment,
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { GoalsActions } = require("../../store/GoalsRedux");
  const { InvestmentPlanActions } = require("../../store/InvestmentPlanRedux");
  return {
    ...stateProps,
    ...ownProps,
    InvestmentSummaryDetails: (data) => {
      GoalsActions.InvestmentSummaryDetails(dispatch, data);
    },
    investmentPlans: (params, token) => {
      InvestmentPlanActions.investmentPlans(dispatch, params, token);
    },
  };
};
export default connect(
  mapStateToProps,
  undefined,
  mapDispatchToProps
)(InvestmentListScreen);
