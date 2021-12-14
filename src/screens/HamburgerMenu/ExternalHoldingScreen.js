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
import { connect } from 'react-redux'
import { Styles, Config, Colors, FormValidate } from '../../common'
import { Entypo, AntDesign } from 'react-native-vector-icons';
import { Header, Overlay } from 'react-native-elements';


function HoldingsScreen(props) {
    const { token, users, getSchemeList, schemeDetails } = props
    const [data, setData] = useState(schemeDetails);
    const [investment, setInvestment] = useState(999.95);
    const [currentValue, setCurrentValue] = useState(1532.69);
    const [profit, setProfit] = useState(532.74);


    useEffect(() => {
        getSchemeList('128', token)
    }, []);

    // console.log(schemeDetails)

    return (
        <View style={styles.container}>
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={30} color={Colors.RED} /></TouchableOpacity>}
                rightComponent={<TouchableOpacity onPress={() => props.navigation.navigate('Toprated')} style={{ marginTop: 20 }}><AntDesign name={"shoppingcart"} size={30} color={Colors.RED} /></TouchableOpacity>}
                backgroundColor={Colors.LIGHT_WHITE}
                containerStyle={styles.header}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
            />
            <ScrollView style={styles.containerScroll}>


                {/* External Holding_ tab sec */}
                <View style={styles.holding_sec}>
                    <Text style={styles.transaction}>External Holding</Text>
                </View>
                <View style={styles.main_box}>
                    <View style={styles.investment_sec}>
                        <View style={styles.blue_sec}>
                            <Text style={styles.total_investment}>Total Investment</Text>
                            <Text style={styles.price}>₹ {investment}</Text>
                        </View>
                        <View style={styles.red_sec}>
                            <Text style={styles.total_investment}>Current Value</Text>
                            <Text style={styles.price}>₹ {currentValue}</Text>
                        </View>
                        <View style={styles.green_sec}>
                            <Text style={styles.total_investment}>Unrealized Profit</Text>
                            <Text style={styles.price}>₹ {profit}</Text>

                        </View>
                    </View>

                    {/* SBI Mutual Fund_2_sec */}

                    {data.map((item, key) => <View key={key} style={styles.fund_sec}>
                        <View style={styles.axis_sec}>
                            <Text style={styles.axis}>{item.PRODUCT_CODE}</Text>
                        </View>

                        <View style={styles.growth_sec}>
                            <Text style={styles.axis_treasury}>{item.PRODUCT_LONG_NAME}</Text>
                            <View style={styles.value_sec}>
                                <View style={styles.folio_sec}>
                                    <Text style={styles.folio}>{item.PRODUCT_LONG_NAME}</Text>
                                    <Text style={styles.folio}>Units</Text>
                                </View>

                                <View style={styles.folio_sec}>
                                    <Text style={styles.folio}>{item.PRODUCT_LONG_NAME}</Text>
                                    <Text style={styles.folio}>Invested Amount</Text>
                                </View>

                                <View style={styles.folio_sec}>
                                    <Text style={styles.folio}>{item.PRODUCT_LONG_NAME}</Text>
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
                    </View>)}

                    {/* External Holding_ end */}
                </View>
            </ScrollView>
            <View style={styles.bottonsec}>
                <TouchableOpacity style={styles.botton_box}>
                    <Text style={styles.proceed}>DOWNLOAD YOUR STATEMENT</Text>
                </TouchableOpacity>
                <View style={styles.footer_box}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Holdings')} style={styles.botton_box2}>
                        <Text style={styles.proceed}>ADD HOLDING</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botton_box2}>
                        <Text style={styles.proceed}>ADD HOLDING PDF</Text>
                    </TouchableOpacity>

                </View>
            </View>


        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D3D6DB'
    },

    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    switch_sec: {
        backgroundColor: Colors.RED,
    },
    transaction: {
        fontSize: 21,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20,
        color: Colors.WHITE,
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
        color: Colors.WHITE,
        fontSize: 13,
    },
    main_box: {
        padding: 15,
    },
    investment_sec: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    blue_sec: {
        backgroundColor: Colors.BLUE_1,
        alignItems: "center",

        width: "32%",
    },
    red_sec: {
        backgroundColor: Colors.LIGHT_PINK,
        alignItems: "center",

        width: "32%",
    },
    green_sec: {
        backgroundColor: Colors.GREEN_1,
        alignItems: "center",
        width: "32%",
    },
    total_investment: {
        fontSize: 12,
        marginTop: 15,
        color: Colors.WHITE,
    },
    price: {
        fontSize: 12,
        marginBottom: 15,
        color: Colors.WHITE,
    },
    fund_sec: {
        backgroundColor: Colors.WHITE,
        marginTop: 20,
    },
    axis_sec: {
        backgroundColor: "#838793",
    },
    axis: {
        fontSize: 16,
        color: Colors.WHITE,
        marginLeft: 10,
        marginVertical: 10,
    },
    growth_sec: {
        padding: 10,
    },
    axis_treasury: {
        fontSize: 12,
        fontWeight: "bold",
        color: Colors.DEEP_GRAY,
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
        color: Colors.BLACK,
    },
    green: { color: "#5DA753" },

    // holding_sec


    holding_sec: {
        backgroundColor: Colors.RED,
        alignItems: "center",
    },
    botton_box: {
        backgroundColor: Colors.RED,
        paddingVertical: 20,
    },
    proceed: {
        color: Colors.WHITE,
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
        backgroundColor: Colors.RED,
        paddingVertical: 20,
    },
    bottonsec: { marginBottom: 10 },


});

const mapStateToProps = (state) => ({
    token: state.auth.token,
    users: state.auth.user,
    schemeDetails: state.switch.schemeDetails,
})

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { SwitchActions } = require('../../store/SwitchRedux')
    return {
        ...stateProps,
        ...ownProps,
        getSchemeList: (params, token) => { SwitchActions.getSchemeList(dispatch, params, token) },
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(HoldingsScreen)