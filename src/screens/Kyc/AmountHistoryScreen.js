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
    ActivityIndicator,

} from "react-native";
import { colors } from '../../common/theme';
import { Ionicons, AntDesign, MaterialIcons, Feather, Entypo, FontAwesome, FontAwesome5, } from 'react-native-vector-icons';
import { Image, Header, ListItem, Overlay } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

export default function AmountHistoryScreen(props) {

    return (

        <View style={styles.container}>
            {/* header  */}
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={30} color={colors.RED} /></TouchableOpacity>} backgroundColor={colors.PEACH}
                backgroundColor={colors.WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}

                rightComponent={<View style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={colors.RED} /></View>}
            />
            <ScrollView>
                {/* Amount History section */}

                <View style={styles.amount_sec}>
                    <Text style={styles.amount}>Amount History</Text>
                </View>


                {/* invest_sec */}

                <View style={styles.invest_sec}>
                    <View style={styles.transfer_sec}>
                        <Text style={styles.zero_text}><Text style={styles.rupees_text}>₹</Text>0</Text>

                        <TouchableOpacity style={styles.botton_box}>
                            <Text style={styles.get_otp}>Transfer To My Amazon Account</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ borderWidth: 1, borderColor: colors.GREY_1, marginVertical: 20, marginHorizontal: 10, }}></View>
                    <ScrollView horizontal>
                        <DataTable style={styles.dataTable}>
                            <DataTable.Header>
                                <DataTable.Title style={styles.headerCell}>Date</DataTable.Title>
                                <DataTable.Title style={styles.headerCell}>Type</DataTable.Title>
                                <DataTable.Title style={styles.headerCell} >Amount</DataTable.Title>
                                <DataTable.Title style={styles.headerCell} >Status</DataTable.Title>
                            </DataTable.Header>

                            {/* <DataTable.Row>
                                <DataTable.Cell style={styles.bodyCell}>19-05-2022</DataTable.Cell>
                                <DataTable.Cell style={styles.bodyCell} >New</DataTable.Cell>
                                <DataTable.Cell style={styles.bodyCell} >$100</DataTable.Cell>
                                <DataTable.Cell style={styles.bodyCell} >Active</DataTable.Cell>
                            </DataTable.Row> */}


                        </DataTable>
                    </ScrollView>


                    {/* 
                    <View style={styles.mainbox}>
                        <View style={styles.date_sec}>
                            <Text style={styles.type}>Date</Text>

                        </View>
                        <View style={styles.date_sec}>
                            <Text style={styles.type}>Type</Text>

                        </View>
                        <View style={styles.date_sec}>
                            <Text style={styles.type}>Amount </Text>

                        </View>
                        <View style={styles.date_sec}>
                            <Text style={styles.type}>Status</Text>

                        </View>
                        <View style={styles.date_sec}>
                            <Text style={styles.type}>c</Text>

                        </View>
                    </View> */}



                </View>

            </ScrollView>
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
    amount_sec: {
        backgroundColor: colors.RED,

    },
    amount: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.WHITE,
        textAlign: "center",
        marginVertical: 10,
    },

    invest_sec: {
        marginTop: 20,
        backgroundColor: colors.WHITE,
        marginHorizontal: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,

        },
        shadowOpacity: 0.20,
        shadowRadius: 2.62,
        elevation: 4,
        padding: 10,
    },
    transfer_sec: {
        flexDirection: "row",
    },
    zero_text: {
        fontSize: 27,
        fontWeight: "bold",

    },
    rupees_text: { color: colors.GREEN_2, },
    botton_box: {
        width: "70%",
        backgroundColor: colors.RED,
        position: "absolute",
        right: 0,

    },
    dataTable: {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerCell: {
        width: 100,
        borderRightWidth: 1,
        borderRightColor: '#ccc',
        paddingLeft: 15,
    },
    bodyCell: {
        width: 100,
        borderRightWidth: 1,
        borderRightColor: '#ccc',
        paddingLeft: 15,
    },
    get_otp: {
        color: colors.WHITE,
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: "center",
        marginVertical: 10,
    },
    mainbox: {
        borderTopWidth: 1,
        borderColor: colors.GREY_1,
        borderBottomWidth: 1,
        flexDirection: "row",
    },
    date_sec: {
        borderRightWidth: 1,
        borderColor: colors.GREY_1,
    },



});