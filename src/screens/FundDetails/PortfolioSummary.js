import React, { useState, useRef, useEffect, useContext } from "react";
import { DataTable } from 'react-native-paper';
import {
    StyleSheet,
    View,
    Text,
} from "react-native";
import { connect } from 'react-redux'
import { Colors } from '../../common'
import { VictoryPieCode } from '../../components'

function PortfolioSummary(props) {
    const { detailsInfo } = props

    useEffect(() => {
        let detailedPortFolio = detailsInfo ? detailsInfo[0].api : {};

    }, [detailsInfo]);


    return (
        <View style={{ marginHorizontal: 5 }}>
            <Text style={styles.value}>Total Market Value - Rs. 845.6 cr</Text>


            <DataTable style={styles.dataTable}>
                <DataTable.Header style={styles.headerbg}>
                    <DataTable.Title numberOfLines={4} style={styles.headerCell}>No. Of Holdings</DataTable.Title>
                    <DataTable.Title numberOfLines={4} style={styles.headerCell}>No. Of Stock Holdings</DataTable.Title>
                    <DataTable.Title numberOfLines={4} style={[styles.headerCell, { borderRightWidth: 0 }]} >No. Of Bond Holdings</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row style={styles.headersec}>
                    <DataTable.Cell style={styles.bodyCell}>41</DataTable.Cell>
                    <DataTable.Cell style={styles.bodyCell} >40</DataTable.Cell>
                    <DataTable.Cell style={[styles.bodyCell, { borderRightWidth: 0 }]} >0</DataTable.Cell>
                </DataTable.Row>
            </DataTable>


            <View style={styles.graph_sec}>

                <View style={styles.holding_sec}>
                    <DataTable style={styles.dataTablebottom}>
                        <DataTable.Header style={styles.headerbg}>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}><Text style={styles.type}>Holding Type</Text></DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={[styles.headerCell, { borderRightWidth: 0 }]} ><Text style={styles.type}>%Net</Text></DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={styles.headerbg}>
                            <DataTable.Cell style={styles.bodyCell}>E</DataTable.Cell>
                            <DataTable.Cell style={[styles.bodyCell, { borderRightWidth: 0 }]} >85.14</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={styles.headerbg}>
                            <DataTable.Cell style={styles.bodyCell}>CR</DataTable.Cell>
                            <DataTable.Cell style={[styles.bodyCell, { borderRightWidth: 0 }]} >85.14</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={styles.headerbg}>
                            <DataTable.Cell style={styles.bodyCell}>EW</DataTable.Cell>
                            <DataTable.Cell style={[styles.bodyCell, { borderRightWidth: 0 }]} >85.14</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={styles.headersec}>
                            <DataTable.Cell style={styles.bodyCell}>C</DataTable.Cell>
                            <DataTable.Cell style={[styles.bodyCell, { borderRightWidth: 0 }]} >85.14</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                </View>

                <View style={styles.allocation}>
                    <Text style={styles.asset}>Asset Allocation</Text>
                    <VictoryPieCode
                        colors={["#669ED1", "#E08349", "#A1A6A9", "#C6DC5B"]}
                        data={[
                            { x: "E", y: 80 },
                            { x: "CR", y: 10 },
                            { x: "EW", y: 8 },
                            { x: "C", y: 2 }
                        ]} />
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
        borderBottomColor: Colors.RED,
        paddingVertical: 5,

    },
    holding_text: {
        fontSize: 20,
        color: Colors.RED,
    },
    holding_icon: {
        position: 'absolute',
        right: 0,
        marginTop: 5,
    },
    history: {
        borderWidth: 1,
        borderColor: Colors.DEEP_GRAY_5,
    },

    name_sec: {
        flexDirection: "row",

        borderBottomWidth: 1,
        borderColor: Colors.DEEP_GRAY_5,
    },
    name_left: {
        width: '70%',
        borderRightWidth: 1,
        borderColor: Colors.DEEP_GRAY_5,
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
        borderColor: Colors.DEEP_GRAY_5,




    },
    minimum_sec: {
        borderRightWidth: 1,
        width: '33.3333333%',
        paddingVertical: 5,
        borderColor: Colors.DEEP_GRAY_5,

    },
    mini_tex: {
        fontSize: 11,
        textAlign: "center",
        borderBottomWidth: 1,
        borderColor: Colors.DEEP_GRAY_5,
        paddingVertical: 5,
    },
    mini_tex2: { textAlign: "center", },
    bottom_holding: {
        borderWidth: 1,
        marginVertical: 20,
        borderColor: Colors.DEEP_GRAY_5,
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
        borderColor: Colors.DEEP_GRAY_5,
        borderWidth: 1,
        marginHorizontal: 5,
        marginTop: 30,
    },
    holding_sec: {
        width: "50%",
        alignItems: "center",
    },
    type_sec: {
        borderRightWidth: 1, borderRightColor: Colors.DEEP_GRAY, width: "100%",
        alignItems: "center",
    },
    type: {
        color: Colors.RED,
        fontSize: 11,
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 10,

    },
    cr_sec: {
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderRightColor: Colors.DEEP_GRAY,
        borderTopColor: Colors.DEEP_GRAY,
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
        color: Colors.RED,
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
        borderColor: Colors.DEEP_GRAY,
    },
    dataTablebottom: {
        borderRightWidth: 1,
        borderColor: Colors.DEEP_GRAY,
    },
    headerbg: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.DEEP_GRAY,
    },
    headerCell: {
        // padding: 10,
        borderRightWidth: 1,
        borderRightColor: Colors.DEEP_GRAY,
        justifyContent: 'center',
    },
    bodyCell: {
        // padding: 10,
        borderRightWidth: 1,
        borderRightColor: Colors.DEEP_GRAY,
        justifyContent: 'center',
    },
});

const mapStateToProps = (state) => ({
    token: state.auth.token,
    users: state.auth.user,
    detailsInfo: state.fundDetail.detailsInfo,
})
export default connect(mapStateToProps)(PortfolioSummary)