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
import { color } from "react-native-elements/dist/helpers";



const fund_type = [
    { text: 'History', number: '2016' },
    { text: 'Axis Asset Management..', number: '5.3%' },
    { text: 'Category (Multi-cap)', number: '5.38' },
    { text: '+/- Category (Multi-Cap)', number: '-4.68' },

]









export default function PortfolioSummary(props) {

    return (
    <View style={{ marginTop: 50, marginHorizontal: 5}}>
        <Text style={styles.value}>Total Market Value - Rs. 845.6 cr</Text>

{/* <ScrollView horizontal>
                        <DataTable style={styles.dataTable}>
                            <DataTable.Header style={styles.headerbg}>
                                <DataTable.Title style={styles.headerCell}>No. Of Holdings</DataTable.Title>
                                <DataTable.Title style={styles.headerCell}>No. Of Stock Holdings</DataTable.Title>
                                <DataTable.Title style={styles.headerCell} >No. Of Bond Holdings</DataTable.Title>
                            </DataTable.Header>

                            <DataTable.Row style={styles.headersec}>
                                <DataTable.Cell style={styles.bodyCell}>41</DataTable.Cell>
                                <DataTable.Cell style={styles.bodyCell} >40</DataTable.Cell>
                                <DataTable.Cell style={styles.bodyCell} >0</DataTable.Cell>
                            </DataTable.Row>


                        </DataTable>
                    </ScrollView> */}







        <View style={styles.minimum}>
            <View style={styles.minimum_sec}><View style={styles.mini_tex}><Text style={styles.mini_tex2}>No. Of{'\n'}
                Holdings</Text></View>
                <Text style={styles.mini_tex}>40</Text>
            </View>
            <View style={styles.minimum_sec}><View style={styles.mini_tex}><Text style={styles.mini_tex2}>No. Of{'\n'}
            Stock Holdings</Text></View>
                <Text style={styles.mini_tex}>40</Text>
            </View>
            <View style={styles.minimum_sec}><View style={styles.mini_tex}><Text style={styles.mini_tex2}>No. Of{'\n'}
            Bond Holdings</Text></View>
                <Text style={styles.mini_tex}>0</Text>
            </View>

        </View>


    
        

<View style={styles.graph_sec}>
                <View style={styles.holding_sec}>
                    <View style={styles.type_sec}>
                        <Text style={styles.type}>Holding Type</Text>
                    </View>
                    <View style={styles.cr_sec}>
                        <Text style={styles.cr}>E</Text>
                    </View>
                    <View style={styles.cr_sec}>
                        <Text style={styles.cr}>CR</Text>
                    </View>
                    <View style={styles.cr_sec}>
                        <Text style={styles.cr}>EW</Text>
                    </View>
                    <View style={styles.cr_sec}>
                        <Text style={styles.cr}>C</Text>
                    </View>

                </View>

                <View style={styles.holding_sec}>
                    <View style={styles.type_sec}>
                        <Text style={[styles.type, styles.red]}>%Net</Text>
                    </View>
                    <View style={styles.cr_sec}>
                        <Text style={styles.cr}>85.14</Text>
                    </View>
                    <View style={styles.cr_sec}>
                        <Text style={styles.cr}>11.85</Text>
                    </View>
                    <View style={styles.cr_sec}>
                        <Text style={styles.cr}>2.01</Text>
                    </View>
                    <View style={styles.cr_sec}>
                        <Text style={styles.cr}>1.00</Text>
                    </View>

                </View>
                <View style={styles.allocation}>
                    <Text style={styles.asset}>Asset Allocation</Text>

                    <Image
                        source={require('../../../assets/graph_img.png')}
                        style={styles.graph_img}
                    />

                </View>
            </View>








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
    contain_box: { margin: 20, },

    bottom_sec: {
        paddingVertical: 20,
        marginHorizontal: 10,
    },
    holding: {
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: colors.RED,
        paddingVertical: 5,

    },
    holding_text: {
        fontSize: 20,
        color: colors.RED,
    },
    holding_icon: {
        position: 'absolute',
        right: 0,
        marginTop: 5,
    },
    history: {
        borderWidth: 1,
        borderColor: colors.DEEP_GRAY_5,
    },

    name_sec: {
        flexDirection: "row",

        borderBottomWidth: 1,
        borderColor: colors.DEEP_GRAY_5,
    },
    name_left: {
        width: '70%',
        borderRightWidth: 1,
        borderColor: colors.DEEP_GRAY_5,
        paddingVertical: 5,
        paddingLeft: 20,
    },
    name_right: {
        alignItems: "center",
        width: '30%',
        paddingVertical: 5,
    },
    name_text: {
        fontSize: 15,
    },
    name: { fontSize: 15, },
    current: { fontSize: 10, },
    value: {
        fontSize: 11,
        marginHorizontal: 10,
        marginBottom: 20,
    },

    minimum: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: colors.DEEP_GRAY_5,
        
        


    },
    minimum_sec: {
        borderRightWidth: 1,
        width: '33.3333333%',
        paddingVertical: 5,
        borderColor: colors.DEEP_GRAY_5,

    },
    mini_tex: {
        fontSize: 11,
        textAlign: "center",
        borderBottomWidth: 1,
        borderColor: colors.DEEP_GRAY_5,
        paddingVertical:5,
    },
    mini_tex2: { textAlign: "center", },
    bottom_holding: {
        borderWidth: 1,
        marginVertical: 20,
        borderColor: colors.DEEP_GRAY_5,
    },
    bottom_holdingleft: { width: '40%' },
    bottom_holdingright: { width: '60%' },


    port: { marginTop: 20, },
    goals_2: {
        width: 400,
        height: 170,
    },

    graph_sec: {
        flexDirection: "row",
        borderColor: colors.DEEP_GRAY_5,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        marginHorizontal: 5,
        marginTop:30,
    },
    holding_sec: {
        width: "18%",
        alignItems: "center",
    },
    type_sec: {
        borderRightWidth: 1, borderRightColor: colors.DEEP_GRAY, width: "100%",
        alignItems: "center",
    },
    type: {
        color: colors.RED,
        fontSize: 11,
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 10,

    },
    cr_sec: {
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderRightColor: colors.DEEP_GRAY,
        borderTopColor: colors.DEEP_GRAY,
        width: "100%",
        alignItems: "center",
        paddingVertical: 5,
    },
    cr: {
        fontSize: 11,
    }, red: {
        marginBottom: 23,
    },
    allocation: {
        width: "60%",
        alignItems: "center",
    },
    asset: {
        color: colors.RED,
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 10,
    },
    graph_img: {
        height: 113,
        width: 125,

    },
    dataTable: {
        borderWidth: 1,
        borderColor: colors.DEEP_GRAY,
        marginHorizontal:5,
        
        
    },
    headerCell: {
        width: 100,
        borderRightWidth: 1,
        borderRightColor:colors.DEEP_GRAY,
        paddingLeft: 15,
        
    },
    bodyCell: {
        width: 125,
        borderRightWidth: 1,
        borderRightColor: colors.DEEP_GRAY,
        paddingLeft: 15,

    },
    headerbg: {
        borderBottomWidth: 1,
        borderBottomColor: colors.DEEP_GRAY,
    },
 























});