import React, { useState, useRef, useEffect, useContext } from "react";
import { DataTable } from 'react-native-paper';

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

export default function Goals6Screen(props) {
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
                rightComponent={<View style={styles.headerkn}><AntDesign name={"shoppingcart"} size={40} color={colors.RED} /></View>}
            />
            {/* container_sec */}
            <ScrollView style={styles.containerScroll}>
                <View style={styles.container_sec}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Goals7')}>
                        <View style={styles.container_box}>

                            <Image
                                source={require('../../../assets/MidCap_img.png')}
                                style={styles.mid_capimg}
                            />

                            <Text style={styles.Longterm}>BNP Paribas Mid Cap Fund</Text>
                        </View>
                    </TouchableOpacity>
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
                {/* fund_sec */}
                {/* <ScrollView horizontal> */}
                        {/* <DataTable style={styles.dataTable}>
                            <DataTable.Header style={styles.headerbg}>
                                <DataTable.Title style={styles.headerCell}>Fund House</DataTable.Title>
                                <DataTable.Title style={styles.headerCell}>Inv Cost</DataTable.Title>
                                <DataTable.Title style={styles.headerCell} >Cur Value</DataTable.Title>
                                <DataTable.Title style={styles.headerCell} >Dividends/Bonus</DataTable.Title>
                            </DataTable.Header>

                            <DataTable.Row style={styles.headersec}>
                                <DataTable.Cell style={styles.bodyCell}>Axis Mutual Fund</DataTable.Cell>
                                <DataTable.Cell style={styles.bodyCell} >6.500.00</DataTable.Cell>
                                <DataTable.Cell style={styles.bodyCell} >5.672.97.00</DataTable.Cell>
                                <DataTable.Cell style={styles.bodyCell} >0.00</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row style={styles.headersec}>
                                <DataTable.Cell style={styles.bodyCell}>ICICI Prudential Mutual Fund</DataTable.Cell>
                                <DataTable.Cell style={styles.bodyCell} >22.062.00</DataTable.Cell>
                                <DataTable.Cell style={styles.bodyCell} >20.580.87</DataTable.Cell>
                                <DataTable.Cell style={styles.bodyCell} >0.00</DataTable.Cell>
                            </DataTable.Row>
                            
                            <DataTable.Row style={styles.headersec}>
                                <DataTable.Cell style={styles.bodyCell}>ICICI Prudential Mutual Fund</DataTable.Cell>
                                <DataTable.Cell style={styles.bodyCell} >22.062.00</DataTable.Cell>
                                <DataTable.Cell style={styles.bodyCell} >20.580.87</DataTable.Cell>
                                <DataTable.Cell style={styles.bodyCell} >0.00</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell style={styles.bodyCell}>ICICI Prudential Mutual Fund</DataTable.Cell>
                                <DataTable.Cell style={styles.bodyCell} >22.062.00</DataTable.Cell>
                                <DataTable.Cell style={styles.bodyCell} >20.580.87</DataTable.Cell>
                                <DataTable.Cell style={styles.bodyCell} >0.00</DataTable.Cell>
                            </DataTable.Row>


                        </DataTable> */}
                    {/* </ScrollView> */}










                <View style={styles.fund_sec}>

                    <View style={styles.fund_house}>
                        <View style={[styles.house, styles.house1]}>
                            <Text style={styles.fund}>Fund House</Text>
                        </View>

                        <View style={styles.axis_sec}>
                            <Text style={styles.axis}>Axis Mutual Fund</Text>
                        </View>
                        <View style={styles.axis_sec}>
                            <Text style={styles.axis}>ICICI Prudential Mutual Fund</Text>
                        </View>
                        <View style={styles.axis_sec}>
                            <Text style={styles.axis}>Mirare Assets Mutual Fund</Text>
                        </View>
                        <View style={styles.axis_sec}>
                            <Text style={styles.axis}>SBI Mutual Fund</Text>
                        </View>


                    </View>

                    <View style={styles.inv_cost}>
                        <View style={styles.house}>
                            <Text style={styles.fund}>Inv Cost</Text>
                        </View>

                        <View style={styles.axis_sec2}>
                            <Text style={styles.axis}>6.500.00</Text>
                        </View>
                        <View style={styles.axis_sec2}>
                            <Text style={styles.axis}>22.062.00</Text>
                        </View>
                        <View style={styles.axis_sec2}>
                            <Text style={styles.axis}>4.000.00</Text>
                        </View>
                        <View style={styles.axis_sec2}>
                            <Text style={styles.axis}>56.056.00</Text>
                        </View>

                    </View>

                    <View style={styles.inv_cost}>
                        <View style={styles.house}>
                            <Text style={styles.fund}>Cur Value</Text>
                        </View>

                        <View style={styles.axis_sec2}>
                            <Text style={styles.axis}>5.672.97.00</Text>
                        </View>
                        <View style={styles.axis_sec2}>
                            <Text style={styles.axis}>20.580.87</Text>
                        </View>
                        <View style={styles.axis_sec2}>
                            <Text style={styles.axis}>3.296.27</Text>
                        </View>
                        <View style={styles.axis_sec2}>
                            <Text style={styles.axis}>48.783.00</Text>
                        </View>

                    </View>

                    <View style={styles.dividends}>
                        <View style={[styles.house, styles.house2]}>
                            <Text style={[styles.fund, styles.bonus]}>Dividends/Bonus</Text>
                        </View>

                        <View style={styles.axis_sec2}>
                            <Text style={styles.axis}>0.00</Text>
                        </View>
                        <View style={styles.axis_sec2}>
                            <Text style={styles.axis}>0.00</Text>
                        </View>
                        <View style={styles.axis_sec2}>
                            <Text style={styles.axis}>0.00</Text>
                        </View>
                        <View style={styles.axis_sec2}>
                            <Text style={styles.axis}>0.00</Text>
                        </View>

                    </View>


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
            </ScrollView>
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
    container_sec: {
        margin: 10,

    },
    containerScroll: {
        width: '100%'
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
        width: "33%",
        alignItems: "center",
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
        marginTop: 20,

    },
    schemetype: {
        fontSize: 15,
        width: "90%",
        color: colors.RED,
        paddingTop: 3,


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

    // fundsec

    fund_sec: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor:'#E0BAAF',
        borderRadius: 10,
        marginHorizontal: 20,
    },
    fund_house: {
        width: "40%",
        borderRightWidth: 1,
        borderRightColor: '#E0BAAF',
    },
    house: {

        alignItems: "center",
        backgroundColor: "#F4C6AF",
    },
    house1: {
        borderTopLeftRadius: 10,
    },
    house2: { borderTopRightRadius: 10, },
    fund: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#C44935",
        marginVertical: 10,
    },
    axis: {
        fontSize: 9,
        fontWeight: "bold",
        color: colors.DEEP_GRAY,
        marginVertical: 10,

    },
    axis_sec: {
        borderBottomWidth: 1,
        borderBottomColor: "#E0BAAF",
        width: "100%",
        paddingLeft: 10,

    },
    axis_sec2: {
        borderBottomWidth: 1,
        borderBottomColor: "#E0BAAF",
        width: "100%",
        alignItems: "center",
    },
    inv_cost: {
        width: "20%",
        borderRightWidth: 1,
        borderRightColor: '#E0BAAF',
    },
    dividends: {
        width: "20%",
    },
    bonus: {
        marginVertical: 2,
    },






    dataTable: {
        borderWidth: 1,
        borderColor: '#B88C7D',
        // borderBottomWidth: 1,
        // borderBottomColor: '#B88C7D',
        marginHorizontal:20,
        borderRadius:10,
        
    },
    headerCell: {
        // width: 90,
        borderRightWidth: 1,
        borderRightColor: '#B88C7D',
        paddingLeft: 15,
    },
    bodyCell: {
        // width: 100,
        borderRightWidth: 1,
        borderRightColor: '#B88C7D',
        paddingLeft: 15,
    },
    headerbg:{backgroundColor:'#F8D9CC',
borderTopLeftRadius:10,
borderTopRightRadius:10,
borderBottomWidth:1,
borderBottomColor:'#B88C7D',
},
headersec:{ 
    borderBottomWidth:1,
borderBottomColor:'#B88C7D',
},

});