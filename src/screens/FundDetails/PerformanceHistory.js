import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    View,
    Text,
} from "react-native";
import { connect } from 'react-redux'
import { Styles, Config, Colors, FormValidate } from '@common'
import { Ionicons, AntDesign, MaterialIcons, Feather, Entypo, FontAwesome, FontAwesome5, } from 'react-native-vector-icons';


const fund_type = [
    { text: 'History', number: '2016', class: 'red' },
    { text: 'Axis Asset Management..', number: '5.3%' },
    { text: 'Category (Multi-cap)', number: '5.38' },
    { text: '+/- Category (Multi-Cap)', number: '-4.68' },
]

export default function PerformanceHistory(props) {
    return (<View style={styles.history}>
        {fund_type.map((item) => <View style={styles.name_sec}>
            <View style={styles.name_left}><Text style={[styles.name, (item.class === 'red' ? styles.name_text_red : '')]}>{item.text}</Text></View>
            <View style={styles.name_right}><Text style={[styles.name_text, (item.class === 'red' ? styles.name_text_red : '')]}>{item.number}</Text></View>
        </View>)}
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    contain_box: { margin: 20, },

    bottom_sec: {
        paddingVertical: 20,
        marginHorizontal: 10,
    },
    holding: {
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: Colors.RED,
        paddingVertical: 5,

    },
    holding_text: {
        fontSize: 20,
        color: Colors.RED,
    },
    holding_icon: {
        position: 'absolute',
        right: 0,
        marginTop: 5,
    },
    history: {
        borderWidth: 1,
        borderColor: Colors.DEEP_GRAY_5,
    },

    name_sec: {
        flexDirection: "row",

        borderBottomWidth: 1,
        borderColor: Colors.DEEP_GRAY_5,
    },
    name_left: {
        width: '70%',
        borderRightWidth: 1,
        borderColor: Colors.DEEP_GRAY_5,
        paddingVertical: 5,
        paddingLeft: 20,
    },
    name_right: {
        alignItems: "center",
        width: '30%',
        paddingVertical: 5,
    },
    name_text: {
        fontSize: 15,
    },
    name_text_red: {
        color: Colors.RED
    },
    name: { fontSize: 15, },
    current: { fontSize: 10, },
    value: {
        fontSize: 11,
        marginHorizontal: 10,
        marginBottom: 20,
    },

    minimum: {
        flexDirection: "row",


    },
    minimum_sec: {
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.DEEP_GRAY_5,
        alignItems: "center",
        width: '33.3333333%',
        paddingVertical: 5,

    },
    mini_tex: {
        fontSize: 11,
        textAlign: "center",
    },
    bottom_holding: {
        borderWidth: 1,
        marginVertical: 20,
        borderColor: Colors.DEEP_GRAY_5,
    },
    bottom_holdingleft: { width: '40%' },
    bottom_holdingright: { width: '60%' }

























});