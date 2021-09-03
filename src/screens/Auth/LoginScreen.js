import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TextInput,
    Image,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";
import { connect } from 'react-redux'
import { Styles, Config, Colors, FormValidate } from '@common'
import { MaterialIcons } from 'react-native-vector-icons';
const width = Dimensions.get('window').width;

function LoginScreen(props) {
    const phoneInput = useRef(null);
    const { login, isFetching, error, user, phones } = props;

    useEffect(() => {
        if (user) {
            props.navigation.navigate('otp')
            // createpassword
        }
        if (error) {
            console.log(error)
        }
    }, [user, error]);

    const [state, setState] = useState({
        phone: '',
    });


    const [errors, setError] = useState({
        phone: null,
    });

    const onAction = async (ph) => {
        // props.navigation.navigate('otp')
        let phone = ph ? ph : state.phone
        if (phone) {
            login(phone);
            setState({ ...state, phone: '' });
        } else {
            phoneInput.current.focus();
            setError({ ...errors, phone: 'Please enter phone number' });
        }
    }

    return (
        <View style={styles.container}>
            <View><Text style={styles.slogan}>Achieve Your <Text style={styles.sloganRed}>Dreams</Text></Text></View>
            <View style={styles.mainbox}>
                <View style={{ alignItems: "center" }}>
                    <Image
                        source={require('../../../assets/logo.png')}
                        style={styles.logoimg}
                    />
                </View>
                {(phones.lenght > 0) && (<Text style={styles.continue}>Continue with</Text>)}
                {phones.map((item, key) => <TouchableOpacity key={key} onPress={() => onAction(item)} style={styles.phone_number}>
                    <MaterialIcons name="call" size={20} color="#838280" />
                    <Text style={styles.number}>{item}</Text>
                </TouchableOpacity>)}
                <View style={styles.or}>
                    {(phones.lenght > 0) && (<Text style={styles.code}>Or</Text>)}
                    <Text style={styles.code}>Enter Your Mobile number</Text>
                </View>
                <View style={styles.text_box}>
                    <MaterialIcons name="call" size={20} color="#838280" />
                    <TextInput
                        ref={phoneInput}
                        style={styles.inputsec}
                        placeholder={'Phone'}
                        keyboardType='numeric'
                        onChangeText={(phone) => { setError({ ...errors, phone: null }); setState({ ...state, phone }) }}
                        value={state.phone}
                    />
                </View>
                {(errors.phone) && (<View style={styles.text_box}><Text style={styles.error}>{errors.phone}</Text></View>)}

                <View style={styles.button}>
                    {/* {isFetching ? <View style={styles.botton_box}><ActivityIndicator size={30} color={Colors.WHITE} /></View> :
                        <TouchableOpacity onPress={() => onAction()} style={styles.botton_box}>
                            <Text style={styles.get_otp}>GET OTP</Text>
                        </TouchableOpacity>} */}


                    <TouchableOpacity onPress={() => onAction()} style={styles.botton_box}>
                        <Text style={styles.get_otp}>GET OTP</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.otp}>
                    <Text>We will send you OTP on your mobile number</Text>
                </View>
            </View>
            <View>
                <Image
                    source={require('../../../assets/nse.png')}
                    style={styles.nseimg}
                />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.GREY_1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    slogan: {
        fontSize: 30,
        color: Colors.BLACK,
        marginBottom: 30
    },
    sloganRed: {
        color: Colors.RED
    },
    mainbox: {
        borderRadius: 25,
        backgroundColor: Colors.WHITE,
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
        borderColor: '#828282',
        width: "50%"
    },
    phone_number: {
        flexDirection: "row",
        paddingLeft: 70,
    },
    number: {
        fontSize: 18,
        marginLeft: 5,
    },
    code: {
        marginTop: 10,
        fontSize: 19,
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
        width: width - 50,
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
    isFetching: state.auth.isFetching,
    error: state.auth.error,
    user: state.auth.user,
    phones: state.auth.phones,
})

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { AuthActions } = require('../../store/AuthRedux')
    return {
        ...stateProps,
        ...ownProps,
        login: (phone) => { AuthActions.login(dispatch, phone) }
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(LoginScreen)