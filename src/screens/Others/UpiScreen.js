import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    Button,
    View,
    ImageBackground,
    TouchableOpacity,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    TextInput,
    ActivityIndicator
} from "react-native";
import { connect } from 'react-redux'
import { Styles, Config, Colors, FormValidate } from '../../common'
import { Ionicons, Entypo } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';

function UpiScreen(props) {
    return (
        <View style={styles.container}>
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={{ marginTop: 25 }}><Entypo name={"menu"} size={30} color={Colors.RED} /></TouchableOpacity>} containerStyle={styles.header}
                backgroundColor={Colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
                rightComponent={<View style={{ marginTop: 25, borderWidth: 1, backgroundColor: Colors.WHITE, borderColor: Colors.RED, padding: 5, borderRadius: 7, }}><Text>KN</Text></View>}
            />
            <ScrollView style={Styles.containerScroll}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.payusing}>Pay Using</Text>
                    </View>
                    <View style={styles.mainbox}>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={[styles.botton_box, styles.botton_box_none]}>
                                <Image
                                    source={require('../../../assets/Upi_img.png')}
                                    style={styles.upiImage}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>

                            <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={styles.botton_box}>
                                <Text style={styles.get_otp}>Internet Banking</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>

                            <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={styles.botton_box}>
                                <Text style={styles.get_otp}>e-Mandate</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        borderBottomColor: Colors.BLACK,
        borderBottomWidth: 1
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    upiImage: {
        height: 43,
        width: 122,
    },
    payusing: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 60,
        marginBottom: 30,
    },
    mainbox: {
        margin: 10,
        width: '80%',
        backgroundColor: "#F9F9F9",
        borderRadius: 20,
        alignItems: "center",
    },
    button: {
        width: "90%",
        borderWidth: 1,
        borderColor: Colors.RED,
        borderStyle: "solid",
        marginVertical: 30,
    },
    botton_box: {
        alignItems: "center",
        marginVertical: 10,
        paddingVertical: 10,
        marginTop: 20,
    },
    botton_box_none: {
        marginTop: 5,
        marginBottom: 5
    },
    get_otp: {
        color: Colors.BLACK,
        fontSize: 20,
        fontWeight: 'bold',

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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(UpiScreen)