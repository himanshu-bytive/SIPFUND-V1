import React, { useState, useRef, useEffect, useContext } from "react";
import { StyleSheet } from "react-native";
import { Styles, Config, Colors, FormValidate } from '@common'
import { Slider } from 'react-native-elements';

export default function MySlider(props) {
    return (<Slider
        maximumValue={60}
        minimumValue={5}
        value={21}
        thumbStyle={{ height: 20, width: 20 }}
        maximumTrackTintColor={'#EDEDED'}
        minimumTrackTintColor={'#C0392B'}
        thumbTintColor={'#C0392B'}
    />)
}

const styles = StyleSheet.create({
    investment_sec: {
        flexDirection: "row",
        flexWrap: 'wrap'
    },
})