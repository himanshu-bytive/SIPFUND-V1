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
import {
  Ionicons,
  AntDesign,
  MaterialIcons,
  Feather,
  Entypo,
  FontAwesome,
  FontAwesome5,
} from "react-native-vector-icons";
import { Image, Header, ListItem, Overlay } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

function NotificationScreen(props) {
  return (
    <View style={styles.container}>
      {/* header  */}
      <Header
        leftComponent={
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={{ marginTop: 20 }}
          >
            <AntDesign name={"arrowleft"} size={30} color={Colors.RED} />
          </TouchableOpacity>
        }
        backgroundColor={Colors.PEACH}
        backgroundColor={Colors.LIGHT_WHITE}
        centerComponent={
          <Image
            source={require("../../../assets/icon.png")}
            style={styles.logimg}
          />
        }
        rightComponent={
          <View style={{ marginTop: 20, marginRight: 10 }}>
            <AntDesign
              onPress={() => props.navigation.navigate("TopRatedList")}
              name={"shoppingcart"}
              size={40}
              color={Colors.RED}
            />
          </View>
        }
      />
      <ScrollView>
        <View style={styles.contain}>
          <View style={styles.sipfund_sec}>
            <Text style={styles.nametext}>VISHNU DARIRA</Text>
            <Text style={styles.nametext}>
              09-Jul-2021{"\n"}Dear Customer,{"\n"}Your transactions for{"\n"}1.
              SBI Magnum Low Duration Fund Regular Growth Amount in ₹ 1002.51,
              Units-0.361, Nav Date-2021-07-06,{"\n"}has been uploaded.{"\n"}
              Please open your app for more info.{"\n"}SIPfund.com Type-RED{" "}
            </Text>
          </View>
        </View>

        <View style={styles.Transaction}>
          <Text style={styles.Transaction_text}>
            Transaction Alert{"\n"}for your Mutual{"\n"}Fund Investment
          </Text>
          <Image
            source={require("../../../assets/icon.png")}
            style={styles.bottomlogimg}
          />
        </View>
      </ScrollView>
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
  contain: { marginHorizontal: 10 },
  sipfund_sec: {
    backgroundColor: Colors.GRAY_LIGHT_5,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  nametext: { color: Colors.WHITE },
  Transaction: {
    backgroundColor: Colors.LIGHT_WHITE,
    alignItems: "center",
    marginHorizontal: 10,
    paddingBottom: 10,
  },
  Transaction_text: {
    fontSize: 18,
    color: Colors.BLACK,
    paddingVertical: 10,
  },
  bottomlogimg: {
    height: 67,
    width: 212,
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
)(NotificationScreen);
