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
import { Ionicons, AntDesign, EvilIcons, Entypo, FontAwesome5 } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-elements/dist/helpers";

function Plan5(props) {

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
                <View style={styles.education}>
                    <View style={styles.child_sec}>
                        <Image
                            source={require('../../../assets/childimg.png')}
                            style={styles.goals_2}
                        />
                    </View>
                    <View style={styles.education_sec}>
                        <Text style={styles.child}>Summary</Text>
                        <Text style={styles.child_text}>Child’s Education Plan</Text>
                        <Text style={styles.child_master}>Master Vijay Deshmukh</Text>
                    </View>
                </View>

                <Text style={styles.mygoal}>My Goal : <Text style={styles.my_goal}>Child’s Education</Text></Text>

                <View style={styles.fund_sec}>
                    <Text style={styles.fund_secleft}>Fund List</Text>
                    <Text style={styles.fund_secright}>16,000</Text>
                </View>

                {/* Axis Asset Management Company Ltd */}

                <View style={styles.sbi_sec}>
                    <Image
                        source={require('../../../assets/Hybrid_img.png')}
                        style={styles.Hybrid}
                    />
                    <Text style={styles.sbi_text}>SBI Equity Hybrid Fund</Text>
                    <Text style={styles.price}>5,000</Text>
                </View>

                <View style={styles.sbi_sec}>
                    <Image
                        source={require('../../../assets/LargeCap_img.png')}
                        style={styles.Hybrid}
                    />
                    <Text style={styles.sbi_text}>Mirae Asset Large Cap Fund</Text>
                    <Text style={styles.price}>4,000</Text>
                </View>

                <View style={styles.sbi_sec}>
                    <Image
                        source={require('../../../assets/MultiCap_img.png')}
                        style={styles.Hybrid}
                    />
                    <Text style={styles.sbi_text}>Kotak Standard Multicap Fund</Text>
                    <Text style={styles.price}>3,000</Text>
                </View>

                <View style={styles.sbi_sec}>
                    <Image
                        source={require('../../../assets/MidCap_img.png')}
                        style={styles.Hybrid}
                    />
                    <Text style={styles.sbi_text}>BNP Paribas Mid Cap Fund</Text>
                    <Text style={styles.price}>4,000</Text>
                </View>

                <TouchableOpacity onPress={() => props.navigation.navigate('Home')}><Text style={styles.add}>Add another child’s education plan</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Upi')} style={styles.botton_box}>
                    <Text style={styles.get_otp}>START GOAL</Text>

                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },

    header: {
        borderBottomColor: Colors.BLACK,
        borderBottomWidth: 1,
    },
    education: {
        flexDirection: "row",
        marginHorizontal: 10,
        padding: 10,




    },
    education_sec: {
        width: '70%',
        paddingTop: 20,

    },
    goals_2: {
        height: 117,
        width: 126,

    },
    child: {
        fontSize: 18,
        paddingLeft: 20,
        color: Colors.DEEP_GRAY,
    },
    child_master: {
        fontSize: 16,
        paddingLeft: 20,
        color: Colors.DEEP_GRAY,
        fontWeight: "bold",
    },
    child_text: {
        fontSize: 18,
        color: Colors.RED,
        paddingVertical: 10,
        paddingLeft: 20,
        fontWeight: "bold",
    },
    formsec: {
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 50,
        borderColor: Colors.DEEP_GRAY,
        marginHorizontal: 20,
        padding: 10,
    },
    Midcap: {
        fontSize: 18,
        paddingLeft: 10,
    },
    results: {
        fontSize: 12,
        marginLeft: 50,
        marginTop: 5,
        color: Colors.DEEP_GRAY,
    },
    sbi_sec:
    {
        flexDirection: "row",
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: Colors.DEEP_GRAY,
        paddingBottom: 10,
        marginVertical: 5,
    },
    Hybrid: {
        width: 32,
        height: 36,

    },
    sbi_text: {
        marginLeft: 10,
        paddingTop: 10,
        fontSize: 15,
    },
    price: {
        position: "absolute",
        right: 0,
        paddingTop: 10,
        fontSize: 15,
        fontWeight: "bold",
    },
    fund_sec: {
        flexDirection: "row",
        backgroundColor: Colors.LIGHT_GRAY,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    fund_secright: {
        position: "absolute",
        right: 0,
        fontSize: 15,
        fontWeight: "bold",
        paddingTop: 10,
        paddingRight: 10,
    },
    fund_secleft: {
        fontSize: 18,
        fontWeight: "bold",
    },
    mygoal: {
        fontSize: 18,
        fontWeight: "bold",
        marginHorizontal: 20,
        color: Colors.RED,
        marginBottom: 20,
        marginTop: 40,
    },
    my_goal: {
        color: Colors.DEEP_GRAY,
        fontWeight: "bold",


    },
    add: {
        marginVertical: 10,
        textAlign: "center",
        color: Colors.RED,
        fontSize: 18,
    },
    botton_box: {

        backgroundColor: Colors.RED,
        marginHorizontal: 30,
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.DEEP_GRAY,
        paddingVertical: 10,
    },
    get_otp: {
        color: Colors.WHITE,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",

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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(Plan5)