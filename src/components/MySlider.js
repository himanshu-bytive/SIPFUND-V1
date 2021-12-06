import React from "react";
import { Slider } from "react-native-elements";

export default function MySlider(props) {
    const { value, max, min, change } = props;
    return <Slider maximumValue={max} minimumValue={min} value={value} onValueChange={change} thumbStyle={{ height: 20, width: 20 }} maximumTrackTintColor={"#EDEDED"} minimumTrackTintColor={"#C0392B"} thumbTintColor={"#C0392B"} />;
}
