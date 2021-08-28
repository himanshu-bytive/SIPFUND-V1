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
    ActivityIndicator
} from "react-native";
import { connect } from 'react-redux'
import { Styles, Config, Colors, FormValidate } from '@common'
import { FundType } from '../../components';
import { Ionicons, AntDesign, Entypo, FontAwesome5 } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

function TopratedFunds5Screen(props) {

    return (
        <View style={styles.container}>

            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={40} color={Colors.RED} /></TouchableOpacity>}
                containerStyle={styles.header}
                backgroundColor={Colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
                rightComponent={<View style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={Colors.RED} /></View>}
            />


            {/* SIP_sec */}

            <View style={styles.sip_sec}>
                <View style={styles.sip_left}>
                    <Text style={styles.sip}>SIP</Text>
                </View>
                <View style={styles.lumpsum}>
                    <Text style={styles.lump}>LUMPSUM</Text>
                </View>
            </View>

            {/* My Selected Funds_sec */}
            <ScrollView style={styles.containerScroll}>
                <View style={styles.fund_sec}>
                    <Text style={styles.selected}>My Selected Funds</Text>
                    <Text style={styles.month}>SIP Per Month</Text>


                </View>

                {/* Monthly Investment_sec */}

                <View style={styles.fund_sec}>
                    <Text style={styles.investment}>Monthly Investment</Text>
                    <Text style={styles.price}>₹ 16,000</Text>
                </View>

                {/* Hybrid_sec */}

                <View style={styles.hybrid_sec}>
                    <View style={{ backgroundColor: "#EFEFEF", }}>
                        <Text style={styles.hybrid}>Hybrid</Text>
                    </View>
                </View>

                {/* Axis Asset Management Company Ltd */}


                <FundType onPress={() => props.navigation.navigate('FundsDetails')}  />

                <FundType onPress={() => props.navigation.navigate('FundsDetails')}  />


                {/* Hybrid_sec.....3 */}

                <View style={styles.hybrid_sec}>
                    <View style={{ backgroundColor: "#EFEFEF", }}>
                        <Text style={styles.hybrid}>Multi Cap</Text>
                    </View>
                </View>


                <FundType onPress={() => props.navigation.navigate('FundsDetails')}  />

            </ScrollView>
            <TouchableOpacity onPress={() => props.navigation.navigate('Toprated3')}><Text style={styles.more_funds}>I would like to add more funds</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Toprated4')} style={styles.botton_box}>
                <Text style={styles.get_otp}>NEXT</Text>
            </TouchableOpacity>

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

    header: {
        borderBottomColor: Colors.BLACK,
        borderBottomWidth: 1,
    },
    containerScroll: {
        width: '100%'
    },
    sip_sec: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 30,
    },
    sip_left: {
        width: "50%",
        borderBottomWidth: 1,
        borderBottomColor: Colors.RED,
    },
    lumpsum: {
        width: "50%",
        borderBottomWidth: 1,
        borderBottomColor: Colors.DEEP_GRAY,
    },
    sip: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        color: Colors.RED,
    },
    lump: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 10,
    },
    fund_sec: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 10,
    },
    selected: {

        fontSize: 15,
        fontWeight: "bold",
        color: Colors.DEEP_GRAY,
    },
    month: {
        fontSize: 13,
        fontWeight: "bold",
        color: Colors.DEEP_GRAY,
        position: "absolute",
        right: 0,

    },
    investment: {
        fontSize: 15,
        fontWeight: "bold",
        color: Colors.RED,
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.RED,
        position: "absolute",
        right: 0,
    },
    hybrid_sec: {
        marginHorizontal: 15,
        marginVertical: 20,
    },
    hybrid: {
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.RED,
        marginVertical: 10,
        marginLeft: 10,
    },
    more_funds: {
        fontSize: 18,
        color: Colors.RED,
        textAlign: "center",
        marginTop: 10,
    },
    botton_box: {

        backgroundColor: Colors.RED,
        marginHorizontal: 30,
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.DEEP_GRAY,
        paddingVertical: 10,
    },
    get_otp: {
        color: Colors.WHITE,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",

    },

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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(TopratedFunds5Screen)