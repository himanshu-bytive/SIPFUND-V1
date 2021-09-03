import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { AntDesign } from 'react-native-vector-icons';
import { Styles, Config, Colors, FormValidate } from '@common'

const MySelectPicker = (props) => {
  const focusInput = useRef(null);
  const { values, defultValue, error, onChange } = props

  useEffect(() => {
    if (error) {
      focusInput.current.togglePicker();
    }
  }, [error]);

  return (
    <View>
      <View style={styles.container}>
        <AntDesign style={{ position: 'absolute', right: 10, top: 15 }} name="down" color={"#444"} size={18} />
        <RNPickerSelect
          ref={focusInput}
          style={{
            inputIOS: styles.custom,
            inputAndroid: styles.custom,
            placeholder: styles.custom,
          }}
          useNativeAndroidPickerStyle={false}
          onValueChange={(value) => onChange(value)}
          value={defultValue}
          items={values}
        />
      </View>
      {error && (<Text style={styles.error}>{error}</Text>)}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    backgroundColor: Colors.TRANSPARENT,
    borderColor: Colors.GRAY_LIGHT,
    marginTop: 5,
    borderRadius: 4,
    textAlign: 'left',
  },
  custom: {
    fontSize: 22,
    color: '#000',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  error: {
    color: '#ff0000',
    padding: 5,
  },
});
export default MySelectPicker