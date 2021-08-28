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
import { connect } from 'react-redux'
import { Styles, Config, Colors, FormValidate } from '@common'

import { Ionicons, AntDesign, Entypo, FontAwesome5 } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import { PlanYourGoalFundType } from "../../components";

export default function Plan4(props) {

    return (
        <View style={styles.container}>

            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={40} color={Colors.RED} /></TouchableOpacity>}
                containerStyle={Styles.header}
                backgroundColor={Colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
                rightComponent={<View style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={Colors.RED} /></View>}
            />
            <ScrollView style={styles.containerScroll}>

                {/* SIP_sec */}

                <View style={styles.education}>
                    <View style={styles.child_sec}>
                        <Image
                            source={require('../../../assets/childimg.png')}
                            style={styles.goals_2}
                        />
                    </View>
                    <View style={styles.education_sec}>
                        <Text style={styles.child}>Recommended</Text>
                        <Text style={styles.child_text}>Child’s Education Plan</Text>
                    </View>
                </View>


                {/* My Selected Funds_sec */}

                <View style={styles.fund_sec}>
                    <Text style={styles.month}>SIP Per Month</Text>
                </View>

                {/* Monthly Investment_sec */}

                <View style={styles.fund_sec2}>
                    <Text style={styles.investment}>Monthly Investment</Text>
                    <Text style={styles.price}>₹ 16,000</Text>
                </View>

                {/* Hybrid_sec */}



                {/* Axis Asset Management Company Ltd */}


                <PlanYourGoalFundType onPress={() => props.navigation.navigate('FundsDetails')}  />

                <View style={styles.hybrid_sec}>
                    <View style={{ backgroundColor: "#EFEFEF", }}>
                        <Text style={styles.hybrid}>Large Cap</Text>
                    </View>
                </View>

                {/* axis_asset........2_sec */}

                <PlanYourGoalFundType onPress={() => props.navigation.navigate('FundsDetails')}  />


                {/* Hybrid_sec.....3 */}

                <View style={styles.hybrid_sec}>
                    <View style={{ backgroundColor: "#EFEFEF", }}>
                        <Text style={styles.hybrid}>Multi Cap</Text>
                    </View>
                </View>

                {/* axis_asset......4_sec */}

                <PlanYourGoalFundType onPress={() => props.navigation.navigate('FundsDetails')}  />


                <View style={styles.hybrid_sec}>
                    <View style={{ backgroundColor: "#EFEFEF", }}>
                        <Text style={styles.hybrid}>Mid Cap</Text>
                    </View>
                </View>


                <PlanYourGoalFundType onPress={() => props.navigation.navigate('FundsDetails')}  />

            </ScrollView>
            <TouchableOpacity onPress={() => props.navigation.navigate('Plan3')}><Text style={styles.add}>I would like to add more funds</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Plan5')} style={styles.botton_box}>
                <Text style={styles.get_otp}>NEXT</Text>
            </TouchableOpacity>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },

    header: {
        borderBottomColor: Colors.BLACK,
        borderBottomWidth: 1,
    },
    containerScroll: {
        width: '100%'
    },
    sip_sec: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 30,
    },
    sip_left: {
        width: "50%",
        borderBottomWidth: 1,
        borderBottomColor: Colors.RED,
    },
    lumpsum: {
        width: "50%",
        borderBottomWidth: 1,
        borderBottomColor: Colors.DEEP_GRAY,
    },
    sip: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        color: Colors.RED,
    },
    lump: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 10,
    },
    fund_sec: {
        flexDirection: "row",
        marginHorizontal: 25,
        marginTop: 20,
    },
    fund_sec2: {
        flexDirection: "row",
        marginHorizontal: 25,
        marginTop: 20,
        marginBottom: 30,
    },
    selected: {

        fontSize: 15,
        fontWeight: "bold",
        color: Colors.DEEP_GRAY,
    },
    month: {
        fontSize: 13,
        fontWeight: "bold",
        color: Colors.DEEP_GRAY,
        position: "absolute",
        right: 0,



    },
    investment: {
        fontSize: 15,
        fontWeight: "bold",
        color: Colors.DEEP_GRAY,
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.RED,
        position: "absolute",
        right: 0,
    },
    hybrid_sec: {
        marginHorizontal: 15,
        marginVertical: 20,
    },
    hybrid: {
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.RED,
        marginVertical: 10,
        marginLeft: 10,
    },
    axis_asset: {
        marginHorizontal: 20,
        marginTop: 10,
        backgroundColor: Colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        padding: 10,
    },
    company: {
        flexDirection: "row",
    },
    management: {
        marginLeft: 10,
        width: "65%",
    },
    axis: {
        fontSize: 15,

    },
    moderately: {
        fontSize: 12,
        color: Colors.DEEP_GRAY,
    },
    axisimg: {
        height: 44,
        width: 39,
    },
    checkbox: {
        position: "absolute",
        right: -20,
        top: -15
    },
    border_sec: {
        flexDirection: "row",
        marginTop: 10,
    },
    border: {
        width: "85%",
        marginRight: 7,
    },
    icons: {
        width: '10%',
        marginTop: -15
    },
    selectfolio_sec: {
        flexDirection: "row",
    },
    select: {
        alignItems: "center",
        width: "31%",
    },
    no: {
        fontSize: 15,
        color: Colors.DEEP_GRAY,
    },
    new: {
        fontSize: 18,
    },
    more_funds: {
        fontSize: 18,
        color: Colors.RED,
        textAlign: "center",
        marginTop: 10,
    },
    botton_box: {

        backgroundColor: Colors.RED,
        marginHorizontal: 30,
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.DEEP_GRAY,
        paddingVertical: 10,
    },
    get_otp: {
        color: Colors.WHITE,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",

    },

    education: {
        flexDirection: "row",
        paddingHorizontal: 20,
        backgroundColor: Colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,


    },
    education_sec: {
        width: '60%',
        marginTop: 10,
        paddingTop: 30,

    },
    goals_2: {
        height: 145,
        width: 145,

    },
    child: {
        fontSize: 16,
        fontWeight: "bold",
        paddingLeft: 20,
        color: Colors.DEEP_GRAY,
    },
    child_text: {
        fontSize: 16,
        color: Colors.RED,
        paddingTop: 10,
        paddingLeft: 20,
        fontWeight: "bold",
    },
    planyour: {
        width: 414,
        height: 756
    },
    add: {
        marginVertical: 20,
        textAlign: "center",
        color: Colors.RED,
        fontSize: 18,
    },

});