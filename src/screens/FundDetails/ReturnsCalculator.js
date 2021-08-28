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
import { connect } from 'react-redux'
import { Styles, Config, Colors, FormValidate } from '@common'
import { MySlider } from '../../components';
import { Ionicons, AntDesign, MaterialIcons, Feather, Entypo, FontAwesome, FontAwesome5, } from 'react-native-vector-icons';
import { Image, Header, ListItem, Overlay, Slider } from 'react-native-elements';

export default function ReturnsCalculator(props) {

    return (<View style={styles.mainbox}>
        <Text style={styles.check}>Check if you would have invested in the past.</Text>
        <View style={styles.click_sec}>
            <View style={styles.buttom_botton}>
                <TouchableOpacity>
                    <Text style={styles.sip_text}>SIP</Text>
                </TouchableOpacity></View>
            <View style={styles.buttom_botton2}>
                <TouchableOpacity style={styles.buttom_botton2}>
                    <Text style={styles.sip_text2}>Lumpsum</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View>
            <MySlider />
        </View>
        <View style={styles.amount_box}>
            <Text style={styles.amount}>Amount Per Month</Text>
            <Text style={styles.price}>Rs.4000</Text>
        </View>
        <View style={styles.back_sec}>
            <View style={styles.back1}>
                <Text style={styles.back_year}>1Y Back</Text>
                <View style={{ borderWidth: 1, borderColor: Colors.RED, marginTop: 5, }}></View>

            </View>
            <View style={styles.back1}>
                <Text style={styles.back_year2}>3Y Back</Text>
                <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, marginTop: 5, }}></View>
            </View>

            <View style={styles.back1}>
                <Text style={styles.back_year2}>5Y Back</Text>
                <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, marginTop: 5, }}></View>
            </View>

        </View>
        <Text style={styles.rs}> Rs. 52,000</Text>
        <Text style={styles.with}>With 9.5% returns per annum</Text>

    </View>);
}

const styles = StyleSheet.create({




    mainbox: {
        borderWidth: 1,
        borderColor: Colors.GRAY_LIGHT,
        borderRadius: 20,
        padding: 10,
    },
    check: {
        fontSize: 15,
        marginTop: 10,
    },
    click_box: {
        flexDirection: "row",
    },
    amount_box: {
        flexDirection: "row",
        marginVertical: 10,
    },
    amount: {
        fontSize: 18,
    },
    price: {
        fontSize: 18,
        color: Colors.RED,
        position: "absolute",
        right: 0,

    },
    back_sec: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    back_year: {
        fontSize: 18,
        color: Colors.RED,
    },
    back_year2: {
        fontSize: 18,

    },
    rs: {
        fontSize: 20,
        color: Colors.RED,
        marginTop: 10,
    },

    with: {
        fontSize: 15,
        marginTop: 10,
        marginBottom: 20,
    },





    click_sec: {
        flexDirection: "row",
        marginVertical: 20,

    },

    buttom_botton: {
        width: "50%",
        borderWidth: 1,
        borderColor: Colors.DEEP_GRAY,
        marginRight: 2,
        alignItems: "center",
        paddingVertical: 7,
        borderRadius: 5,
    },
    buttom_botton2: {
        width: "50%",
        backgroundColor: Colors.RED,
        marginLeft: 2,
        alignItems: "center",
        paddingVertical: 7,
        borderRadius: 5,
    },
    sip_text: {
        fontSize: 18,
        color: Colors.RED,
        fontWeight: "bold"
    },
    sip_text2: {
        fontSize: 18,
        color: Colors.WHITE,
        fontWeight: "bold"
    },


});