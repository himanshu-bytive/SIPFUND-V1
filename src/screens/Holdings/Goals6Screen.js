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
import { Ionicons, AntDesign, FontAwesome, FontAwesome5, } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

export default function Goals_6Screen(props) {
    return (
        <ScrollView>
            <View style={styles.container}>

                {/* Header_sec */}

                <View style={styles.Header_top}>
                    <Header
                        leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={30} color={colors.RED} /></TouchableOpacity>} backgroundColor={colors.PEACH}
                        backgroundColor={colors.PEACH}
                        centerComponent={<Image
                            source={require('../../../assets/icon.png')}
                            style={styles.logimg}
                        />}
                        rightComponent={<View style={{ marginTop: 20, marginRight: 10, borderWidth: 1, backgroundColor: colors.WHITE, borderColor: colors.RED, padding: 7, borderRadius: 7, }}><Text style={{ fontWeight: "bold", color: "#C0392B", fontSize: 22, }}>KN</Text></View>}
                    />
                    <Image
                        source={require('../../../assets/goles5_img.png')}
                        style={styles.goles5logo}
                    />
                    <Text style={styles.text_goals}>Top Rated Funds</Text>

                </View>

                {/* container_box_sec */}

                <Text style={styles.Investments}>My Investments</Text>

                <View style={styles.mainbox}>
                    <View style={styles.container_box}>
                        <View style={styles.smallbox}>
                            <Image
                                source={require('../../../assets/Midcapimg.png')}
                                style={styles.mid_capimg}
                            />

                            <Text style={styles.Longterm}>BNP Paribas Mid Cap Fund</Text>
                        </View>
                        <AntDesign name="down" size={20} color="#C0392B" />
                    </View>

                    <View style={styles.container_box}>
                        <View style={styles.smallbox}>
                            <Image
                                source={require('../../../assets/BOI_img.png')}
                                style={styles.mid_capimg}
                            />

                            <Text style={styles.Longterm}>BOI AXA Investment Managers</Text>
                        </View>
                        <AntDesign name="up" size={20} color="#C0392B" />
                    </View>

                    {/* valua_sec */}

                    <View style={styles.valua_sec}>
                        <View style={styles.price}>

                            <Text style={styles.rate_2}>₹ 10,00,000</Text>
                            <Text style={styles.Current_Value}>Current Value</Text>
                        </View>


                        <View style={styles.Investment}>
                            <View style={styles.Investment_value}>
                                <Text style={styles.rate_2}>₹  9,50,000</Text>
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


                </View>

                <Text style={styles.Investments}>Invest Now</Text>

                {/* Invest Now sec */}

                <View style={styles.Investnow_sec}>
                    <Text style={styles.Equity}>Equity</Text>
                    <Text style={styles.Debt}>Debt</Text>
                    <Text style={styles.Debt}>Balanced</Text>
                    <Text style={styles.Debt}>Liquid</Text>
                    <Text style={styles.Debt}>Overnite</Text>
                    <Text style={styles.Debt}>Multicap</Text>
                    <Text style={styles.Debt}>Mid Cap</Text>
                </View>
                <View style={{ borderWidth: 1, borderColor: colors.GREY_1, }}></View>

                {/* Topratedfunds_sec */}

                <View style={styles.topratedmainbox}>

                    <View style={styles.toprated}>
                        <Text style={styles.top}>Top Rated Funds</Text>


                        <View style={styles.returnsright}>
                            <View style={styles.returnsbox}>

                                <Text style={styles.return}>5Y Returns</Text>


                                <AntDesign name="caretdown" size={15} color="#C0392B" />
                            </View>
                            <View style={{ borderWidth: 1, borderColor: colors.RED, }}></View>
                        </View>


                    </View>


                    {/* Axis Asset Management Company */}

                    <View style={styles.axis_asset}>

                        <View style={styles.company}>

                            <Image
                                source={require('../../../assets/axis_img.png')}
                                style={styles.axisimg}
                            />
                            <Text style={styles.axis}>Axis Asset Management Company</Text>
                            <TouchableOpacity style={styles.botton_box}>
                                <Text style={styles.get_otp}>INVEST</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.value_sec}>


                            <View style={styles.mininvestment}>
                                <Text style={styles.min}>Min. Investment</Text>
                                <Text style={styles.min}>1000</Text>
                            </View>

                            <View style={styles.mininvestment}>
                                <Text style={styles.min}>AUM</Text>
                                <Text style={styles.min}>2097 Cr</Text>

                            </View>
                            <View style={styles.mininvestment}>
                                <Text style={styles.min}>Returns</Text>
                                <Text style={styles.min}>16.0%</Text>
                            </View>
                        </View>
                        <View style={{ borderWidth: 1, borderColor: colors.GREY_1, marginTop: 10, }}></View>


                    </View>

                    {/* Aditya Birla Sun Life AMC Limited_ sec */}

                    <View style={styles.axis_asset}>

                        <View style={styles.company}>

                            <Image
                                source={require('../../../assets/adityabirlaimg.png')}
                                style={styles.adityaimg}
                            />
                            <Text style={styles.axis}>Aditya Birla Sun Life AMC Limited</Text>
                            <TouchableOpacity style={styles.botton_box}>
                                <Text style={styles.get_otp}>INVEST</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.value_sec}>


                            <View style={styles.mininvestment}>
                                <Text style={styles.min}>Min. Investment</Text>
                                <Text style={styles.min}>1000</Text>
                            </View>

                            <View style={styles.mininvestment}>
                                <Text style={styles.min}>AUM</Text>
                                <Text style={styles.min}>2097 Cr</Text>

                            </View>
                            <View style={styles.mininvestment}>
                                <Text style={styles.min}>Returns</Text>
                                <Text style={styles.min}>16.0%</Text>
                            </View>
                        </View>
                        <View style={{ borderWidth: 1, borderColor: colors.GREY_1, marginTop: 10, }}></View>


                    </View>

                 

                    

                </View>

            </View>
        </ScrollView>

    );

}

























