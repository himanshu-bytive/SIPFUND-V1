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
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';

export default function EMandateScreen(props) {
    return (
        <View style={styles.container}>

            <View style={styles.mainbox}>
                <Text style={styles.amc}>Choose E-Mandate Option:</Text>
                <Text style={styles.mutual_fund}>Debit Card - Do it now</Text>
                <Text style={styles.mutual_fund}>Net Banking - Do it now</Text>
                <Text style={styles.mutual_fund}>Debit Card - Send me email</Text>
                <Text style={styles.mutual_fund}>Net Banking - Send me email</Text>

                <Text style={styles.cancel}>Cancel</Text>


            </View>


        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    mainbox: {

        marginHorizontal: 45,
        borderRadius: 20,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: colors.GRAY_LIGHT,
        marginVertical: 30,
        padding: 10,
    },
    amc: {
        fontSize: 18,
        fontWeight: "bold",

    },
    mutual_fund: {
        fontSize: 15,
        marginVertical: 10,
        marginLeft: 15,
    },
    cancel: {
        fontSize: 15,
        color: colors.RED,

    },




});