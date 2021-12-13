import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from "react-native";

import { AntDesign } from 'react-native-vector-icons';
import { Image, CheckBox } from 'react-native-elements';
import { Styles, Config, Colors, FormValidate } from '../common'

export default function HoldingFundType(props) {
    const { data, holdings } = props
    return (
        <View>
            <View style={styles.valua_sec}>
                <View style={styles.price}>
                    <Text style={styles.rate_2}>₹ {data?.currentvalue}</Text>
                    <Text style={styles.Current_Value}>Current Value</Text>
                </View>
                <View style={styles.Investment}>

                    <View style={styles.Investment_value}>
                        <Text style={styles.rate_2}>₹ {data?.investment}</Text>
                        <Text style={styles.Current_Value}>Investment</Text>
                    </View>


                    <View style={styles.Investment_value}>
                        <Text style={styles.rate_2}>₹ {data?.profitloss}</Text>
                        <Text style={styles.Current_Value}>Profit/Loss</Text>
                    </View>

                    <View style={styles.Investment_value}>
                        <Text style={styles.rate_2}>{data?.cagr}%</Text>
                        <Text style={styles.Current_Value}>CAGR</Text>
                    </View>
                </View>
            </View>

            {holdings.map((item, key) => <View key={key}>
                <View style={styles.small_box}>
                    <Text style={styles.Hybrid}>{item.category}</Text>
                </View>

                <TouchableOpacity onPress={props.onPress}>
                    <View style={styles.fund}>
                        <Image
                            source={{ uri: item.imagePath }}
                            style={styles.Hybrid_img}
                        />
                        <Text style={styles.SBIEquity}>{item.schemeName}</Text>
                        <Text style={styles.SBIEquity_rate}>{item.amount}</Text>
                    </View>
                </TouchableOpacity>
            </View>)}
        </View>


    );
}


const styles = StyleSheet.create({
    education_plan: {
        flexDirection: "row",
        width: '100%',
        paddingBottom: 10,
    },
    plan_1: {
        width: "50%",
        alignItems: "center",
    },
    plan_img: {
        height: 64,
        width: 69,
    },
    price: {
        alignItems: "center",
    },
    rate: {
        fontSize: 14,
        fontWeight: "bold",
        paddingLeft: 5,

    },
    plan_2: {
        alignItems: "center",
        width: "50%",
        paddingLeft: 40,

    },
    plan2_img: {
        height: 60,
        width: 60,
    },
    year: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 5,
    },
    Target_Set: {
        fontSize: 12,
    },
    valua_sec: {
        marginHorizontal: 10,
        backgroundColor: Colors.RED,
        alignItems: "center",
        borderRadius: 30,
        marginTop: 30,

    },
    rate_2: {
        color: Colors.WHITE,
        fontWeight: "bold",
        fontSize: 17,
        marginTop: 10,
    },
    Current_Value: {
        color: Colors.WHITE,
        fontWeight: "bold",
        fontSize: 12,
    },
    Investment: {
        marginTop: 20,
        flexDirection: "row",
    },
    Investment_value: {
        width: "30%",
        alignItems: "center",
        paddingHorizontal: 5,
        marginBottom: 20,

    },
    small_box: {
        backgroundColor: "#EFEFEF",
        width: "100%",
        marginTop: 30,
    },
    Hybrid: {
        fontSize: 20,
        color: Colors.RED,
        marginLeft: 20,
        paddingVertical: 10,
    },
    fund: {
        marginHorizontal: 20,
        flexDirection: "row",
        paddingVertical: 10,
        marginTop: 10,
        backgroundColor: Colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    SBI: {
        flexDirection: "row",
    },
    Hybrid_img: {
        height: 44,
        width: 39,
        marginLeft: 10,
    },
    SBIEquity: {
        width: "70%",
        marginLeft: 10,
        paddingTop: 10,
        fontSize: 14,
    },
    SBIEquity_rate: {
        paddingTop: 10,
        paddingRight: 10,
        fontSize: 15,
        fontWeight:'bold'
    },

})