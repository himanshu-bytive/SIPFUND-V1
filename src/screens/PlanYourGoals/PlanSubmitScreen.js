import React, { useState, useRef, useEffect, useContext } from "react";
import { StyleSheet, Button, View, ImageBackground, TouchableOpacity, Text, Dimensions, KeyboardAvoidingView, TextInput, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { Styles, Config, Colors, FormValidate } from "../../common";
import { MyImage } from "../../components";
import { Ionicons, AntDesign, EvilIcons, Entypo, FontAwesome5 } from "react-native-vector-icons";
import { Image, Header, CheckBox } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

function PlanSubmitScreen(props) {
  const pageActive = useRef(false);
  const { token, goalDetail, isFetching, configs, mygolelist } = props;

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
      {isFetching && (
        <View style={Styles.loading}>
          <ActivityIndicator color={Colors.BLACK} size="large" />
        </View>
      )}
      <ScrollView>
        <View style={styles.education}>
          <View style={styles.child_sec}>
            <MyImage width="117" height="117" svg={true} url={goalDetail?.goalImagePath} />
          </View>
          <View style={styles.education_sec}>
            <Text style={styles.child}>Summary</Text>
            <Text style={styles.child_text}>{goalDetail?.goalDescription}</Text>
            <Text style={styles.child_master}>Master Vijay Deshmukh</Text>
          </View>
        </View>

        <Text style={styles.mygoal}>
          My Goal : <Text style={styles.my_goal}>{goalDetail?.goal}</Text>
        </Text>

        <View style={styles.fund_sec}>
          <Text style={styles.fund_secleft}>Fund List</Text>
          <Text style={styles.fund_secright}>₹ {props.navigation.state.params.sum}</Text>
        </View>

        {mygolelist
          .filter((item) => !isNaN(item.schemeInfo.sip))
          .map((item, key) => {
            if (item.schemeInfo != "NA") {
              return (
                <View key={key} style={styles.sbi_sec}>
                  <Image source={{ uri: item.schemeInfo.imagePath }} style={styles.Hybrid} />
                  <Text style={styles.sbi_text}>{item.schemeInfo.name}</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.price}>₹ {item.schemeInfo.sip}</Text>
                  </View>
                </View>
              );
            }
          })}
      </ScrollView>
      <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
        <Text style={styles.add}>Add another child’s education plan</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          //console.log(mygolelist.filter((item) => !isNaN(item.schemeInfo.sip)));
          props.navigation.navigate("Upi", { cart: mygolelist.filter((item) => !isNaN(item.schemeInfo.sip)), sum: props.navigation.state.params.sum, fromPlanGoals: true });
        }}
        style={styles.botton_box}
      >
        <Text style={styles.get_otp}>START GOAL</Text>
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
  education: {
    flexDirection: "row",
    marginHorizontal: 10,
    padding: 10,
  },
  education_sec: {
    width: "70%",
    paddingTop: 20,
  },
  goals_2: {
    height: 117,
    width: 126,
  },
  child: {
    fontSize: 18,
    paddingLeft: 20,
    color: Colors.DEEP_GRAY,
  },
  child_master: {
    fontSize: 16,
    paddingLeft: 20,
    color: Colors.DEEP_GRAY,
    fontWeight: "bold",
  },
  child_text: {
    fontSize: 18,
    color: Colors.RED,
    paddingVertical: 10,
    paddingLeft: 20,
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
    marginTop: 40,
  },
  my_goal: {
    color: Colors.DEEP_GRAY,
    fontWeight: "bold",
  },
  add: {
    marginVertical: 10,
    textAlign: "center",
    color: Colors.RED,
    fontSize: 18,
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
});
const mapStateToProps = (state) => ({
  token: state.auth.token,
  users: state.auth.users,
  isFetching: state.goals.isFetching,
  goalDetail: state.goals.goalDetail,
  configs: state.goals.configs,
  mygolelist: state.goals.mygolelist,
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { GoalsActions } = require("../../store/GoalsRedux");
  return {
    ...stateProps,
    ...ownProps,
    singleDetails: (params, token) => {
      GoalsActions.singleDetails(dispatch, params, token);
    },
  };
};
export default connect(mapStateToProps, undefined, mapDispatchToProps)(PlanSubmitScreen);
