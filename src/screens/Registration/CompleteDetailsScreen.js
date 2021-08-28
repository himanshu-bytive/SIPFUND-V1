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
import { Ionicons, AntDesign, Entypo, FontAwesome5 } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

function CompleteDetailsScreen(props) {
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
            <ScrollView>
                {/* container_sec */}
                <View style={styles.container_sec}>

                    <Text style={styles.occupation}>Occupation</Text>
                    <View style={styles.private_sector}>
                        <Text style={styles.private}>Private Sector Office</Text>
                        <AntDesign name="right" size={20} color="#000000" />
                    </View>
                    <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, }}></View>

                    {/* DOB/DOI_sec */}

                    <Text style={styles.occupation}>DOB/DOI</Text>
                    <View style={styles.date}>
                        <AntDesign name="calendar" size={20} color="#C0392B" />
                        <Text style={styles.dd}>DD/MM/YYYY</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, marginLeft: 30, }}></View>

                    {/* TITLE_sec */}

                    <Text style={styles.occupation}>TITLE</Text>
                    <View style={styles.private_sector}>

                        <Text style={styles.private}>Select Title</Text>
                        <AntDesign name="down" size={20} color="#000000" />
                    </View>
                    <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, }}></View>

                    {/* Investor Name_sec */}

                    <Text style={styles.occupation}>Investor Name</Text>

                    <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, marginTop: 5, }}></View>

                    {/* Individual PAN_sec */}

                    <Text style={styles.occupation}>Individual PAN</Text>
                    <Text style={styles.AVVPJ6708P}>AVVPJ6708P</Text>

                    <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, marginTop: 5, }}></View>

                    {/* Email Id_sec */}

                    <Text style={styles.occupation}>Email Id</Text>
                    <Text style={styles.AVVPJ6708P}>anik@gmail.com</Text>

                    <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, marginTop: 5, }}></View>



                    <Text style={styles.occupation}>Father Name</Text>
                    <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, marginTop: 5, }}></View>

                    <Text style={styles.occupation}>Mother Name</Text>
                    <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, marginTop: 5, }}></View>


                </View>

                <View style={{ borderWidth: 5, borderColor: "#EAE9EE", marginTop: 5, }}></View>

                {/* KYC_sec */}

                <View style={styles.container_sec}>

                    <Text style={styles.kyc}>KYC</Text>
                    <Text style={styles.occupation}>Annual Income</Text>
                    <View style={styles.private_sector}>

                        <Text style={styles.private}>5 =10 Lacs</Text>
                        <AntDesign name="right" size={20} color="#000000" />
                    </View>
                    <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, }}></View>


                    <Text style={styles.occupation}>PEP (Politically Exposed Person)</Text>

                    <View style={styles.private_sector}>

                        <Text style={styles.private}>No</Text>
                        <AntDesign name="down" size={20} color="#000000" />
                    </View>
                    <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, }}></View>
                </View>
                <View style={{ borderWidth: 5, borderColor: "#EAE9EE", marginTop: 5, }}></View>

                {/* Nominee Details_sec */}

                <Text style={styles.Nominee}>Nominee Details</Text>

                {/* check_box */}

                <CheckBox
                    title='Do you want to nominate some one?'
                    containerStyle={styles.checkbox_style}
                    textStyle={{ color: Colors.BLACK, fontSize: 12, marginLeft: 5, }}
                    checked={false}
                    checkedColor={Colors.BLACK}
                    uncheckedColor={Colors.BLACK}
                />

            </ScrollView>
            {/* click_box */}
            <View style={styles.footer}>

                <View style={styles.click_box}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={styles.botton_box}>
                        <Text style={styles.get_otp}>Skip</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Register1')} style={styles.botton_box}>
                        <Text style={styles.get_otp}>Next</Text>
                    </TouchableOpacity>


                </View>
            </View>




        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        borderBottomColor: Colors.BLACK,
        borderBottomWidth: 1
    },
    container_sec: {

        margin: 10,


    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    occupation: {
        fontSize: 15,
        color: Colors.DEEP_GRAY,
        fontWeight: "bold",
        marginTop: 10,
    },
    private_sector: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 5,
    },
    private: {
        fontSize: 15,
        width: "92%",

    },
    date: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 5,
    },
    dd: { marginLeft: 8, },
    AVVPJ6708P: {
        marginTop: 10,
        fontSize: 15,
    },
    kyc: {
        fontSize: 15,
        fontWeight: "bold",
    },
    Nominee: {
        fontSize: 15,
        marginLeft: 10,
        fontWeight: "bold",
        marginVertical: 10,
    },
    checkbox_style: {
        backgroundColor: Colors.TRANSPARENT,
        borderColor: Colors.TRANSPARENT,
    },
    footer: {
        alignItems: "center",
        marginBottom:20
    },
    click_box: {

        flexDirection: "row",
        marginHorizontal: 25,
    },
    botton_box: {
        width: "50%",
        backgroundColor: Colors.RED,
        paddingVertical: 10,
        marginTop: 20,

        borderColor: Colors.DEEP_GRAY,

        marginHorizontal: 5,
    },
    get_otp: {
        color: Colors.WHITE,
        fontSize: 18,
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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(CompleteDetailsScreen)