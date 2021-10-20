import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    View,
    Platform,
    ActivityIndicator,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert,
    Text,
} from "react-native";
import { connect } from 'react-redux'
import * as Location from 'expo-location';
import { Colors } from '../../common'
import { OtpInputs } from '../../components';
const width = Dimensions.get('window').width;

function OtpScreen(props) {
    const pageActive = useRef(false);
    const { otp, resendOtp, phone, isFetching, signUpSteps } = props;
    const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState([]);

    useEffect(() => {
        CheckIfLocationEnabled();
        GetCurrentLocation();
    }, []);

    useEffect(() => {
        if (signUpSteps == 1 && pageActive.current) {
            pageActive.current = false;
            props.navigation.navigate('createAccount')
        }
    }, [signUpSteps]);

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
                "deviceToken": "",
                "minorFlag": false,
                "mobileNo": phone,
                "otp": text,
                "platform": Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
                "referenceInfo":
                {
                    "latitude": displayCurrentAddress?.latitude,
                    "longitude": displayCurrentAddress?.longitude,
                    "mobileNo": phone,
                    "pincode": displayCurrentAddress?.pincode,
                }
            }
            pageActive.current = true;
            otp(params);
            setVerificationCode('')
        }
    }

    const reSendAction = async () => {
        let params = { "mobileNo": phone }
        resendOtp(params);
        setVerificationCode('')
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <ScrollView style={styles.containerScroll}>
                <View style={styles.containBox}>
                    <Text style={styles.slogan}>Achieve Your <Text style={styles.sloganRed}>Dreams</Text></Text>
                    <View style={styles.mainbox}>
                        <View>
                            <Image
                                source={require('../../../assets/logo.png')}
                                style={styles.logimg}
                            />
                        </View>
                        <Text style={styles.number}>Enter OTP to verify</Text>
                        <Text style={styles.number}>your mobile number</Text>
                        <View style={styles.otpsec}>
                            {!isFetching && (<OtpInputs
                                getOtp={(text) => { setVerificationCode(text), setError(null), onAction(text) }}
                            />)}
                            {isFetching && (<View style={styles.botton_box}><ActivityIndicator size={30} color={Colors.RED} /></View>)}
                            {!isFetching && (<View style={styles.button}>
                                <TouchableOpacity onPress={() => reSendAction()} style={styles.botton_box}>
                                    <Text style={styles.get_otp}>RESEND OTP</Text>
                                </TouchableOpacity>
                            </View>)}

                        </View>
                    </View>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Image
                        source={require('../../../assets/pan_footer_img.png')}
                        style={styles.nseimg}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
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
        paddingBottom: 50,
        paddingTop: 30,
    },
    logimg: {
        marginTop: 10,
        marginBottom: 15,
    },
    otpsec: {
        alignItems: 'center',
        marginTop: 0,
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
        otp: (params) => { AuthActions.otp(dispatch, params) },
        resendOtp: (params) => { AuthActions.resendOtp(dispatch, params) }
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(OtpScreen)