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
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';

function AMCScreen(props) {
    return (
        <View style={styles.container}>

            <View style={styles.mainbox}>
            <Text style={styles.amc}>Choose AMC Option:</Text>
                <Text style={styles.mutual_fund}>Birla Sun Life Mutual Fund</Text>
                <Text style={styles.mutual_fund}>HDFC Mutual Fund</Text>
                <Text style={styles.mutual_fund}>HSBC Asset Management (India) Pvt Ltd</Text>
                <Text style={styles.mutual_fund}>IDFC Asset Management Company Pvt Ltd</Text>
                <Text style={styles.mutual_fund}>Kotak Mahindra Mutual Fund</Text>
                <Text style={styles.mutual_fund}>Union Asset Management Company Private Limited</Text>
                <Text style={styles.cancel}>Cancel</Text>


            </View>


        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    mainbox: {
       
        marginHorizontal: 45,
        borderRadius: 20,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: Colors.GRAY_LIGHT,
        marginVertical: 30,
        padding: 10,
    },
    amc: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 20,
    },
    mutual_fund: {
        fontSize: 15,
marginVertical: 10,
    },
    cancel: {
        fontSize: 15,
        color: Colors.RED,
        marginLeft: 20,
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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(AMCScreen)