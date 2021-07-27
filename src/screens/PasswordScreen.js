import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    Button,
    View,
    ImageBackground,
    TouchableOpacity,
    Text,
    Dimensions,
    KeyboardAvoidingView,
    TextInput,
    ActivityIndicator
} from "react-native";
import { colors } from '../common/theme';
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';

export default function PasswordScreen(props) {
    return (
        <View style={styles.container}>
            <Header
                backgroundColor={colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../assets/icon.png')}
                    style={styles.logimg}
                />}
            />
            <View>
                <Image
                    source={require('../../assets/logo1.png')}
                    style={styles.passwordimg2}
                />
            </View>
            <Text style={styles.number}>Enter Password</Text>
            <TextInput style={styles.inputsec} />
            <Text style={styles.number}>Re-Enter Password</Text>
            <TextInput style={styles.inputsec} />
            <Text style={styles.refreshcode}>Have Referral Code?</Text>
            <Text style={styles.confrom_button}>By tapping confirm button ,you agreeing to the</Text>
            <CheckBox
                title='Terms & Conditions'
                containerStyle={styles.checkbox_style}
                textStyle={{ color: colors.RED, fontSize: 14 }}
                checked={false}
                checkedColor={colors.BLACK}
                uncheckedColor={colors.RED}
            />
            <TouchableOpacity style={styles.botton_box}>
                        <Text style={styles.get_otp}>CONFIRM</Text>
                        <AntDesign name={"right"} size={26} color={colors.WHITE} />
                    </TouchableOpacity>
            <View>
                <Image
                    source={require('../../assets/nse.png')}
                    style={styles.nseimg}
                />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',


    },
    header: {
        width: '100%',
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: colors.GREY_1,
        backgroundColor: '#F9F9F9',
        alignItems: "center",
        backgroundColor: colors.LIGHT_WHITE,
        paddingTop: 10,
        paddingBottom: 10,


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
        borderColor: colors.GRAY_LIGHT,
        width: '70%',
        height: 50,
        fontSize: 20,
        marginTop: 5,
        marginBottom: 20,
        borderRadius: 10,
        paddingHorizontal:10,
        backgroundColor: colors.LITTLE_WHITE,
    },
    refreshcode: {
        width: '70%',
        textAlign: "right",
        color: colors.RED,
        fontSize: 15,
    },
    confrom_button: {
        marginTop: 5,
        marginBottom: 5,
    },

    checkbox_style: {
        backgroundColor: colors.TRANSPARENT,
        borderColor: colors.TRANSPARENT,
    },
    botton_box: {
        flexDirection:'row',
        backgroundColor: colors.RED,
        paddingHorizontal: 70,
        paddingVertical: 10,
        marginTop: 20,
        borderRadius: 10,
    },
    get_otp: {
        color: colors.WHITE,
        fontSize: 22,
        fontWeight:'bold',
        marginRight:5,
    },
});