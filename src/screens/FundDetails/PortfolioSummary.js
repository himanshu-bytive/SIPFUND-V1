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
    ActivityIndicator,


} from "react-native";
import { colors } from '../../common/theme';
import { Ionicons, AntDesign, MaterialIcons, Feather, Entypo, FontAwesome, FontAwesome5, } from 'react-native-vector-icons';
import { Image, Header, ListItem, Overlay } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-elements/dist/helpers";



const fund_type = [
    { text: 'History', number: '2016' },
    { text: 'Axis Asset Management..', number: '5.3%' },
    { text: 'Category (Multi-cap)', number: '5.38' },
    { text: '+/- Category (Multi-Cap)', number: '-4.68' },

]









export default function PortfolioSummary(props) {

    return (<View>
        <Text style={styles.value}>Total Market Value - Rs. 845.6 cr</Text>

        <View style={styles.minimum}>
            <View style={styles.minimum_sec}><Text style={styles.mini_tex}>No. Of{'\n'}
                Holdings</Text></View>
            <View style={styles.minimum_sec}><Text style={styles.mini_tex}>No. Of{'\n'}
                Stock Holdings</Text></View>
            <View style={styles.minimum_sec}><Text style={styles.mini_tex}>No. Of{'\n'}
                Bond Holdings</Text></View>
        </View>
        <View style={styles.minimum}>
            <View style={styles.minimum_sec}><Text style={styles.mini_tex}>40</Text></View>
            <View style={styles.minimum_sec}><Text style={styles.mini_tex}>40</Text></View>
            <View style={styles.minimum_sec}><Text style={styles.mini_tex}>0</Text></View>
        </View>

        <View style={styles.bottom_holding}>

            <View style={styles.bottom_holdingleft}>
                <Text style={styles.mini_tex}>0</Text>
            </View>
            <View style={styles.bottom_holdingright}></View>
        </View></View>);
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
        borderBottomColor: colors.RED,
        paddingVertical: 5,

    },
    holding_text: {
        fontSize: 20,
        color: colors.RED,
    },
    holding_icon: {
        position: 'absolute',
        right: 0,
        marginTop: 5,
    },
    history: {
        borderWidth: 1,
        borderColor: colors.DEEP_GRAY_5,
    },

    name_sec: {
        flexDirection: "row",

        borderBottomWidth: 1,
        borderColor: colors.DEEP_GRAY_5,
    },
    name_left: {
        width: '70%',
        borderRightWidth: 1,
        borderColor: colors.DEEP_GRAY_5,
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
        borderColor: colors.DEEP_GRAY_5,
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
        borderColor: colors.DEEP_GRAY_5,
    },
    bottom_holdingleft: { width: '40%' },
    bottom_holdingright: { width: '60%' }

























});