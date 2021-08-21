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
import { colors } from '../../common/theme';
import { Ionicons, AntDesign, FontAwesome, FontAwesome5, } from 'react-native-vector-icons';
import { Image, Header, CheckBox, Overlay } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
const width = Dimensions.get('window').width;

const roted = [
    { images: require('../../../assets/axis_img.png'), text: 'Axis Asset Management Company', text2: 'Moderately High Risk', button: 'INVEST', mintext: 'Min. Investment', maxtext: '1000', aumtext: 'AUM', aumtext2: '2097 Cr', returntext: 'Ruturns', returntext2: '16.0%', },
    { images: require('../../../assets/adityabirlaimg.png'), text: 'Aditya Birla Sun Life AMC Limited', text2: 'Moderately High Risk', button: 'INVEST', mintext: 'Min. Investment', maxtext: '1000', aumtext: 'AUM', aumtext2: '2097 Cr', returntext: 'Ruturns', returntext2: '16.0%', },
    { images: require('../../../assets/barodaimg.png'), text: 'Baroda Asset Management India', text2: 'Moderately High Risk', button: 'INVEST', mintext: 'Min. Investment', maxtext: '1000', aumtext: 'AUM', aumtext2: '2097 Cr', returntext: 'Ruturns', returntext2: '16.0%', },
    { images: require('../../../assets/MidCap_img.png'), text: 'BNP Paribas Asset Management', text2: 'Moderately High Risk', button: 'INVEST', mintext: 'Min. Investment', maxtext: '1000', aumtext: 'AUM', aumtext2: '2097 Cr', returntext: 'Ruturns', returntext2: '16.0%', },
    { images: require('../../../assets/bioaxa.png'), text: 'BOI AXA Investment Managers Pr…', text2: 'Moderately High Risk', button: 'INVEST', mintext: 'Min. Investment', maxtext: '1000', aumtext: 'AUM', aumtext2: '2097 Cr', returntext: 'Ruturns', returntext2: '16.0%', },


]



export default function TopRoated2Screen(props) {
    // overlay start
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };
    // overlay end

    return (

        <View style={styles.container}>

            {/* Header_sec */}
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={30} color={colors.RED} /></TouchableOpacity>} backgroundColor={colors.PEACH}
                backgroundColor={colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
                rightComponent={<TouchableOpacity onPress={() => props.navigation.navigate('Toprated2')} style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={colors.RED} /></TouchableOpacity>}
            />

            {/* Invest Now sec */}
            <ScrollView>
                <View style={styles.Investnow_sec}>
                    <Text style={[styles.Debt, styles.Equity]}>Equity</Text>
                    <Text style={styles.Debt}>Debt</Text>
                    <Text style={styles.Debt}>Balanced</Text>
                    <Text style={styles.Debt}>Liquid</Text>
                    <Text style={styles.Debt}>Overnite</Text>
                    <Text style={styles.Debt}>Multicap</Text>
                    <Text style={styles.Debt}>Mid Cap</Text>
                </View>
                <View style={{ borderWidth: 1, borderColor: colors.GREY_1, }}></View>

                {/* Topratedfunds_sec */}

                <View style={styles.toprated}>
                    <Text style={styles.top}>Top Rated Funds</Text>
                    <View style={styles.returnsright}>
                        <View style={styles.returnsbox}>
                            <Text style={styles.return}>5Y Returns</Text>
                            <AntDesign name="caretdown" size={15} color="#C0392B" />
                        </View>
                        <View style={{ borderWidth: 1, borderColor: colors.RED, }}></View>
                    </View>
                </View>


                {/* Axis Asset Management Company */}

                {roted.map((item) => <View style={styles.axis_asset}>

                    <View style={styles.company}>
                        <View>
                            <Image
                                source={item.images}
                                style={styles.axisimg}
                            />
                        </View>
                        <View style={styles.axiswid}>
                            <Text style={styles.axis}>{item.text}</Text>
                            <Text style={styles.axis2}>{item.text2}</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={toggleOverlay} style={styles.botton_box}>
                                <Text style={styles.get_otp}>{item.button}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.value_sec}>
                        <View style={styles.mininvestment}>
                            <Text style={styles.min}>{item.mintext}</Text>
                            <Text style={styles.min}>{item.maxtext}</Text>
                        </View>
                        <View style={styles.mininvestment}>
                            <Text style={styles.min}>{item.aumtext}</Text>
                            <Text style={styles.min}>{item.aumtext2}</Text>
                        </View>
                        <View style={styles.mininvestment}>
                            <Text style={styles.min}>{item.returntext}</Text>
                            <Text style={styles.min}>{item.returntext2}</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: colors.GREY_1, marginTop: 10, }}>
                    </View>

                </View>
                )}

                <View style={styles.footer_sec}>
                    <View style={styles.rupees_sec}>
                        <Image
                            source={require('../../../assets/rupeees.png')}
                            style={styles.rupees}
                        />
                        <Text style={styles.rupees_text}>1M</Text>
                    </View>

                    <View style={styles.rupees_sec}>
                        <Image
                            source={require('../../../assets/rupeees.png')}
                            style={styles.rupees}
                        />
                        <Text style={styles.rupees_text}>1Y</Text>
                    </View>

                    <View style={styles.rupees_sec}>
                        <Image
                            source={require('../../../assets/rupeees.png')}
                            style={styles.rupees}
                        />
                        <Text style={styles.rupees_text}>3Y</Text>
                    </View>

                    <View style={styles.rupees_sec}>
                        <Image
                            source={require('../../../assets/rupees2.png')}
                            style={styles.rupees}
                        />
                        <Text style={styles.rupees_text}>5Y</Text>
                    </View>

                    <View style={styles.rupees_sec}>
                        <Image
                            source={require('../../../assets/rupeees.png')}
                            style={styles.rupees}
                        />
                        <Text style={styles.rupees_text}>ALL</Text>
                    </View>
                </View>
            </ScrollView>

            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <View style={styles.pop_top}>
                    <View style={styles.click_sec}>
                        <View style={styles.buttom_botton}>
                            <TouchableOpacity>
                                <Text style={styles.sip_text}>SIP</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttom_botton2}>
                            <TouchableOpacity>
                                <Text style={styles.sip_text2}>Lumpsum</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.amount_sec}>
                        <Text style={styles.amount_tex}>Amount</Text>
                        <View style={styles.bordersec}>
                            <TextInput style={styles.amount_tex2} />
                        </View>
                    </View>

                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity style={styles.buttom_botton2box}>
                            <Text style={styles.sip_text2}>Add To Cart</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Overlay>

        </View>




    );
}




