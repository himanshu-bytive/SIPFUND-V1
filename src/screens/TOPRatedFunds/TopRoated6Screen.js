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

import { Ionicons, AntDesign, EvilIcons, Entypo, FontAwesome5 } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-elements/dist/helpers";

export default function TopRoated6Screen(props) {
    return (
        <View style={styles.container}>
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={40} color={Colors.RED} /></TouchableOpacity>}
                containerStyle={Styles.header}
                backgroundColor={Colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={Styles.headerImg}
                />}
                rightComponent={<View style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={Colors.RED} /></View>}
            />
            <ScrollView>
            <View style={styles.education}>
            <View style={styles.child_sec}>
                        <Image
                            source={require('../../../assets/term7.png')}
                            style={styles.goals_2}
                        />
                    </View>

                    <View style={styles.education_sec}>
                    <Text style={styles.child_text2}>Search Funds</Text>
                        <Text style={styles.child_text}>Get Top Rated Funds</Text>
                    </View>

                    


                </View>

                <View style={styles.formsec}>
                    <EvilIcons name="search" size={30} color="#CD2700" />
                    <Text style={styles.Midcap}>Midcap</Text>
                </View>

                <Text style={styles.results}>10 results</Text>

                {/* Axis Asset Management Company Ltd */}


                <View style={styles.axis_asset}>

                    <View style={styles.company}>

                        <Image
                            source={require('../../../assets/axis_img.png')}
                            style={styles.axisimg}
                        />
                        <View style={styles.management}>

                            <Text style={styles.axis}>Axis Asset Management Company Ltd</Text>
                            <View style={styles.midcap}>
                                <Text style={styles.moderately}>Midcap</Text>
                                <View style={{ borderWidth: 1, borderColor: Colors.DARK_GREY, }}></View>
                                <Text style={styles.moderately}>Diversified</Text>
                            </View>

                        </View>

                        <View style={styles.icon}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Invest6')}>
                            <AntDesign name="right" size={20} color="#838280" /></TouchableOpacity>
                        </View>
                    </View>

                </View>


                {/* Aditya Birla Sun Life AMC Limited........_sec */}

                <View style={styles.axis_asset}>

                    <View style={styles.company}>

                        <Image
                            source={require('../../../assets/adityabirlaimg.png')}
                            style={styles.adityabirla_img}
                        />
                        <View style={styles.management}>

                            <Text style={styles.axis}>Aditya Birla Sun Life AMC Limited</Text>
                            <View style={styles.midcap}>
                                <Text style={styles.moderately}>Midcap</Text>
                                <View style={{ borderWidth: 1, borderColor: Colors.DARK_GREY, }}></View>
                                <Text style={styles.moderately}>Diversified</Text>
                            </View>

                        </View>

                        <View style={styles.icon}>
                            <View>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Invest6')}>
                            <AntDesign name="right" size={20} color="#838280" /></TouchableOpacity>
                            </View>

                        </View>

                    </View>
                </View>


                {/* Baroda Asset Management India…......_sec */}

                <View style={styles.axis_asset}>

                    <View style={styles.company}>

                        <Image
                            source={require('../../../assets/barodaimg.png')}
                            style={styles.axisimg}
                        />
                        <View style={styles.management}>

                            <Text style={styles.axis}>Baroda Asset Management India…</Text>
                            <View style={styles.midcap}>
                                <Text style={styles.moderately}>Midcap</Text>
                                <View style={{ borderWidth: 1, borderColor: Colors.DARK_GREY, }}></View>
                                <Text style={styles.moderately}>Diversified</Text>
                            </View>

                        </View>

                        <View style={styles.icon}>

                        <TouchableOpacity onPress={() => props.navigation.navigate('Invest6')}>
                            <AntDesign name="right" size={20} color="#838280" /></TouchableOpacity>
                        </View>

                    </View>
                </View>


                {/* BNP Paribas Mid Cap Fund......_sec */}

                <View style={styles.axis_asset}>

                    <View style={styles.company}>

                        <Image
                            source={require('../../../assets/MidCap_img.png')}
                            style={styles.axisimg}
                        />
                        <View style={styles.management}>

                            <Text style={styles.axis}>BNP Paribas Mid Cap Fund</Text>
                            <View style={styles.midcap}>
                                <Text style={styles.moderately}>Midcap</Text>
                                <View style={{ borderWidth: 1, borderColor: Colors.DARK_GREY, }}></View>
                                <Text style={styles.moderately}>Diversified</Text>
                            </View>

                        </View>

                        <View style={styles.icon}>

                        <TouchableOpacity onPress={() => props.navigation.navigate('Invest6')}>
                            <AntDesign name="right" size={20} color="#838280" /></TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>


    );
}










const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    axis_asset: {
        marginHorizontal: 20,
        marginTop: 10,
        backgroundColor: Colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.62,
        elevation: 4,
        padding: 15,
       
    },
    company: {
        flexDirection: "row",
    },
    management: {
        marginLeft: 15,
        width: "75%",
    },
    axis: {
        fontSize: 15,

    },
    midcap: {
        flexDirection: "row",

    },
    moderately: {
        fontSize: 12,
        color: Colors.DEEP_GRAY,
        marginHorizontal: 5,
    },
    axisimg: {
        height: 39,
        width: 39,
    },
    adityabirla_img: {
        height: 24,
        width: 47,
    },
    icon: {
        position: "absolute",
        right: 0,
        marginTop: 10,
    },
    education: {
        flexDirection: "row",
        borderColor: Colors.GRAY_LIGHT,
        marginBottom: 20,
        padding: 20,
        backgroundColor: Colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.10,
        shadowRadius: 2.62,


    },
    child_sec:{ width: '30%',
},
    education_sec: {
        width: '70%',
        marginLeft:10,
        paddingTop:30,

    },
    goals_2: {
        height: 102,
        width: 105,

    },
    child: {
        fontSize: 16,
        fontWeight: "bold",
        paddingLeft: 20,
        color: Colors.DEEP_GRAY,
    },
    child_text: {
        fontSize: 18,
        color: Colors.RED,
        paddingTop: 5,
        fontWeight: "bold",
    },
    child_text2:{
        color: Colors.DEEP_GRAY,
        fontSize: 18,
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


});