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
    ActivityIndicator
} from "react-native";
import { connect } from 'react-redux'
import { Styles, Config, Colors, FormValidate } from '@common'
import { Ionicons, AntDesign, Entypo, FontAwesome5 } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';

function CompleteDetails2Screen(props) {
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

                    <Text style={styles.occupation}>Address1 (As per address proof)</Text>
                    <Text style={styles.example}>Example Address</Text>

                    <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, }}></View>

                    {/* DOB/DOI_sec */}

                    <Text style={styles.Pincode}>Pincode</Text>
                    <Text style={styles.example}>701401</Text>

                    <View style={{ borderWidth: 1, borderColor: Colors.RED, }}></View>



                    {/* TITLE_sec */}

                    <Text style={styles.occupation}>State</Text>
                    <View style={styles.private_sector}>

                        <Text style={styles.private}>West Bengal</Text>
                        <AntDesign name="right" size={20} color="#000000" />
                    </View>
                    <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, }}></View>

                    {/* Investor Name_sec */}

                    <Text style={styles.occupation}>City</Text>
                    <View style={styles.private_sector}>

                        <Text style={styles.private}>CONTAI</Text>
                        <AntDesign name="right" size={20} color="#000000" />
                    </View>
                    <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, }}></View>
                </View>

            </ScrollView>
            {/* click_box */}
            <View style={styles.footer}>
                <View style={styles.click_box}>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Register1')} style={styles.botton_box}>
                        <Text style={styles.get_otp}>Previous</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Register2')} style={styles.botton_box}>
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
        backgroundColor: "#EAE9EE",
    },
    header: {
        borderBottomColor: Colors.BLACK,
        borderBottomWidth: 1
    },
    container_sec: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fff",
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
    example: {
        fontSize: 15,
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
        marginBottom: 2,


    },
    Pincode: {
        color: Colors.RED,
        fontSize: 15,
        marginTop: 10,
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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(CompleteDetails2Screen)