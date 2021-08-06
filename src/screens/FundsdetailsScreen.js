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
import { ScrollView } from "react-native-gesture-handler";

export default function FundsdetailsScreen(props) {
    return (
        <ScrollView>
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
                {/* container_sec */}

                <View style={styles.container_sec}>
                    <View style={styles.container_box}>

                        <Image
                            source={require('../../../assets/Midcapimg2.png')}
                            style={styles.mid_capimg}
                        />

                        <Text style={styles.Longterm}>BNP Paribas Mid Cap Fund</Text>
                    </View>

                    <View style={styles.valua_sec}>
                        <View style={styles.price}>

                            <Text style={styles.rate_2}>₹ 10,00,000</Text>
                            <Text style={styles.Current_Value}>Current Value</Text>
                        </View>


                        <View style={styles.Investment}>
                            <View style={styles.Investment_value}>
                                <Text style={styles.rate_2}>₹ 9,50,000</Text>
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



                {/* Report_sec */}

                <View style={styles.report_sec}>
                    <Text style={styles.Report}>Report</Text>

                    <View style={styles.investment_summary}>
                        <Text style={styles.schemetype}>Scheme Type Wise Investment Summary</Text>
                        <AntDesign name="up" size={30} color="#C0392B" />
                    </View>

                    <View style={{ borderWidth: 1, borderColor: colors.GREY_1, }}></View>
                </View>

                <View style={styles.fundsimg_sec}>

                    <Image
                        source={require('../../../assets/fundsimg.png')}
                        style={styles.fundsmg}
                    />
                </View>


                {/* Report_2_sec */}


                <View style={styles.report_sec}>
                    <View style={styles.investment_summary}>
                        <Text style={styles.schemetype1}>Scheme Type Wise Investment Summary</Text>
                        <AntDesign name="down" size={30} color="#C0392B" />
                    </View>

                    <View style={{ borderWidth: 1, borderColor: colors.GREY_1, marginTop: 10, marginBottom: 10, }}></View>


                    <View style={styles.investment_summary}>
                        <Text style={styles.schemetype1}>Scheme of Past Performance</Text>
                        <AntDesign name="down" size={30} color="#C0392B" />
                    </View>

                    <View style={{ borderWidth: 1, borderColor: colors.GREY_1, marginTop: 10, marginBottom: 10, }}></View>

                    <View style={styles.investment_summary}>
                        <Text style={styles.schemetype1}>Goal Wise Investment Summary</Text>
                        <AntDesign name="down" size={30} color="#C0392B" />
                    </View>

                    <View style={{ borderWidth: 1, borderColor: colors.GREY_1, marginTop: 10, marginBottom: 10, }}></View>

                    <View style={styles.investment_summary}>
                        <Text style={styles.schemetype1}>Top 10 Equity Holding</Text>
                        <AntDesign name="down" size={30} color="#C0392B" />
                    </View>

                    <View style={{ borderWidth: 1, borderColor: colors.GREY_1, marginTop: 10, marginBottom: 10, }}></View>

                    <View style={styles.investment_summary}>
                        <Text style={styles.schemetype1}>Top 10 Sector Exposure</Text>
                        <AntDesign name="down" size={30} color="#C0392B" />
                    </View>

                    <View style={{ borderWidth: 1, borderColor: colors.GREY_1, marginTop: 10, marginBottom: 10, }}></View>











                </View>



            </View>
        </ScrollView>

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
    container_sec: {
        margin: 10,

    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    container_box: {

        flexDirection: "row",
        alignItems: "center",
        padding: 10,
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

        borderWidth: 1,
        borderColor: colors.GREY_1,


    },
    Longterm: {
        marginLeft: 10,
        fontSize: 20,
        color: colors.BLACK,
    },

    mid_capimg: {
        height: 42,
        width: 42,
    },
    valua_sec: {
        alignItems: "center",
        borderRadius: 30,
        borderWidth: 1,
        marginTop: 10,

    },
    price: {
        alignItems: "center",
    },
    rate_2: {

        fontWeight: "bold",
        fontSize: 17,
        marginTop: 10,
    },
    Current_Value: {

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
    report_sec: {
        margin: 30,
    },
    Report: {
        fontSize: 22,

    },
    investment_summary: {
        flexDirection: "row",
    },
    schemetype: {
        fontSize: 15,
        width: "90%",
        color: colors.RED,
        marginTop: 20,
    },
    fundsimg_sec: { alignItems: "center", },
    fundsmg: {
        height: 133,
        width: 373,
    },
    schemetype1: {
        color: colors.BLACK,
        width: "90%",
        marginTop: 10,
        fontSize: 15,
    },



});