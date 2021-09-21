import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    ScrollView
} from "react-native";
import { connect } from 'react-redux'
import { Styles, Config, Colors, FormValidate } from '../../common'

import { Entypo, AntDesign } from 'react-native-vector-icons';
import { Image, Header, Overlay } from 'react-native-elements';
import Investments from '../../components/Investments'

const investmentData = [
    { title: 'Long Term', image: require('../../../assets/term1.png') },
    { title: 'Tax Saving Funds', image: require('../../../assets/term2.png') },
    { title: 'Better Than', image: require('../../../assets/term3.png') },
    { title: 'Tax Saving Funds', image: require('../../../assets/term4.png') },
    { title: 'Better Than FD', image: require('../../../assets/term5.png') },
    { title: 'Aggressive Funds', image: require('../../../assets/term6.png') },
    { title: 'Saving Funds', image: require('../../../assets/saving.png') },
    { title: 'Moderate Funds', image: require('../../../assets/modirate.png') },
    { title: 'NFO Funds', image: require('../../../assets/nfo.png') },
    { title: 'Sector Funds', image: require('../../../assets/sector.png') },
    { title: 'Buy Gold Plans', image: require('../../../assets/coins.png') },
    { title: 'Foreign Funds', image: require('../../../assets/foregn.png') },
]

function Investment(props) {
    const [visible, setVisible] = useState(false);
   
    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <View style={styles.container}>
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={{ marginTop: 25 }}><Entypo name={"menu"} size={30} color={Colors.RED} /></TouchableOpacity>}             
                backgroundColor={Colors.LIGHT_WHITE}
                containerStyle={Styles.header}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
                rightComponent={<View style={Styles.headerkn}><Text  style={Styles.textkn}>KN</Text></View>}
            />
          
            <ScrollView style={{ width: '100%' }}>
                <Text style={styles.Plan}>Investment Plans</Text>
                <Investments data={investmentData} onPress={() => props.navigation.navigate('Invest2')} />
            </ScrollView>

        </View>
    );
}


const styles = StyleSheet.create({
    container: { marginBottom: 200, },
   
    home_top: {
        alignItems: 'center',
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    Helloimg: {
        height: 300,
        width: 210,
    },

    HelloIinvestor: {
        fontSize: 16,
        fontWeight: "bold",

    },
    HelloIinvestor1: {
        fontSize: 16,
        color: Colors.GRAY_DEEP,
        fontWeight: "bold",
        marginVertical: 30,
    },
    botton_box: {
        backgroundColor: Colors.RED,
        paddingHorizontal: 50,
        paddingVertical: 20,
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.GRAY_DEEP,
        width: '85%',
        fontWeight: "bold",

    },
    get_otp: {
        color: Colors.WHITE,
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: 5,
        textAlign: "center"
    },
    Plan: {
        fontSize: 20,
        color: Colors.DEEP_GRAY,
        fontWeight: "bold",
        marginTop: 30,
        paddingHorizontal: 10,
    },
    education_top: {
        paddingLeft: 50,
        flexDirection: "row",
    },
    education: {
        flexDirection: "row",
        width: 370,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: Colors.GRAY_LIGHT,
        borderRadius: 15,
        marginVertical: 20,
        marginHorizontal: 5,
        padding: 20,
        backgroundColor: Colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    education_roted: {
        width: '90%',
        marginHorizontal: 20,
        marginVertical: 30,
    },
    quick_access: {
        borderRadius: 0,
        borderColor: Colors.BLACK,
        borderWidth: 1,
        width: 340,

    },

    child_sec: { width: '40%' },
    goals_2: {
        height: 145,
        width: 145,
    },
    education_sec: {
        width: '60%',
        marginTop: 10,

    },
    child: {
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 20,
    },
    child_text: {
        fontSize: 18,
        color: Colors.GRAY_LIGHT_1,
        paddingTop: 15,
        paddingLeft: 20,
    },
    border: {
        marginTop: 10,
        height: 4,
        marginHorizontal: 20,
        backgroundColor: Colors.GRAY_LIGHT,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    investment_sec: {
        flexDirection: "row",
    },
    investment: {
        backgroundColor: Colors.WHITE,
        width: '30%',
        alignItems: "center",
        margin: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    term: {
        width: 112,
        height: 113,
    },
    long: {
        textAlign: "center",
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: "bold"
    },
    all_plan: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
    },
    all_plan_text: {
        fontSize: 16,
        color: Colors.RED,
        fontWeight: "bold",
    },
    roted_text: {
        fontSize: 20,
        color: Colors.DEEP_GRAY,
        fontWeight: "bold",
        paddingLeft: 20,
        marginTop: 20,
    },
    fund_img: {
        height: 122,
        width: 126,
    },
    quick_sec: {
        backgroundColor: Colors.PINK,
        paddingBottom: 20,
    },

    quick_text: {
        fontSize: 20,
        color: Colors.RED,
        fontWeight: "bold",
        paddingLeft: 20,
        marginVertical: 20,
    },
    quick_img: {
        height: 94,
        width: 82,
    },
    earn: {
        color: Colors.RED,
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 20,
    },
    ship_text: {
        color: Colors.BLACK,
        textAlign: "center",
        paddingTop: 10,

    },
    /* top roted fund sec2 */
    roted_bottom: {
        flexDirection: "row",
        paddingLeft: 40,
        marginVertical: 30,
    },
    amount_sec: {

        width: 150,
        borderWidth: 3,
        borderStyle: "solid",
        borderColor: Colors.YELLOW_LIGHT,
        marginVertical: 20,
        marginHorizontal: 5,
        padding: 10,
        backgroundColor: Colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        alignItems: "center",
    },
    minimum: {
        fontSize: 13,
        color: Colors.BLACK,
    },
    term9: {
        width: 50,
        height: 66,
        marginVertical: 10,
    },
    Flexibility: {
        width: 75,
        height: 75,
        marginVertical: 10,
    },
    /* Faq screen */
    mainbox: {
        padding: 40,
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    imgbox: {
        alignItems: "center",
        marginBottom: 20,
    },
    FAQimg: {
        height: 205,
        width: 243,
        marginVertical: 30,

    },
    faqs: {
        fontSize: 22,
        fontWeight: "bold",
        color: '#716D6E',
    },
    singletext: {
        flexDirection: "row",
        marginTop: 10,
    },
    Mutualfund: {
        fontSize: 20,
        marginTop: 9,
        color: Colors.GREY_1,
    },
    botton_box: {
        alignItems: "center",
        backgroundColor: Colors.RED,
        paddingHorizontal: 70,
        paddingVertical: 20,
        marginTop: 80,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.DEEP_GRAY,

    },
    get_otp: {
        color: Colors.WHITE,
        fontSize: 20,
        fontWeight: 'bold',

    },
    // gallary
    gallary: {
        width: '100%',
        alignItems: "center",
        textAlign: "center",
    },
    qipimg: {
        width: 368,
        height: 207,
        marginVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    knowledge: {
        fontSize: 22,
        color: Colors.DEEP_GRAY,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingBottom: 40,
        marginTop: 20,
    },
    view: {
        fontSize: 15,
        textAlign: "center",
        color: Colors.RED,
        fontWeight: "bold",
        paddingBottom: 5
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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(Investment)