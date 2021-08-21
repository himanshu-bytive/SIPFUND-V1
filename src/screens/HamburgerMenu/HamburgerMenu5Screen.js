import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    Button,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    Text,
    Dimensions,
    KeyboardAvoidingView,
    TextInput,
    ActivityIndicator,
    ScrollView,
} from "react-native";
import { colors } from '../../common/theme';
import { Entypo, AntDesign } from 'react-native-vector-icons';
import { Header, Overlay } from 'react-native-elements';
import Investments from '../../components/Investments'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const investmentData = [
    { title: 'Long Term', image: require('../../../assets/term1.png') },
    { title: 'Tax Saving Funds', image: require('../../../assets/term2.png') },
    { title: 'Better Than', image: require('../../../assets/term3.png') },
    { title: 'Tax Saving Funds', image: require('../../../assets/term4.png') },
    { title: 'Better Than FD', image: require('../../../assets/term5.png') },
    { title: 'Aggressive Funds', image: require('../../../assets/term6.png') },
]

export default function HamburgerMenu5Screen(props) {

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <View style={styles.container}>
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={30} color={colors.RED} /></TouchableOpacity>}
                rightComponent={<TouchableOpacity onPress={() => props.navigation.navigate('Toprated')} style={{ marginTop: 20 }}><AntDesign name={"shoppingcart"} size={30} color={colors.RED} /></TouchableOpacity>}
                backgroundColor={colors.LIGHT_WHITE}
                containerStyle={styles.header}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
            />
            <ScrollView style={styles.containerScroll}>

                <View style={styles.switch_sec}>
                    <Text style={styles.transaction}>Holdings</Text>

                    <View style={styles.tab_sec}>

                        <View style={styles.tab1}>
                            <Text style={styles.switch}>HOLDINGS</Text>

                        </View>

                        <View style={styles.tab1}>
                            <Text style={styles.switch}>EXTERNAL HOLDINGS</Text>
                        </View>

                    </View>
                </View>

                <View style={styles.main_box}>

                    {/* Axis Mutual Fund_sec... */}

                    <View style={styles.fund_sec}>

                        <View style={styles.axis_sec}>
                            <Text style={styles.axis}>Axis Mutual Fund</Text>

                        </View>

                        <View style={styles.growth_sec}>
                            <Text style={styles.axis_treasury}>Axis Treasury Advantage Fund - Growth</Text>

                            <View style={styles.value_sec}>
                                <View style={styles.folio_sec}>

                                    <Text style={styles.folio}>Folio</Text>
                                    <Text style={styles.folio}>91075739541</Text>
                                </View>

                                <View style={styles.folio_sec}>

                                    <Text style={styles.folio}>Units</Text>
                                    <Text style={styles.folio}>9.211</Text>
                                </View>

                                <View style={styles.folio_sec}>
                                    <Text style={styles.folio}>Value</Text>
                                    <Text style={styles.folio}>22372.87</Text>

                                </View>
                            </View>

                            <Text style={styles.folio}>Switch To</Text>
                            <View style={styles.scheme_sec}>

                                <Text style={styles.select}>Select Scheme</Text>
                                <AntDesign name="right" size={15} />

                            </View>

                            <View style={styles.units_sec}>

                                <Text style={styles.amount}>Amount</Text>
                                <Text style={styles.amount}>All Units</Text>
                            </View>

                            <View style={styles.input_box}>

                                <TextInput style={styles.inputsec}
                                    placeholder="Enter Amount"
                                />

                                <TouchableOpacity style={styles.botton_box}>
                                    <Text style={styles.get_otp}>ADD</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <TouchableOpacity style={styles.botton_box2}>
                            <Text style={styles.proceed}>PROCED</Text>
                        </TouchableOpacity>



                    </View>

                </View>
















            </ScrollView>



        </View>
    );
}


const styles = StyleSheet.create({
    container: { flex: 1, },

    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    switch_sec: {
        backgroundColor: colors.RED,
    },
    transaction: {
        fontSize: 21,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20,
        color: colors.WHITE,
    },
    tab_sec: {
        flexDirection: "row",
        marginVertical: 10,
    },
    tab1: {
        width: "50%",
        alignItems: "center",
    },
    switch: {
        color: colors.WHITE,
        fontSize: 13,
    },
    main_box: {
        backgroundColor: colors.GREY_1,

    },
    fund_sec: {
        backgroundColor: colors.WHITE,
        margin: 15,

    },
    axis_sec: {
        backgroundColor: "#838793",
    },
    axis: {
        fontSize: 16,
        color: colors.WHITE,
        marginLeft: 10,
        marginVertical: 10,
    },
    growth_sec: {
        padding: 10,
    },
    axis_treasury: {
        fontSize: 13,
        marginBottom: 10,
    },
    value_sec: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
    },
    folio: {
        fontSize: 15,
        color: colors.DEEP_GRAY,
    },
    scheme_sec: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    select: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.DEEP_GRAY,
    },
    units_sec: {
        flexDirection: "row",
        width: "50%",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    amount: {
        fontSize: 12,
        color: colors.DEEP_GRAY,
    },
    input_box: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
    },
    inputsec: {
        borderBottomWidth: 1,
        borderColor: colors.DEEP_GRAY,
        width: '60%',
        fontSize: 16,
    },
    botton_box: {
        width: "30%",
        backgroundColor: colors.RED,
        paddingVertical: 10,
    },
    get_otp: {
        color: colors.WHITE,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: "center",
    },
    botton_box2: {
        backgroundColor: colors.RED,
        paddingVertical: 10,
    },
    proceed: {
        color: colors.WHITE,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: "center",
    },
    // history_sec: {
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     marginVertical: 15,
    //     marginHorizontal: 10,
    // },
    // Switch_sec: {
    //     alignItems: "center",

    // },
    // box: {
    //     backgroundColor: colors.WHITE,
    //     marginHorizontal: 10,
    //     padding: 30,
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 2,

    //     },
    //     shadowOpacity: 0.20,
    //     shadowRadius: 2.62,
    //     elevation: 4,
    // },
    // fundsmg: {
    //     height: 32,
    //     width: 36,
    // },
    // holdings_sec: {
    //     flexDirection: "row",
    //     marginHorizontal: 70,

    //     marginVertical: 40,
    //     justifyContent: "space-between",
    // },



});