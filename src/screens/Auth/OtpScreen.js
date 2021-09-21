import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    View,
    TextInput,
    Dimensions,
    ScrollView,
    Text,
} from "react-native";
import { connect } from 'react-redux'
import { Styles, Config, Colors, FormValidate } from '../../common'
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import { Image } from 'react-native-elements';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function OtpScreen(props) {

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
                            <TextInput style={styles.inputsec} />
                            <TextInput style={styles.inputsec} />
                            <TextInput style={styles.inputsec} />
                            <TextInput style={styles.inputsec} />
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
        flexDirection: 'row',
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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(OtpScreen)