// StyleSheet

const styles = StyleSheet.create({
    container: {
        flex: 1,

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
    goles5logo: {
        height: 126,
        width: 126,
    },
    text_goals: {
        fontSize: 25,
        marginVertical: 15,
        fontWeight: "bold",

    },
    Investments: {
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 30,
        marginVertical: 10,

    },
    mainbox: {
        alignItems: "center",
    },
    container_box: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
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
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.GREY_1,


    },
    mid_capimg: {
        height: 67,
        width: 73,
    },
    Longterm: {
        marginLeft: 10,
        fontSize: 15,
        color: colors.BLACK,
    },
    smallbox: {
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
    },
    Investnow_sec: {
        flexDirection: "row",
        marginLeft: 20,


    },
    Debt: { marginHorizontal: 5, fontSize: 13, color: "#696565", },

    Equity: { fontSize: 13, color: colors.RED, fontWeight: "bold", },

    topratedmainbox: {
        marginTop: 20,
        marginHorizontal: 20,

    },
    toprated: { flexDirection: "row", marginBottom: 30, },
    top: {
        width: "73%",
        fontSize: 15,
        fontWeight: "bold",
        color: "#696565",
    },
    return: { fontSize: 15, },

    returnsbox: { flexDirection: "row", },

    //  Axis Asset Management Company 

    axis_asset: {

        marginTop: 20,
        paddingBottom: 10,

    },

    company: {
        flexDirection: "row",

    },
    axis: {
        marginLeft: 10,
        fontSize: 15,
        width: "65%",
    },
    axisimg: {
        height: 39,
        width: 39,
    },
    botton_box: {
        width: 80,
        backgroundColor: colors.RED,
        height: 20,




    },
    get_otp: {
        color: colors.WHITE,
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: "center",
        paddingTop: 4,
    },
    value_sec: {
        flexDirection: "row",
        marginLeft: 50,


    },
    mininvestment: {
        width: "33%",
        alignItems: "center",

    },
    min: {
        fontSize: 12,
    },
    adityaimg: {
        height: 24,
        width: 47
    },
    valua_sec: {
        width: "90%",
        backgroundColor: colors.RED,
        alignItems: "center",
        },
    price: {

        alignItems: "center",

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





});

























