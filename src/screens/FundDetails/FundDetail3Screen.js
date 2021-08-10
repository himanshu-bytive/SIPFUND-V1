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
    ActivityIndicator,


} from "react-native";
import { colors } from '../../common/theme';
import { Ionicons, AntDesign, MaterialIcons, Feather, Entypo, FontAwesome, FontAwesome5, } from 'react-native-vector-icons';
import { Image, Header, ListItem, Overlay, Slider } from 'react-native-elements';
import ReturnsCalculator from './ReturnsCalculator'
import Returns from './Returns'
import Top10Holdings from './Top10Holdings'
import MinimumInvestments from './MinimumInvestments'
import PerformanceHistory from './PerformanceHistory'
import PortfolioSummary from './PortfolioSummary'

export default function FundDetail3Screen(props) {

    const [fundType, setFundType] = useState([
        { text: 'Returns Calculator', show: true },
        { text: 'Returns', show: false },
        { text: 'Top 10 Holdings', show: false },
        { text: 'Minimum Investments', show: false },
        { text: 'Performance History', show: false },
        { text: 'Portfolio Summary', show: false },
        { text: 'Risk & Rating', show: false },
        { text: 'Expense Ratio - Exit Load - Tax', show: false },
        { text: 'Fund Managers', show: false },
    ]);

    const toggleFundType = (key) => {
        let values = JSON.parse(JSON.stringify(fundType))
        values[key].show = !values[key].show
        setFundType(values);
    };

    return (
        <View style={styles.container}>
            {/* header  */}
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={30} color={colors.RED} /></TouchableOpacity>} backgroundColor={colors.PEACH}
                backgroundColor={colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}

                rightComponent={<View style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={colors.RED} /></View>}
            />
            <ScrollView style={styles.containerScroll}>
                <View style={styles.contain_box}>

                    {/* loop start */}
                    {fundType.map((item, key) => <View key={key}>
                        <View style={styles.bottom_sec}>
                            <View style={styles.holding}>
                                <View><Text style={styles.holding_text}>{item.text} {(item.text === 'Portfolio Summary') && (<Text style={styles.current}>(Current Date)</Text>)} </Text></View>
                                <View style={styles.holding_icon}><TouchableOpacity onPress={() => toggleFundType(key)}><AntDesign name={item.show ? "up" : "down"} size={20} color={colors.RED} /></TouchableOpacity></View>
                            </View>
                        </View>
                        {item.show && (<View>
                            {(item.text === 'Returns Calculator') && (<ReturnsCalculator />)}
                            {(item.text === 'Returns') && (<Returns />)}
                            {(item.text === 'Top 10 Holdings') && (<Top10Holdings />)}
                            {(item.text === 'Minimum Investments') && (<MinimumInvestments />)}
                            {(item.text === 'Performance History') && (<PerformanceHistory />)}
                            {(item.text === 'Portfolio Summary') && (<PortfolioSummary />)}
                        </View>)}
                    </View>)}


                    {/* loop end */}

                    <View style={styles.submit}><TouchableOpacity><Text style={styles.submit_text}>SELECT FUND</Text></TouchableOpacity></View>
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
    contain_box: { margin: 20, },
    bottom_sec: { paddingVertical: 10, },
    holding: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: colors.RED,
        paddingVertical: 5,

    },
    holding_text: {
        fontSize: 18,
        color: colors.RED,
    },
    holding_icon: {
        position: 'absolute',
        right: 0,
        marginTop: 5,
    },

    submit: {
        backgroundColor: colors.LIGHT_RED,
        alignItems: "center",
        borderRadius: 5,
    },
    submit_text: {
        fontSize: 25,
        color: colors.WHITE,
        paddingVertical: 10,
    },

    get_otp: {
        color: colors.WHITE,
        fontSize: 16,
        marginRight: 5,
        textAlign: "center",
    },
    tax_left: {
        flexDirection: "row",
        width: '66%'
    },
    tax_left_text: {
        fontSize: 18,
        fontWeight: "bold",
        paddingTop: 10,
    },
    mainbox: {
        margin: 5,
        width: '100%',
        borderWidth: 1,
        borderColor: colors.GRAY_LIGHT,
        borderRadius: 20,
    },
    check: {
        fontSize: 15,
        marginLeft: 30,
        marginTop: 10,
    },
    click_box: {
        flexDirection: "row",
        marginHorizontal: 20,
    },
    current: { fontSize: 10, },
    botton_box: {
        width: "50%",
        backgroundColor: colors.RED,
        paddingVertical: 10,
        marginTop: 20,
        marginBottom: 20,

        borderColor: colors.DEEP_GRAY,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    get_otp: {
        color: colors.WHITE,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
    },
    botton_box2: {
        width: "50%",
        borderWidth: 1,
        paddingVertical: 10,
        marginTop: 20,
        marginBottom: 20,

        borderColor: colors.DEEP_GRAY,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    get_otp2: {
        color: colors.RED,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
    },
    amount_box: {
        flexDirection: "row",
        marginVertical: 10,
    },
    amount: {
        fontSize: 18,
        marginLeft: 20,
        width: "73%",
    },
    price: {
        fontSize: 18,
        color: colors.RED,

    },
    back_sec: {
        flexDirection: "row",
    },
    back1: {
        width: "20%",
        marginHorizontal: 30,

    },
    back_year: {
        fontSize: 18,
        color: colors.RED,
    },
    back_year2: {
        fontSize: 18,

    },
    rs: {
        fontSize: 20,
        color: colors.RED,
        marginTop: 10,
        marginLeft: 15,
    },

    with: {
        fontSize: 15,
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 20,
    },


});