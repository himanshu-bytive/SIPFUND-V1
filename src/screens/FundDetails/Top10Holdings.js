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

export default function Top10Holdings(props) {

    return (<View style={styles.contain_box}>


        <View style={styles.nametop}>
            <View style={styles.name_sec}>
                <View style={styles.name_left}><Text style={styles.name}>Name</Text></View>
                <View style={styles.name_right}><Text style={styles.name_text}>Assets%</Text></View>
            </View>
        </View>

        <View><Text></Text></View>

        <View style={styles.nametop}>
            <View style={styles.name_sec}>
                <View style={styles.name_left}><Text style={styles.name}>Avenue Supermarkets Ltd.</Text></View>
                <View style={styles.name_right}><Text style={styles.name_text}>3.4%</Text></View>
            </View>
        </View>
        <View style={styles.nametop}>
            <View style={styles.name_sec}>
                <View style={styles.name_left}><Text style={styles.name}>Avenue Supermarkets Ltd.</Text></View>
                <View style={styles.name_right}><Text style={styles.name_text}>3.4%</Text></View>
            </View>
        </View>
        <View style={styles.nametop}>
            <View style={styles.name_sec}>
                <View style={styles.name_left}><Text style={styles.name}>Avenue Supermarkets Ltd.</Text></View>
                <View style={styles.name_right}><Text style={styles.name_text}>3.4%</Text></View>
            </View>
        </View>
        <View style={styles.nametop}>
            <View style={styles.name_sec}>
                <View style={styles.name_left}><Text style={styles.name}>Avenue Supermarkets Ltd.</Text></View>
                <View style={styles.name_right}><Text style={styles.name_text}>3.4%</Text></View>
            </View>
        </View>

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

    bottom_sec: { paddingVertical: 20, },
    holding: {
        flexDirection: "row",
        borderBottomWidth: 1,
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
    submit: {
        backgroundColor: colors.LIGHT_RED,
        alignItems: "center",
        borderRadius: 5,
        marginTop: 120,
    },
    submit_text: {
        fontSize: 25,
        color: colors.WHITE,
        paddingVertical: 10,
    },
    name_sec: {
        flexDirection: "row",
        paddingVertical: 5,
    },
    name: { fontSize: 15, },
    name_text: {
        color: colors.RED,
        fontSize: 15,


    },
    name_right: {
        alignItems: "flex-end",
        width: '50%'
    },
    name_left: {
        width: '50%'
    },
    nametop: { paddingVertical: 5, },
    minimum: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 40,
    },
    mini_tex: { fontSize: 15, },
    minimum_tex: {
        fontSize: 12,
        paddingVertical: 5
    },


});