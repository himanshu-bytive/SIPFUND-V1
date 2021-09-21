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
import { ScrollView } from "react-native-gesture-handler";

function Goals1Screen(props) {
    return (
        <View style={styles.container}>

            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={30} color={Colors.RED} /></TouchableOpacity>}
                backgroundColor={Colors.PEACH}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
                rightComponent={<View style={Styles.headerkn}><Text style={Styles.textkn}>KN</Text></View>}
            />

            <ScrollView>
            <View style={Styles.header_top}>
                <Image
                    source={require('../../../assets/goals1_img1.png')}
                    style={styles.goals1_img1}
                />
                <Text style={styles.text_goals}>Holdings</Text>

            </View>

            {/* Summary....sec */}


            <View style={styles.education1}>

                <View style={{ alignItems: "center", }}>
                    <Text style={styles.child5}>Summary</Text>
                    <Text style={styles.value}>Value as of Feb 8,2021</Text>
                    <Text style={styles.rupees}>₹ 1,02,50,000</Text>

                    <Text style={styles.value}>Current Value</Text>
                </View>

                <View style={styles.value_sec}>

                    <View style={styles.Profit}>
                        <Text style={styles.investment}>₹ 1,00,00,000</Text>
                        <Text style={styles.investment2}>Investment</Text>
                    </View>
                    <View style={styles.Profit}>
                        <Text style={styles.investment}>₹ 2,50,000</Text>
                        <Text style={styles.investment2}>Profit/Loss</Text>
                    </View>

                </View>

            </View>

            <TouchableOpacity onPress={() => props.navigation.navigate('Goals2')}>
                <View style={styles.education}>
                    <View style={styles.education_sec}>
                        <Image
                            source={require('../../../assets/goals1_img2.png')}
                            style={styles.goals1_img3}
                        />
                        <View style={{ alignItems: "center", }}>
                            <Text style={styles.Goals}>Goals</Text>
                        </View>
                    </View>
                    <Text style={styles.number}><Text style={styles.red_color}>3</Text>/5</Text>
                </View>
            </TouchableOpacity>

            {/* Investment Plan..._sec */}

            <TouchableOpacity onPress={() => props.navigation.navigate('Goals2')}>
                <View style={styles.education_2}>
                    <View style={styles.education_sec}>
                        <Image
                            source={require('../../../assets/Goles_4logo.png')}
                            style={styles.goals1_img3}
                        />
                        <View style={{ alignItems: "center", }}>
                            <Text style={styles.Goals}>Investment Plan</Text>
                        </View>
                    </View>
                    <Text style={styles.number}><Text style={styles.red_color}>8</Text>/12</Text>
                </View>
            </TouchableOpacity>

            {/* Top Rated Funds..._sec */}

            <TouchableOpacity onPress={() => props.navigation.navigate('Goals2')}>
                <View style={styles.education}>
                    <View style={styles.education_sec}>
                        <Image
                            source={require('../../../assets/goals1_img4.png')}
                            style={styles.goals1_img3}
                        />
                        <View style={{ alignItems: "center", }}>
                            <Text style={styles.Goals}>Top Rated Funds</Text>
                        </View>
                    </View>
                    <Text style={styles.number}><Text style={styles.red_color}>5</Text>/10</Text>
                </View>
            </TouchableOpacity>


            {/* Own Choice...sec */}

            <TouchableOpacity onPress={() => props.navigation.navigate('Goals2')}>
                <View style={styles.education_2}>
                    <View style={styles.education_sec}>
                        <Image
                            source={require('../../../assets/goles5_img.png')}
                            style={styles.goals2_img3}
                        />
                        <View style={{ alignItems: "center", }}>
                            <Text style={styles.Goals}>Own Choice</Text>
                        </View>
                    </View>
                    <Text style={styles.number}><Text style={styles.red_color}>3</Text>/8</Text>
                </View>
            </TouchableOpacity>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
 
    header: {
        width: '100%',
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: Colors.GREY_1,
        backgroundColor: '#F9F9F9',
        alignItems: "center",
        backgroundColor: Colors.LIGHT_WHITE,
        paddingTop: 10,
        paddingBottom: 10,
    },
    logimg: {
        height: 65,
        width: 203,

    },

    goals1_img1: {
        height: 86,
        width: 72,
    },
    goals1_img3: {
        height: 64,
        width: 64,
        marginLeft: 20,
    },
    goals2_img3: {
        height: 40,
        width: 30,
        marginVertical: 10,
        marginLeft: 30,
    },

    text_goals: {
        fontSize: 25,
        paddingBottom: 50,
        fontWeight: "bold",
    },

    education: {
        flexDirection: "row",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: Colors.GRAY_LIGHT,
        marginVertical: 10,
        marginHorizontal: 20,
        alignItems: "center",
    },
    education_2: {
        flexDirection: "row",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: Colors.RED,
        marginVertical: 10,
        marginHorizontal: 20,
        alignItems: "center",

    },
    education_sec: {
        flexDirection: "row",
        width: "80%",
        alignItems: "center",

    },
    education1: {
        marginTop: -140,
        marginHorizontal: 20,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: Colors.GRAY_LIGHT,
        marginVertical: 20,
        padding: 10,
        backgroundColor: Colors.WHITE,
    },

    child: {
        fontSize: 20,
        fontWeight: "bold",
    },
    child5: {

        fontSize: 25,
        fontWeight: "bold",
    },
    summery_sec: {
        width: '100%',
        alignItems: "center",

    },
    value: {
        fontSize: 12,
        fontWeight: "bold",
        paddingVertical: 5,
        color: Colors.DEEP_GRAY,
    },
    value_sec: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 30,
    },
    rupees: {
        fontSize: 20,
        color: Colors.RED,
        fontWeight: "bold",
    },
    investment: {
        color: Colors.RED,
        fontSize: 20,
        fontWeight: "bold",
    },
    Profit: {
        alignItems: "center",
    },
    investment2: {
        fontSize: 12,
        fontWeight: "bold",
        color: Colors.DEEP_GRAY,
        marginVertical: 10,
    },
    Goals: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20,
    },
    number: {
        fontSize: 20,
        fontWeight: "bold",
        position: "absolute",
        right: 10,

    },
    red_color: {
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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(Goals1Screen)