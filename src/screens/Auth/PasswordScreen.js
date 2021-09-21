import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    Button,
    ScrollView,
    View,
    ImageBackground,
    TouchableOpacity,
    Text,
    Platform,
    KeyboardAvoidingView,
    TextInput,
    ActivityIndicator
} from "react-native";
import { connect } from 'react-redux'
import * as Location from 'expo-location';
import { Styles, Config, Colors, FormValidate } from '../../common'
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';

function PasswordScreen(props) {
    const pageActive = useRef(false);
    const emailInput = useRef(null);
    const userNameInput = useRef(null);
    const passwordInput = useRef(null);
    const { createAccount, isFetching, error, signUpSteps, phone } = props;
    const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState([]);

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

    useEffect(() => {
        // && pageActive.current
        // if (signUpSteps == 0) {
        //     pageActive.current = false;
        //     props.navigation.navigate('otp')
        // }
        // if (signUpSteps == 1) {
        //     pageActive.current = false;
        //     props.navigation.navigate('password')
        // }
        // if (signUpSteps == 3) {
        //     pageActive.current = false;
        //     props.navigation.navigate('createpassword')
        // }
        if (error) {
            console.log(error)
        }
    }, [signUpSteps, error]);

    const [state, setState] = useState({
        email: '',
        userName: '',
        password: '',
        term: false,
    });

    const [errors, setError] = useState({
        email: null,
        userName: null,
        password: null,
        term: null,
    });

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const emailValid = re.test(email);
        if (!emailValid) {
            emailInput.current.focus();
            setError({ ...errors, email: 'Please enter Email Address' });
        }
        return emailValid;
    }

    const onAction = async () => {
        if (!validateEmail(state.email)) {
            return
        }
        if (!state.userName) {
            userNameInput.current.focus();
            setError({ ...errors, userName: 'Please enter User Name' });
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
            "email": state.email,
            "password": state.password,
            "mobileNo": phone,
            "platform": Platform.OS,
            "referenceCode": "",
            "deviceToken": "",
            "userName": state.userName,
            "referenceInfo": {
                "mobileNo": phone,
                "latitude": displayCurrentAddress?.latitude,
                "longitude": displayCurrentAddress?.longitude,
                "address": displayCurrentAddress?.address,
                "city": displayCurrentAddress?.city,
                "state": displayCurrentAddress?.state,
                "pincode": displayCurrentAddress?.pincode,
                "deviceId": "108"
            }
        }
        createAccount(params);
        setState({ ...state, email: '', password: '', userName: '', term: false });
    }

    return (
        <View style={styles.container}>
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
                    <Text style={styles.number}>Enter User Name</Text>
                    <TextInput
                        ref={userNameInput}
                        style={styles.inputsec}
                        placeholder={'Username'}
                        onChangeText={(userName) => { setError({ ...errors, userName: null }); setState({ ...state, userName }) }}
                        value={state.userName}
                    />
                    {(errors.userName) && (<Text style={styles.error}>{errors.userName}</Text>)}
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
                    <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                        <Text style={styles.refreshcode}>Have Referral Code?</Text>
                    </TouchableOpacity>

                    <Text style={styles.confrom_button}>By tapping confirm button, you agreeing to the</Text>
                    <CheckBox
                        title='Terms & Conditions'
                        containerStyle={styles.checkbox_style}
                        textStyle={{ color: Colors.RED, fontSize: 14 }}
                        checked={state.term}
                        checkedColor={Colors.BLACK}
                        uncheckedColor={Colors.RED}
                        onPress={(term) => { setError({ ...errors, term: null }); setState({ ...state, term }) }}
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
        </View>

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
        createAccount: (params) => { AuthActions.createAccount(dispatch, params) },
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(PasswordScreen)