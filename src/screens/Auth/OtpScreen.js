import React, { useState, useRef, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Platform,
  ActivityIndicator,
  BackHandler,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  Text,
} from "react-native";
import { connect } from "react-redux";
import * as Location from "expo-location";
import SmsRetriever from "react-native-sms-retriever";
import { Colors } from "../../common";
import { OtpInputs } from "../../components";
const width = Dimensions.get("window").width;
import OTPInputView from "@twotalltotems/react-native-otp-input";

function OtpScreen(props) {
  const pageActive = useRef(false);
  const { otp, resendOtp, phone, isFetching, signUpSteps, appToken } = props;
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState([]);

  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  /* Auto read OTP */
  useEffect(() => {
    _startSmsListener = async () => {
      try {
        const registered = await SmsRetriever.startSmsRetriever();
        if (registered) {
          SmsRetriever.addSmsListener((event) => {
            var rx = /[0-9][0-9][0-9][0-9]/;
            const matches = rx.exec(event.message);
            if (matches && matches.length) {
              setVerificationCode(matches[0]);
              SmsRetriever.removeSmsListener();
            }
          });
        }
      } catch (error) {
        console.log(JSON.stringify(error));
      }
    };

    _startSmsListener();
  }, []);

  useEffect(() => {
    if (verificationCode) {
      onAction(verificationCode);
    }
  }, [verificationCode]);

  useEffect(() => {
    GetCurrentLocation();
  }, []);

  useEffect(() => {
    if (signUpSteps == 1 && pageActive.current) {
      pageActive.current = false;
      props.navigation.navigate("createAccount");
    }
  }, [signUpSteps]);

  const GetCurrentLocation = async () => {
    let { coords } = await Location.getCurrentPositionAsync();
    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      for (let item of response) {
        setDisplayCurrentAddress({
          latitude: latitude,
          longitude: longitude,
          address: item.name,
          city: item.city,
          state: item.street,
          pincode: item.postalCode,
        });
      }
    }
  };
  const [verificationCode, setVerificationCode] = useState("");
  const [errors, setError] = useState(null);

  const onAction = async (text) => {
    if (text.length === 4) {
      let params = {
        deviceToken: appToken,
        minorFlag: false,
        mobileNo: phone,
        otp: text,
        platform: Platform.OS == "ios" ? "IOS" : "ANDROID",
        referenceInfo: {
          latitude: displayCurrentAddress?.latitude,
          longitude: displayCurrentAddress?.longitude,
          mobileNo: phone,
          pincode: displayCurrentAddress?.pincode,
        },
      };
      pageActive.current = true;
      otp(params);
      setVerificationCode("");
    }
  };

  const reSendAction = async () => {
    let params = { mobileNo: phone };
    resendOtp(params);
    setVerificationCode("");
  };

  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.containBox}>
        <Text style={styles.slogan}>
          Achieve Your <Text style={styles.sloganRed}>Dreams</Text>
        </Text>
        <View style={styles.mainbox}>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.logimg}
          />
          <Text style={styles.number}>
            {"Enter OTP to verify\nyour mobile number"}
          </Text>
          <View style={styles.otpsec}>
            {!isFetching && (
              <View>
                <OTPInputView
                  style={{
                    height: 100,
                    width: "75%",
                    marginBottom: 25,
                  }}
                  codeInputFieldStyle={{
                    color: "black",
                    borderWidth: 0,
                    borderBottomColor: "darkgrey",
                    borderBottomWidth: 1,
                  }}
                  pinCount={4}
                  code={verificationCode}
                  onCodeChanged={(code) => setVerificationCode(code)}
                  onCodeFilled={() => onAction(verificationCode)}
                />
              </View>
            )}
            {isFetching && (
              <View style={styles.botton_box}>
                <ActivityIndicator size={30} color={Colors.RED} />
              </View>
            )}
            {!isFetching && (
              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => reSendAction()}
                  style={styles.botton_box}
                >
                  <Text style={styles.get_otp}>RESEND OTP</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                  <Text style={[styles.get_otp, { marginTop: 10 }]}>
                    Back to Login
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../../assets/pan_footer_img.png")}
          style={styles.nseimg}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.GREY_1,
  },
  slogan: {
    fontSize: 30,
    color: Colors.BLACK,
    marginTop: 100,
    marginBottom: 20,
  },
  sloganRed: {
    color: Colors.RED,
  },
  containBox: {
    alignItems: "center",
  },
  mainbox: {
    padding: 20,
    borderWidth: 2,
    borderRadius: 20,
    borderStyle: "solid",
    alignItems: "center",
    width: width - 50,
    borderColor: Colors.GREY_1,
    backgroundColor: Colors.WHITE,
    paddingTop: 30,
    marginBottom: 20,
  },
  logimg: {
    marginTop: 10,
    marginBottom: 10,
    height: 100,
    aspectRatio: 1,
  },
  otpsec: {
    alignItems: "center",
  },
  inputsec: {
    borderBottomWidth: 4,
    width: 35,
    borderColor: Colors.GREY_1,
    marginLeft: 4,
    marginRight: 4,
  },
  get_otp: {
    color: Colors.RED,
  },
  nseimg: {
    //marginVertical: 50,
  },
  number: {
    fontSize: 18,
    textAlign: "center",
    paddingTop: 4,
    paddingBottom: 4,
  },
  containerScroll: {
    width: "100%",
  },
});

const mapStateToProps = (state) => ({
  isFetching: state.auth.isFetching,
  phone: state.auth.phone,
  signUpSteps: state.auth.signUpSteps,
  appToken: state.notification.token,
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { AuthActions } = require("../../store/AuthRedux");
  return {
    ...stateProps,
    ...ownProps,
    otp: (params) => {
      AuthActions.otp(dispatch, params);
    },
    resendOtp: (params) => {
      AuthActions.resendOtp(dispatch, params);
    },
  };
};
export default connect(
  mapStateToProps,
  undefined,
  mapDispatchToProps
)(OtpScreen);
