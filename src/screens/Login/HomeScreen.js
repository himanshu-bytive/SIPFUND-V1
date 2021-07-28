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
import { colors } from '../../common/theme';
import { Ionicons, Entypo } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';

export default function PasswordScreen(props) {
    return (
        <View style={styles.container}>
            <Header
                leftComponent={<TouchableOpacity style={{ marginTop: 20 }} onPress={() => props.navigation.toggleDrawer()}><Entypo name={"menu"} size={30} color={colors.RED} /></TouchableOpacity>}
                backgroundColor={colors.LIGHT_WHITE}
                containerStyle={styles.header}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
            />
            <View>
                <Image
                    source={require('../../../assets/Hello.png')}
                    style={styles.Helloimg}
                />
            </View>
            <Text style={styles.HelloIinvestor}>Hello, Investor</Text>

            <Text style={styles.HelloIinvestor1}>You’re almost ready to submit</Text>

            <TouchableOpacity onPress={()=> props.navigation.navigate('Faq')} style={styles.botton_box}>
                <Text style={styles.get_otp}>COMPLETE ACCOUNT SETUP</Text>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        borderBottomColor: colors.BLACK,
        borderBottomWidth: 1
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    Helloimg: {
        height: 300,
        width: 210,
    },

    HelloIinvestor: {
        fontSize: 16,
        fontWeight: "bold",

    },
    HelloIinvestor1: {
        fontSize: 16,
        color: colors.GREY_1,
        fontWeight: "bold",
        marginVertical: 30,
    },
    botton_box: {

        backgroundColor: colors.RED,
        width: '80%',
        paddingVertical: 20,
        marginTop: 20,
        borderRadius: 10,
    },
    get_otp: {
        color: colors.WHITE,
        fontSize: 17,
        fontWeight: 'bold',

        textAlign: "center",
    },
});