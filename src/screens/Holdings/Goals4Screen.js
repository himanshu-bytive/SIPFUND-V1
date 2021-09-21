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

import { Ionicons, AntDesign, FontAwesome, FontAwesome5, } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

function Goals4Screen(props) {
    return (
        <View style={styles.container}>

            {/* Header_sec */}

            <View style={Styles.Header_top}>
                <Header
                    leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 25 }}><AntDesign name={"arrowleft"} size={30} color={Colors.RED} /></TouchableOpacity>} backgroundColor={Colors.PEACH}
                    backgroundColor={Colors.PEACH}
                    centerComponent={<Image
                        source={require('../../../assets/icon.png')}
                        style={styles.logimg}
                    />}
                    rightComponent={<View style={Styles.headerkn}><Text style={Styles.textkn}>KN</Text></View>}
                />
                <Image
                    source={require('../../../assets/Goles_4logo.png')}
                    style={styles.Goles_4logo}
                />
                <Text style={styles.text_goals}>INVESTMENT PLAN SET AS OF NOW</Text>

            </View>

            {/* container_box_sec */}
            <ScrollView style={styles.containerScroll}>
                <Text style={styles.Investments}>My Investments</Text>

                <View style={styles.mainbox}>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Goals5')}>
                        <View style={styles.container_box}>
                            <Image
                                source={require('../../../assets/long-termimg.png')}
                                style={styles.longtermimg}
                            />
                            <Text style={styles.Longterm}>Long Term</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.container_box}>
                        <Image
                            source={require('../../../assets/tax_img.png')}
                            style={styles.longtermimg}
                        />
                        <Text style={styles.Longterm}>Tax Saving Funds</Text>
                    </View>

                    <View style={styles.container_box}>
                        <Image
                            source={require('../../../assets/Maskimg.png')}
                            style={styles.longtermimg}
                        />
                        <Text style={styles.Longterm}>Better Than FD</Text>
                    </View>
                </View>


                {/* Invest Now sec */}


                <Text style={styles.Investments}>Invest Now</Text>

                <View style={styles.mainbox}>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Goals5')}>
                        <View style={styles.container_box}>
                            <Image
                                source={require('../../../assets/aggressive_img.png')}
                                style={styles.longtermimg}
                            />
                            <Text style={styles.Longterm}>Aggressive Funds</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.container_box}>
                        <Image
                            source={require('../../../assets/fundsip_img.png')}
                            style={styles.longtermimg}
                        />
                        <Text style={styles.Longterm}>Funds For SIP</Text>
                    </View>

                    <View style={styles.container_box}>
                        <Image
                            source={require('../../../assets/emergency_img.png')}
                            style={styles.longtermimg}
                        />
                        <Text style={styles.Longterm}>Emergency Funds</Text>
                    </View>
                </View>


            </ScrollView>
        </View>

    );

}


// StyleSheet

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerScroll: {
        width: '100%'
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    Goles_4logo: {
        height: 96,
        width: 96,
    },
    text_goals: {
        fontSize: 20,
        marginVertical: 15,

    },
    Investments: {
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 40,
        marginVertical: 20,

    },
    mainbox: {
        alignItems: "center",
    },
    container_box: {
        width: Dimensions.get('window').width - 20,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        borderColor: "#F7EDED",
        borderWidth: 1,
        borderRadius: 10,
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
    longtermimg: {
        height: 80,
        width: 80,
    },
    Longterm: {
        marginLeft: 50,
        fontSize: 22,
        color: Colors.BLACK,
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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(Goals4Screen)