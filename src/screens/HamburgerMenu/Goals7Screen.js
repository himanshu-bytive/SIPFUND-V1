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

import { Ionicons, AntDesign, Entypo, FontAwesome5 } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

function Goals7Screen(props) {
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

            <ScrollView style={styles.containerScroll}>
                <View style={styles.report_sec}>
                    <View style={styles.investment_summary}>
                        <Text style={styles.schemetype1}>Equity</Text>
                        <View style={{ position: "absolute", right: 10, marginVertical: 20, }}>
                            <AntDesign name="down" size={20} color="#000000" />
                        </View>
                    </View>




                    <View style={styles.investment_summary}>
                        <Text style={styles.schemetype1}>Arbitrage Fund</Text>
                        <View style={{ position: "absolute", right: 10, marginVertical: 20, }}>
                            <AntDesign name="down" size={20} color="#000000" />
                        </View>
                    </View>



                    <View style={styles.investment_summary}>
                        <Text style={styles.schemetype1}>Axis Arbitrage Fund</Text>

                        <View style={{ position: "absolute", right: 10, marginVertical: 20, flexDirection: "row", alignItems: "center", }}>
                            <AntDesign name="down" size={20} color="#000000" />
                            <TouchableOpacity onPress={() => props.navigation.navigate('Register2')} style={styles.botton_box}>
                                <Text style={styles.get_otp}>GO</Text>
                            </TouchableOpacity>

                        </View>

                    </View>




                </View>
                <View style={styles.category_sec}>
                    <Text style={styles.category}>First select category.</Text>
                    <Text style={styles.category}>Then select subcategory.</Text>
                    <Text style={styles.category}>Then select scheme.</Text>
                    <Text style={styles.category}>Press GO.</Text>
                    <Text style={styles.category}>For changing scheme please press the scheme nameagain</Text>




                </View>




            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
  
    container_sec: {
        margin: 10,

    },
    containerScroll: {
        width: '100%'
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },

    investment_summary: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: Colors.DEEP_GRAY,
    },

    schemetype1: {
        color: Colors.DEEP_GRAY,
        marginVertical: 20,
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 10,
    },
    botton_box: {
        paddingHorizontal: 20,
        backgroundColor: Colors.RED,
        marginLeft:5,

    },
    get_otp: {
        color: Colors.WHITE,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: "center",
        paddingVertical: 5,
    },
    category_sec: {
        alignItems: "center",
        marginTop: "30%",
    },
    category: {
        fontSize: 13,
        textAlign:"center",
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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(Goals7Screen)