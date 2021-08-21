import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    Button,
    View,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    Text,
    Dimensions,
    KeyboardAvoidingView,
    TextInput,
    ActivityIndicator
} from "react-native";
import { colors } from '../../common/theme';
import { commonStyles } from '../../common/styles';
import { Ionicons, AntDesign, Entypo, FontAwesome5 } from 'react-native-vector-icons';
import { Image, Header, CheckBox, Slider } from 'react-native-elements';

export default function Plan1(props) {
   
    const [selectTab, setSelectTab] = useState('SIP');
    const toggleTab = (value) => {
        setSelectTab(value);
    };

    return (
        <View style={styles.container}>
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={40} color={colors.RED} /></TouchableOpacity>}
                containerStyle={commonStyles.header}
                backgroundColor={colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={commonStyles.headerImg}
                />}
                rightComponent={<View style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={colors.RED} /></View>}
            />
            <ScrollView style={commonStyles.containerScroll}>

                {/* SIP_sec */}

                <View style={styles.education}>
                    <View style={styles.child_sec}>
                        <Image
                            source={require('../../../assets/childimg.png')}
                            style={styles.goals_2}
                        />
                    </View>
                    <View style={styles.education_sec}>
                        <Text style={styles.child}>Calculator</Text>
                        <Text style={styles.child_text}>Child’s Education Plan</Text>
                    </View>
                </View>

                {/* vijay */}


                <View style={styles.vijay_sec}>
                    <Text style={styles.child2}>Name of Child (Optional)</Text>
                    <Text style={styles.childtext}>Vijay Deshmukh</Text>
                </View>

                <View style={[styles.vijay_sec, styles.vijay,]}>
                    <Text style={styles.child2}>Current Cost of Education{"\n"}
                        (Tuition fees, stay etc.)</Text>
                    <Text style={styles.childtext}>₹65,000</Text>
                </View>

                <Slider style={{ marginHorizontal: 20 }}
                    maximumValue={50}
                    minimumValue={5}
                    value={21}
                    thumbStyle={{ height: 20, width: 20 }}
                    trackStyle={{ height: 5, backgroundColor: 'transparent' }}
                />
                <View style={[styles.vijay_sec, styles.vijay,]}>
                    <Text style={styles.child2}>Year when this is required</Text>
                    <Text style={styles.childtext}>15Y</Text>
                </View>

                <Slider style={{ marginHorizontal: 20 }}
                    maximumValue={50}
                    minimumValue={5}
                    value={21}
                    thumbStyle={{ height: 20, width: 20 }}
                    trackStyle={{ height: 5, backgroundColor: 'transparent' }}
                />
                <View style={[styles.vijay_sec, styles.vijay,]}>
                    <Text style={styles.child2}>Current Investment Value (If Any)</Text>
                    <Text style={styles.childtext}>₹10,00,000</Text>
                </View>

                <Slider style={{ marginHorizontal: 20 }}
                    maximumValue={50}
                    minimumValue={5}
                    value={21}
                    thumbStyle={{ height: 20, width: 20 }}
                    trackStyle={{ height: 5, backgroundColor: 'transparent' }}
                />

                <Text style={styles.note}>Note : Assuming current inflation rate at 2.49% and
                    expected return rate on saving as 5%.</Text>



                <View style={styles.click_sec}>
                    <View style={styles.buttom_botton}>
                        <TouchableOpacity onPress={() => toggleTab('SIP')}>
                            <Text style={styles.sip_text}>SIP</Text>
                        </TouchableOpacity></View>
                    <View style={styles.buttom_botton2}>
                        <TouchableOpacity onPress={() => toggleTab('LUMPSUM')}>
                            <Text style={styles.sip_text2}>Lumpsum</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* image_sec end */}
                <View style={{ marginHorizontal: 20 }}>
                    <View style={{ borderWidth: 2, borderColor: colors.GRAY_LIGHT, }}></View>
                </View>

                {/* SIP */}
                {(selectTab == 'SIP') && (<View>
                    <View style={styles.calender}>
                        <View style={styles.date}>
                            <FontAwesome5 name={"calendar-alt"} size={30} color={colors.RED} />
                            <Text style={styles.datered}>2028</Text>
                        </View>
                        <View style={{ borderWidth: 1, marginLeft: 10, borderColor: colors.GRAY_LIGHT, }}></View>
                        <Text style={styles.datered}>₹27,38,816</Text>
                    </View>
                    <Text style={styles.requird}>Required amount to achieve your GOAL</Text>
                    <View style={{ borderWidth: 1, marginHorizontal: 20, marginVertical: 10, borderColor: colors.GRAY_LIGHT, }}></View>
                    <Text style={styles.rupeestext}>₹16,000</Text>
                    <Text style={styles.requird}>Monthly SIP required</Text>
                    <View style={styles.want}><Text style={styles.want_text}>I want to know total monthly amount to be invested to achieve my goal</Text></View>
                </View>)}

                {/* LUMPSUM */}
                {(selectTab == 'LUMPSUM') && (<View>
                    <View style={styles.calender}>
                        <View style={styles.date}>
                            <FontAwesome5 name={"calendar-alt"} size={30} color={colors.RED} />
                            <Text style={styles.datered}>2028</Text>
                        </View>
                        <View style={{ borderWidth: 1, marginLeft: 10, borderColor: colors.GRAY_LIGHT, }}></View>
                        <Text style={styles.datered}>₹27,38,816</Text>
                    </View>

                    <Text style={styles.requird}>Required amount to achieve your GOAL</Text>
                    <View style={{ borderWidth: 1, marginHorizontal: 20, marginVertical: 10, borderColor: colors.GRAY_LIGHT, }}></View>
                    <Text style={styles.rupeestext}>₹20,000</Text>
                    <Text style={styles.requird}>Lumpsum Amount</Text>
                </View>)}


                <View style={styles.fund_sec_top}>
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
                                source={require('../../../assets/idbi_img.png')}
                                style={styles.axisimg}
                            />
                            <View style={styles.management}>
                                <Text style={styles.axis}>Axis Asset Management Company Ltd</Text>
                                <Text style={styles.moderately}>Moderately High Risk</Text>
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
                                <Text style={styles.no}>Min Investment</Text>
                                <Text style={styles.no}>1000</Text>
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
                                source={require('../../../assets/Hybrid_img.png')}
                                style={styles.hybridimg}
                            />
                            <View style={styles.management}>
                                <Text style={styles.axis}>Axis Asset Management Company Ltd</Text>
                                <Text style={styles.moderately}>Moderately High Risk</Text>
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
                                <Text style={styles.no}>Min Investment</Text>
                                <Text style={styles.no}>1000</Text>
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
                            <Text style={styles.hybrid}>Large Cap</Text>
                        </View>
                    </View>

                    {/* axis_asset......4_sec */}

                    <View style={styles.axis_asset}>

                        <View style={styles.company}>

                            <Image
                                source={require('../../../assets/LargeCap_img.png')}
                                style={styles.axisimg}
                            />
                            <View style={styles.management}>
                                <Text style={styles.axis}>ICICI Prudential Asset Management…</Text>
                                <Text style={styles.moderately}>Moderately High Risk</Text>
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
                                <Text style={styles.no}>Min Investment</Text>
                                <Text style={styles.no}>1000</Text>
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

                    {/* multicap */}

                    <View style={styles.hybrid_sec}>
                        <View style={{ backgroundColor: "#EFEFEF", }}>
                            <Text style={styles.hybrid}>Multi Cap</Text>
                        </View>
                    </View>

                    {/* axis_asset......4_sec */}

                    <View style={styles.axis_asset}>

                        <View style={styles.company}>

                            <Image
                                source={require('../../../assets/MultiCap_img.png')}
                                style={styles.axisimg}
                            />
                            <View style={styles.management}>
                                <Text style={styles.axis}>Kotak Standard Multicap Fund</Text>
                                <Text style={styles.moderately}>Moderately High Risk</Text>
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
                                <Text style={styles.no}>Min Investment</Text>
                                <Text style={styles.no}>1000</Text>
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

                    {/* multicap end */}

                    <TouchableOpacity onPress={() => props.navigation.navigate('Plan3')}><Text style={styles.more_funds}>I would like to add more funds</Text></TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Plan4')} style={styles.botton_box}>
                        <Text style={styles.get_otp}>START GOAL</Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginTop: 10,
    },
    botton_box: {

        backgroundColor: colors.RED,
        marginHorizontal: 30,
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.DEEP_GRAY,
        paddingVertical: 15,
    },
    get_otp: {
        color: colors.WHITE,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
    },
    education: {
        flexDirection: "row",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: colors.GRAY_LIGHT,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 20,
        backgroundColor: colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,


    },
    education_sec: {
        width: '70%',
        paddingTop: 20,

    },
    goals_2: {
        height: 117,
        width: 117,

    },
    child: {
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 20,
        color: colors.DEEP_GRAY,
    },
    child_text: {
        fontSize: 20,
        color: colors.RED,
        paddingTop: 15,
        paddingLeft: 20,
        fontWeight: "bold",
    },
    planyour: {
        width: 414,
        height: 756
    },

    // vijay_sec

    vijay_sec: {
        flexDirection: "row",
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: colors.GREY_1,
        paddingVertical: 10,
    },
    child2: {
        fontSize: 15,
        fontWeight: "bold",
        color: colors.DEEP_GRAY
    },
    childtext: {
        position: "absolute",
        right: 0,
        fontSize: 15,
        fontWeight: "bold",
        paddingTop: 10,

    },
    vijay: {
        borderBottomWidth: 0,

    },
    note: {
        marginHorizontal: 20,
        fontWeight: "bold",
        fontSize: 15,
        color: colors.DEEP_GRAY,
        marginTop: 10,
    },

    click_sec: {
        flexDirection: "row",
        padding: 20,
    },
    buttom_botton: {
        width: "50%",
        borderWidth: 1,
        borderColor: colors.RED,
        borderRadius: 5,
        marginRight: 2,
        alignItems: "center",
        paddingVertical: 7,
    },
    buttom_botton2: {
        width: "50%",
        borderRadius: 5,
        backgroundColor: colors.RED,
        marginLeft: 2,
        alignItems: "center",
        paddingVertical: 7,
    },
    sip_text: {
        fontSize: 20,
        color: colors.RED,
        fontWeight: "bold",
    },
    sip_text2: {
        fontSize: 20,
        color: colors.WHITE,
        fontWeight: "bold",
    },

    // calender

    calender: {
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: 20,
        marginVertical: 20,
    },
    date: { flexDirection: "row", },
    datered: {
        color: colors.RED,
        fontSize: 20,
        paddingLeft: 10,
        paddingTop: 5,
        fontWeight: "bold",
    },
    requird: {
        textAlign: "center",
        fontSize: 15,
        color: colors.RED,
    },
    rupeestext: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.RED,
        paddingBottom: 20,
    },

    want: {
        backgroundColor: colors.LIGHT_WHITE,
        marginVertical: 20,

    },
    want_text: {
        textAlign: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
        fontSize: 16,
        fontWeight: "bold",
        color: colors.DEEP_GRAY,
    },
    hybridimg: {
        width: 39,
        height: 43,
    },
    fund_sec_top: {
        backgroundColor: colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        marginHorizontal: 10,
        paddingBottom: 40,
    },

});