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
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { Styles, Config, Colors, FormValidate } from "../../common";
import { Entypo, AntDesign } from "react-native-vector-icons";
import { Header, Overlay } from "react-native-elements";

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
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

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
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Toprated")}
            style={{ marginTop: 20 }}
          >
            <AntDesign name={"shoppingcart"} size={30} color={Colors.RED} />
          </TouchableOpacity>
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
        <View style={styles.transaction_sec}>
          <Text style={styles.transaction}>Transaction</Text>
        </View>

        {/* Transaction section */}
        <View style={styles.history_sec}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Switch")}>
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

          <TouchableOpacity onPress={() => props.navigation.navigate("Redeem")}>
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
            onPress={() => props.navigation.navigate("TransactionHistory")}
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

        {/* Holdings_sec....... */}

        <View style={styles.transaction_sec}>
          <Text style={styles.transaction}>Holdings</Text>
        </View>

        <View style={styles.holdings_sec}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Goals")}>
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
});
const mapStateToProps = (state) => ({
  token: state.auth.token,
  users: state.auth.users,
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { AuthActions } = require("../../store/AuthRedux");
  return {
    ...stateProps,
    ...ownProps,
    logOut: () => {
      AuthActions.logOut(dispatch);
    },
  };
};
export default connect(
  mapStateToProps,
  undefined,
  mapDispatchToProps
)(DashboardScreen);
