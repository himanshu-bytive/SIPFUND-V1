import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    Button,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    Text,
    Dimensions,
    KeyboardAvoidingView,
    TextInput,
    ActivityIndicator,
    ScrollView,
} from "react-native";
import { colors } from '../../common/theme';
import { Entypo, AntDesign } from 'react-native-vector-icons';
import { Header, Overlay } from 'react-native-elements';
import Investments from '../../components/Investments'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const investmentData = [
    { title: 'Long Term', image: require('../../../assets/term1.png') },
    { title: 'Tax Saving Funds', image: require('../../../assets/term2.png') },
    { title: 'Better Than', image: require('../../../assets/term3.png') },
    { title: 'Tax Saving Funds', image: require('../../../assets/term4.png') },
    { title: 'Better Than FD', image: require('../../../assets/term5.png') },
    { title: 'Aggressive Funds', image: require('../../../assets/term6.png') },
]

export default function HamburgerMenu5Screen(props) {

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <View style={styles.container}>
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={30} color={colors.RED} /></TouchableOpacity>}
                rightComponent={<TouchableOpacity onPress={() => props.navigation.navigate('Toprated')} style={{ marginTop: 20 }}><AntDesign name={"shoppingcart"} size={30} color={colors.RED} /></TouchableOpacity>}
                backgroundColor={colors.LIGHT_WHITE}
                containerStyle={styles.header}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
            />
            <ScrollView style={styles.containerScroll}>

                <View style={styles.switch_sec}>
                    <Text style={styles.transaction}>Holdings</Text>

                    <View style={styles.tab_sec}>

                        <View style={styles.tab1}>
                            <Text style={styles.switch}>HOLDINGS</Text>

                        </View>

                        <View style={styles.tab1}>
                            <Text style={styles.switch}>EXTERNAL HOLDINGS</Text>
                        </View>

                    </View>
                </View>

                {/* Total Investment_sec... */}

                <View style={styles.main_box}>

                    <View style={styles.investment_sec}>
                        <View style={styles.blue_sec}>
                            <Text style={styles.total_investment}>Total Investment</Text>
                            <Text style={styles.price}>₹ 3,23,930.00</Text>
                        </View>
                        <View style={styles.red_sec}>
                            <Text style={styles.total_investment}>Current Value</Text>
                            <Text style={styles.price}>₹ 4,13,550.94</Text>
                        </View>
                        <View style={styles.green_sec}>
                            <Text style={styles.total_investment}>Unrealized Profit</Text>
                            <Text style={styles.price}>₹ 89,620.94</Text>

                        </View>
                    </View>

                    {/* FRANKLIN TEMPLETON MUTUAL FUND_SEC... */}

                    <View style={styles.fund_sec}>

                        <View style={styles.axis_sec}>
                            <Text style={styles.axis}>FRANKLIN TEMPLETON MUTUAL FUND</Text>

                        </View>

                        <View style={styles.growth_sec}>
                            <Text style={styles.axis_treasury}>Franklin India Ultra Short Bond Fund - Super Institutional Plan </Text>

                            {/* value_sec */}

                            <View style={styles.value_sec}>
                                <View style={styles.folio_sec}>

                                    <Text style={styles.folio}>18.639</Text>
                                    <Text style={styles.folio}>Units</Text>
                                </View>

                                <View style={styles.folio_sec}>

                                    <Text style={styles.folio}>500.762</Text>
                                    <Text style={styles.folio}>Invested Amount</Text>
                                </View>

                                <View style={styles.folio_sec}>
                                    <Text style={styles.folio}>6.4</Text>
                                    <Text style={styles.folio}>CAGR %</Text>

                                </View>
                            </View>

                            {/* value_sec_end */}

                            {/* value_sec2_start */}

                            <View style={styles.value_sec}>
                                <View style={styles.folio_sec}>

                                    <Text style={styles.folio}>567.904</Text>
                                    <Text style={styles.folio}>Market Value</Text>
                                    <Text style={styles.folio}>On 13-Jul-2021</Text>
                                </View>

                                <View style={styles.folio_sec}>
                                    <View style={{ flexDirection: "row", }}>
                                        <Text style={[styles.folio, styles.green]}>67.142</Text>
                                        <AntDesign name="caretup" size={15} color="#5DA753" />
                                    </View>
                                    <Text style={styles.folio}>Unrealized Profit</Text>
                                </View>

                                <View style={styles.folio_sec}>
                                    <Text style={[styles.folio, styles.green]}>13.408</Text>
                                    <Text style={styles.folio}>Unrealized Profit %</Text>

                                </View>
                            </View>

                        </View>
                    </View>

                    {/* Axis Mutual Fund_sec.. */}

                    <View style={styles.fund_sec}>

                        <View style={styles.axis_sec}>
                            <Text style={styles.axis}>Axis Mutual Fund</Text>

                        </View>

                        <View style={styles.growth_sec}>
                            <Text style={styles.axis_treasury}>Axis Long Term Equilty Fund - Regular Growth</Text>

                            {/* value_sec */}

                            <View style={styles.value_sec}>
                                <View style={styles.folio_sec}>

                                    <Text style={styles.folio}>3089.835</Text>
                                    <Text style={styles.folio}>Units</Text>
                                </View>

                                <View style={styles.folio_sec}>

                                    <Text style={styles.folio}>151996.56</Text>
                                    <Text style={styles.folio}>Invested Amount</Text>
                                </View>

                                <View style={styles.folio_sec}>
                                    <Text style={styles.folio}>17.86</Text>
                                    <Text style={styles.folio}>CAGR %</Text>

                                </View>
                            </View>

                            {/* value_sec_end */}

                            <View style={styles.value_sec}>
                                <View style={styles.folio_sec}>

                                    <Text style={styles.folio}>208998.61</Text>
                                    <Text style={styles.folio}>Market Value</Text>
                                    <Text style={styles.folio}>On 13-Jul-2021</Text>
                                </View>

                                <View style={styles.folio_sec}>
                                    <View style={{ flexDirection: "row", }}>
                                        <Text style={[styles.folio, styles.green]}>57002.047</Text>
                                        <AntDesign name="caretup" size={15} color="#5DA753" />
                                    </View>
                                    <Text style={styles.folio}>Unrealized Profit</Text>
                                </View>

                                <View style={styles.folio_sec}>
                                    <Text style={[styles.folio, styles.green]}>37.502</Text>
                                    <Text style={styles.folio}>Unrealized Profit %</Text>

                                </View>
                            </View>

                        </View>
                    </View>

                    {/* SBI Mutual Fund_sec */}

                    <View style={styles.fund_sec}>

                        <View style={styles.axis_sec}>
                            <Text style={styles.axis}>SBI Mutual Fund</Text>

                        </View>

                        <View style={styles.growth_sec}>
                            <Text style={styles.axis_treasury}>SBI Flexicap Fund - Regular Plan - Growth</Text>

                            {/* value_sec */}

                            <View style={styles.value_sec}>
                                <View style={styles.folio_sec}>

                                    <Text style={styles.folio}>328.609</Text>
                                    <Text style={styles.folio}>Units</Text>
                                </View>

                                <View style={styles.folio_sec}>

                                    <Text style={styles.folio}>20999.08</Text>
                                    <Text style={styles.folio}>Invested Amount</Text>
                                </View>

                                <View style={styles.folio_sec}>
                                    <Text style={styles.folio}>14.43</Text>
                                    <Text style={styles.folio}>CAGR %</Text>

                                </View>
                            </View>

                        </View>
                    </View>
                </View>


                {/* External Holding_ tab sec */}


                <View style={styles.holding_sec}>
                    <Text style={styles.transaction}>External Holding</Text>
                </View>
                <View style={styles.main_box}>
                    <View style={styles.investment_sec}>
                        <View style={styles.blue_sec}>
                            <Text style={styles.total_investment}>Total Investment</Text>
                            <Text style={styles.price}>₹ 999.95</Text>
                        </View>
                        <View style={styles.red_sec}>
                            <Text style={styles.total_investment}>Current Value</Text>
                            <Text style={styles.price}>₹ 1,532.69</Text>
                        </View>
                        <View style={styles.green_sec}>
                            <Text style={styles.total_investment}>Unrealized Profit</Text>
                            <Text style={styles.price}>₹ 532.74</Text>

                        </View>
                    </View>

                    {/* SBI Mutual Fund_2_sec */}

                    <View style={styles.fund_sec}>

                        <View style={styles.axis_sec}>
                            <Text style={styles.axis}>SBI Mutual Fund</Text>

                        </View>

                        <View style={styles.growth_sec}>
                            <Text style={styles.axis_treasury}>SBI BANKING & FINANCIAL SERVICES FUND</Text>



                            <View style={styles.value_sec}>
                                <View style={styles.folio_sec}>

                                    <Text style={styles.folio}>64.159</Text>
                                    <Text style={styles.folio}>Units</Text>
                                </View>

                                <View style={styles.folio_sec}>

                                    <Text style={styles.folio}>999.95</Text>
                                    <Text style={styles.folio}>Invested Amount</Text>
                                </View>

                                <View style={styles.folio_sec}>
                                    <Text style={styles.folio}>57.12</Text>
                                    <Text style={styles.folio}>CAGR %</Text>

                                </View>
                            </View>

                            {/* value_sec_end */}

                            <View style={styles.value_sec}>
                                <View style={styles.folio_sec}>

                                    <Text style={styles.folio}>1532.691</Text>
                                    <Text style={styles.folio}>Market Value</Text>
                                    <Text style={styles.folio}>On 13-Jul-2021</Text>
                                </View>

                                <View style={styles.folio_sec}>
                                    <View style={{ flexDirection: "row", }}>
                                        <Text style={[styles.folio, styles.green]}>532.741</Text>
                                        <AntDesign name="caretup" size={15} color="#5DA753" />
                                    </View>
                                    <Text style={styles.folio}>Unrealized Profit</Text>
                                </View>

                                <View style={styles.folio_sec}>
                                    <Text style={[styles.folio, styles.green]}>53.277</Text>
                                    <Text style={styles.folio}>Unrealized Profit %</Text>

                                </View>
                            </View>

                        </View>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.botton_box}>
                            <Text style={styles.proceed}>DOWNLOAD YOUR STATEMENT</Text>
                        </TouchableOpacity>

                        <View style={styles.footer_box}>
                            <TouchableOpacity style={styles.botton_box2}>
                                <Text style={styles.proceed}>ADD HOLDING</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.botton_box2}>
                                <Text style={styles.proceed}>ADD HOLDING PDF</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                    {/* External Holding_ end */}
                </View>
            </ScrollView>



        </View>
    );
}


