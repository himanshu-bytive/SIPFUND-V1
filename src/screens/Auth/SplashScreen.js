import axios from "axios";
import React, { useState, useRef, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  Platform,
  Alert,
  Linking,
  BackHandler,
  ToastAndroid,
} from "react-native";
import { check, PERMISSIONS, request, RESULTS } from "react-native-permissions";
import { connect } from "react-redux";
import DeviceInfo from "react-native-device-info";
import { Colors } from "../../common";
import { apiBaseUrl } from "../../common/Config";

function SplashScreen(props) {
  const { logout, resetData, setToken } = props;

  const [updateAvailable, setUpdateAvailable] = useState(null);

  const isUpdateAvailable = (latestVersion) => {
    const appVersion = DeviceInfo.getVersion();

    console.log("App Version: ", appVersion, "Latest Version: ", latestVersion);
    return toString(latestVersion).localeCompare(appVersion, undefined, {
      numeric: true,
      sensitivity: "base",
    });
  };

  useEffect(() => {
    axios
      //.get(`${apiBaseUrl}/user/getAppVersion`)
      .get("http://uat.sipfund.com/api/user/getAppVersion")
      .then((res) => {
        const { data } = res;
        if (isUpdateAvailable(data.Version)) {
          Alert.alert(
            "Update Available!",
            "A newer version of the app is available to install",
            [
              {
                text: "Update",
                onPress: () => {
                  setUpdateAvailable(true);
                },
                style: "ok",
              },
            ],
            {
              cancelable: false,
            }
          );
        }
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (updateAvailable) {
      const bundleId = DeviceInfo.getBundleId();
      Linking.openURL(
        `https://play.google.com/store/apps/details?id=${bundleId}`
      );
    }
  }, [updateAvailable]);

  useEffect(() => {
    if (updateAvailable !== false) {
      ToastAndroid.show("Please update the app!", ToastAndroid.LONG);
      return;
    }

    logout();
    resetData();
    // props.navigation.navigate("Home");

    if (Platform.OS === "android") {
      check(
        Platform.Version >= 30
          ? PERMISSIONS.ANDROID.READ_PHONE_NUMBERS
          : PERMISSIONS.READ_PHONE_STATE
      ).then((result) => {
        if (result === RESULTS.DENIED) {
          request(
            Platform.Version >= 30
              ? PERMISSIONS.ANDROID.READ_PHONE_NUMBERS
              : PERMISSIONS.READ_PHONE_STATE
          ).then(() => {
            //getPhoneNumber();
            props.navigation.navigate("verify");
          });
        } else {
          //getPhoneNumber();
          props.navigation.navigate("verify");
        }
      });
    } else {
      props.navigation.navigate("verify");
    }
  }, [updateAvailable]);

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.slogan}>
          Achieve Your <Text style={styles.sloganRed}>Dreams</Text>
        </Text>
      </View>
      <View>
        <Image
          source={require("../../../assets/icon.png")}
          style={styles.imgeWidht}
        />
        {updateAvailable === null ? (
          <ActivityIndicator size={30} color={Colors.RED} />
        ) : (
          <Text style={styles.updateText}>{"Update the App!"}</Text>
        )}
      </View>
      <View style={styles.mainbox}>
        <Text style={styles.most_trusted}>Most trusted for</Text>
        <Text style={styles.most_trusted}>Mutual Fund Investment</Text>
        <Image
          source={require("../../../assets/nse.png")}
          style={styles.nseimg}
        />
        <Image
          source={require("../../../assets/powerby.png")}
          style={styles.powerbyimg}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 70,
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainbox: {
    alignItems: "center",
  },
  slogan: {
    fontSize: 30,
    marginBottom: 15,
    color: Colors.BLACK,
  },
  sloganRed: {
    color: Colors.RED,
  },
  most_trusted: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 20,
  },
  nseimg: {
    marginVertical: 20,
  },
  updateText: {
    color: "red",
    textAlign: "center",
    fontSize: 20,
    paddingTop: 10,
    fontWeight: "bold",
  },
});

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { AuthActions } = require("../../store/AuthRedux");
  const { HomeActions } = require("../../store/HomeRedux");
  return {
    ...stateProps,
    ...ownProps,
    logout: () => dispatch(AuthActions.logout()),
    resetData: () => dispatch(HomeActions.resetData()),
  };
};
export default connect(
  mapStateToProps,
  undefined,
  mapDispatchToProps
)(SplashScreen);
