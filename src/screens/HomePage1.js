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
    ScrollView
} from "react-native";
import { colors } from '../common/theme';
import { Entypo, AntDesign } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';

export default function HomePage1(props) {
    return (
        <ScrollView style={{ width: '100%' }}>
            <Header
                leftComponent={<View style={{ marginTop: 20 }}><Entypo name={"menu"} size={30} color={colors.RED} /></View>}
                backgroundColor={colors.LIGHT_WHITE}
                containerStyle={styles.header}
                centerComponent={<Image
                    source={require('../../assets/icon.png')}
                    style={styles.logimg}
                />}
            />
            <View style={styles.home_top}>
                <Image
                    source={require('../../assets/Hello.png')}
                    style={styles.Helloimg}
                />
                <Text style={styles.HelloIinvestor}>Hello, Investor</Text>
                <Text style={styles.HelloIinvestor1}>You’re almost ready to submit</Text>
                <TouchableOpacity style={styles.botton_box}>
                    <Text style={styles.get_otp}>COMPLETE ACCOUNT SETUP</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.Plan}>Plan Your GOALS</Text>

            <ScrollView horizontal={true}>

                <View style={styles.education}>
                    <View style={styles.child_sec}>
                        <Image
                            source={require('../../assets/childimg.png')}
                            style={styles.goals_2}
                        />
                    </View>
                    <View style={styles.education_sec}>
                        <Text style={styles.child}>Car Purchase</Text>
                        <Text style={styles.child_text}>Plan for that dream car you always wanted</Text>
                    </View>
                </View>

                <View style={styles.education}>
                    <View style={styles.child_sec}>
                        <Image
                            source={require('../../assets/childimg.png')}
                            style={styles.goals_2}
                        />
                    </View>
                    <View style={styles.education_sec}>
                        <Text style={styles.child}>Car Purchase</Text>
                        <Text style={styles.child_text}>Plan for that dream car you always wanted</Text>
                    </View>
                </View>


                <View style={styles.education}>
                    <View style={styles.child_sec}>
                        <Image
                            source={require('../../assets/childimg.png')}
                            style={styles.goals_2}
                        />
                    </View>
                    <View style={styles.education_sec}>
                        <Text style={styles.child}>Car Purchase</Text>
                        <Text style={styles.child_text}>Plan for that dream car you always wanted</Text>
                    </View>
                </View>

                <View style={styles.education}>
                    <View style={styles.child_sec}>
                        <Image
                            source={require('../../assets/childimg.png')}
                            style={styles.goals_2}
                        />
                    </View>
                    <View style={styles.education_sec}>
                        <Text style={styles.child}>Car Purchase</Text>
                        <Text style={styles.child_text}>Plan for that dream car you always wanted</Text>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.border}></View>

            <Text style={styles.Plan}>Investment Plans</Text>
            
            <View style={styles.investment_sec}>
                
                <View style={styles.investment}>
                    <Image
                        source={require('../../assets/term1.png')}
                        style={styles.term}
                    />
                    <Text style={styles.long}>Long Term</Text>
                </View>
                
                <View style={styles.investment}>
                    <Image
                        source={require('../../assets/term2.png')}
                        style={styles.term}
                    />
                    <Text style={styles.long}>Tax Saving Funds
                    </Text>
                </View>
                
                <View style={styles.investment}>
                    <Image
                        source={require('../../assets/term3.png')}
                        style={styles.term}
                    />
                    <Text style={styles.long}>Better Than
                        FD</Text>
                </View>

            </View>

            <View style={styles.investment_sec}>
                <View style={styles.investment}>
                    <Image
                        source={require('../../assets/term4.png')}
                        style={styles.term}
                    />
                    <Text style={styles.long}>Aggressive
                        Funds</Text>
                </View>
                <View style={styles.investment}>
                    <Image
                        source={require('../../assets/term5.png')}
                        style={styles.term}
                    />
                    <Text style={styles.long}>Funds For
                        SIP
                    </Text>
                </View>
                <View style={styles.investment}>
                    <Image
                        source={require('../../assets/term6.png')}
                        style={styles.term}
                    />
                    <Text style={styles.long}>Emergency
                        Funds
                    </Text>
                </View>

            </View>
          
          
            <View style={{alignItems: "center"}}>
                <View style={styles.all_plan}>
                    <Text style={styles.all_plan_text}>See All Investment Plan</Text>
                    <AntDesign name="down" size={20} color="#C0392B" />
                </View>
            </View>
           
            <View style={styles.border}></View>
            <Text style={styles.roted_text}>Top Rated Funds</Text>

            <View style={styles.education}>
                <View style={styles.child_sec}>
                    <Image
                        source={require('../../assets/term7.png')}
                        style={styles.fund_img}
                    />
                </View>
                <View style={styles.education_sec}>
                    <Text style={styles.child}>Get Top Rated Funds</Text>
                    <Text style={styles.child_text}>At SIPFund.com we help you in choosing the best for you!</Text>
                </View>
            </View>
            <View style={styles.roted_border}></View>

            <View style={styles.quick_sec}>
                <Text style={styles.quick_text}>Quick Access</Text>

                <View style={styles.education}>
                    <View style={styles.child_sec}>
                        <Image
                            source={require('../../assets/term8.png')}
                            style={styles.quick_img}
                        />
                    </View>
                    <View style={styles.education_sec}>
                        <Text style={styles.earn}>Refer & Earn</Text>
                        <Text style={styles.child_text}>Now earn upto
                            Rs. 5,000/-</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    header: {
        borderBottomColor: colors.BLACK,
        borderBottomWidth: 1
    },
    home_top: {
        alignItems: 'center',
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    Helloimg: {
        height: 300,
        width: 210,
    },

    HelloIinvestor: {
        fontSize: 16,
        fontWeight: "bold",

    },
    HelloIinvestor1: {
        fontSize: 16,
        color: colors.GRAY_DEEP,
        fontWeight: "bold",
        marginVertical: 30,
    },
    botton_box: {
        backgroundColor: colors.RED,
        paddingHorizontal: 50,
        paddingVertical: 20,
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.GRAY_DEEP,
        width: '85%',
        fontWeight: "bold",

    },
    get_otp: {
        color: colors.WHITE,
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: 5,
        textAlign: "center"
    },
    Plan: {
        fontSize: 20,
        color: colors.GRAY_DEEP,
        fontWeight: "bold",
        marginTop: 30,
        paddingHorizontal: 10,
    },
    education: {
        flexDirection: "row",
        width: 370,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: colors.GRAY_LIGHT,
        borderRadius: 15,
        marginVertical: 20,
        marginHorizontal: 5,
        padding: 20,
        backgroundColor: colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    child_sec: { width: '40%' },
    goals_2: {
        height: 145,
        width: 145,
    },
    education_sec: {
        width: '60%',
        marginTop: 10,

    },
    child: {
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 20,
    },
    child_text: {
        fontSize: 18,
        color: colors.GRAY_LIGHT_1,
        paddingTop: 15,
        paddingLeft: 20,
    },
    border: {
        marginTop: 10,
        height: 4,
        marginHorizontal: 10,
        backgroundColor: colors.GRAY_LIGHT,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    investment_sec: {
        flexDirection: "row",
    },
    investment: {
        backgroundColor: colors.WHITE,
        borderWidth: 2,
        width:'30%',
        alignItems: "center",
        margin: 7,
    },
    term: {
        width: 112,
        height: 113,
    },
    long: {
        textAlign: "center",
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: "bold"
    },
    all_plan: {
        flexDirection: "row",
        alignItems: "center",
    },
    all_plan_text: {
        fontSize: 16,
        color: colors.RED,
        fontWeight: "bold",
    },
    roted_text: {
        fontSize: 20,
        color: colors.GRAY_DEEP,
        fontWeight: "bold",
        paddingLeft: 20,
        marginVertical: 20,
    },
    fund_img: {
        height: 122,
        width: 126,
    },
    roted_border: {
        borderColor: colors.GRAY_LIGHT,
        width: '80%',
        borderBottomWidth: 2,
        marginVertical: 20,

    },

    quick_sec: { backgroundColor: colors.PINK, },

    quick_text: {
        fontSize: 20,
        color: colors.RED,
        fontWeight: "bold",
        paddingLeft: 20,
        marginVertical: 20,
    },
    quick_img: {
        height: 94,
        width: 82,
    },
    earn: {
        color: colors.RED,
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 20,
    },









});