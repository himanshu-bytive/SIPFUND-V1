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
    ActivityIndicator,


} from "react-native";
import { colors } from '../../common/theme';
import { Ionicons, AntDesign, MaterialIcons, Feather, Entypo, FontAwesome, FontAwesome5, } from 'react-native-vector-icons';
import { Image, Header, ListItem, Overlay, Slider } from 'react-native-elements';

export default function ReturnsCalculator(props) {

    return (<View style={styles.mainbox}>
        <Text style={styles.check}>Check if you would have invested in the past.</Text>
        <View style={{ alignItems: "center", }}>
            <View style={styles.click_box}>

                <TouchableOpacity style={styles.botton_box}>
                    <Text style={styles.get_otp}>SIP</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botton_box2}>
                    <Text style={styles.get_otp2}>Lumpsum</Text>
                </TouchableOpacity>
            </View>
        </View>


        <View style={{ marginHorizontal: 20, }}>
            <Slider
                maximumValue={60}
                minimumValue={5}
                value={21}
                trackStyle={{ height: 4, backgroundColor: 'transparent' }}
            />
        </View>

        <View style={styles.amount_box}>
            <Text style={styles.amount}>Amount Per Month</Text>
            <Text style={styles.price}>Rs.4000</Text>
        </View>

        <View style={styles.back_sec}>
            <View style={styles.back1}>
                <Text style={styles.back_year}>1Y Back</Text>
                <View style={{ borderWidth: 1, borderColor: colors.RED, marginTop: 5, }}></View>

            </View>
            <View style={styles.back1}>
                <Text style={styles.back_year2}>3Y Back</Text>
                <View style={{ borderWidth: 1, borderColor: colors.DEEP_GRAY, marginTop: 5, }}></View>
            </View>

            <View style={styles.back1}>
                <Text style={styles.back_year2}>5Y Back</Text>
                <View style={{ borderWidth: 1, borderColor: colors.DEEP_GRAY, marginTop: 5, }}></View>
            </View>

        </View>
        <Text style={styles.rs}> Rs. 52,000</Text>
        <Text style={styles.with}>With 9.5% returns per annum</Text>

    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerScroll: {
        width: '100%'
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    contain_box: { margin: 20, },
    bottom_sec: { paddingVertical: 10, },
    holding: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: colors.RED,
        paddingVertical: 5,

    },
    holding_text: {
        fontSize: 18,
        color: colors.RED,
    },
    holding_icon: {
        position: 'absolute',
        right: 0,
        marginTop: 5,
    },

    submit: {
        backgroundColor: colors.LIGHT_RED,
        alignItems: "center",
        borderRadius: 5,
    },
    submit_text: {
        fontSize: 25,
        color: colors.WHITE,
        paddingVertical: 10,
    },

    get_otp: {
        color: colors.WHITE,
        fontSize: 16,
        marginRight: 5,
        textAlign: "center",
    },
    tax_left: {
        flexDirection: "row",
        width: '66%'
    },
    tax_left_text: {
        fontSize: 18,
        fontWeight: "bold",
        paddingTop: 10,
    },
    mainbox: {
        margin: 5,
        width: '100%',
        borderWidth: 1,
        borderColor: colors.GRAY_LIGHT,
        borderRadius: 20,
    },
    check: {
        fontSize: 15,
        marginLeft: 30,
        marginTop: 10,
    },
    click_box: {
        flexDirection: "row",
        marginHorizontal: 20,
    },
    botton_box: {
        width: "50%",
        backgroundColor: colors.RED,
        paddingVertical: 10,
        marginTop: 20,
        marginBottom: 20,

        borderColor: colors.DEEP_GRAY,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    get_otp: {
        color: colors.WHITE,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
    },
    botton_box2: {
        width: "50%",
        borderWidth: 1,
        paddingVertical: 10,
        marginTop: 20,
        marginBottom: 20,

        borderColor: colors.DEEP_GRAY,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    get_otp2: {
        color: colors.RED,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
    },
    amount_box: {
        flexDirection: "row",
        marginVertical: 10,
    },
    amount: {
        fontSize: 18,
        marginLeft: 20,
        width: "73%",
    },
    price: {
        fontSize: 18,
        color: colors.RED,

    },
    back_sec: {
        flexDirection: "row",
    },
    back1: {
        width: "20%",
        marginHorizontal: 30,

    },
    back_year: {
        fontSize: 18,
        color: colors.RED,
    },
    back_year2: {
        fontSize: 18,

    },
    rs: {
        fontSize: 20,
        color: colors.RED,
        marginTop: 10,
        marginLeft: 15,
    },

    with: {
        fontSize: 15,
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 20,
    },


});