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
    ActivityIndicator
} from "react-native";
import { colors } from '../../common/theme';
import { MaterialIcons, AntDesign, Entypo, FontAwesome5, FontAwesome, Foundation } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';

export default function FundsDetails1Screen(props) {
    return (

        <View style={styles.container}>

            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={40} color={colors.RED} /></TouchableOpacity>}
                containerStyle={styles.header}
                backgroundColor={colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
                rightComponent={<View style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={colors.RED} /></View>}
            />
            <ScrollView style={styles.containerScroll}>

                <View style={styles.management_company}>
                    {/* <Image
                    source={require('../../../assets/axis_img.png')}
                    style={styles.axis_img}
                /> */}

                    <TouchableOpacity onPress={() => props.navigation.navigate('FundsDetails1')}>
                        <View style={styles.axis}>
                            <Text style={styles.axis_asset}>Axis Asset Management Company</Text>
                            <Text style={styles.midcap}>Midcap Diversified </Text>
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={{ padding: 10, }}>

                    <View style={styles.fund_returns}>
                        <Text style={styles.fund}>Fund Returns</Text>
                        <View style={styles.since_inception}>
                            <Text style={styles.number}>13.5%</Text>
                            <Text style={styles.since}>Since Inception</Text>

                        </View>


                    </View>

                    {/* <Image
                    source={require('../../../assets/linechart_img.png')}
                    style={styles.linechartimg}
                /> */}

                    <View style={{ borderWidth: 1, borderColor: colors.DEEP_GRAY, }}></View>


                    {/* imges_sec */}

                    <View style={styles.img_sec}>

                        {/* <Image
                        source={require('../../../assets/layer_img.png')}
                        style={styles.layer_img}
                    />
                    <Image
                        source={require('../../../assets/layer_img.png')}
                        style={styles.layer_img}
                    />
                    <Image
                        source={require('../../../assets/layer_img.png')}
                        style={styles.layer_img}
                    />
                    <Image
                        source={require('../../../assets/layer_img.png')}
                        style={styles.layer_img}
                    />
                    <Image
                        source={require('../../../assets/layer_img2.png')}
                        style={styles.layer_img}
                    /> */}





                    </View>

                    <View style={styles.time_sec}>

                        <Text style={styles.year}>1M</Text>
                        <Text style={styles.year}>1Y</Text>
                        <Text style={styles.year}>3Y</Text>
                        <Text style={styles.year}>5Y</Text>
                        <Text style={styles.year1}>All</Text>

                    </View>

                    {/* Min Investment_sec */}

                    <View style={styles.investment_sec}>

                        <View style={styles.investment}>
                            <Text style={styles.price}>1000</Text>
                            <Text style={styles.min}>Min Investment</Text>

                        </View>

                        <View style={styles.investment}>
                            <Text style={styles.price}>2700 Cr</Text>
                            <Text style={styles.min}>AUM</Text>

                        </View>

                        <View style={styles.investment}>
                            <Text style={styles.price}>60.28</Text>

                            <Text style={styles.min}>Lumpsum</Text>
                        </View>


                    </View>
                </View>

                <View style={{ marginHorizontal: 30, marginTop: 30, }}>
                    <View style={styles.private_sector}>

                        <Text style={styles.private}>Returns Calculator</Text>
                        <AntDesign name="down" size={22} color="#C0392B" />
                    </View>
                    <View style={{ borderWidth: 1, borderColor: colors.RED, }}></View>

                </View>









            </ScrollView>

        </View>


    );
}


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
    header: {
        borderBottomColor: colors.BLACK,
        borderBottomWidth: 1,
    },
    axis_img: {
        height: 53,
        width: 53,
        marginLeft: 20,
    },
    management_company: {

        flexDirection: "row",
        backgroundColor: colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        paddingTop: 20,
        paddingBottom: 20,
    },
    axis: {
        marginLeft: 20,
    },

    axis_asset: {
        fontSize: 20,
    },

    midcap: {
        fontSize: 13,
    },

    fund_returns: {
        flexDirection: "row",
    },

    fund: {
        width: "77%",
        fontSize: 15,
    },
    number: {
        fontSize: 15,
        marginLeft: 47,
        color: colors.RED,
        fontWeight: "bold",
    },
    since: {
        fontSize: 12,

    },
    linechartimg: {
        height: 179,
        width: 378,
        marginTop: 20,
        marginBottom: 20,
    },
    img_sec: {
        flexDirection: "row",
    },

    layer_img: {
        height: 36,
        width: 40,
        marginHorizontal: 18,
        marginVertical: 15,
    },
    time_sec: {
        flexDirection: "row",

    },
    year: {
        fontSize: 12,
        marginHorizontal: 30,
    },
    year1: {
        color: colors.RED,
        marginLeft: 33,
        fontSize: 12,

    },

    investment_sec: {
        flexDirection: "row",
        marginTop: 30,
    },
    investment: {
        marginHorizontal: 30,
        alignItems: "center",
    },
    price: {
        color: colors.RED,
        fontSize: 18,
        fontWeight: "bold",
    },
    min: {
        fontSize: 15,
    },
    private_sector: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 5,

    },
    private: {
        fontSize: 25,
        width: "87%",
        marginBottom: 2,
        marginLeft: 10,
        fontWeight: "bold",
        color: colors.RED,
    },




});