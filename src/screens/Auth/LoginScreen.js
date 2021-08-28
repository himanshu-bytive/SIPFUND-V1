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
import { MaterialIcons, AntDesign } from 'react-native-vector-icons';
const width = Dimensions.get('window').width;

function LoginScreen(props) {
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
                <Text style={styles.continue}>Continue with</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('createpassword')}>
                    <View style={styles.phone_number}>
                        <MaterialIcons name="call" size={20} color="#838280" />
                        <Text style={styles.number}>9850612345</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.phone_number}>
                    <MaterialIcons name="call" size={20} color="#838280" />
                    <Text style={styles.number}>9850612345</Text>
                </View>
                <View style={styles.or}>
                    <Text style={styles.code}>Or</Text>
                    <Text style={styles.code}>Enter Your Mobile number</Text>
                </View>
                <View style={styles.text_box}>
                    {<MaterialIcons name="call" size={20} color="#838280" />}
                    <TextInput style={{ borderBottomWidth: 1, borderColor: '#828282', width: "50%" }} />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('otp')} style={styles.botton_box}>
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
    ticket: state.auth.ticket,
    users: state.auth.users,
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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(LoginScreen)