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
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';

function EMandateScreen(props) {
    return (<View style={styles.emaMainbox}>
        <Text style={styles.emaAmc}>Choose AMC Option:</Text>
        <Text style={styles.emaMutual_fund}>Birla Sun Life Mutual Fund</Text>
        <Text style={styles.emaMutual_fund}>HDFC Mutual Fund</Text>
        <Text style={styles.emaMutual_fund}>HSBC Asset Management (India) Pvt Ltd</Text>
        <Text style={styles.emaMutual_fund}>IDFC Asset Management Company Pvt Ltd</Text>
        <Text style={styles.emaMutual_fund}>Kotak Mahindra Mutual Fund</Text>
        <Text style={styles.emaMutual_fund}>nion Asset Management Company Private  Limited</Text>
        <Text style={styles.emaCancel}>Cancel</Text>
    </View>);
}

const styles = StyleSheet.create({
    emaMainbox: {
        margin: 10,
        padding: 10,
    },
    emaAmc: {
        fontSize: 18,
        marginLeft: 15,
        marginVertical: 10,
        fontWeight: "bold",
    },
    emaMutual_fund: {
        fontSize: 15,
        marginVertical: 10,
    },
    emaCancel: {
        fontSize: 15,
        marginTop: 15,
        color: Colors.RED,
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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(EMandateScreen)