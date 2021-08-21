import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
} from "react-native";
import { colors } from '../common/theme';


export default function Investments(props) {
    return (<View style={styles.investment_sec}>
        {props.data.map(((item) => <View style={styles.investment}>
            <TouchableOpacity onPress={props.onPress} style={{ width: '100%' }}>
                <Image
                    source={item.image}
                    style={styles.term}
                />
                <Text style={styles.long}>{item.title}</Text>
            </TouchableOpacity>
        </View>))}
    </View>)
}


const styles = StyleSheet.create({
    investment_sec: {
        flexDirection: "row",
        flexWrap: 'wrap'
    },
    investment: {
        borderRadius: 20,
        backgroundColor: colors.WHITE,
        width: '30%',
        alignItems: "center",
        margin: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    term: {
        width: '100%',
        height: 113,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    long: {
        textAlign: "center",
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: "bold"
    },
})