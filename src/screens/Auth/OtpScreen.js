import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    View,
    Platform,
    ActivityIndicator,
    Dimensions,
    ScrollView,
    Alert,
    Text,
} from "react-native";
import { connect } from 'react-redux'
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import { Styles, Config, Colors, FormValidate } from '../../common'
import { Image } from 'react-native-elements';
import { OtpInputs } from '../../components';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function OtpScreen(props) {
    const pageActive = useRef(false);
    const { otp, phone, isFetching, error, signUpSteps, phones } = props;
    const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState([]);

    useEffect(() => {
        CheckIfLocationEnabled();
        GetCurrentLocation();
    }, []);

    useEffect(() => {
        if (signUpSteps == 1 && pageActive.current) {
            pageActive.current = false;
            props.navigation.navigate('password')
        }
        if (error) {
            console.log(error)
        }
    }, [signUpSteps, error]);

    const CheckIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();
        if (!enabled) {
            Alert.alert(
                'Location Service not enabled',
                'Please enable your location services to continue',
                [{ text: 'OK' }],
                { cancelable: false }
            );
        } else {
            setLocationServiceEnabled(enabled);
        }
    };

    const GetCurrentLocation = async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert(
                'Permission not granted',
                'Allow the app to use location service.',
                [{ text: 'OK' }],
                { cancelable: false }
            );
        }
        let { coords } = await Location.getCurrentPositionAsync();
        if (coords) {
            const { latitude, longitude } = coords;
            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude
            });
            for (let item of response) {
                setDisplayCurrentAddress({
                    "latitude": latitude,
                    "longitude": longitude,
                    "address": item.name,
                    "city": item.city,
                    "state": item.street,
                    "pincode": item.postalCode,
                });
            }
        }
    }
    const [verificationCode, setVerificationCode] = useState('');
    const [errors, setError] = useState(null);

    const onAction = async (text) => {
        if (text.length === 4) {
            let params = {
                "mobileNo": phone,
                "otp": text,
                "platform": Platform.OS,
                "deviceToken": "",
                "referenceInfo": {
                    "mobileNo": phone,
                    "latitude": displayCurrentAddress?.latitude,
                    "longitude": displayCurrentAddress?.longitude,
                    "address": displayCurrentAddress?.address,
                    "city": displayCurrentAddress?.city,
                    "state": displayCurrentAddress?.state,
                    "pincode": displayCurrentAddress?.pincode,
                    "deviceId": "000"
                }
            }
            pageActive.current = true;
            otp(params);
            setVerificationCode('')
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.containerScroll}>
                <View style={styles.containBox}>
                    <Text style={styles.slogan}>Achieve Your <Text style={styles.sloganRed}>Dreams</Text></Text>
                    <View style={styles.mainbox}>
                        <View>
                            <Image
                                onPress={() => props.navigation.navigate('password')}
                                source={require('../../../assets/logo.png')}
                                style={styles.logimg}
                            />
                        </View>
                        <Text style={styles.number}>Enter OTP to verify</Text>
                        <Text style={styles.number}>your mobile number</Text>
                        <View style={styles.otpsec}>
                            <OtpInputs
                                getOtp={(text) => { setVerificationCode(text), setError(null), onAction(text) }}
                            />
                            {isFetching && (<View style={styles.botton_box}><ActivityIndicator size={30} color={Colors.RED} /></View>)}
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Image
                        source={require('../../../assets/nse.png')}
                        style={styles.nseimg}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.GREY_1,
    },
    slogan: {
        fontSize: 30,
        color: Colors.BLACK,
        marginTop: 100,
        marginBottom: 20
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
        paddingBottom: 120,
        paddingTop: 30,
    },
    logimg: {
        height: 156,
        marginTop: 10,
        width: 145,
        marginBottom: 25,
    },
    otpsec: {
        alignItems: 'center',
        marginTop: 20,
    },
    inputsec: {
        borderBottomWidth: 4,
        width: 35,
        borderColor: Colors.GREY_1,
        marginLeft: 4,
        marginRight: 4,
    },
    nseimg: {
        height: 73,
        width: width - 50,
        marginVertical: 50,
    },
    number: {
        fontSize: 20,
        textAlign: "center",
        paddingTop: 4,
        paddingBottom: 4,
    },
    containerScroll: {
        width: '100%'
    },

});

const mapStateToProps = (state) => ({
    isFetching: state.auth.isFetching,
    phone: state.auth.phone,
    signUpSteps: state.auth.signUpSteps,
})

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { AuthActions } = require('../../store/AuthRedux')
    return {
        ...stateProps,
        ...ownProps,
        otp: (params) => { AuthActions.otp(dispatch, params) }
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(OtpScreen)