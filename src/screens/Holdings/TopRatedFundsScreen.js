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
import { connect } from 'react-redux'
import TopRatedHomeScreen from '../TOPRatedFunds/TopRatedHomeScreen'
import { Styles, Config, Colors, FormValidate } from '../../common'

import { Ionicons, AntDesign, FontAwesome, FontAwesome5, } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

function TopRatedFundsScreen(props) {
    const { isFetching, token, goalSummary, users, summary } = props
    const [data, setData] = useState(summary?.holdings?.topRatedFunds ? summary?.holdings?.topRatedFunds : []);
    const [visible, setVisible] = useState(null);

    return (
        <View style={styles.container}>

            {/* Header_sec */}
            <View style={Styles.Header_top}>
                <Header
                    leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={30} color={Colors.RED} /></TouchableOpacity>} backgroundColor={Colors.PEACH}
                    backgroundColor={Colors.PEACH}
                    centerComponent={<Image
                        source={require('../../../assets/icon.png')}
                        style={styles.logimg}
                    />}
                    rightComponent={<View style={Styles.headerkn}><Text style={Styles.textkn}>KN</Text></View>}
                />
                <Image
                    source={require('../../../assets/goles_new.png')}
                    style={styles.goles5logo}
                />
                <Text style={styles.text_goals}>Top Rated Funds</Text>
            </View>

            {/* container_box_sec */}
            <ScrollView style={styles.containerScroll}>
                <Text style={styles.Investments}>My Investments</Text>

                <View style={styles.mainbox}>

                    {data.map((item, key) => <TouchableOpacity style={{ width: '95%' }} key={key} onPress={() => setVisible(visible === key ? null : key)}>
                        <View style={styles.container_box}>
                            <View style={styles.smallbox}>
                                <Image
                                    source={require('../../../assets/MidCap_img_new.png')}
                                    style={styles.mid_capimg}
                                />
                                <Text style={styles.Longterm}>{item.schemeName}</Text>
                            </View>
                            <AntDesign name={(visible === key) ? "up" : "down"} size={20} color="#C0392B" />
                        </View>
                        {/* onPress={() => props.navigation.navigate('TopRatedFundDetails')} */}
                        {(visible === key) && (<TouchableOpacity style={styles.valua_sec} >
                            <View style={styles.price}>
                                <Text style={styles.rate_2}>₹ {item.amount}</Text>
                                <Text style={styles.Current_Value}>Current Value</Text>
                            </View>

                            <View style={styles.Investment}>
                                <View style={styles.Investment_value}>
                                    <Text style={styles.rate_2}>₹  {item.investment}</Text>
                                    <Text style={styles.Current_Value}>Investment</Text>
                                </View>


                                <View style={styles.Investment_value}>
                                    <Text style={styles.rate_2}>₹ {item.profitloss}</Text>
                                    <Text style={styles.Current_Value}>Profit/Loss</Text>
                                </View>

                                <View style={styles.Investment_value}>
                                    <Text style={styles.rate_2}>{item.cagr}%</Text>
                                    <Text style={styles.Current_Value}>CAGR</Text>
                                </View>
                            </View>
                        </TouchableOpacity>)}
                    </TouchableOpacity>)}



                </View>

                <Text style={styles.Investments}>Invest Now</Text>
                <TopRatedHomeScreen showInside={true} />


            </ScrollView>
        </View>

    );

}


// StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerScroll: {
        width: '100%'
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
        width: Dimensions.get('window').width - 20,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        backgroundColor: Colors.WHITE,
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
        borderColor: Colors.GREY_1,


    },
    mid_capimg: {
        height: 67,
        width: 73,
    },
    Longterm: {
        marginLeft: 10,
        fontSize: 15,
        color: Colors.BLACK,
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

    Equity: { fontSize: 13, color: Colors.RED, fontWeight: "bold", },

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
        backgroundColor: Colors.RED,
        height: 20,




    },
    get_otp: {
        color: Colors.WHITE,
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

    valua_sec: {
        width: "100%",
        borderRadius: 15,
        backgroundColor: Colors.RED,
        marginBottom: 10,
        alignItems: "center",
    },
    price: {
        alignItems: "center",

    },
    rate_2: {
        color: Colors.WHITE,
        fontWeight: "bold",
        fontSize: 17,
        marginTop: 10,
    },
    Current_Value: {

        color: Colors.WHITE,
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

const mapStateToProps = (state) => ({
    token: state.auth.token,
    users: state.auth.users,
    summary: state.goals.summary,
})

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { AuthActions } = require('../../store/AuthRedux')
    return {
        ...stateProps,
        ...ownProps,
        logOut: () => { AuthActions.logOut(dispatch) },
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(TopRatedFundsScreen)