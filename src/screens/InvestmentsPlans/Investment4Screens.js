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
import { colors } from '../../common/theme';
import { commonStyles } from '../../common/styles';
import { Ionicons, AntDesign, EvilIcons, Entypo, FontAwesome5 } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-elements/dist/helpers";
import { PlanYourGoalFundType } from "../../components";

export default function Investment4Screens(props) {

    return (


        <View style={styles.container}>

            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={40} color={colors.RED} /></TouchableOpacity>}
                containerStyle={commonStyles.header}
                backgroundColor={colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
                rightComponent={<View style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={colors.RED} /></View>}
            />

            <ScrollView>
                <View style={styles.education}>
                    <View style={styles.education_sec}>
                        <Text style={styles.child}>Moderate Funds</Text>
                        <Text style={styles.child_text}>Recommended Funds and Amounts</Text>
                        <Text style={styles.amount}>My Investment Amount</Text>
                    </View>
                    <View style={styles.child_sec}>
                        <Image
                            source={require('../../../assets/modirate.png')}
                            style={styles.goals_2}
                        />
                        <Text style={styles.sip}>SIP Per Month</Text>
                        <Text style={styles.amount_text}>₹16,000</Text>
                    </View>

                </View >
                
                  {/* Hybrid_sec */}



                  <View style={styles.hybrid_sec}>
                        <View style={{ backgroundColor: "#EFEFEF", }}>
                            <Text style={styles.hybrid}>Hybrid</Text>
                        </View>
                    </View>

                    {/* Axis Asset Management Company Ltd */}


                    <PlanYourGoalFundType/>

                    {/* axis_asset........2_sec */}

                    <PlanYourGoalFundType/>


                    {/* Hybrid_sec.....3 */}

                    <View style={styles.hybrid_sec}>
                        <View style={{ backgroundColor: "#EFEFEF", }}>
                            <Text style={styles.hybrid}>Large Cap</Text>
                        </View>
                    </View>

                    {/* axis_asset......4_sec */}

                    <PlanYourGoalFundType/>

                    {/* multicap */}

                    <View style={styles.hybrid_sec}>
                        <View style={{ backgroundColor: "#EFEFEF", }}>
                            <Text style={styles.hybrid}>Multi Cap</Text>
                        </View>
                    </View>

                    {/* axis_asset......4_sec */}

                    <PlanYourGoalFundType/>

            </ScrollView>

            <TouchableOpacity onPress={() => props.navigation.navigate('Invest5')}><Text style={styles.more_funds}>I would like to add more funds</Text></TouchableOpacity> 
                <TouchableOpacity onPress={() => props.navigation.navigate('Invest7')} style={styles.botton_box}>
                    <Text style={styles.get_otp}>NEXT</Text>

                </TouchableOpacity>

        </View>


    );
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
    education: {
        flexDirection: "row",
        marginHorizontal: 10,
        padding: 20,
    },
    education_sec: {
        width: '70%',
        paddingTop: 20,

    },
    goals_2: {
        height: 112,
        width: 118,

    },
    child: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.RED,
    },
    child_text: {
        fontSize: 13,
        color: colors.DEEP_GRAY,
        paddingVertical: 5,
        fontWeight: "bold",
       
    },
    botton_box: {

        backgroundColor: colors.RED,
        marginHorizontal: 30,
        marginTop:30,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.DEEP_GRAY,
        paddingVertical: 10,
        marginBottom:20,
    },
    get_otp: {
        color: colors.WHITE,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",

    },

    //  new
   
    sip:{ fontSize: 13,
        fontWeight: 'bold',
        color: colors.DEEP_GRAY,
    },
    amount:{paddingTop:60,
        fontSize: 20,
        fontWeight: 'bold',},
        amount_text:{
            fontSize: 20,
        fontWeight: 'bold',
        color:colors.RED,
        paddingTop:5,
        },


        // hybride
        hybrid_sec: {
            marginHorizontal: 15,
            marginVertical: 20,
        },
        hybrid: {
            fontSize: 18,
            fontWeight: "bold",
            color: colors.RED,
            marginVertical: 10,
            marginLeft: 10,
        },
        axis_asset: {
            marginHorizontal: 20,
            marginTop: 10,
            backgroundColor: colors.WHITE,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
            padding: 10,
           
        },
        company: {
            flexDirection: "row",
        },
        management: {
            marginLeft: 10,
            width: "65%",
        },
        axis: {
            fontSize: 15,
    
        },
        moderately: {
            fontSize: 12,
            color: colors.DEEP_GRAY,
        },
        axisimg: {
            height: 39,
            width: 39,
        },
        checkbox: {
            position: "absolute",
            right: -20,
            top: -15
        },
        border_sec: {
            flexDirection: "row",
            marginTop: 10,
        },
        border: {
            width: "85%",
            marginRight: 10
        },
        icons: {
            width: '10%',
            marginTop: -15
        },
        selectfolio_sec: {
            flexDirection: "row",
        },
        select: {
            alignItems: "center",
            width: "31%",
        },
        no: {
            fontSize: 15,
            color: colors.DEEP_GRAY,
        },
        new: {
            fontSize: 18,
        },
        more_funds: {
            fontSize: 18,
            color: colors.RED,
            textAlign: "center",
            marginTop: 20,
        },
        hybridimg: {
            width: 39,
            height: 43,
        },




});