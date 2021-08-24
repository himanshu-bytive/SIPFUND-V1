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
    ActivityIndicator,

} from "react-native";
import { colors } from '../../common/theme';
import { commonStyles } from '../../common/styles';
import { Ionicons, AntDesign, FontAwesome, FontAwesome5, } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

export default function Goals3Screen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.Header_top}>
                <Header
                    leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={30} color={colors.RED} /></TouchableOpacity>} backgroundColor={colors.PEACH}
                    backgroundColor={colors.PEACH}
                    centerComponent={<Image
                        source={require('../../../assets/icon.png')}
                        style={styles.logimg}
                    />}
                    rightComponent={<View style={commonStyles.headerkn}><Text style={commonStyles.textkn}>KN</Text></View>}
                />
                <Image
                    source={require('../../../assets/childimg.png')}
                    style={styles.Goalsimg}
                />
                <Text style={styles.text_goals}>Child’s Education Plan</Text>
                <View style={styles.education_plan}>
                    <View style={styles.plan_1}>
                        <Image
                            source={require('../../../assets/plan_img.png')}
                            style={styles.plan_img}
                        />
                        <Text style={styles.rate}>₹ 10,00,000/-</Text>
                        <Text style={styles.Target_Set}>Target Set</Text>
                    </View>


                    <View style={styles.plan_2}>
                        <Image
                            source={require('../../../assets/Iconmaterial_img.png')}
                            style={styles.plan2_img}
                        />

                        <Text style={styles.year}>12 Years</Text>

                        <Text style={styles.Target_Set}>Time Left to Achieve</Text>
                    </View>


                </View>
            </View>


            <ScrollView style={styles.containerScroll}>

                <View style={styles.valua_sec}>
                    <View style={styles.price}>

                        <Text style={styles.rate_2}>₹ 10,00,000</Text>
                        <Text style={styles.Current_Value}>Current Value</Text>
                    </View>


                    <View style={styles.Investment}>
                        <View style={styles.Investment_value}>
                            <Text style={styles.rate_2}>₹ 10,00,000</Text>
                            <Text style={styles.Current_Value}>Investment</Text>
                        </View>


                        <View style={styles.Investment_value}>
                            <Text style={styles.rate_2}>₹ 50,000</Text>
                            <Text style={styles.Current_Value}>Profit/Loss</Text>
                        </View>

                        <View style={styles.Investment_value}>

                            <Text style={styles.rate_2}>17.01%</Text>
                            <Text style={styles.Current_Value}>CAGR</Text>

                        </View>
                    </View>
                </View>

                <View style={styles.small_box}>
                    <Text style={styles.Hybrid}>Hybrid</Text>
                </View>

                <TouchableOpacity onPress={() => props.navigation.navigate('Goals4')}>
                    <View style={styles.fund}>
                        <View style={styles.SBI}>
                            <Image
                                source={require('../../../assets/Hybrid_img.png')}
                                style={styles.Hybrid_img}
                            />
                            <Text style={styles.SBIEquity}>SBI Equity Hybrid Fund</Text>
                        </View>
                        <Text style={styles.SBIEquity_rate}>4,000</Text>
                    </View>
                </TouchableOpacity>




                <View style={styles.small_box}>
                    <Text style={styles.Hybrid}>Large Cap</Text>
                </View>

                <TouchableOpacity onPress={() => props.navigation.navigate('Goals4')}>
                    <View style={styles.fund}>
                        <View style={styles.SBI}>

                            <Image
                                source={require('../../../assets/LargeCap_img.png')}
                                style={styles.Hybrid_img}
                            />
                            <Text style={styles.SBIEquity}>Mirae Asset Large Cap Fund</Text>
                        </View>
                        <Text style={styles.SBIEquity_rate}>5,000</Text>
                    </View>
                </TouchableOpacity>


                <View style={styles.small_box}>
                    <Text style={styles.Hybrid}>Multi Cap</Text>
                </View>

                <TouchableOpacity onPress={() => props.navigation.navigate('Goals4')}>
                    <View style={styles.fund}>
                        <View style={styles.SBI}>

                            <Image
                                source={require('../../../assets/MultiCap_img.png')}
                                style={styles.Hybrid_img}
                            />
                            <Text style={styles.SBIEquity}>Kotak Standard Multicap Fund</Text>
                        </View>
                        <Text style={styles.SBIEquity_rate}>4,000</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.small_box}>
                    <Text style={styles.Hybrid}>Mid Cap</Text>
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate('Goals4')}>
                    <View style={styles.fund}>
                        <View style={styles.SBI}>

                            <Image
                                source={require('../../../assets/MidCap_img.png')}
                                style={styles.Hybrid_img}
                            />
                            <Text style={styles.SBIEquity}>BNP Paribas Mid Cap Fund</Text>
                        </View>
                        <Text style={styles.SBIEquity_rate}>4,000</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botton_box}>
                    <Text style={styles.get_otp}>SET OTHER GOALS</Text>
                </TouchableOpacity>
            </ScrollView>

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    containerScroll: {
        width: '100%'
    },
    Header_top: {
        backgroundColor: colors.PEACH,
        width: '100%',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: colors.DARK_GREY,
        alignItems: "center",
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    Goalsimg: {
        height: 87,
        width: 94,
    },
    text_goals: {
        fontSize: 20,
        marginVertical: 15,

    },
    education_plan: {
        flexDirection: "row",
        width: '100%',
        paddingBottom:10,
    },
    plan_1: {
        width: "50%",
        alignItems: "center",
    },
    plan_img: {
        height: 64,
        width: 69,
    },
    price: {

        alignItems: "center",

    },
    rate: {
        fontSize: 14,
        fontWeight: "bold",
        paddingLeft: 5,

    },
    plan_2: {
        alignItems: "center",
        width: "50%",
        paddingLeft: 40,

    },
    plan2_img: {
        height: 60,
        width: 60,
    },
    year: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 5,
    },
    Target_Set: {
        fontSize: 12,
    },
    valua_sec: {
        marginHorizontal: 10,
        backgroundColor: colors.RED,
        alignItems: "center",
        borderRadius: 30,
        marginTop: 30,

    },
    rate_2: {
        color: colors.WHITE,
        fontWeight: "bold",
        fontSize: 17,
        marginTop: 10,
    },
    Current_Value: {
        color: colors.WHITE,
        fontWeight: "bold",
        fontSize: 12,
    },
    Investment: {
        marginTop: 20,
        flexDirection: "row",
    },
    Investment_value: {
        width: "30%",
        alignItems: "center",
        paddingHorizontal: 5,
        marginBottom: 20,

    },
    small_box: {
        backgroundColor: "#EFEFEF",
        width: "100%",
        marginTop: 30,
    },
    Hybrid: {
        fontSize: 20,
        color: colors.RED,
        marginLeft: 20,
        paddingVertical: 10,
    },
    fund: {
        marginHorizontal: 20,
        flexDirection: "row",
        paddingVertical: 10,
        marginTop: 10,
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
    SBI: {
        flexDirection: "row",
    },
    Hybrid_img: {
        height: 44,
        width: 39,
        marginLeft: 10,
    },
    SBIEquity: {
        marginLeft: 10,
        paddingTop: 15,
        width: "70%",
        fontSize: 18,
    },
    SBIEquity_rate: {
        paddingTop: 15,
        fontSize: 18,
    },
    botton_box: {
        marginHorizontal: 10,
        backgroundColor: colors.RED,
        paddingVertical: 20,
        marginTop: 20,
        borderRadius: 10,
        borderColor: colors.DEEP_GRAY,
        borderWidth: 1,
    },
    get_otp: {
        color: colors.WHITE,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
    },
});