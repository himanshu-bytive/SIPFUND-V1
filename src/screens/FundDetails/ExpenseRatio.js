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

export default function ExpenseRatio(props) {
    return (
        <View style={{ marginHorizontal: 27, }}>

        <Text style={styles.expense}>Expense Ratio</Text>
        <Text style={styles.percent}>0.56%</Text>
        <Text style={styles.expense}>Exit Load</Text>
        <Text style={styles.investment}>For units excess of 10% of the investment, 1% will
            be charged redemption within 12 months.
        </Text>
        <Text style={styles.expense}>Tax Implications</Text>
        <Text style={styles.investment}>Returns are taxed 15%, if you redeem before one year.
            After 1 year, you are required to pay
        </Text>

    </View>
    );
}

const styles = StyleSheet.create({
   
    expense: {
        fontSize: 12,
        fontWeight: "bold",
        color: colors.DEEP_GRAY,
        marginVertical: 10,
    },
    percent: {
        fontSize: 13,
        fontWeight: "bold",
    },

});