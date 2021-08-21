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
import { Ionicons, AntDesign, Entypo, FontAwesome5 } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';

export default function CompleteDetails2Screen(props) {
    return (
        <View style={styles.container}>
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={40} color={colors.RED} /></TouchableOpacity>}
                containerStyle={styles.header}
                backgroundColor={colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
                rightComponent={<View style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={colors.RED} /></View>}
            />
            <ScrollView>
                {/* container_sec */}
                <View style={styles.container_sec}>

                    <Text style={styles.occupation}>Address1 (As per address proof)</Text>
                    <Text style={styles.example}>Example Address</Text>

                    <View style={{ borderWidth: 1, borderColor: colors.DEEP_GRAY, }}></View>

                    {/* DOB/DOI_sec */}

                    <Text style={styles.Pincode}>Pincode</Text>
                    <Text style={styles.example}>701401</Text>

                    <View style={{ borderWidth: 1, borderColor: colors.RED, }}></View>



                    {/* TITLE_sec */}

                    <Text style={styles.occupation}>State</Text>
                    <View style={styles.private_sector}>

                        <Text style={styles.private}>West Bengal</Text>
                        <AntDesign name="right" size={20} color="#000000" />
                    </View>
                    <View style={{ borderWidth: 1, borderColor: colors.DEEP_GRAY, }}></View>

                    {/* Investor Name_sec */}

                    <Text style={styles.occupation}>City</Text>
                    <View style={styles.private_sector}>

                        <Text style={styles.private}>CONTAI</Text>
                        <AntDesign name="right" size={20} color="#000000" />
                    </View>
                    <View style={{ borderWidth: 1, borderColor: colors.DEEP_GRAY, }}></View>
                </View>

            </ScrollView>
            {/* click_box */}
            <View style={styles.footer}>
                <View style={styles.click_box}>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={styles.botton_box}>
                        <Text style={styles.get_otp}>Previous</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Register2')} style={styles.botton_box}>
                        <Text style={styles.get_otp}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAE9EE",
    },
    header: {
        borderBottomColor: colors.BLACK,
        borderBottomWidth: 1
    },
    container_sec: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fff",
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    occupation: {
        fontSize: 15,
        color: colors.DEEP_GRAY,
        fontWeight: "bold",
        marginTop: 10,
    },
    example: {
        fontSize: 15,
        marginTop: 10,
    },
    private_sector: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 5,
    },
    private: {
        fontSize: 15,
        width: "92%",
        marginBottom: 2,


    },
    Pincode: {
        color: colors.RED,
        fontSize: 15,
        marginTop: 10,
    },
    footer: {
        alignItems: "center",
        marginBottom:20
    },

    click_box: {
        flexDirection: "row",
        marginHorizontal: 25,
    },
    botton_box: {
        width: "50%",
        backgroundColor: colors.RED,
        paddingVertical: 10,
        marginTop: 20,

        borderColor: colors.DEEP_GRAY,

        marginHorizontal: 5,
    },
    get_otp: {
        color: colors.WHITE,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
    },
});