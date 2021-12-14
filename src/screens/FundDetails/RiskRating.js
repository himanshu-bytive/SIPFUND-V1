import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    Button,
    ScrollView,
    View,
    ImageBackground,
    TouchableOpacity,
    Text,
    Dimensions,
    KeyboardAvoidingView,
    TextInput,
    ActivityIndicator,
} from "react-native";
import { connect } from 'react-redux'
import { DataTable } from 'react-native-paper';
import { Styles, Config, Colors, FormValidate } from '../../common'
import { Ionicons, AntDesign, MaterialIcons, Feather, Entypo, FontAwesome, FontAwesome5, } from 'react-native-vector-icons';
import { Tab, TabView, Image, Header, ListItem, Overlay, Slider } from 'react-native-elements';

function RiskRating(props) {
    const { detailsInfo } = props
    const [index, setIndex] = React.useState(0);
    const [index1, setIndex1] = React.useState(0);
    const [mptStats3Yr, setMptStats3Yr] = useState([])
    const [mptStats5Yr, setMptStats5Yr] = useState([])
    const [mptStats10Yr, setMptStats10Yr] = useState([])
    const [volatility3Yr, setVolatility3Yr] = useState([])
    const [volatility5Yr, setVolatility5Yr] = useState([])
    const [volatility10Yr, setVolatility10Yr] = useState([])
    const [upDownCaptureRatio, setUpDownCaptureRatio] = useState([])

    useEffect(() => {
        let schemeDetail = detailsInfo ? detailsInfo[0].api : {};

        //MPT Statistics start
        // mptStats3Yr
        let mptStats3Yr = []
        mptStats3Yr.push({
            name: (schemeDetail["RMC-IndexName"] || '-'),
            RSquared: (schemeDetail["RMC-₹quared3Yr"] || '-'),
            beta: (schemeDetail["RMC-Beta3Yr"] || '-'),
            alpha: (schemeDetail["RMC-Alpha3Yr"] || '-'),
            treynor: (schemeDetail["RMC-TreynorRatio3Yr"] || '-'),
            currency: 'INR',
        })
        mptStats3Yr.push({
            name: (schemeDetail["RMC-CategoryIndexName"] || '-'),
            RSquared: (schemeDetail["RMC-Category₹quared3Yr"] || '-'),
            beta: (schemeDetail["RMC-CategoryBeta3Yr"] || '-'),
            alpha: (schemeDetail["RMC-CategoryAlpha3Yr"] || '-'),
            treynor: (schemeDetail["RMC-CategoryTreynorRatio3Yr"] || '-'),
            currency: 'INR',
        })
        setMptStats3Yr(mptStats3Yr)

        // mptStats5Yr
        let mptStats5Yr = []
        mptStats5Yr.push({
            name: (schemeDetail["RMC-IndexName"] || '-'),
            RSquared: (schemeDetail["RMC-₹quared5Yr"] || '-'),
            beta: (schemeDetail["RMC-Beta5Yr"] || '-'),
            alpha: (schemeDetail["RMC-Alpha5Yr"] || '-'),
            treynor: (schemeDetail["RMC-TreynorRatio5Yr"] || '-'),
            currency: 'INR',
        })
        mptStats5Yr.push({
            name: (schemeDetail["RMC-CategoryIndexName"] || '-'),
            RSquared: (schemeDetail["RMC-Category₹quared5Yr"] || '-'),
            beta: (schemeDetail["RMC-CategoryBeta5Yr"] || '-'),
            alpha: (schemeDetail["RMC-CategoryAlpha5Yr"] || '-'),
            treynor: (schemeDetail["RMC-CategoryTreynorRatio5Yr"] || '-'),
            currency: 'INR',
        })
        setMptStats5Yr(mptStats5Yr)

        // setMptStats10Yr
        let mptStats10Yr = []
        mptStats10Yr.push({
            name: (schemeDetail["RMC-IndexName"] || '-'),
            RSquared: (schemeDetail["RMC-₹quared10Yr"] || '-'),
            beta: (schemeDetail["RMC-Beta10Yr"] || '-'),
            alpha: (schemeDetail["RMC-Alpha10Yr"] || '-'),
            treynor: (schemeDetail["RMC-TreynorRatio10Yr"] || '-'),
            currency: 'INR',
        })
        mptStats10Yr.push({
            name: (schemeDetail["RMC-CategoryIndexName"] || '-'),
            RSquared: (schemeDetail["RMC-Category₹quared10Yr"] || '-'),
            beta: (schemeDetail["RMC-CategoryBeta10Yr"] || '-'),
            alpha: (schemeDetail["RMC-CategoryAlpha10Yr"] || '-'),
            treynor: (schemeDetail["RMC-CategoryTreynorRatio10Yr"] || '-'),
            currency: 'INR',
        })
        setMptStats10Yr(mptStats10Yr)


        // Volatility measure start
        // volatility3Yr
        let volatility3Yr = []
        volatility3Yr.push({
            trailing: (schemeDetail["FSCBI-FundName"] || '-'),
            standard: (schemeDetail["RM-StdDev3Yr"] || '-'),
            sharpe: (schemeDetail["RM-SharpeRatio3Yr"] || '-'),
            sortino: (schemeDetail["RM-SortinoRatio3Y"] || '-'),
        })
        volatility3Yr.push({
            trailing: (schemeDetail["DP-CategoryName"] || '-'),
            standard: (schemeDetail["RM-CategoryStdDev3Yr"] || '-'),
            sharpe: (schemeDetail["RM-CategorySharpeRatio3Yr"] || '-'),
            sortino: (schemeDetail["RM-CategorySortinoRatio3Yr"] || '-'),
        })
        setVolatility3Yr(volatility3Yr)

        // volatility5Yr
        let volatility5Yr = []
        volatility5Yr.push({
            trailing: (schemeDetail["FSCBI-FundName"] || '-'),
            standard: (schemeDetail["RM-StdDev5Yr"] || '-'),
            sharpe: (schemeDetail["RM-SharpeRatio5Yr"] || '-'),
            sortino: (schemeDetail["RM-SortinoRatio5Y"] || '-'),
        })
        volatility5Yr.push({
            trailing: (schemeDetail["DP-CategoryName"] || '-'),
            standard: (schemeDetail["RM-CategoryStdDev5Yr"] || '-'),
            sharpe: (schemeDetail["RM-CategorySharpeRatio5Yr"] || '-'),
            sortino: (schemeDetail["RM-CategorySortinoRatio5Yr"] || '-'),
        })
        setVolatility5Yr(volatility5Yr)

        // volatility10Yr
        let volatility10Yr = []
        volatility10Yr.push({
            trailing: (schemeDetail["FSCBI-FundName"] || '-'),
            standard: (schemeDetail["RM-StdDev10Yr"] || '-'),
            sharpe: (schemeDetail["RM-SharpeRatio10Yr"] || '-'),
            sortino: (schemeDetail["RM-SortinoRatio10Y"] || '-'),
        })
        volatility10Yr.push({
            trailing: (schemeDetail["DP-CategoryName"] || '-'),
            standard: (schemeDetail["RM-CategoryStdDev10Yr"] || '-'),
            sharpe: (schemeDetail["RM-CategorySharpeRatio10Yr"] || '-'),
            sortino: (schemeDetail["RM-CategorySortinoRatio10Yr"] || '-'),
        })
        setVolatility10Yr(volatility10Yr)

        // UPside Downside Capture Ratio start
        let upDownCaptureRatio = []
        upDownCaptureRatio.push({
            name: (schemeDetail["FSCBI-FundName"] || '-'),
            year1: ([schemeDetail["RMC-CaptureRatioUpside1Yr"] || '-', schemeDetail["RMC-CaptureRatioDownside1Yr"] || '-']),
            year3: ([schemeDetail["RMC-CaptureRatioUpside3Yr"] || '-', schemeDetail["RMC-CaptureRatioDownside3Yr"] || '-']),
            year5: ([schemeDetail["RMC-CaptureRatioUpside5Yr"] || '-', schemeDetail["RMC-CaptureRatioDownside5Yr"] || '-']),
            year10: ([schemeDetail["RMC-CaptureRatioUpside10Yr"] || '-', schemeDetail["RMC-CaptureRatioDownside10Yr"] || '-']),
            year15: ([schemeDetail["RMC-CaptureRatioUpside15Yr"] || '-', schemeDetail["RMC-CaptureRatioDownside15Yr"] || '-']),
        })
        upDownCaptureRatio.push({
            name: (schemeDetail["DP-CategoryName"] || '-'),
            year1: ([schemeDetail["RMC-CategoryCaptureRatioUpside1Yr"] || '-', schemeDetail["RMC-CategoryCaptureRatioDownside1Yr"] || '-']),
            year3: ([schemeDetail["RMC-CategoryCaptureRatioUpside3Yr"] || '-', schemeDetail["RMC-CategoryCaptureRatioDownside3Yr"] || '-']),
            year5: ([schemeDetail["RMC-CategoryCaptureRatioUpside5Yr"] || '-', schemeDetail["RMC-CategoryCaptureRatioDownside5Yr"] || '-']),
            year10: ([schemeDetail["RMC-CategoryCaptureRatioUpside10Yr"] || '-', schemeDetail["RMC-CategoryCaptureRatioDownside10Yr"] || '-']),
            year15: ([schemeDetail["RMC-CategoryCaptureRatioUpside15Yr"] || '-', schemeDetail["RMC-CategoryCaptureRatioDownside15Yr"] || '-']),
        })
        setUpDownCaptureRatio(upDownCaptureRatio)

    }, [detailsInfo]);


    return (
        <View style={styles.mainbox}>
            <Text style={styles.Upside}>MPT Statistics</Text>
            <Tab
                value={index}
                onChange={(e) => setIndex(e)}
                style={{ backgroundColor: '#ffffff' }}
                indicatorStyle={{
                    backgroundColor: '#ffffff',
                    color: Colors.RED,
                    height: 0,
                }}
                variant="default"
            >
                <Tab.Item
                    title="3 Years"
                    titleStyle={{ fontSize: 15, color: Colors.BLACK }}
                />
                <Tab.Item
                    title="5 Years"
                    titleStyle={{ fontSize: 15, color: Colors.BLACK }}
                />
                <Tab.Item
                    title="10 Years"
                    titleStyle={{ fontSize: 15, color: Colors.BLACK }}
                />
            </Tab>
            <View style={{ borderWidth: 1, borderColor: Colors.BLACK, marginTop: 5, }}></View>

            <TabView value={index} onChange={setIndex} animationType="spring">
                <TabView.Item style={{ width: '100%' }}>

                    <DataTable style={styles.dataTable}>
                        <DataTable.Header style={styles.headerbg}>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>Index</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>R-Squared</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>Beta</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>Alpha</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>Treynor Ratio</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={[styles.headerCell, { borderRightWidth: 0 }]} >Currency</DataTable.Title>
                        </DataTable.Header>

                        {mptStats3Yr.map((item, key) => <DataTable.Row key={key} style={styles.headersec}>
                            <DataTable.Cell style={styles.bodyCell}>{item.name}</DataTable.Cell>
                            <DataTable.Cell style={styles.bodyCell}>{item.RSquared}</DataTable.Cell>
                            <DataTable.Cell style={styles.bodyCell}>{item.beta}</DataTable.Cell>
                            <DataTable.Cell style={styles.bodyCell}>{item.alpha}</DataTable.Cell>
                            <DataTable.Cell style={styles.bodyCell}>{item.treynor}</DataTable.Cell>
                            <DataTable.Cell style={[styles.bodyCell, { borderRightWidth: 0 }]} >{item.currency}</DataTable.Cell>
                        </DataTable.Row>)}
                    </DataTable>

                </TabView.Item>
                <TabView.Item style={{ width: '100%' }}>

                    <DataTable style={styles.dataTable}>
                        <DataTable.Header style={styles.headerbg}>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>Index</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>R-Squared</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>Beta</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>Alpha</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>Treynor Ratio</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={[styles.headerCell, { borderRightWidth: 0 }]} >Currency</DataTable.Title>
                        </DataTable.Header>

                        {mptStats5Yr.map((item, key) => <DataTable.Row key={key} style={styles.headersec}>
                            <DataTable.Cell style={styles.bodyCell}>{item.name}</DataTable.Cell>
                            <DataTable.Cell style={styles.bodyCell}>{item.RSquared}</DataTable.Cell>
                            <DataTable.Cell style={styles.bodyCell}>{item.beta}</DataTable.Cell>
                            <DataTable.Cell style={styles.bodyCell}>{item.alpha}</DataTable.Cell>
                            <DataTable.Cell style={styles.bodyCell}>{item.treynor}</DataTable.Cell>
                            <DataTable.Cell style={[styles.bodyCell, { borderRightWidth: 0 }]} >{item.currency}</DataTable.Cell>
                        </DataTable.Row>)}
                    </DataTable>

                </TabView.Item>
                <TabView.Item style={{ width: '100%' }}>

                    <DataTable style={styles.dataTable}>
                        <DataTable.Header style={styles.headerbg}>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>Index</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>R-Squared</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>Beta</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>Alpha</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>Treynor Ratio</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={[styles.headerCell, { borderRightWidth: 0 }]} >Currency</DataTable.Title>
                        </DataTable.Header>

                        {mptStats10Yr.map((item, key) => <DataTable.Row key={key} style={styles.headersec}>
                            <DataTable.Cell style={styles.bodyCell}>{item.name}</DataTable.Cell>
                            <DataTable.Cell style={styles.bodyCell}>{item.RSquared}</DataTable.Cell>
                            <DataTable.Cell style={styles.bodyCell}>{item.beta}</DataTable.Cell>
                            <DataTable.Cell style={styles.bodyCell}>{item.alpha}</DataTable.Cell>
                            <DataTable.Cell style={styles.bodyCell}>{item.treynor}</DataTable.Cell>
                            <DataTable.Cell style={[styles.bodyCell, { borderRightWidth: 0 }]} >{item.currency}</DataTable.Cell>
                        </DataTable.Row>)}
                    </DataTable>

                </TabView.Item>
            </TabView>

            <Text style={styles.Upside}>Volatility Measures</Text>
            <Tab
                value={index1}
                onChange={(e) => setIndex1(e)}
                style={{ backgroundColor: '#ffffff' }}
                indicatorStyle={{
                    backgroundColor: '#ffffff',
                    color: Colors.RED,
                    height: 0,
                }}
                variant="default"
            >
                <Tab.Item
                    title="3 Years"
                    titleStyle={{ fontSize: 15, color: Colors.BLACK }}
                />
                <Tab.Item
                    title="5 Years"
                    titleStyle={{ fontSize: 15, color: Colors.BLACK }}
                />
                <Tab.Item
                    title="10 Years"
                    titleStyle={{ fontSize: 15, color: Colors.BLACK }}
                />
            </Tab>
            <View style={{ borderWidth: 1, borderColor: Colors.BLACK, marginTop: 5, }}></View>

            <TabView value={index1} onChange={setIndex1} animationType="spring">
                <TabView.Item style={{ width: '100%' }}>

                    <DataTable style={styles.dataTable}>
                        <DataTable.Header style={styles.headerbg}>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>3 − Year Trailing</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>Standard Deviation</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>Sharpe Ratio</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={[styles.headerCell, { borderRightWidth: 0 }]} >Sortino Ratio</DataTable.Title>
                        </DataTable.Header>

                        {volatility3Yr.map((item, key) => <DataTable.Row key={key} style={styles.headersec}>
                            <DataTable.Cell style={styles.bodyCell}>{item.trailing}</DataTable.Cell>
                            <DataTable.Cell style={styles.bodyCell}>{item.standard}</DataTable.Cell>
                            <DataTable.Cell style={styles.bodyCell}>{item.sharpe}</DataTable.Cell>
                            <DataTable.Cell style={[styles.bodyCell, { borderRightWidth: 0 }]} >{item.sortino}</DataTable.Cell>
                        </DataTable.Row>)}
                    </DataTable>

                </TabView.Item>
                <TabView.Item style={{ width: '100%' }}>

                    <DataTable style={styles.dataTable}>
                        <DataTable.Header style={styles.headerbg}>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>5 − Year Trailing</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>Standard Deviation</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>Sharpe Ratio</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={[styles.headerCell, { borderRightWidth: 0 }]} >Sortino Ratio</DataTable.Title>
                        </DataTable.Header>

                        {volatility5Yr.map((item, key) => <DataTable.Row key={key} style={styles.headersec}>
                            <DataTable.Cell style={styles.bodyCell}>{item.trailing}</DataTable.Cell>
                            <DataTable.Cell style={styles.bodyCell}>{item.standard}</DataTable.Cell>
                            <DataTable.Cell style={styles.bodyCell}>{item.sharpe}</DataTable.Cell>
                            <DataTable.Cell style={[styles.bodyCell, { borderRightWidth: 0 }]} >{item.sortino}</DataTable.Cell>
                        </DataTable.Row>)}
                    </DataTable>

                </TabView.Item>
                <TabView.Item style={{ width: '100%' }}>

                    <DataTable style={styles.dataTable}>
                        <DataTable.Header style={styles.headerbg}>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>10 − Year Trailing</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>Standard Deviation</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={styles.headerCell}>Sharpe Ratio</DataTable.Title>
                            <DataTable.Title numberOfLines={4} style={[styles.headerCell, { borderRightWidth: 0 }]} >Sortino Ratio</DataTable.Title>
                        </DataTable.Header>

                        {volatility10Yr.map((item, key) => <DataTable.Row key={key} style={styles.headersec}>
                            <DataTable.Cell style={styles.bodyCell}>{item.trailing}</DataTable.Cell>
                            <DataTable.Cell style={styles.bodyCell}>{item.standard}</DataTable.Cell>
                            <DataTable.Cell style={styles.bodyCell}>{item.sharpe}</DataTable.Cell>
                            <DataTable.Cell style={[styles.bodyCell, { borderRightWidth: 0 }]} >{item.sortino}</DataTable.Cell>
                        </DataTable.Row>)}
                    </DataTable>

                </TabView.Item>
            </TabView>

            <Text style={styles.Upside}>Upside & Downside Capture Ratio</Text>
            <DataTable style={styles.dataTable}>
                <DataTable.Header style={styles.headerbg}>
                    <DataTable.Title numberOfLines={4} style={styles.headerCell}>Name</DataTable.Title>
                    <DataTable.Title numberOfLines={4} style={styles.headerCell}>1 − Years</DataTable.Title>
                    <DataTable.Title numberOfLines={4} style={styles.headerCell}>3 − Years</DataTable.Title>
                    <DataTable.Title numberOfLines={4} style={styles.headerCell}>5 − Years</DataTable.Title>
                    <DataTable.Title numberOfLines={4} style={styles.headerCell}>10 − Years</DataTable.Title>
                    <DataTable.Title numberOfLines={4} style={[styles.headerCell, { borderRightWidth: 0 }]} >15 − Years</DataTable.Title>
                </DataTable.Header>

                {upDownCaptureRatio.map((item, key) => <DataTable.Row key={key} style={styles.headersec}>
                    <DataTable.Cell style={styles.bodyCell}>{item.name}</DataTable.Cell>
                    <DataTable.Cell style={styles.bodyCell}><Text>{item.year1[0]}</Text><Text>{item.year1[1]}</Text></DataTable.Cell>
                    <DataTable.Cell style={styles.bodyCell}><Text>{item.year3[0]}</Text><Text>{item.year3[1]}</Text></DataTable.Cell>
                    <DataTable.Cell style={styles.bodyCell}><Text>{item.year5[0]}</Text><Text>{item.year5[1]}</Text></DataTable.Cell>
                    <DataTable.Cell style={styles.bodyCell}><Text>{item.year10[0]}</Text><Text>{item.year10[1]}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.bodyCell, { borderRightWidth: 0 }]} ><Text>{item.year15[0]}</Text><Text>{item.year15[1]}</Text></DataTable.Cell>
                </DataTable.Row>)}
            </DataTable>


        </View>);
}

