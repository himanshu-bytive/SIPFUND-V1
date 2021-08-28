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
import { Styles, Config, Colors, FormValidate } from '@common'
import { Ionicons, AntDesign, MaterialIcons, Feather, Entypo, FontAwesome, FontAwesome5, } from 'react-native-vector-icons';
import { Image, Header, ListItem, Overlay, Slider } from 'react-native-elements';

function RiskRating(props) {
    return (

        <View style={styles.mainbox}>
            <Text style={styles.Upside}>MPT Statistics (Date)</Text>

            <View style={styles.back_sec}>
                <View style={styles.back1}>
                    <Text style={styles.back_year}>3 Years</Text>
                    <View style={{ borderWidth: 1, borderColor: Colors.RED, marginTop: 5, }}></View>

                </View>
                <View style={styles.back1}>
                    <Text style={styles.back_year2}>5 Years</Text>

                </View>

                <View style={styles.back1}>
                    <Text style={styles.back_year2}>10 Years</Text>

                </View>

            </View>

            <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, }}></View>

            {/* Invesco India_sec */}

            <View style={styles.invesco_india}>

                <Text style={styles.Invesco}>Invesco India
                    Multicap GR</Text>
                <Text style={styles.Invesco}>Category-
                    Multi Cap
                    (Std. Index)</Text>
            </View>

            {/* mainbox_sec */}


            <View style={styles.mainbox_2}>

                <View style={styles.bse}>
                    <Text style={styles.index1}>Index</Text>
                    <Text style={styles.index}>R-Squared</Text>
                    <Text style={styles.index}>Beta</Text>
                    <Text style={styles.index}>Alpha</Text>
                    <Text style={styles.index}>Treynor Ratio</Text>
                    <Text style={styles.index}>Currency</Text>

                </View>
                <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, }}></View>

                <View style={styles.bse}>
                    <View style={{ alignItems: "center", }}>

                        <Text style={styles.index1}>S&P BSE 500
                            India TR INR</Text>
                        <View style={{ borderWidth: 2, borderColor: Colors.DEEP_GRAY, }}></View>
                        <Text style={styles.index}>0.99</Text>
                        <Text style={styles.index}>4.33</Text>
                        <Text style={styles.index}>8.22</Text>
                        <Text style={styles.index}>INR</Text>
                    </View>
                </View>
                <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, }}></View>

                <View style={styles.bse}>

                    <View style={{ alignItems: "center", }}>

                        <Text style={styles.index1}>S&P BSE 500
                            India TR INR</Text>
                        <View style={{ borderWidth: 2, borderColor: Colors.DEEP_GRAY, }}></View>
                        <Text style={styles.index}>0.97</Text>
                        <Text style={styles.index}>0.74</Text>
                        <Text style={styles.index}>4.46</Text>
                        <Text style={styles.index}>INR</Text>
                    </View>
                </View>

            </View>

            {/* Volatility Measures (Date)_sec */}


            <Text style={styles.Upside}>Volatility Measures (Date)</Text>

            <View style={styles.back_sec}>
                <View style={styles.back1}>
                    <Text style={styles.back_year}>3 Years</Text>
                    <View style={{ borderWidth: 1, borderColor: Colors.RED, marginTop: 5, }}></View>

                </View>
                <View style={styles.back1}>
                    <Text style={styles.back_year2}>5 Years</Text>


                </View>

                <View style={styles.back1}>
                    <Text style={styles.back_year2}>10 Years</Text>

                </View>

            </View>
            <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, }}></View>

            {/* Invesco India_sec_2 */}

            <View style={styles.invesco_india}>

                <Text style={styles.Invesco}>Invesco India
                    Multicap GR</Text>
                <Text style={styles.Invesco}>Category-
                    Multi Cap
                </Text>
            </View>



            {/* mainbox_2sec */}


            <View style={styles.mainbox_2}>

                <View style={styles.bse}>

                    <Text style={styles.index}>Standard Dev</Text>
                    <Text style={styles.index}>Sharp Ratio</Text>
                    <Text style={styles.index}>Sortino Ratio</Text>

                </View>
                <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, }}></View>

                <View style={styles.bse}>
                    <View style={{ alignItems: "center", }}>


                        <Text style={styles.index}>23.33</Text>
                        <Text style={styles.index}>-0.04</Text>
                        <Text style={styles.index}>-0.05</Text>

                    </View>
                </View>
                <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, }}></View>

                <View style={styles.bse}>

                    <View style={{ alignItems: "center", }}>
                        <Text style={styles.index}>21.16</Text>
                        <Text style={styles.index}>-0.01</Text>
                        <Text style={styles.index}>-0.00</Text>

                    </View>
                </View>

            </View>
            <Text style={styles.Upside}>Upside & Downside Capture Ratio</Text>
            <Image
                                    source={require('../../../assets/upside.png')}
                                    style={styles.upside}
                                />


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
   
    mainbox_2:{flexDirection:"row",
    margin: 10,},
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



    upside:{width:322,
    height:135,},


});

const mapStateToProps = (state) => ({
    ticket: state.auth.ticket,
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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(RiskRating)