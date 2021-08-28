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
import { Ionicons, AntDesign, MaterialIcons, Feather, Entypo, FontAwesome, FontAwesome5, } from 'react-native-vector-icons';
import { Image, Header, ListItem, Overlay, Slider } from 'react-native-elements';

export default function FundManagers(props) {
    return (<View style={styles.mainbox}>
    </View>);
}

const styles = StyleSheet.create({
    mainbox: {
        margin: 5,
        width: '100%',
    },
});