const styles = StyleSheet.create({


    header: {
        borderBottomColor: Colors.BLACK,
        borderBottomWidth: 1,
    },
    private_sector: {
        flexDirection: "row",

        marginBottom: 5,

    },
    private: {
        fontSize: 20,
        width: "87%",
        marginBottom: 2,
        marginLeft: 10,
        fontWeight: "bold",
        color: Colors.RED,
    },




    Upside: {
        fontSize: 20,
        color: Colors.RED,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
    },
    back_sec: {
        flexDirection: "row",
    },
    back1: {
        width: "30%",
        alignItems: "center",

    },
    back_year: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.RED,
    },
    back_year2: {
        fontSize: 20,
        fontWeight: "bold",

    },
    invesco_india: {
        flexDirection: "row",
        width: "60%",
        marginLeft: "27%",
        marginTop: 10,
    },
    Invesco: {
        fontSize: 18,
        fontWeight: "bold",
        width: "50%",
        color: Colors.RED,
        marginLeft: 30,

    },

    mainbox_2: {
        flexDirection: "row",
        margin: 10,
    },
    bse: {
        width: "33%",

    },
    index1: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: Colors.DEEP_GRAY,
        marginBottom: 15,
    },
    index: {
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.DEEP_GRAY,
        marginVertical: 5,
    },



    upside: {
        width: 322,
        height: 135,
    },


});


const mapStateToProps = (state) => ({
    token: state.auth.token,
    users: state.auth.user,
    detailsInfo: state.fundDetail.detailsInfo,
})
export default connect(mapStateToProps)(RiskRating)