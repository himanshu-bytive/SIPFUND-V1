import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    Button,
    ScrollView,
    View,
    Linking,
    ImageBackground,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    ActivityIndicator
} from "react-native";
import { connect } from 'react-redux'
import * as Location from 'expo-location';
import { Styles, Config, Colors, FormValidate } from '../../common'
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import { Image, Header, CheckBox, colors } from 'react-native-elements';

function CreateAccountScreen(props) {
    const pageActive = useRef(false);
    const emailInput = useRef(null);
    const passwordInput = useRef(null);
    const referenceCodeInput = useRef(null);
    const { creatAccount, isFetching, error, signUpSteps, phone } = props;
    const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState([]);
    const [referral, setReferral] = useState(false);

    useEffect(() => {
        CheckIfLocationEnabled();
        GetCurrentLocation();
    }, []);

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
        let { status } = await Location.requestForegroundPermissionsAsync();
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

    useEffect(() => {
        if (signUpSteps >= 3 && pageActive.current) {
            pageActive.current = false;
            props.navigation.navigate('login')
        }
        if (error) {
            console.log(error)
        }
    }, [signUpSteps, error]);

    const [state, setState] = useState({
        email: '',
        password: '',
        referenceCode: '',
        term: false,
    });

    const [errors, setError] = useState({
        email: null,
        password: null,
        referenceCode: null,
        term: null,
    });

    const onAction = async () => {
        if (!FormValidate.isEmail(state.email)) {
            emailInput.current.focus();
            setError({ ...errors, email: 'Please enter Email Address' });
            return
        }
        if (!state.password) {
            passwordInput.current.focus();
            setError({ ...errors, password: 'Please enter Password' });
            return
        }
        if (!state.term) {
            setError({ ...errors, term: 'Please check Terms' });
            return
        }
        pageActive.current = true;
        let params = {
            "deviceToken": "",
            "email": state.email,
            "minorFlag": false,
            "mobileNo": String(phone),
            "pan": "",
            "password": state.password,
            "platform": Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
            "referenceCode": state.referenceCode,
            "referenceInfo":
            {
                "deviceId": "",
                "latitude": displayCurrentAddress?.latitude,
                "longitude": displayCurrentAddress?.longitude,
                "mobileNo": phone,
                "pincode": displayCurrentAddress?.pincode,
            }
        }
        creatAccount(params);
        setState({ ...state, email: '', password: '', referenceCode:'', term: false });
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <Header
                backgroundColor={Colors.LIGHT_WHITE}
                containerStyle={styles.header}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
            />
            <ScrollView style={styles.containerScroll}>
                <View style={styles.mainBox}>
                    <Image
                        source={require('../../../assets/luck.png')}
                        style={styles.passwordimg2}
                    />

                    <Text style={styles.number}>Enter Email</Text>
                    <TextInput
                        ref={emailInput}
                        style={styles.inputsec}
                        placeholder={'Email'}
                        onChangeText={(email) => { setError({ ...errors, email: null }); setState({ ...state, email }) }}
                        value={state.email}
                    />
                    {(errors.email) && (<Text style={styles.error}>{errors.email}</Text>)}
                    <Text style={styles.number}>Enter Password</Text>
                    <TextInput
                        ref={passwordInput}
                        style={styles.inputsec}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        onChangeText={(password) => { setError({ ...errors, password: null }); setState({ ...state, password }) }}
                        value={state.password}
                    />
                    {(errors.password) && (<Text style={styles.error}>{errors.password}</Text>)}
                    <TouchableOpacity onPress={() => setReferral(!referral)} style={{ alignSelf: 'flex-end', marginVertical: 10 }}>
                        <Text style={styles.refreshcode}>Have Referral Code?</Text>
                    </TouchableOpacity>
                    {referral && (<View style={{ width: '100%' }}>
                        <Text style={[styles.number, { marginTop: 0, textAlign: 'center' }]}>Referral Code</Text>
                        <TextInput
                            ref={referenceCodeInput}
                            style={styles.inputsec}
                            placeholder={'Reference Code'}
                            onChangeText={(referenceCode) => { setError({ ...errors, referenceCode: null }); setState({ ...state, referenceCode }) }}
                            value={state.referenceCode}
                        />
                        {(errors.referenceCode) && (<Text style={styles.error}>{errors.referenceCode}</Text>)}
                    </View>)}
                    <Text style={styles.confrom_button}>By tapping confirm button, you agreeing to the</Text>
                    <CheckBox
                        title={<TouchableOpacity onPress={() => Linking.openURL('https://sipfund.com/termofuse.html')}><Text style={{ color: Colors.RED }}>Terms & Conditions</Text></TouchableOpacity>}
                        containerStyle={styles.checkbox_style}
                        textStyle={{ color: Colors.RED, fontSize: 14 }}
                        checked={state.term}
                        checkedColor={Colors.BLACK}
                        uncheckedColor={Colors.RED}
                        onPress={() => { setError({ ...errors, term: null }); setState({ ...state, term: !state.term }) }}
                    />
                    {(errors.term) && (<Text style={styles.error}>{errors.term}</Text>)}
                    <View style={styles.button}>
                        {isFetching ? <View style={styles.botton_box}><ActivityIndicator size={30} color={Colors.WHITE} /></View> :
                            <TouchableOpacity onPress={() => onAction()} style={styles.botton_box}>
                                <Text style={styles.get_otp}>CONFIRM</Text>
                                <AntDesign name={"right"} size={26} color={Colors.WHITE} />
                            </TouchableOpacity>}
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    containerScroll: {
        width: '100%'
    },
    header: {
        borderBottomColor: Colors.BLACK,
        borderBottomWidth: 1
    },
    mainBox: {
        alignItems: 'center',
        paddingHorizontal: 30
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    passwordimg2: {
        marginTop: 30,
        marginBottom: 40,
        height: 136,
        width: 136,
    },
    text_box: {
        flexDirection: "row",
        marginTop: 10,
        paddingLeft: 70,
    },

    slogan: {
        fontSize: 25,
        color: '#000',
        marginTop: 100
    },
    sloganRed: {
        color: '#ff0000',
    },
    otpsec: {
        fontSize: 20,
    },
    nseimg: { marginTop: 50, },
    number: { fontSize: 22, marginTop: 20 },
    inputsec: {
        borderWidth: 2,
        borderColor: Colors.GRAY_LIGHT,
        width: '100%',
        height: 50,
        fontSize: 20,
        marginTop: 5,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: Colors.LITTLE_WHITE,
    },
    error: {
        color: Colors.RED,
        fontSize: 13,
    },
    refreshcode: {
        textAlign: "right",
        color: Colors.RED,
        fontSize: 15,
    },
    confrom_button: {
        marginTop: 5,
        marginBottom: 5,
    },

    checkbox_style: {
        backgroundColor: Colors.TRANSPARENT,
        borderColor: Colors.TRANSPARENT,
    },
    botton_box: {
        flexDirection: 'row',
        backgroundColor: Colors.RED,
        paddingHorizontal: 70,
        paddingVertical: 10,
        marginTop: 20,
        borderRadius: 10,
    },
    get_otp: {
        color: Colors.WHITE,
        fontSize: 22,
        fontWeight: 'bold',
        marginRight: 5,
    },
});

const mapStateToProps = (state) => ({
    isFetching: state.auth.isFetching,
    error: state.auth.error,
    signUpSteps: state.auth.signUpSteps,
    validFlag: state.auth.validFlag,
    phone: state.auth.phone,
})

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { AuthActions } = require('../../store/AuthRedux')
    return {
        ...stateProps,
        ...ownProps,
        creatAccount: (params) => { AuthActions.creatAccount(dispatch, params) },
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(CreateAccountScreen)