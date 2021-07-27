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
import { Ionicons, AntDesign, Entypo, FontAwesome5 } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';

export default function Goals2Screen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.Header_top}>
                <Header
                    leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={30} color={colors.RED} /></TouchableOpacity>} backgroundColor={colors.PEACH}
                    centerComponent={<Image
                        source={require('../../../assets/icon.png')}
                        style={styles.logimg}
                    />}
                    rightComponent={<View style={{ marginTop: 20, borderWidth: 1, backgroundColor: colors.WHITE, borderColor: colors.RED, padding: 5, borderRadius: 7, }}><Text>KN</Text></View>}
                />
                <Image
                    source={require('../../../assets/Goalsimg.png')}
                    style={styles.Goalsimg}
                />
                <Text style={styles.text_goals}>Goals</Text>
            </View>

            <View style={styles.education}>


                <View style={styles.child_sec}>

                    <Image
                        source={require('../../../assets/childimg.png')}
                        style={styles.goals_2}
                    />
                </View>

                <View tyle={styles.education_sec}>
                    <Text style={styles.child}>Child’s Education</Text>
                    <Text style={styles.sip}>SIP Investment</Text>
                    <View style={styles.img_sec}>
                        <Image
                            source={require('../../../assets/Goalsimg.png')}
                            style={styles.goals_3}
                        />

                        <Text style={styles.price}>10,00,000/-</Text>

                    </View>
                    <Text style={styles.child_text}>Target Set</Text>
                    <View style={styles.img_sec}>
                        <Image
                            source={require('../../../assets/clock_icon.png')}
                            style={styles.clock_icon}
                        />

                        <Text style={styles.price}>10 Years</Text>
                    </View>
                    <Text style={styles.child_text}>Time to achieve</Text>

                </View>

            </View>

            <View style={styles.education}>


                <View style={styles.child_sec}>

                    <Image
                        source={require('../../../assets/Rich.png')}
                        style={styles.goals_2}
                    />
                </View>

                <View tyle={styles.education_sec}>
                    <Text style={styles.child}>Retire Rich</Text>
                    <Text style={styles.sip}>SIP Investment</Text>
                    <View style={styles.img_sec}>
                        <Image
                            source={require('../../../assets/Goalsimg.png')}
                            style={styles.goals_3}
                        />

                        <Text style={styles.price}>10,00,000/-</Text>

                    </View>
                    <Text style={styles.child_text}>Target Set</Text>
                    <View style={styles.img_sec}>
                        <Image
                            source={require('../../../assets/clock_icon.png')}
                            style={styles.clock_icon}
                        />

                        <Text style={styles.price}>10 Years</Text>
                    </View>
                    <Text style={styles.child_text}>Time to achieve</Text>

                </View>

            </View>

            <View style={styles.education}>


                <View style={styles.child_sec}>

                    <Image
                        source={require('../../../assets/marrige_img.png')}
                        style={styles.goals_2}
                    />
                </View>

                <View tyle={styles.education_sec}>
                    <Text style={styles.child}>Child’s Marrige</Text>
                    <Text style={styles.sip}>SIP Investment</Text>
                    <View style={styles.img_sec}>
                        <Image
                            source={require('../../../assets/Goalsimg.png')}
                            style={styles.goals_3}
                        />
                        <Text style={styles.price}>₹ 10,00,000/-</Text>
                    </View>
                    <Text style={styles.child_text}>Target Set</Text>
                    <View style={styles.img_sec}>
                        <Image
                            source={require('../../../assets/clock_icon.png')}
                            style={styles.clock_icon}
                        />
                        <Text style={styles.price}>10 Years</Text>
                    </View>
                    <Text style={styles.child_text}>Time to achieve</Text>

                </View>

            </View>
            <TouchableOpacity style={styles.botton_box}>
                <Text style={styles.get_otp}>SET OTHER GOALS</Text>

            </TouchableOpacity>



        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    Header_top: {
        backgroundColor: colors.PEACH,
        width: '100%',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: colors.DARK_GREY,
        alignItems: "center",
    },
    Goalsimg: {
        height: 87,
        width: 94,
    },
    text_goals: {
        fontSize: 20,
        marginVertical: 15,
        fontWeight: "bold",
    },
    education: {
        flexDirection: "row",
        width: '90%',
        borderWidth: 2,
        borderColor: colors.GRAY_LIGHT,
        borderRadius: 15,
        marginVertical: 10,
        padding: 5,
        paddingBottom: 0,
        backgroundColor: colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    child_sec: {
        width: '50%',
    },
    sip: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#7E7E7E",
        marginVertical: 5,
    },
    child: {
        fontSize: 15,
        fontWeight: "bold",
    },
    child_text: {
        fontSize: 10,
        fontWeight: "bold",
        color: colors.LIGHT_BLACK,
        marginVertical: 3,
        paddingLeft: 20,

    },
    goals_3: {
        height: 18,
        width: 18,
    },
    img_sec: {
        flexDirection: "row",
        marginVertical: 3,

    },
    price: {
        fontSize: 12,
        fontWeight: "bold",
        paddingLeft: 5,
    },
    clock_icon: {
        height: 15,
        width: 15,
    },



    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },


    goals_2: {
        height: 145,
        width: 145,
    },
    botton_box: {

        backgroundColor: colors.RED,
        width: '70%',
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.DEEP_GRAY,
        paddingVertical: 20,
    },
    get_otp: {
        color: colors.WHITE,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",

    },



});