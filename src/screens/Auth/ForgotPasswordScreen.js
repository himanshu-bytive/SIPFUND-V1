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
import { colors } from '../../common/theme';
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';

export default function ForgotPasswordScreen(props) {
    return (
        <View style={styles.container}>
            <Header
                backgroundColor={colors.LIGHT_WHITE}
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
                <Text style={styles.email}>Enter Email Address</Text>
                <View style={styles.border}></View>
                <View style={styles.bottom}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('home')} style={styles.botton_box}>
                        <Text style={styles.get_otp}>Send My Password</Text>

                    </TouchableOpacity></View>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.GRAY_LIGHT_2,
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
    confrom_button: { fontSize: 15, },
    bottom: { alignItems: "center", },
    botton_box: {
        backgroundColor: colors.LIGHT_RED,
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginTop: 20,
        marginVertical: 20,
        width: '90%'

    },
    get_otp: {
        color: colors.WHITE,
        fontSize: 16,
        marginRight: 5,
        textAlign: "center",
    },
    email: {
        fontSize: 16,
        paddingHorizontal: 25,
        marginTop: 30,
        color: colors.GRAY_LIGHT_1,
    },
    border: {
        borderBottomWidth: 2,
        borderBottomColor: colors.GRAY_LIGHT,
        marginHorizontal: 25,
        marginVertical: 3,
    },
});