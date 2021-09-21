import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    Button,
    ScrollView,
    View,
    ImageBackground,
    TouchableOpacity,
    Text,
    Dimensions,
    KeyboardAvoidingView,
    TextInput,
    ActivityIndicator
} from "react-native";
import { connect } from 'react-redux'
import { Styles, Config, Colors, FormValidate } from '../../common'
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';

function ForgotPasswordScreen(props) {
    const pageActive = useRef(false);
    const emailInput = useRef(null);
    const { createAccount, isFetching, signUpSteps, phone } = props;

    useEffect(() => {
        // && pageActive.current
        // if (signUpSteps == 0) {
        //     pageActive.current = false;
        //     props.navigation.navigate('otp')
        // }
    }, [signUpSteps]);

    const [state, setState] = useState({
        email: '',
    });

    const [errors, setError] = useState({
        email: null,
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
        pageActive.current = true;
        let params = {
            "email": state.email,
        }
        createAccount(params);
        setState({ ...state, email: '' });
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
                        source={require('../../../assets/lock.png')}
                        style={styles.passwordimg2}
                    />
                    <Text style={styles.number}>Forgot Password?</Text>
                    <Text style={styles.confrom_button}>You can reset your password here</Text>
                </View>
                <TextInput
                    ref={emailInput}
                    style={styles.inputsec}
                    placeholder={'Enter Email Address'}
                    onChangeText={(email) => { setError({ ...errors, email: null }); setState({ ...state, email }) }}
                    value={state.email}
                />
                {(errors.email) && (<Text style={styles.error}>{errors.email}</Text>)}
                <View style={styles.bottom}>
                    {isFetching ? <View style={styles.botton_box}><ActivityIndicator size={30} color={Colors.WHITE} /></View> :
                        <TouchableOpacity onPress={() => onAction()} style={styles.botton_box}>
                            <Text style={styles.get_otp}>Send My Password</Text>
                        </TouchableOpacity>}
                </View>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.GRAY_LIGHT_2,
    },
    containerScroll: {
        width: '100%'
    },
    mainBox: {
        alignItems: 'center',
        marginTop: 60,
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    passwordimg2: {
        marginTop: 30,
        height: 140,
        width: 116,
    },
    number: {
        fontSize: 17,
        paddingVertical: 15,
    },
    inputsec: {
        borderBottomWidth: 2,
        borderColor: Colors.GRAY_LIGHT,
        height: 50,
        fontSize: 20,
        marginTop: 5,
        paddingHorizontal: 10,
        marginHorizontal: 25,
        backgroundColor: Colors.LITTLE_WHITE,
    },
    error: {
        color: Colors.RED,
        fontSize: 13,
        marginLeft: 25,
        marginTop: 5,
    },
    confrom_button: { fontSize: 15, },
    bottom: { alignItems: "center", },
    botton_box: {
        backgroundColor: Colors.LIGHT_RED,
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginTop: 20,
        marginVertical: 20,
        width: '90%'

    },
    get_otp: {
        color: Colors.WHITE,
        fontSize: 16,
        marginRight: 5,
        textAlign: "center",
    },
    email: {
        fontSize: 16,
        paddingHorizontal: 25,
        marginTop: 30,
        color: Colors.GRAY_LIGHT_1,
    },
    border: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.GRAY_LIGHT,
        marginHorizontal: 25,
        marginVertical: 3,
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
        logOut: () => { AuthActions.logOut(dispatch) },
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(ForgotPasswordScreen)