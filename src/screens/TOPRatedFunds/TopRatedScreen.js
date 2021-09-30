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
import { connect } from 'react-redux'
import { Styles, Config, Colors, FormValidate } from '../../common'
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

function TopRatedScreen(props) {
    const { isFetching, token, getAllcategorys, getDetails, category, details } = props;

    useEffect(() => {
        if (token) {
            getAllcategorys(token)
        }
    }, [token]);
    useEffect(() => {
        if (details) {
            console.log(details)
        }
    }, [details]);

    const [selectCat, setSelectCat] = useState(null);
    const [selectSubCat, setSelectSubCat] = useState(null);
    const feachDetails = async (item) => {
        setSelectSubCat(item)
        let date = new Date()
        let params = {
            "Category": selectCat,
            "Month": date.toLocaleString('en-us', { month: 'short' }),
            "Year": date.getFullYear(),
            "Fund_Type": item
        }
        getDetails(params, token);
    }

    // tab start
    const [selectTab, setSelectTab] = useState('SIP');
    const toggleTab = (value) => {
        setSelectTab(value);
    };
    // tab end

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
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={30} color={Colors.RED} /></TouchableOpacity>} backgroundColor={Colors.PEACH}
                backgroundColor={Colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
                rightComponent={<TouchableOpacity onPress={() => props.navigation.navigate('Toprated2')} style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={Colors.RED} /></TouchableOpacity>}
            />
            {isFetching && (<View style={Styles.loading}>
                <ActivityIndicator color={Colors.BLACK} size='large' />
            </View>)}

            {/* Invest Now sec */}
            <ScrollView>
                <View style={{ borderWidth: 0.5, borderColor: Colors.GREY_1, }}></View>
                <ScrollView horizontal={true} style={styles.Investnow_sec}>
                    {category && (Object.keys(category[0])).map((item, key) => <TouchableOpacity key={key} onPress={() => setSelectCat(item)}><Text style={(item == selectCat) ? styles.Equity : styles.Debt}>{item}</Text></TouchableOpacity>)}
                </ScrollView>
                <View style={{ borderWidth: 0.5, borderColor: Colors.GREY_1, }}></View>
                <ScrollView horizontal={true} style={styles.Investnow_sec}>
                    {(category && category[0] && selectCat) ? (category[0][selectCat]).map((item, key) => <TouchableOpacity key={key} onPress={() => feachDetails(item)}><Text style={(item == selectSubCat) ? styles.Equity : styles.Debt}>{item}</Text></TouchableOpacity>) : null}
                </ScrollView>
                <View style={{ borderWidth: 0.5, borderColor: Colors.GREY_1, }}></View>

                {/* Topratedfunds_sec */}
                <View style={styles.toprated}>
                    <Text style={styles.top}>Top Rated Funds</Text>
                    <View style={styles.returnsright}>
                        <View style={styles.returnsbox}>
                            <Text style={styles.return}>5Y Returns</Text>
                            <AntDesign name="caretdown" size={15} color="#C0392B" />
                        </View>
                        <View style={{ borderWidth: 1, borderColor: Colors.RED, }}></View>
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
                    <View style={{ borderWidth: 1, borderColor: Colors.GREY_1, marginTop: 10, }}>
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
                        <View style={(selectTab == 'SIP') ? styles.buttom_botton2 : styles.buttom_botton}>
                            <TouchableOpacity onPress={() => toggleTab('SIP')}>
                                <Text style={(selectTab == 'SIP') ? styles.sip_text2 : styles.sip_text}>SIP</Text>
                            </TouchableOpacity></View>
                        <View style={(selectTab == 'LUMPSUM') ? styles.buttom_botton2 : styles.buttom_botton}>
                            <TouchableOpacity onPress={() => toggleTab('LUMPSUM')}>
                                <Text style={(selectTab == 'LUMPSUM') ? styles.sip_text2 : styles.sip_text}>Lumpsum</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {(selectTab == 'SIP') && (<View>
                        <View style={styles.amount_sec}>
                            <Text style={styles.amount_tex}>Amount</Text>
                            <View style={styles.bordersec}>
                                <TextInput placeholder='5000' style={styles.amount_tex2} />
                            </View>
                        </View>

                        <View style={{ alignItems: "center" }}>
                            <TouchableOpacity style={styles.buttom_botton2box}>
                                <Text style={styles.sip_text2}>Add To Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>)}

                    {(selectTab == 'LUMPSUM') && (<View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 50 }}>
                            <View style={styles.amount_sec}>
                                <Text style={styles.amount_tex}>Amount</Text>
                                <View style={styles.bordersec}>
                                    <TextInput placeholder='5000' style={styles.amount_tex2} />
                                </View>
                            </View>
                            <View style={styles.amount_sec}>
                                <Text style={styles.amount_tex}>Date</Text>
                                <View style={styles.bordersec}>
                                    <TextInput keyboardType='numeric' placeholder='5' style={[styles.amount_tex2, { width: 50 }]} />
                                </View>
                            </View>
                        </View>

                        <View style={{ alignItems: "center" }}>
                            <TouchableOpacity style={styles.buttom_botton2box}>
                                <Text style={styles.sip_text2}>Add To Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>)}


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
        marginHorizontal: 10,
        paddingBottom: 5,
        marginTop: 10,
    },
    Debt: { marginHorizontal: 5, fontSize: 13, color: "#696565", fontWeight: "bold" },
    Equity: { marginHorizontal: 5, fontSize: 13, color: Colors.RED, fontWeight: "bold" },

    toprated: { flexDirection: "row", marginLeft: 10, marginBottom: 30, marginTop: 30, },
    top: {
        width: "73%",
        fontSize: 15,
        fontWeight: "bold",
        color: "#696565",
    },
    return: { fontSize: 15, },

    returnsbox: { flexDirection: "row", },

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
        color: Colors.DEEP_GRAY,
        paddingTop: 3,

    },
    axisimg: {
        height: 39,
        width: 39,
    },
    botton_box: {
        width: 80,
        backgroundColor: Colors.RED,
        height: 20,
    },
    get_otp: {
        color: Colors.WHITE,
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

    // tab
    pop_top: { marginHorizontal: 30, },
    click_sec: {
        flexDirection: "row",
        paddingVertical: 20,

    },
    buttom_botton: {
        width: "45%",
        borderWidth: 1,
        borderColor: Colors.RED,
        borderRadius: 5,
        marginHorizontal: 2,
        alignItems: "center",

    },
    buttom_botton2: {
        width: "45%",
        borderRadius: 5,
        backgroundColor: Colors.RED,
        marginHorizontal: 2,
        alignItems: "center",

    },
    sip_text: {
        fontSize: 20,
        color: Colors.RED,
        fontWeight: "bold",
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    sip_text2: {
        fontSize: 20,
        color: Colors.WHITE,
        fontWeight: "bold",
        paddingVertical: 12,
        paddingHorizontal: 20,
    },




    amount_sec: { alignItems: "center", },
    bordersec: {
        borderWidth: 1,
        borderColor: Colors.GRAY_DEEP_1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginTop: 3,
    },
    buttom_botton2box: {
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: Colors.RED,
        marginLeft: 2,
        alignItems: "center",

        marginVertical: 30,
        paddingHorizontal: 30,

    },
    amount_tex2: {
        color: Colors.DEEP_GRAY,
        width: 100,
        textAlign: "center",
        fontSize: 18,
    },
    amount_tex: { fontSize: 18, },

});
const mapStateToProps = (state) => ({
    token: state.auth.token,
    isFetching: state.toprated.isFetching,
    category: state.toprated.category,
    details: state.toprated.details,
})

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { TopRatedActions } = require('../../store/TopRatedFundRedux')
    return {
        ...stateProps,
        ...ownProps,
        getAllcategorys: (token) => { TopRatedActions.getAllcategorys(dispatch, token) },
        getDetails: (params, token) => { TopRatedActions.getDetails(dispatch, params, token) },
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(TopRatedScreen)