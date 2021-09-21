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

function PasswordScreen(props) {
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

                    <Text style={styles.number}>Enter Password</Text>
                    <TextInput style={styles.inputsec} />
                    <Text style={styles.number}>Re-Enter Password</Text>
                    <TextInput style={styles.inputsec} />

                    <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                        <Text style={styles.refreshcode}>Have Referral Code?</Text>
                    </TouchableOpacity>

                    <Text style={styles.confrom_button}>By tapping confirm button ,you agreeing to the</Text>
                    <CheckBox
                        title='Terms & Conditions'
                        containerStyle={styles.checkbox_style}
                        textStyle={{ color: Colors.RED, fontSize: 14 }}
                        checked={false}
                        checkedColor={Colors.BLACK}
                        uncheckedColor={Colors.RED}
                    />
                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={styles.botton_box}>
                        <Text style={styles.get_otp}>CONFIRM</Text>
                        <AntDesign name={"right"} size={26} color={Colors.WHITE} />
                    </TouchableOpacity>
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
    number: { fontSize: 22, },
    inputsec: {
        borderWidth: 2,
        borderColor: Colors.GRAY_LIGHT,
        width: '100%',
        height: 50,
        fontSize: 20,
        marginTop: 5,
        marginBottom: 20,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: Colors.LITTLE_WHITE,
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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(PasswordScreen)