// StyleSheet

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    Investnow_sec: {
        flexDirection: "row",
        marginLeft: 20,
        marginTop: 40,
    },
    Debt: {
        marginHorizontal: 5, fontSize: 13, color: "#696565", paddingBottom: 2,
    },

    Equity: { fontSize: 13, color: colors.RED, fontWeight: "bold", },

    toprated: { flexDirection: "row", marginBottom: 30, marginTop: 30, },
    top: {
        width: "73%",
        fontSize: 15,
        fontWeight: "bold",
        color: "#696565",
    },
    return: { fontSize: 15, },

    returnsbox: { flexDirection: "row", },

    //  Axis Asset Management Company 

    axis_asset: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    company: {
        flexDirection: "row",
    },
    axis: {
        marginLeft: 10,
        fontSize: 15,

    },
    axiswid: { width: "68%", },
    axis2: {
        marginLeft: 10,
        fontSize: 12,
        color: colors.DEEP_GRAY,
        paddingTop: 3,

    },
    axisimg: {
        height: 39,
        width: 39,
    },
    botton_box: {
        width: 80,
        backgroundColor: colors.RED,
        height: 20,
    },
    get_otp: {
        color: colors.WHITE,
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: "center",
        paddingTop: 4,
    },
    value_sec: {
        flexDirection: "row",
        marginLeft: 50,
    },
    mininvestment: {
        width: "33%",
        alignItems: "center",
    },
    min: {
        fontSize: 12,
    },
    footer_sec: {
        flexDirection: "row",
        marginHorizontal: 40,
        marginVertical: 30,
        justifyContent: "space-between"
    },
    rupees: {
        width: 40,
        height: 37,
    },
    rupees_sec: { alignItems: "center", },
    rupees_text: { fontSize: 12, },

    // popup
    click_sec: {
        flexDirection: "row",
        width: width - 50,
        justifyContent: 'space-between',
        padding: 20,
    },
    buttom_botton: {
        borderWidth: 1,
        borderColor: colors.RED,
        borderRadius: 5,
        marginRight: 2,
        alignItems: "center",
        width: "45%",
        paddingVertical: 10,
    },
    buttom_botton2: {
        borderRadius: 5,
        backgroundColor: colors.RED,
        marginLeft: 2,
        alignItems: "center",
        width: "45%",
        paddingVertical: 10,
    },
    sip_text: {
        fontSize: 18,
        color: colors.RED,
    },
    sip_text2: {
        fontSize: 18,
        color: colors.WHITE,
    },

    amount_sec: { alignItems: "center", },
    bordersec: {
        borderWidth: 1,
        borderColor: colors.GRAY_DEEP_1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginTop: 3,
    },
    buttom_botton2box: {
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: colors.RED,
        marginLeft: 2,
        alignItems: "center",
        paddingVertical: 5,
        marginVertical: 30,
        paddingHorizontal: 40,
        paddingVertical: 10


    },
    amount_tex2: {
        color: colors.DEEP_GRAY,
        width: 100
    },

});

























