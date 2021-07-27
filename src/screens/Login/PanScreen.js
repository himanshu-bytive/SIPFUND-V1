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
import { Ionicons, AntDesign, Entypo, FontAwesome5 } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';

export default function PasswordScreen(props) {
    return (
        <View style={styles.container}>

            <Header
                leftComponent={<View style={{ marginTop: 20 }}><Entypo name={"menu"} size={30} color={colors.RED} /></View>}
                containerStyle={styles.header}
                backgroundColor={colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
            />
            <View style={styles.mainbox}>


                <View style={styles.imgbox}>

                    <Image
                        source={require('../../../assets/Pancard.png')}
                        style={styles.Panimg}
                    />
                </View>

                <Text style={styles.pan}>PAN Number</Text>

                <View style={styles.text_box}>
                    {<FontAwesome5 name="credit-card" size={20} color="#838280" />}
                    <TextInput style={{ borderBottomWidth: 1, borderColor: '#828282', width: "100%" }} />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.botton_box}>
                        <Text style={styles.get_otp}>CREATE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        borderBottomColor: colors.BLACK,
        borderBottomWidth: 1
    },
    mainbox: {
        padding: 60,

    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    imgbox: {
        alignItems: "center",
        marginBottom: 20,
    },
    Panimg: {
        height: 130,
        width: 225,
        marginVertical: 30,

    },


    pan: {
        fontSize: 20,
        color: "#84898E",
        fontWeight: "bold",
        paddingLeft: 50,
    },
    text_box: {
        marginTop: 10,
    },
    button: {
        alignItems: "center",
        marginVertical: 60,
    },
    botton_box: {
        alignItems: "center",
        backgroundColor: colors.RED,
        width: "80%",
        paddingVertical: 10,
        marginTop: 20,
        borderRadius: 5,

    },
    get_otp: {
        color: colors.WHITE,
        fontSize: 20,
        fontWeight: 'bold',

    },
});