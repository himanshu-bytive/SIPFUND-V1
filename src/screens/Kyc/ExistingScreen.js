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
import { Ionicons, AntDesign, MaterialIcons, Feather, Entypo, FontAwesome, FontAwesome5, } from 'react-native-vector-icons';
import { Image, Header, ListItem, Overlay } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

function ExistingScreen(props) {

    return (

        <View style={styles.container}>
            {/* header  */}
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={30} color={Colors.RED} /></TouchableOpacity>} backgroundColor={Colors.PEACH}
                backgroundColor={Colors.WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}

                rightComponent={<View style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={Colors.RED} /></View>}
            />
            <ScrollView>
                {/* invest section */}
                <View style={styles.invest_sec}>
                    <Text style={styles.already}>Already Have Account?</Text>
                    <Text style={styles.identyfication}>If you are existing NSE customer, please enter
                        IIN(Investor Identification Number) & PAN
                        details</Text>

                    <TextInput style={styles.top_inpuut} placeholder="enter your INN number" style={{ borderBottomWidth: 1, fontSize: 16, borderColor: '#828282' }} />
                    <TextInput style={styles.bottom_input} placeholder="enter your PAN number" style={{ borderBottomWidth: 1, marginTop: 40, fontSize: 16, borderColor: '#828282' }} />


                    <View style={styles.bottom}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('home')} style={styles.botton_box}>
                            <Text style={styles.get_otp}>SUBMIT</Text>
                        </TouchableOpacity></View>
                </View>
                <TouchableOpacity><Text style={styles.submit}>skip for now</Text></TouchableOpacity>
            </ScrollView>
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

    invest_sec: {
        marginTop: 120,
        backgroundColor: Colors.WHITE,
        marginHorizontal: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,

        },
        shadowOpacity: 0.20,
        shadowRadius: 2.62,
        elevation: 4,
        padding: 20,
    },
    already: {
        color: Colors.RED,
        fontSize: 15,
    },
    identyfication: {
        color: Colors.DEEP_GRAY_1,
        fontSize: 13,
        paddingVertical: 20,
    },
    bottom_input: { marginTop: 50, },

    bottom: { alignItems: "center", },
    botton_box: {
        backgroundColor: Colors.LIGHT_RED,
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginTop: 30,
        width: '100%'

    },
    get_otp: {
        color: Colors.WHITE,
        fontSize: 16,
        marginRight: 5,
        textAlign: "center",
    },
    submit: {
        color: Colors.RED,
        textAlign: "center",
        fontSize: 15,
        paddingTop: 10,
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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(ExistingScreen)