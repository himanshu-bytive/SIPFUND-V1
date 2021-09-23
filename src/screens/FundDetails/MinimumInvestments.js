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
import { Styles, Config, Colors, FormValidate } from '../../common'
import { Ionicons, AntDesign, MaterialIcons, Feather, Entypo, FontAwesome, FontAwesome5, } from 'react-native-vector-icons';
import { Image, Header, ListItem, Overlay, Slider } from 'react-native-elements';

function MinimumInvestments(props) {

    return (<View style={styles.minimum}>
        <View>
            <Text style={styles.mini_tex}>R 5,000</Text>
            <Text style={styles.minimum_tex}>Min. For{'\n'}
                Lumpsum</Text>
        </View>
        <View>
            <Text style={styles.mini_tex}>R 1000</Text>
            <Text style={styles.minimum_tex}>Min. SIP
                {'\n'}Amount
                Lumpsum</Text>
        </View>
        <View>
            <Text style={styles.mini_tex}>R 100</Text>
            <Text style={styles.minimum_tex}>Min. 2nd{'\n'}
                Investment{'\n'}
                Onwards</Text>
        </View>
    </View>);
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

    bottom_sec: { paddingVertical: 20, },
    holding: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: Colors.RED,
        paddingVertical: 5,

    },
    holding_text: {
        fontSize: 20,
        color: Colors.RED,
    },
    holding_icon: {
        position: 'absolute',
        right: 0,
        marginTop: 5,
    },
    submit: {
        backgroundColor: Colors.LIGHT_RED,
        alignItems: "center",
        borderRadius: 5,
        marginTop: 120,
    },
    submit_text: {
        fontSize: 25,
        color: Colors.WHITE,
        paddingVertical: 10,
    },
    name_sec: {
        flexDirection: "row",
        paddingVertical: 5,
    },
    name: { fontSize: 15, },
    name_text: {
        color: Colors.RED,
        fontSize: 15,


    },
    name_right: {
        alignItems: "flex-end",
        width: '50%'
    },
    name_left: {
        width: '50%'
    },
    nametop: { paddingVertical: 5, },
    minimum: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 40,
    },
    mini_tex: { fontSize: 15,
    fontWeight:"bold", },
    minimum_tex: {
        fontSize: 12,
        paddingVertical: 5
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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(MinimumInvestments)