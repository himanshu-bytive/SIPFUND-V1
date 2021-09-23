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
import { Styles, Config, Colors, FormValidate } from '../../common'

import { Ionicons, AntDesign, FontAwesome, FontAwesome5, } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

function Goals5Screen(props) {

    const [visibleBNP, setVisibleBNP] = useState(false);
    const [visibleBOI, setVisibleBOI] = useState(false);

    const toggleOverlayBNP = () => { setVisibleBNP(!visibleBNP) };
    const toggleOverlayBOI = () => { setVisibleBOI(!visibleBOI) };

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

                    <TouchableOpacity onPress={() => props.navigation.navigate('Goals6')}>
                        <View style={styles.container_box}>
                            <View style={styles.smallbox}>
                                <Image
                                    source={require('../../../assets/MidCap_img_new.png')}
                                    style={styles.mid_capimg}
                                />

                                <Text style={styles.Longterm}>BNP Paribas Mid Cap Fund</Text>
                            </View>
                            <AntDesign name={visibleBNP ? "up" : "down"} size={20} color="#C0392B" />
                        </View>
                    </TouchableOpacity>
                    {/* {visibleBNP && (
                        <View style={styles.smallbox}></View>
                    )} */}


                    <TouchableOpacity onPress={toggleOverlayBOI}>
                        <View style={styles.container_box}>
                            <View style={styles.smallbox}>
                                <Image
                                    source={require('../../../assets/BOI_img.png')}
                                    style={styles.mid_capimg}
                                />

                                <Text style={styles.Longterm}>BOI AXA Investment Managers</Text>
                            </View>
                            <AntDesign name={visibleBOI ? "up" : "down"} size={20} color="#C0392B" />
                        </View>
                    </TouchableOpacity>

                    {visibleBOI && (<View style={styles.valua_sec}>
                        <View style={styles.price}>

                            <Text style={styles.rate_2}>₹ 10,00,000</Text>
                            <Text style={styles.Current_Value}>Current Value</Text>
                        </View>


                        <View style={styles.Investment}>
                            <View style={styles.Investment_value}>
                                <Text style={styles.rate_2}>₹  9,50,000</Text>
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
                    </View>)}


                </View>

                <Text style={styles.Investments}>Invest Now</Text>

                {/* Invest Now sec */}

                <View style={styles.Investnow_sec}>
                    <Text style={styles.Equity}>Equity</Text>
                    <Text style={styles.Debt}>Debt</Text>
                    <Text style={styles.Debt}>Balanced</Text>
                    <Text style={styles.Debt}>Liquid</Text>
                    <Text style={styles.Debt}>Overnite</Text>
                    <Text style={styles.Debt}>Multicap</Text>
                    <Text style={styles.Debt}>Mid Cap</Text>
                </View>
                <View style={{ borderWidth: 1, borderColor: Colors.GREY_1, }}></View>

                {/* Topratedfunds_sec */}

                <View style={styles.topratedmainbox}>

                    <View style={styles.toprated}>
                        <Text style={styles.top}>Top Rated Funds</Text>


                        <View style={styles.returnsright}>
                            <View style={styles.returnsbox}>

                                <Text style={styles.return}>5Y Returns</Text>


                                <AntDesign name="caretdown" size={15} color="#C0392B" />
                            </View>
                            <View style={{ borderWidth: 1, borderColor: Colors.RED, }}></View>
                        </View>


                    </View>


                    {/* Axis Asset Management Company */}

                    <View style={styles.axis_asset}>

                        <View style={styles.company}>

                            <Image
                                source={require('../../../assets/axis_img.png')}
                                style={styles.axisimg}
                            />
                            <Text style={styles.axis}>Axis Asset Management Company</Text>
                            <TouchableOpacity style={styles.botton_box}>
                                <Text style={styles.get_otp}>INVEST</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.value_sec}>


                            <View style={styles.mininvestment}>
                                <Text style={styles.min}>Min. Investment</Text>
                                <Text style={styles.min}>1000</Text>
                            </View>

                            <View style={styles.mininvestment}>
                                <Text style={styles.min}>AUM</Text>
                                <Text style={styles.min}>2097 Cr</Text>

                            </View>
                            <View style={styles.mininvestment}>
                                <Text style={styles.min}>Returns</Text>
                                <Text style={styles.min}>16.0%</Text>
                            </View>
                        </View>
                        <View style={{ borderWidth: 1, borderColor: Colors.GREY_1, marginTop: 10, }}></View>


                    </View>

                    {/* Aditya Birla Sun Life AMC Limited_ sec */}

                    <View style={styles.axis_asset}>

                        <View style={styles.company}>

                            <Image
                                source={require('../../../assets/adityabirlaimg.png')}
                                style={styles.axisimg}
                            />
                            <Text style={styles.axis}>Aditya Birla Sun Life AMC Limited</Text>
                            <TouchableOpacity style={styles.botton_box}>
                                <Text style={styles.get_otp}>INVEST</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.value_sec}>


                            <View style={styles.mininvestment}>
                                <Text style={styles.min}>Min. Investment</Text>
                                <Text style={styles.min}>1000</Text>
                            </View>

                            <View style={styles.mininvestment}>
                                <Text style={styles.min}>AUM</Text>
                                <Text style={styles.min}>2097 Cr</Text>

                            </View>
                            <View style={styles.mininvestment}>
                                <Text style={styles.min}>Returns</Text>
                                <Text style={styles.min}>16.0%</Text>
                            </View>
                        </View>
                        <View style={{ borderWidth: 1, borderColor: Colors.GREY_1, marginTop: 10, }}></View>


                    </View>

                    {/* Baroda Asset Management India_ sec */}

                    <View style={styles.axis_asset}>

                        <View style={styles.company}>

                            <Image
                                source={require('../../../assets/barodaimg.png')}
                                style={styles.axisimg}
                            />
                            <Text style={styles.axis}>Baroda Asset Management India</Text>
                            <TouchableOpacity style={styles.botton_box}>
                                <Text style={styles.get_otp}>INVEST</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.value_sec}>


                            <View style={styles.mininvestment}>
                                <Text style={styles.min}>Min. Investment</Text>
                                <Text style={styles.min}>1000</Text>
                            </View>

                            <View style={styles.mininvestment}>
                                <Text style={styles.min}>AUM</Text>
                                <Text style={styles.min}>2097 Cr</Text>

                            </View>
                            <View style={styles.mininvestment}>
                                <Text style={styles.min}>Returns</Text>
                                <Text style={styles.min}>16.0%</Text>
                            </View>
                        </View>
                        <View style={{ borderWidth: 1, borderColor: Colors.GREY_1, marginTop: 10, }}></View>
                    </View>

                </View>

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
        width: "90%",
        borderRadius: 15,
        backgroundColor: Colors.RED,
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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(Goals5Screen)