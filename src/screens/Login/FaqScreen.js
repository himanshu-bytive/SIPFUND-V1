import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    Button,
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
import { Ionicons, AntDesign, Entypo } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';

export default function PasswordScreen(props) {
    return (
        <View style={styles.container}>

            <Header
                leftComponent={<View style={{ marginTop: 20 }}><Entypo name={"menu"} size={30} color={colors.RED} /></View>}
                containerStyle={styles.header}
                backgroundColor={colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
                rightComponent={<View style={{ marginTop: 20, borderWidth: 1, backgroundColor: colors.WHITE, borderColor: colors.RED, padding: 5, borderRadius: 7, }}><Text>KN</Text></View>}
            />
            <View style={styles.mainbox}>

                <View>
                    <Text style={styles.faqs}>FAQ’s</Text>
                </View>
                <View style={styles.imgbox}>

                    <Image
                        source={require('../../../assets/FAQimg.png')}
                        style={styles.FAQimg}
                    />
                </View>
                <View style={styles.singletext}>
                    <Entypo name="dot-single" size={40} color="#FFCE00" />
                    <Text style={styles.Mutualfund}>What is a Mutual Fund?</Text>
                </View>
                <View style={styles.singletext}>
                    <Entypo name="dot-single" size={40} color="#FFCE00" />
                    <Text style={styles.Mutualfund}>What is Open Ended Fund?</Text>
                </View>


                <TouchableOpacity onPress={()=> props.navigation.navigate('Upi')} style={styles.botton_box}>
                    <Text style={styles.get_otp}>MORE FAQ’s</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        borderBottomColor: colors.BLACK,
        borderBottomWidth: 1
    },
    mainbox: {
        padding: 40,
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    imgbox: {
        alignItems: "center",
        marginBottom: 20,
    },
    FAQimg: {
        height: 205,
        width: 243,
        marginVertical: 30,

    },
    faqs: {
        fontSize: 22,
        fontWeight: "bold",
        color: '#716D6E',
    },
    singletext: {
        flexDirection: "row",
        marginTop: 10,
    },
    Mutualfund: {
        fontSize: 20,
        marginTop:9,
        color: colors.GREY_1,
    },
    botton_box: {
        alignItems: "center",
        backgroundColor: colors.RED,
        paddingHorizontal: 70,
        paddingVertical: 20,
        marginTop: 20,
        borderRadius: 10,

    },
    get_otp: {
        color: colors.WHITE,
        fontSize: 20,
        fontWeight: 'bold',

    },
});