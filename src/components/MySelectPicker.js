import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { AntDesign } from "react-native-vector-icons";
import { Styles, Config, Colors, FormValidate } from "../common";

const MySelectPicker = (props) => {
    const focusInput = useRef(null);
    const { values, defultValue, error, placeholder, onChange } = props;

    useEffect(() => {
        if (error) {
            focusInput.current.togglePicker();
        }
    }, [error]);

    return (
        <View>
            <View style={styles.container}>
                <RNPickerSelect
                    ref={focusInput}
                    placeholder={{
                        label: placeholder ? placeholder : "Select a Item",
                        value: null,
                    }}
                    style={{
                        inputIOS: styles.custom,
                        inputAndroid: styles.custom,
                        placeholder: styles.custom,
                    }}
                    useNativeAndroidPickerStyle={false}
                    onValueChange={(value) => onChange(value)}
                    value={defultValue}
                    items={values}
                    Icon={() => {
                        return <AntDesign style={{ position: "absolute", right: -12, top: 5 }} name="down" color={"#444"} size={18} />;
                    }}
                />
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        backgroundColor: Colors.TRANSPARENT,
        borderColor: Colors.GRAY_LIGHT,
        marginTop: 5,
        textAlign: "left",
    },
    custom: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        paddingHorizontal: 10,
    },
    error: {
        color: "#ff0000",
        padding: 5,
    },
});
export default MySelectPicker;