const styles = StyleSheet.create({
    container: { flex: 1, },

    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    switch_sec: {
        backgroundColor: colors.RED,
    },
    transaction: {
        fontSize: 21,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20,
        color: colors.WHITE,
    },
    tab_sec: {
        flexDirection: "row",
        marginVertical: 10,
    },
    tab1: {
        width: "50%",
        alignItems: "center",
    },
    switch: {
        color: colors.WHITE,
        fontSize: 13,
    },
    main_box: {
        backgroundColor: colors.GREY_1,
        padding: 15,
    },
    investment_sec: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    blue_sec: {
        backgroundColor: colors.BLUE_1,
        alignItems: "center",

        width: "32%",
    },
    red_sec: {
        backgroundColor: colors.PINK,
        alignItems: "center",

        width: "32%",
    },
    green_sec: {
        backgroundColor: colors.GREEN_1,
        alignItems: "center",
        width: "32%",
    },
    total_investment: {
        fontSize: 10,
        marginTop: 15,
        color: colors.WHITE,
    },
    price: {
        fontSize: 10,
        marginBottom: 15,
        color: colors.WHITE,
    },
    fund_sec: {
        backgroundColor: colors.WHITE,
        marginTop: 20,
    },
    axis_sec: {
        backgroundColor: "#838793",
    },
    axis: {
        fontSize: 16,
        color: colors.WHITE,
        marginLeft: 10,
        marginVertical: 10,
    },
    growth_sec: {
        padding: 10,
    },
    axis_treasury: {
        fontSize: 12,
        fontWeight: "bold",
        color: colors.DEEP_GRAY,
        marginBottom: 10,
        width: "80%",
    },
    value_sec: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    folio_sec: {
        width: "33%",
    },
    folio: {
        fontSize: 15,
        color: colors.BLACK,
    },
    green: { color: "#5DA753" },

    // holding_sec


    holding_sec: {
        backgroundColor: colors.RED,
        alignItems: "center",
    },
    botton_box: {
        backgroundColor: colors.RED,
        paddingVertical: 20,
    },
    proceed: {
        color: colors.WHITE,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: "center",
    },
    footer_box: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    },
    botton_box2: {
        width: "49%",
        backgroundColor: colors.RED,
        paddingVertical: 20,
    },



});