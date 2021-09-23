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
import { Styles, Config, Colors, FormValidate } from '../../common'

import { Ionicons, AntDesign, EvilIcons, Entypo, FontAwesome5 } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-elements/dist/helpers";

function Investment3Screens(props) {
    const [selectTab, setSelectTab] = useState('SIP');
    const toggleTab = (value) => {
        setSelectTab(value);
    };





    return (
        <View style={styles.container}>

            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={40} color={Colors.RED} /></TouchableOpacity>}
                containerStyle={Styles.header}
                backgroundColor={Colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
                rightComponent={<View style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={Colors.RED} /></View>}
            />

            <ScrollView>
                <View style={styles.education}>
                    <View style={styles.education_sec}>
                        <Text style={styles.child}>Moderate Funds</Text>
                        <Text style={styles.child_text}>What amount I can invest?</Text>

                    </View>
                    <View style={styles.child_sec}>
                        <Image
                            source={require('../../../assets/modirate.png')}
                            style={styles.goals_2}
                        />
                    </View>

                </View >
                {/* button */}

                <View style={styles.click_sec}>
                    <View style={(selectTab == 'SIP') ? styles.buttom_botton2 : styles.buttom_botton}>
                        <TouchableOpacity onPress={() => toggleTab('SIP')}>
                            <Text style={(selectTab == 'SIP') ? styles.sip_text2 : styles.sip_text}>SIP</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={(selectTab == 'One Time') ? styles.buttom_botton2 : styles.buttom_botton}>
                        <TouchableOpacity onPress={() => toggleTab('One Time')}>
                            <Text style={(selectTab == 'One Time') ? styles.sip_text2 : styles.sip_text}>One Time</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={(selectTab == 'STP') ? styles.buttom_botton2 : styles.buttom_botton}>
                        <TouchableOpacity onPress={() => toggleTab('STP')}>
                            <Text style={(selectTab == 'STP') ? styles.sip_text2 : styles.sip_text}>STP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* button  end new*/}


                <Text style={styles.childtext}>Investment</Text>
                <View style={styles.investcost_sec}>
                    <Text style={styles.cost}>Rs. 16,000</Text>
                </View>
                <Text style={styles.number}>Sixteen thousand</Text>
                <View style={styles.yearly_section}>
                    <View>
                        <Text style={styles.cost_top}>12.60 L</Text>
                        <Text style={styles.cost_botton}>In 5 Years</Text>
                    </View>

                    <View>
                        <Text style={styles.cost_top}>18.40 L</Text>
                        <Text style={styles.cost_botton}>In 7 Years</Text>
                    </View>

                    <View>
                        <Text style={styles.cost_top}>26.60 L</Text>
                        <Text style={styles.cost_botton}>In 10 Years</Text>
                    </View>
                </View>
                <Text style={styles.return}>Note : Assuming returns at 12%</Text>

                {/* Axis Asset Management Company Ltd */}

            </ScrollView>

            <TouchableOpacity onPress={() => props.navigation.navigate('Invest4')} style={styles.botton_box}>
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
    education: {
        flexDirection: "row",
        marginVertical: 20,
        marginHorizontal: 20,
    },
    education_sec: {
        width: '70%',
        paddingTop: 10,

    },
    goals_2: {
        height: 118,
        width: 112,

    },
    child: {
        fontSize: 22,
        fontWeight: "bold",
        color: Colors.RED,
    },
    child_text: {
        fontSize: 18,
        color: Colors.DEEP_GRAY,
        paddingVertical: 10,
        fontWeight: "bold",
        marginTop: 30,
    },
    botton_box: {
        backgroundColor: Colors.RED,
        marginHorizontal: 30,
    marginBottom:30,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.DEEP_GRAY,
        paddingVertical: 10,
    },
    get_otp: {
        color: Colors.WHITE,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",

    },

    //  botton
    click_sec: {

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
    },

    buttom_botton: {
        width: "30%",
        borderWidth: 1,
        borderColor: Colors.DEEP_GRAY,
        borderRadius: 8,
        alignItems: "center",
        paddingVertical: 20,
        backgroundColor: Colors.LIGHT_GRAY,
    },
    buttom_botton2: {
        width: "30%",
        borderRadius: 8,
        backgroundColor: Colors.RED,
        paddingVertical: 20,
        alignItems: "center",


    },

    sip_text: {
        fontSize: 20,
        color: Colors.DEEP_GRAY,
        fontWeight: "bold",
    },
    sip_text2: {
        fontSize: 20,
        color: Colors.WHITE,
        fontWeight: "bold",
    },
    childtext: {
        fontSize: 20,
        color: Colors.RED,
        paddingVertical: 10,
        fontWeight: "bold",
        marginLeft: 20,
    },
    investcost_sec: {
        marginHorizontal: 30,
        marginTop: 10,
        backgroundColor: Colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        padding: 15,
        borderWidth: 1,
        borderColor: Colors.GREY_1,
        borderRadius: 5,
    },
    cost: {
        fontSize: 21,
        color: Colors.DEEP_GRAY,
        paddingLeft: 10,
    },
    number: {
        paddingLeft: 50,
        paddingVertical: 15,
        fontSize: 15,
        color: Colors.DEEP_GRAY,
    },
    yearly_section: {
        backgroundColor: Colors.PINK,
        marginVertical: 20,
        paddingHorizontal: 30,
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cost_top: {
        fontSize: 20,
        color: Colors.RED,
        fontWeight: "bold",
    },
    cost_botton: {
        fontSize: 15,
        color: Colors.DEEP_GRAY,
        fontWeight: "bold",
    },
    return: {
        marginLeft: 20,
        fontWeight: "bold",
        color: Colors.DEEP_GRAY,
        fontSize: 18,
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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(Investment3Screens)