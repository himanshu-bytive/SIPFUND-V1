import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    ActivityIndicator
} from "react-native";
import { connect } from 'react-redux'
import { Colors, Config } from '../../common'
import { AntDesign } from 'react-native-vector-icons';
import { Image, Header } from 'react-native-elements';

function LoginScreen(props) {
    const pageActive = useRef(false);
    const usernameInput = useRef(null);
    const passwordInput = useRef(null);
    const { login, isFetching, token, getUserDetails, user } = props;

    useEffect(() => {
        if (token && pageActive.current) {
            pageActive.current = false;
            getUserDetails({}, token)
        }
        if (user) {
            props.navigation.navigate('Home')
            // if (user.userDetails.panVerified) {
            //     props.navigation.navigate('Home')
            // } else {
            //     props.navigation.navigate('Pan')
            // }
        }
    }, [token, user]);


    const [state, setState] = useState({
        // username: '',
        // password: '',
        username: 'kavin@techosto.com',
        password: 'test@123',
    });

    const [errors, setError] = useState({
        username: null,
        password: null,
    });

    const onAction = async () => {
        if (!state.username) {
            usernameInput.current.focus();
            setError({ ...errors, username: 'Please enter Username' });
            return
        }
        if (!state.password) {
            passwordInput.current.focus();
            setError({ ...errors, password: 'Please enter Password' });
            return
        }
        pageActive.current = true;
        let params = {
            "username": state.username,
            "password": state.password,
            "grant_type": "password",
            "scope": "user",
            "deviceToken": ""
        }
        login(params, Config.loginToken);
        setState({ ...state, username: '', password: '', term: false });
    }

    return (
        <View style={styles.container}>
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={30} color={Colors.RED} /></TouchableOpacity>}
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

                    <Text style={styles.number}>Username</Text>
                    <TextInput
                        ref={usernameInput}
                        style={styles.inputsec}
                        placeholder={'Username'}
                        onChangeText={(username) => { setError({ ...errors, username: null }); setState({ ...state, username }) }}
                        value={state.username}
                    />
                    {(errors.username) && (<Text style={styles.error}>{errors.username}</Text>)}
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
                    <TouchableOpacity onPress={() => props.navigation.navigate('forgotpassword')}>
                        <Text style={styles.refreshcode}>Forgot Your Password?</Text>
                    </TouchableOpacity>


                    <View style={styles.conform}>
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
    header: {
        borderBottomColor: Colors.BLACK,
        borderBottomWidth: 1
    },
    containerScroll: {
        width: '100%'
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
        marginTop: 20,
        marginBottom: 30,
        height: 136,
        width: 136,
    },
    number: { fontSize: 20, },
    inputsec: {
        borderWidth: 2,
        borderColor: Colors.GRAY_LIGHT,
        width: '90%',
        height: 50,
        fontSize: 20,
        marginTop: 5,
        marginBottom: 20,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: Colors.LITTLE_WHITE,
    },
    refreshcode: {
        textAlign: "center",
        color: Colors.RED,
        fontSize: 15,
    },
    botton_box: {
        flexDirection: 'row',
        backgroundColor: Colors.RED,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 10,
        justifyContent: "center",
    },
    get_otp: {
        color: Colors.WHITE,
        fontSize: 22,
        fontWeight: 'bold',
        marginRight: 5,
    },
    phone_number: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 30,
    },
    numbersec: {
        fontSize: 17,
        paddingLeft: 10,
    },
    conform: {
        width: '90%',
    },
});

const mapStateToProps = (state) => ({
    isFetching: state.auth.isFetching,
    user: state.home.user,
    token: state.auth.token,
})

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { AuthActions } = require('../../store/AuthRedux')
    const { HomeActions } = require('../../store/HomeRedux')
    return {
        ...stateProps,
        ...ownProps,
        login: (params, token) => { AuthActions.login(dispatch, params, token) },
        getUserDetails: (params, token) => { HomeActions.getUserDetails(dispatch, params, token) },
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(LoginScreen)