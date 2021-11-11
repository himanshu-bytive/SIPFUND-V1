import React, { useState, useRef, useEffect, useContext } from "react";
import { StyleSheet } from "react-native";
import { Styles, Config, Colors, FormValidate } from '../common'
import { Slider } from 'react-native-elements';

export default function MySlider(props) {
    const { value, max, min, change } = props
    return (<Slider
        maximumValue={max}
        minimumValue={min}
        value={value}
        onValueChange={(value) => change(value)}
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