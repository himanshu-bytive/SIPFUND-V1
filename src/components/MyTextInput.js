import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Styles, Config, Colors, FormValidate } from '@common'

const MyTextInput = (props) => {
    const focusInput = useRef(null);
    const { error, style } = props

    useEffect(() => {
        if (error) {
            focusInput.current.focus();
        }
    }, [error]);

    return (
        <View>
            <TextInput
                {...props}
                ref={focusInput}
                placeholder={'Add Data'}
                style={[styles.inputsec, (style ? style : {}), { borderColor: (error ? Colors.RED : Colors.GRAY_LIGHT) }]}
            />
            {error && (<Text style={styles.error}>{error}</Text>)}
        </View>
    );
}
const styles = StyleSheet.create({
    inputsec: {
        borderWidth: 2,
        backgroundColor: Colors.TRANSPARENT,
        borderColor: Colors.GRAY_LIGHT,
        width: '100%',
        fontSize: 20,
        marginTop: 5,
        borderRadius: 4,
        padding: 10,
    },
    error: {
        color: '#ff0000',
        padding: 5,
    },
});
export default MyTextInput