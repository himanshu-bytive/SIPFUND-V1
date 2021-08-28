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

export default function Investment2Screens(props) {

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
                        <Text style={styles.child_text}>Recommendations</Text>
                        <View style={styles.childbottom}>
                            <Image
                                source={require('../../../assets/sf.png')}
                                style={styles.sf}
                            />
                            <Text style={styles.far}>Invest for 5+ years</Text>
                        </View>
                    </View>
                    <View style={styles.child_sec}>
                        <Image
                            source={require('../../../assets/modirate.png')}
                            style={styles.goals_2}
                        />
                    </View>

                </View >

                <View style={styles.box_sec}>
                    <Text style={styles.year}>Benefits</Text>
                    <View style={styles.childbottom}>
                        <Image
                            source={require('../../../assets/sf.png')}
                            style={styles.sf}
                        />
                        <Text style={styles.beat}>Inflation beating long-term returns</Text>
                    </View>
                    <View style={styles.childbottom}>
                        <Image
                            source={require('../../../assets/sf.png')}
                            style={styles.sf}
                        />
                        <Text style={styles.beat}>SIPFund.com recommends five best
                            funds to invest from 400 funds</Text>
                    </View>


                </View>
                <Text style={styles.recomned}>Funds recommended for you</Text>



                {/* Axis Asset Management Company Ltd */}
                <View style={styles.sbi_sec}>
                    <Image
                        source={require('../../../assets/idbi_img.png')}
                        style={styles.Hybrid}
                    />
                    <Text style={styles.sbi_text}>IDBI Hybrid Equity Fund</Text>
                   
                </View>
                
                <View style={styles.sbi_sec}>
                    <Image
                        source={require('../../../assets/Hybrid_img.png')}
                        style={styles.Hybrid}
                    />
                    <Text style={styles.sbi_text}>SBI Equity Hybrid Fund</Text>
                   
                </View>

                <View style={styles.sbi_sec}>
                    <Image
                        source={require('../../../assets/LargeCap_img.png')}
                        style={styles.Hybrid}
                    />
                    <Text style={styles.sbi_text}>Mirae Asset Large Cap Fund</Text>
                    
                </View>

                <View style={styles.sbi_sec}>
                    <Image
                        source={require('../../../assets/tata.png')}
                        style={styles.Hybrid}
                    />
                    <Text style={styles.sbi_text}>Kotak Standard Multicap Fund</Text>
                    
                </View>

                <View style={styles.sbi_sec}>
                    <Image
                        source={require('../../../assets/MultiCap_img.png')}
                        style={styles.Hybrid}
                    />
                    <Text style={styles.sbi_text}>BNP Paribas Mid Cap Fund</Text>
                    
                </View>
                
            </ScrollView>
            <TouchableOpacity onPress={() => props.navigation.navigate('Invest3')} style={styles.botton_box}>
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
        padding: 20,
    },
    education_sec: {
        width: '60%',
        paddingTop: 20,

    },
    goals_2: {
        height: 145,
        width: 145,

    },
    child: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.RED,
    },
    child_text: {
        fontSize: 18,
        color: colors.DEEP_GRAY,
        paddingVertical: 10,
        fontWeight: "bold",
        marginTop:50,
    },
    formsec: {
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 50,
        borderColor: colors.DEEP_GRAY,
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
        color: colors.DEEP_GRAY,
    },
    sbi_sec:
    {
        flexDirection: "row",
        marginHorizontal: 20,
        borderColor: colors.DEEP_GRAY,
        paddingBottom: 10,
        marginVertical: 6,
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
    },
    fund_sec: {
        flexDirection: "row",
        backgroundColor: colors.LIGHT_GRAY,
        marginHorizontal: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    fund_secright: {
        position: "absolute",
        right: 0,
        fontSize: 18,
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
        color: colors.RED,
        marginBottom: 20,
    },
    my_goal: {
        color: colors.DEEP_GRAY,
        fontWeight: "normal"
    },
    add: {
        marginVertical: 20,
        textAlign: "center",
        color: colors.RED,
        fontSize: 18,
    },
    botton_box: {

        backgroundColor: colors.RED,
        marginHorizontal: 30,
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.DEEP_GRAY,
        paddingVertical: 10,
    },
    get_otp: {
        color: colors.WHITE,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",

    },
    childbottom: {
        flexDirection: "row",
        paddingLeft: 20,
        paddingVertical: 15,
    },

    sf: {
        width: 16,
        height: 16,
        marginTop: 3,
    },
    far:{fontSize:15,
        paddingLeft:10,},
    
    year: {
        fontSize: 18,
        paddingLeft: 10,
        color:colors.DEEP_GRAY,
        fontWeight:"bold",

    },
    beat: {
        fontSize: 15,
        paddingLeft: 10,
    },
    box_sec: {
        backgroundColor: colors.LIGHT_WHITE,
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        borderRadius: 10
    },
    recomned:{fontSize:18,
    fontWeight:"bold",
    color:colors.DEEP_GRAY,
    paddingLeft:20,marginVertical:20,
},

});