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
import { Ionicons, AntDesign, Entypo, FontAwesome5 } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

export default function TopratedFunds5Screen(props) {

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

                {/* SIP_sec */}

                <View style={styles.sip_sec}>

                    <View style={styles.sip_left}>
                        <Text style={styles.sip}>SIP</Text>
                    </View>

                    <View style={styles.lumpsum}>
                        <Text style={styles.lump}>LUMPSUM</Text>
                    </View>

                </View>

                {/* My Selected Funds_sec */}

                <View style={styles.fund_sec}>
                    <Text style={styles.selected}>My Selected Funds</Text>
                    <Text style={styles.month}>SIP Per Month</Text>


                </View>

                {/* Monthly Investment_sec */}

                <View style={styles.fund_sec}>
                    <Text style={styles.investment}>Monthly Investment</Text>
                    <Text style={styles.price}>₹ 16,000</Text>
                </View>

                {/* Hybrid_sec */}

                <View style={styles.hybrid_sec}>
                    <View style={{ backgroundColor: "#EFEFEF", }}>
                        <Text style={styles.hybrid}>Hybrid</Text>
                    </View>
                </View>

                {/* Axis Asset Management Company Ltd */}


                <View style={styles.axis_asset}>
                    <View style={styles.company}>
                        <Image
                            source={require('../../../assets/axis_img.png')}
                            style={styles.axisimg}
                        />
                        <View style={styles.management}>
                            <Text style={styles.axis}>Axis Asset Management Company Ltd</Text>
                            <Text style={styles.moderately}>Moderately High Risk</Text>
                        </View>

                        <View style={styles.checkbox}>
                            <CheckBox
                                title=''
                                containerStyle={styles.checkbox_style}
                                textStyle={{ color: colors.RED, fontSize: 14 }}
                                checked={true}
                                checkedColor={colors.BLACK}
                                uncheckedColor={colors.RED}
                            />
                        </View>

                    </View>

                    {/* border_sec */}

                    <View style={styles.border_sec}>
                        <View style={styles.border}>
                            <View style={{ borderWidth: 1, borderColor: colors.RED, }}></View>
                        </View>
                        <View style={styles.icons}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('FundsDetails')}>
                                <AntDesign name="rightcircleo" size={30} color="#C0392B" />
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* Select Folio No._sec */}

                    <View style={styles.selectfolio_sec}>

                        <View style={styles.select}>
                            <Text style={styles.no}>Select Folio No.</Text>

                            <View style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#707070", }}>
                                <Text style={styles.new}>New Folio</Text>
                                <AntDesign name="caretdown" size={20} color="#C0392B" />
                            </View>
                        </View>

                        <View style={styles.select}>
                            <Text style={styles.no}>SIP Date</Text>

                            <View style={{ flexDirection: "row", }}>
                                <Text style={styles.new}>5</Text>
                                <AntDesign name="caretdown" size={20} color="#C0392B" />
                            </View>


                        </View>
                        <View style={styles.select}>

                            <Text style={styles.no}>SIP</Text>
                            <Text style={styles.new}>4000</Text>
                        </View>

                    </View>
                </View>

                {/* axis_asset........2_sec */}

                <View style={styles.axis_asset}>

                    <View style={styles.company}>

                        <Image
                            source={require('../../../assets/axis_img.png')}
                            style={styles.axisimg}
                        />
                        <View style={styles.management}>
                            <Text style={styles.axis}>Axis Asset Management Company Ltd</Text>
                            <Text style={styles.moderately}>Moderately High Risk</Text>
                        </View>

                        <View style={styles.checkbox}>
                            <CheckBox
                                title=''
                                containerStyle={styles.checkbox_style}
                                textStyle={{ color: colors.RED, fontSize: 14 }}
                                checked={true}
                                checkedColor={colors.BLACK}
                                uncheckedColor={colors.RED}
                            />
                        </View>

                    </View>

                    {/* border_sec */}

                    <View style={styles.border_sec}>
                        <View style={styles.border}>
                            <View style={{ borderWidth: 1, borderColor: colors.RED, }}></View>
                        </View>
                        <View style={styles.icons}>
                            <TouchableOpacity>
                                <AntDesign name="rightcircleo" size={30} color="#C0392B" />
                            </TouchableOpacity>
                        </View>

                    </View>


                    {/* Select Folio No._sec */}

                    <View style={styles.selectfolio_sec}>

                        <View style={styles.select}>
                            <Text style={styles.no}>Select Folio No.</Text>

                            <View style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#707070", }}>
                                <Text style={styles.new}>New Folio</Text>
                                <AntDesign name="caretdown" size={20} color="#C0392B" />
                            </View>
                        </View>

                        <View style={styles.select}>
                            <Text style={styles.no}>SIP Date</Text>

                            <View style={{ flexDirection: "row", }}>
                                <Text style={styles.new}>5</Text>
                                <AntDesign name="caretdown" size={20} color="#C0392B" />
                            </View>


                        </View>
                        <View style={styles.select}>

                            <Text style={styles.no}>SIP</Text>
                            <Text style={styles.new}>5000</Text>
                        </View>

                    </View>
                </View>


                {/* Hybrid_sec.....3 */}

                <View style={styles.hybrid_sec}>
                    <View style={{ backgroundColor: "#EFEFEF", }}>
                        <Text style={styles.hybrid}>Multi Cap</Text>
                    </View>
                </View>

                {/* axis_asset......4_sec */}

                <View style={styles.axis_asset}>

                    <View style={styles.company}>

                        <Image
                            source={require('../../../assets/axis_img.png')}
                            style={styles.axisimg}
                        />
                        <View style={styles.management}>
                            <Text style={styles.axis}>ICICI Prudential Asset Management…</Text>
                            <Text style={styles.moderately}>Moderately High Risk</Text>
                        </View>

                        <View style={styles.checkbox}>
                            <CheckBox
                                title=''
                                containerStyle={styles.checkbox_style}
                                textStyle={{ color: colors.RED, fontSize: 14 }}
                                checked={true}
                                checkedColor={colors.BLACK}
                                uncheckedColor={colors.RED}
                            />
                        </View>

                    </View>

                    {/* border_sec */}

                    <View style={styles.border_sec}>
                        <View style={styles.border}>
                            <View style={{ borderWidth: 1, borderColor: colors.RED, }}></View>
                        </View>
                        <View style={styles.icons}>
                            <AntDesign name="rightcircleo" size={30} color="#C0392B" />

                        </View>

                    </View>


                    {/* Select Folio No._sec */}

                    <View style={styles.selectfolio_sec}>

                        <View style={styles.select}>
                            <Text style={styles.no}>Select Folio No.</Text>

                            <View style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#707070", }}>
                                <Text style={styles.new}>New Folio</Text>
                                <AntDesign name="caretdown" size={20} color="#C0392B" />
                            </View>
                        </View>

                        <View style={styles.select}>
                            <Text style={styles.no}>SIP Date</Text>

                            <View style={{ flexDirection: "row", }}>
                                <Text style={styles.new}>5</Text>
                                <AntDesign name="caretdown" size={20} color="#C0392B" />
                            </View>


                        </View>
                        <View style={styles.select}>

                            <Text style={styles.no}>SIP</Text>
                            <Text style={styles.new}>5000</Text>
                        </View>

                    </View>
                </View>

                <Text style={styles.more_funds}>I would like to add more funds</Text>

                <TouchableOpacity style={styles.botton_box}>
                    <Text style={styles.get_otp}>NEXT</Text>

                </TouchableOpacity>
            </ScrollView>
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

    header: {
        borderBottomColor: colors.BLACK,
        borderBottomWidth: 1,
    },
    containerScroll: {
        width: '100%'
    },
    sip_sec: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 30,
    },
    sip_left: {
        width: "50%",
        borderBottomWidth: 1,
        borderBottomColor: colors.RED,
    },
    lumpsum: {
        width: "50%",
        borderBottomWidth: 1,
        borderBottomColor: colors.DEEP_GRAY,
    },
    sip: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        color: colors.RED,
    },
    lump: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 10,
    },
    fund_sec: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 10,
    },
    selected: {

        fontSize: 15,
        fontWeight: "bold",
        color: colors.DEEP_GRAY,
    },
    month: {
        fontSize: 13,
        fontWeight: "bold",
        color: colors.DEEP_GRAY,
        position: "absolute",
        right: 0,

    },
    investment: {
        fontSize: 15,
        fontWeight: "bold",
        color: colors.RED,
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.RED,
        position: "absolute",
        right: 0,
    },
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
        borderWidth: 1,
        borderColor: colors.GREY_1,
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
        width: "80%",
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
        marginTop: 10,
    },
    botton_box: {

        backgroundColor: colors.RED,
        marginHorizontal: 30,
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.DEEP_GRAY,
        paddingVertical: 10,
    },
    get_otp: {
        color: colors.WHITE,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",

    },

});