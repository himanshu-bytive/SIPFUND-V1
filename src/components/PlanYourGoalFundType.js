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

export default function PlanYourGoalFundType(props) {
    return (
        <View style={styles.axis_asset}>
            <View style={styles.company}>
                <Image
                    source={require('../../assets/idbi_img.png')}
                    style={styles.axisimg}
                />
                <View style={styles.management}>
                    <Text style={styles.axis}>Axis Asset Management Company Ltd</Text>
                    <Text style={styles.moderately}>Moderately High Risk</Text>
                </View>

            </View>

            {/* border_sec */}

            <View style={styles.border_sec}>
                <View style={styles.border}>
                    <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, }}></View>
                </View>
                <View style={styles.icons}>
                    <TouchableOpacity style={styles.circle} onPress={props.onPress}>
                        <AntDesign name="right" size={30} color="#C0392B" />
                    </TouchableOpacity>
                </View>
            </View>


            {/* Select Folio No._sec */}

            <View style={styles.selectfolio_sec}>

                <View style={styles.select}>
                    <Text style={styles.no}>Min Investment</Text>
                    <Text style={styles.no}>1000</Text>
                </View>

                <View style={styles.select}>
                    <Text style={styles.no}>SIP Date</Text>

                    <View style={{ flexDirection: "row", }}>
                        <Text style={styles.new}>5</Text>
                        <AntDesign name="caretdown" size={20} color="#C0392B" />
                    </View>


                </View>
                <View style={styles.select}>

                    <Text style={styles.no}>SIP</Text>
                    <Text style={styles.new}>4000</Text>
                </View>

            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    axis_asset: {
        marginHorizontal: 20,
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
        padding: 10,
    },
    company: {
        flexDirection: "row",
    },
    management: {
        marginLeft: 10,
        width: "65%",
    },
    axis: {
        fontSize: 15,

    },
    moderately: {
        fontSize: 12,
        color: Colors.DEEP_GRAY,
    },
    axisimg: {
        height: 39,
        width: 39,
    },
    checkbox: {
        position: "absolute",
        right: -20,
        top: -15
    },
    border_sec: {
        flexDirection: "row",
        marginTop: 10,
    },
    border: {
        width: "80%",
        marginRight: 10
    },
    icons: {
        width: '10%',
        marginTop: -15
    },
    selectfolio_sec: {
        flexDirection: "row",
    },
    select: {
        alignItems: "center",
        width: "31%",
    },
    no: {
        fontSize: 15,
        color: Colors.DEEP_GRAY,
    },
    new: {
        fontSize: 18,
    },
    circle: {
        height: 35,
        width: 35,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: Colors.DEEP_GRAY,
        paddingLeft: 2
    },

})