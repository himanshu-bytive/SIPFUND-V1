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
    ActivityIndicator
} from "react-native";
import { colors } from '../../common/theme';
import { Ionicons, AntDesign, MaterialIcons } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';

export default function CreatePasswordScreen(props) {
    return (
        <View style={styles.container}>
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={30} color={colors.RED} /></TouchableOpacity>}
                backgroundColor={colors.LIGHT_WHITE}
                containerStyle={styles.header}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
            />
            <ScrollView style={styles.containerScroll}>
                <View style={styles.mainBox}>
                    <Image
                        source={require('../../../assets/luck.png')}
                        style={styles.passwordimg2}
                    />
                    <View style={styles.phone_number}>
                        <MaterialIcons name="call" size={20} color="#838280" />
                        <Text style={styles.numbersec}>9856412345</Text>
                    </View>

                    <Text style={styles.number}>Enter Password</Text>
                    <TextInput style={styles.inputsec} />

                    <TouchableOpacity onPress={() => props.navigation.navigate('forgotpassword')}>
                        <Text style={styles.refreshcode}>Forgot Your Password?</Text>
                    </TouchableOpacity>

                    <View style={styles.conform}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={styles.botton_box}>
                            <Text style={styles.get_otp}>CONFIRM</Text>
                            <AntDesign name={"right"} size={26} color={colors.WHITE} />
                        </TouchableOpacity></View>
                </View>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        borderBottomColor: colors.BLACK,
        borderBottomWidth: 1
    },
    containerScroll: {
        width: '100%'
    },
    mainBox: {
        alignItems: 'center',
        paddingHorizontal: 30
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    passwordimg2: {
        marginTop: 20,
        marginBottom: 30,
        height: 136,
        width: 136,
    },
    number: { fontSize: 20, },
    inputsec: {
        borderWidth: 2,
        borderColor: colors.GRAY_LIGHT,
        width: '90%',
        height: 50,
        fontSize: 20,
        marginTop: 5,
        marginBottom: 20,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.LITTLE_WHITE,
    },
    refreshcode: {
        textAlign: "center",
        color: colors.RED,
        fontSize: 15,
    },
    botton_box: {
        flexDirection: 'row',
        backgroundColor: colors.RED,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 10,
        justifyContent: "center",
    },
    get_otp: {
        color: colors.WHITE,
        fontSize: 22,
        fontWeight: 'bold',
        marginRight: 5,
    },
    phone_number: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 30,
    },
    numbersec: {
        fontSize: 17,
        paddingLeft: 10,
    },
    conform: {
        width: '90%',
    },
});