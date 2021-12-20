import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    Button,
    ScrollView,
    Dimensions,
    View,
    TouchableOpacity,
    Text,
} from "react-native";
import moment from 'moment';
import { connect } from 'react-redux'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { Styles, Config, Colors, FormValidate, Utility } from '../../common'
import { MaterialIcons, AntDesign, Entypo, FontAwesome5, FontAwesome, Foundation } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { VictoryChartCode } from '../../components'
import FundDetailScreen from './FundDetailScreen'

const rupees = [
    { text: '1M', value: null },
    { text: '1Y', value: 1 },
    { text: '2Y', value: 2 },
    { text: '3Y', value: 3 },
    { text: '4Y', value: 4 },
    { text: '5Y', value: 5 },
    { text: '6Y', value: 6 },
    { text: 'ALL', value: 10 },
]

function FundsHomeScreen(props) {
    const { token, users, fetchFunds, funds, fundChartList, fundDetail, fundDetailsList, detailsMap, detailsInfo } = props
    const [selectTab, setSelectTab] = useState('1M');
    const [assets, setAssets] = useState(0)
    const [invest, setInvest] = useState(0)
    const [category, setCategory] = useState(0)
    const [navPercentage, setNavPercentage] = useState(0);
    const [labels, setLabels] = useState(['', '', '', '']);
    const [datasets, setDatasets] = useState([0, 0, 0, 0]);

    const toggleTab = (value) => {
        setSelectTab(value)
        let date = new Date(), y = date.getFullYear(), m = date.getMonth();
        let firstDay = new Date(y, m, 1);
        let lastDay = new Date(y, m + 1, 0);
        if (value === '1M') {
            date = new Date(), y = date.getFullYear(), m = date.getMonth();
            firstDay = new Date(y, m, 1);
            lastDay = new Date(y, m + 1, 0);
        } else {
            let year = rupees.find(x => x.text == value);
            date = new Date(), y = date.getFullYear();
            firstDay = new Date((y - (year?.value ? year.value : 1)), 1, -29);
            lastDay = new Date(y, 1, -29);
        }
        setLabels(Utility.getDatesBetweenDates(firstDay, lastDay))
        fundChartList({ ISIN: fundDetail?.ISIN ? fundDetail.ISIN : 'INF200K01T28', from: moment(firstDay).format('YYYY-MM-DD'), to: moment(lastDay).format('YYYY-MM-DD') }, token)
    };


    useEffect(() => {
        if (users) {
            let date = new Date(), y = date.getFullYear(), m = date.getMonth();
            let firstDay = new Date(y, m, 1);
            let lastDay = new Date(y, m + 1, 0);
            setLabels(Utility.getDatesBetweenDates(firstDay, lastDay))
            fundChartList({ ISIN: fundDetail?.ISIN ? fundDetail.ISIN : 'INF200K01T28', from: moment(firstDay).format('YYYY-MM-DD'), to: moment(lastDay).format('YYYY-MM-DD') }, token)
            fundDetailsList({ ISIN: fundDetail?.ISIN ? fundDetail.ISIN : 'INF200K01T28', }, token)
        }
    }, [users]);

    useEffect(() => {
        let detailedPortFolio = detailsInfo ? detailsInfo[0].api : {};
        let navPercentage = detailedPortFolio["DP-NAVChangePercentage"] ? Number(detailedPortFolio["DP-NAVChangePercentage"]).toFixed(2) : 0
        let assets = detailedPortFolio["PSRP-TotalMarketValueNet"] ? Number(detailedPortFolio["PSRP-TotalMarketValueNet"]).toFixed(2) : 0
        let invest = detailedPortFolio["PI-MinimumInitial"] ? Number(detailedPortFolio["PI-MinimumInitial"]).toFixed(2) : 0
        let category = detailedPortFolio["DP-CategoryName"] ? detailedPortFolio["DP-CategoryName"] : ''
        setNavPercentage(navPercentage)
        setAssets(assets)
        setInvest(invest)
        setCategory(category)

    }, [detailsInfo]);

    useEffect(() => {
        calculateMap()
    }, [detailsMap]);

    useEffect(() => {
        calculateMap()
    }, [selectTab]);

    const calculateMap = () => {
        let labs = {}
        for (let item of labels) {
            labs[item] = 0
        }
        let data = {}
        if (detailsMap) {
            for (let lab in labs) {
                for (let item of detailsMap) {
                    if (new Date(lab).getTime() > new Date(item.d).getTime()) {
                        data[lab] = item.v
                    }
                }
            }
        }
        let datasets = []
        for (let key of labels) {
            datasets.push(data[key] ? Number(data[key]) : 0)
        }
        setDatasets(datasets)
    }

    return (
        <View style={styles.container}>
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={30} color={Colors.RED} /></TouchableOpacity>}
                containerStyle={styles.header}
                backgroundColor={Colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
                rightComponent={<View style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={Colors.RED} /></View>}
            />
            <ScrollView style={styles.containerScroll}>
                <View style={styles.management_company}>
                    <Image
                        source={{ uri: fundDetail?.imagePath }}
                        style={styles.axis_img}
                    />
                    <TouchableOpacity>
                        <View style={styles.axis}>
                            <Text style={styles.axis_asset}>{fundDetail?.name}</Text>
                            <Text style={styles.midcap}>{fundDetail?.productCode}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 20 }}>
                    <View style={styles.fund_returns}>
                        <Text style={styles.fund}>Fund Returns</Text>
                        <View style={styles.since_inception}>
                            <Text style={styles.number}>{navPercentage}%</Text>
                            <Text style={styles.since}>Since Inception</Text>
                        </View>
                    </View>
                    <LineChart
                        data={{
                            labels: labels,
                            datasets: [{ data: datasets }]
                        }}
                        width={Dimensions.get("window").width - 40} // from react-native
                        height={220}
                        yAxisLabel=""
                        yAxisSuffix=""
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "transparent",
                            backgroundGradientFrom: "#F9F9F9",
                            backgroundGradientTo: "#F9F9F9",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `#000`,
                            labelColor: (opacity = 1) => `#000`,
                            style: {
                                borderRadius: 0,
                                backgroundColor: "transparent",
                            },
                            propsForDots: {
                                r: "4",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />
                    {/* <VictoryChartCode data={mapData} /> */}
                    <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, }}></View>
                    {/* imges_sec */}
                    <View style={styles.footer_sec}>
                        {rupees.map((item, key) => <TouchableOpacity onPress={() => toggleTab(item.text)} key={key} style={styles.rupees_sec}>
                            <Image
                                source={(selectTab == item.text) ? require('../../../assets/layer_img2.png') : require('../../../assets/layer_img.png')}
                                style={styles.rupees}
                            />
                            <Text style={styles.rupees_text}>{item.text}</Text>
                        </TouchableOpacity>)}
                    </View>

                    {/* Min Investment_sec */}
                    <View style={styles.investment_sec}>
                        <View style={styles.investment}>
                            <Text style={styles.price}>₹{assets}</Text>
                            <Text style={styles.min}>Total Assets</Text>
                        </View>
                        <View style={styles.investment}>
                            <Text style={styles.price}>₹{invest}</Text>
                            <Text style={styles.min}>Min. Invest</Text>
                        </View>
                        <View style={styles.investment}>
                            <Text style={styles.price}>{category}</Text>
                            <Text style={styles.min}>Category</Text>
                        </View>
                    </View>
                </View>
                <FundDetailScreen />
            </ScrollView>
        </View>


    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerScroll: {
        width: '100%',
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
    axis_img: {
        height: 53,
        width: 53,
        marginLeft: 20,
    },
    management_company: {
        flexDirection: "row",
        backgroundColor: Colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        paddingTop: 20,
        paddingBottom: 20,
    },
    axis: {
        marginLeft: 20,
    },

    axis_asset: {
        fontSize: 18,
    },
    midcap: {
        fontSize: 13,
        color: Colors.DEEP_GRAY,
    },

    fund_returns: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    fund: {
        fontSize: 15,
    },
    number: {
        fontSize: 15,
        textAlign: "right",
        color: Colors.RED,
        fontWeight: "bold",
    },
    since: {
        fontSize: 12,

    },
    linechartimg: {
        height: 179,
        width: 378,
        marginTop: 20,
        marginBottom: 20,
    },
    img_sec: {
        flexDirection: "row",
    },

    layer_img: {
        height: 36,
        width: 40,
        marginHorizontal: 18,
        marginVertical: 15,
    },
    time_sec: {
        flexDirection: "row",

    },
    year: {
        fontSize: 12,
        marginHorizontal: 30,
    },
    year1: {
        color: Colors.RED,
        marginLeft: 33,
        fontSize: 12,

    },

    investment_sec: {
        flexDirection: "row",
        marginTop: 30,
        justifyContent: "space-between",
        marginHorizontal: 10,
    },
    investment: {

        alignItems: "center",
    },
    price: {
        color: Colors.RED,
        fontSize: 18,
        fontWeight: "bold",
    },
    min: {
        fontSize: 15,
    },
    private_sector: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 5,
    },
    private: {
        fontSize: 25,
        width: "87%",
        marginBottom: 2,
        marginLeft: 10,
        fontWeight: "bold",
        color: Colors.RED,
    },
    footer_sec: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 30,
        justifyContent: "space-between"
    },
    rupees: {
        width: 30,
        height: 30,
    },
    rupees_sec: { alignItems: "center", },
    rupees_text: { fontSize: 12, },
});

const mapStateToProps = (state) => ({
    token: state.auth.token,
    users: state.auth.user,
    funds: state.addmorefunds.funds,
    fundDetail: state.fundDetail.details,
    detailsMap: state.fundDetail.detailsMap,
    detailsInfo: state.fundDetail.detailsInfo,
})

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { AddMoreFundsActions } = require('../../store/AddMoreFundsRedux')
    const { FundDetailActions } = require('../../store/FundDetailRedux')
    return {
        ...stateProps,
        ...ownProps,
        fetchFunds: (params, token) => { AddMoreFundsActions.fetchFunds(dispatch, params, token) },
        fundChartList: (params, token) => { FundDetailActions.fundChartList(dispatch, params, token) },
        fundDetailsList: (params, token) => { FundDetailActions.fundDetailsList(dispatch, params, token) },
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(FundsHomeScreen)