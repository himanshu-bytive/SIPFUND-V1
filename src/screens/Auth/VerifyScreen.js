import React, { useState, useRef, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { Colors, FormValidate } from "../../common";
import * as Location from "expo-location";
import * as Notifications from 'expo-notifications';
import { MaterialIcons } from "react-native-vector-icons";
const width = Dimensions.get("window").width;

function VerifyScreen(props) {
  const pageActive = useRef(false);
  const phoneInput = useRef(null);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState([]);
  const { verify, isFetching, signUpSteps, phones, setToken } = props;
  useEffect(() => {
    if (signUpSteps == 0 && pageActive.current) {
      pageActive.current = false;
      props.navigation.navigate("otp");
    }
    if (signUpSteps == 1 && pageActive.current) {
      pageActive.current = false;
      props.navigation.navigate("createAccount");
    }
    if (signUpSteps >= 3 && pageActive.current) {
      pageActive.current = false;
      props.navigation.navigate("login");
    }
    if (signUpSteps == 4 && pageActive.current) {
      pageActive.current = false;
      props.navigation.navigate("login");
    }
  }, [signUpSteps]);

  useEffect(() => {
    checkAllPermissions()
    GetCurrentLocation();
  }, []);

  async function checkAllPermissions() {
    let status;

    status = await Notifications.getPermissionsAsync();
    let statusNotifications = status.status;
    console.log("Notifications Permissions: ", statusNotifications);

    status = await Location.getForegroundPermissionsAsync()
    let statusLocation = status.status;
    console.log("Location Permissions: ", statusLocation);

    if (statusNotifications !== "granted") {
      console.log("Requesting Notification Permissions");
      status = await Notifications.requestPermissionsAsync();
      statusNotifications = status.status;
    }

    // hasServicesEnabledAsync
    if (statusLocation !== "granted") {
      console.log("Requesting Location Permissions");
      status = await Location.requestForegroundPermissionsAsync()
      statusLocation = status.status;
    }


    if (statusNotifications !== "granted" || statusLocation !== "granted") {
      console.log("Permissions not granted");
      return;
    }

    let token = (await Notifications.getExpoPushTokenAsync()).data;
    // alert(token)
    setToken(token)

  }

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

  const [state, setState] = useState({
    phone: "",
  });

  const [errors, setError] = useState({
    phone: null,
  });

  const onAction = async (ph) => {
    let phone = ph ? ph : state.phone;
    if (FormValidate.isPhone(phone)) {
      pageActive.current = true;
      let params = {
        minorFlag: false,
        mobileNo: Number(phone),
        referenceInfo: {
          latitude: displayCurrentAddress?.latitude,
          longitude: displayCurrentAddress?.longitude,
          mobileNo: phone,
          pincode: displayCurrentAddress?.pincode,
        },
      };
      verify(params);
      setState({ ...state, phone: "" });
    } else {
      phoneInput.current.focus();
      setError({ ...errors, phone: "Please enter phone number" });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View>
        <Text style={styles.slogan}>
          Achieve Your <Text style={styles.sloganRed}>Dreams</Text>
        </Text>
      </View>
      <View style={styles.mainbox}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.logoimg}
          />
        </View>
        <Text style={styles.code}>Continue with</Text>
        {phones.lenght > 0 && (
          <Text style={styles.continue}>Continue with</Text>
        )}
        {phones.map((item, key) => (
          <TouchableOpacity
            key={key}
            onPress={() => onAction(item)}
            style={styles.phone_number}
          >
            <MaterialIcons name="call" size={20} color="#838280" />
            <Text style={styles.number}>{item}</Text>
          </TouchableOpacity>
        ))}
        <View style={styles.or}>
          {phones.lenght > 0 && <Text style={styles.code}>Or</Text>}
          <Text style={[styles.code, { marginBottom: 0 }]}>OR</Text>
          <Text style={[styles.code, { marginTop: 0 }]}>
            Enter Your Mobile number
          </Text>
        </View>
        <View style={styles.text_box}>
          <MaterialIcons name="call" size={20} color="#838280" />
          <TextInput
            ref={phoneInput}
            style={styles.inputsec}
            placeholder={"Phone"}
            keyboardType="numeric"
            onChangeText={(phone) => {
              setError({ ...errors, phone: null });
              setState({ ...state, phone });
            }}
            value={state.phone}
          />
        </View>
        {errors.phone && (
          <View style={styles.text_box}>
            <Text style={styles.error}>{errors.phone}</Text>
          </View>
        )}
        <View style={styles.button}>
          {isFetching ? (
            <View style={styles.botton_box}>
              <ActivityIndicator size={30} color={Colors.WHITE} />
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => onAction()}
              style={styles.botton_box}
            >
              <Text style={styles.get_otp}>ENTER</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.otp}>
          <Text>We will send you OTP on your mobile number</Text>
        </View>
      </View>
      <View>
        <Image
          source={require("../../../assets/nse.png")}
          style={styles.nseimg}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GREY_1,
    alignItems: "center",
    justifyContent: "center",
  },
  slogan: {
    fontSize: 30,
    color: Colors.BLACK,
    marginBottom: 30,
  },
  sloganRed: {
    color: Colors.RED,
  },
  mainbox: {
    borderRadius: 25,
    // backgroundColor: Colors.WHITE,
    width: width - 50,
  },
  logoimg: {
    marginTop: 30,
  },
  continue: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 70,
  },
  inputsec: {
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: -3,
    borderColor: "#828282",
    width: "50%",
  },
  phone_number: {
    flexDirection: "row",
    paddingLeft: 70,
  },
  number: {
    fontSize: 18,
    marginTop: -3,
    marginLeft: 5,
  },
  code: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 19,
    color: "#7E7E7E",
    paddingLeft: 70,
  },
  text_box: {
    flexDirection: "row",
    marginTop: 10,
    paddingLeft: 70,
  },
  button: {
    alignItems: "center",
  },
  botton_box: {
    backgroundColor: Colors.RED,
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  get_otp: {
    color: Colors.WHITE,
    fontSize: 15,
  },
  error: {
    color: Colors.RED,
    fontSize: 13,
  },
  nseimg: {
    marginTop: 30,
    width: width - 10,
  },
  otp: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 12,
    color: Colors.GREY_1,
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({
  token: state.auth.token,
  isFetching: state.auth.isFetching,
  signUpSteps: state.auth.signUpSteps,
  phones: state.auth.phones,
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { AuthActions } = require("../../store/AuthRedux");
  const { PushNotificationActions } = require("../../store/PushNotificationRedux");

  return {
    ...stateProps,
    ...ownProps,
    verify: (params) => {AuthActions.verify(dispatch, params)},
    setToken: (token) => dispatch(PushNotificationActions.setToken(token)),

  };
};
export default connect(
  mapStateToProps,
  undefined,
  mapDispatchToProps
)(VerifyScreen);
