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
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';

export default function Goals1Screen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header_top}>
                <Header
                    leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={30} color={colors.RED} /></TouchableOpacity>} backgroundColor={colors.PEACH}
                    backgroundColor={colors.PEACH}
                    centerComponent={<Image
                        source={require('../../../assets/icon.png')}
                        style={styles.logimg}
                    />}
                    rightComponent={{ text: 'KN', color: '#CD2700' }}
                />

                <Image
                    source={require('../../../assets/goals1_img1.png')}
                    style={styles.goals1_img1}
                />
                <Text style={styles.text_goals}>Holdings</Text>

            </View>


            <View style={styles.education1}>

                <Text style={styles.child5}>Summary</Text>
                <Text style={styles.value}>Value as of Feb 8,2021</Text>

                <View style={styles.rupees_sec}>
                    <Image
                        source={require('../../../assets/rupees.png')}
                        style={styles.rupees_img1}
                    />
                    <Text style={styles.rupees}>1,02,50,000</Text>
                </View>
                <Text style={styles.value}>Value as of Feb 8,2021</Text>

                <View style={styles.value_sec}>
                    <View>
                        <Image
                            source={require('../../../assets/rupees.png')}
                            style={styles.rupees_img1}
                        />
                        <Text style={styles.investment}> 1,00,00,000</Text>
                    </View>
                    <View>
                        <Image
                            source={require('../../../assets/rupees.png')}
                            style={styles.rupees_img1}
                        />
                        <Text style={styles.investment}>2,50,000 </Text>
                    </View>
                </View>

            </View>

            <TouchableOpacity onPress={() => props.navigation.navigate('Goals2')}>
                <View style={styles.education}>
                    <Image
                        source={require('../../../assets/goals1_img2.png')}
                        style={styles.goals1_img3}
                    />
                    <Text style={styles.child}>Goals</Text>
                    <Text style={styles.child5}>3/5</Text>
                </View>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header_top: {
        alignItems: "center",
        backgroundColor: colors.PEACH,
        width: '100%',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: colors.GREY_1,
    },
    header: {
        width: '100%',
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: colors.GREY_1,
        backgroundColor: '#F9F9F9',
        alignItems: "center",
        backgroundColor: colors.LIGHT_WHITE,
        paddingTop: 10,
        paddingBottom: 10,


    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },

    goals1_img1: {

        height: 104,
        width: 104,
    },
    goals1_img3: {
        height: 64,
        width: 64,
    },

    text_goals: {
        fontSize: 25,
        marginVertical: 15,
        fontWeight: "bold",

    },

    education: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        width: '75%',
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: colors.GRAY_LIGHT,
        borderRadius: 15,
        marginVertical: 20,
        padding: 10,
    },
    education1: {
        alignItems: "center",
        width: '90%',
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: colors.GRAY_LIGHT,
        borderRadius: 15,
        marginVertical: 20,
        padding: 10,
    },

    child: {
        fontSize: 20,
        fontWeight: "bold",
    },
    child5: {

        fontSize: 25,
        fontWeight: "bold",
        textAlign: "right",
    },
    summery_sec: {
        width: '100%',
        alignItems: "center",

    },
    value: {
        fontSize: 12,
        paddingVertical: 5,
        color: colors.GREY_1,
    },
    value_sec: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    rupees_sec: { flexDirection: "row", },
    rupees_img1: {
        height: 17,
        width: 12,
    },
    rupees: {
        fontSize: 20,
        color: colors.RED,
    },
    investment: {
        color: colors.RED,
        fontSize: 20,
    },











});