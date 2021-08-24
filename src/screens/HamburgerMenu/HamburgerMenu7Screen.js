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

export default function HamburgerMenu7Screen(props) {

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
                            <Text style={styles.switch}>LUMPSUM</Text>

                        </View>

                        <View style={styles.tab1}>
                            <Text style={styles.switch}>SIP</Text>
                        </View>

                    </View>
                </View>
                <View style={styles.main_box}>
                    <View style={styles.select_amc}>
                        <Text style={styles.select}>Select AMC</Text>
                        <View style={styles.amc}>
                            <Text style={styles.select2}>Axis Mutual Fund</Text>
                            <AntDesign name="right" size={15} />
                        </View>

                    </View>

                    <View style={styles.select_amc}>
                        <Text style={styles.select}>Select Scheme</Text>
                        <View style={styles.amc}>
                            <Text style={styles.select2}>Axis Bluechip Fund</Text>
                            <AntDesign name="right" size={15} />
                        </View>

                    </View>

                    <View style={styles.select_amc}>
                        <Text style={styles.select}>Transation Date</Text>
                        <View style={styles.amc}>
                            <Text style={styles.select2}>09-Jul-2021</Text>
                            <AntDesign name="right" size={15} />
                        </View>

                    </View>

                    <View>
                        <Text style={styles.folio_no}>Folio No</Text>
                        <TextInput style={styles.top_inpuut} placeholder="12345" style={{ borderBottomWidth: 1, fontSize: 14, borderColor: colors.DEEP_GRAY, }} />
                    </View>
                    <View>
                        <Text style={styles.amount}>Amount INR</Text>
                        <TextInput style={styles.top_inpuut} placeholder="10000" style={{ borderBottomWidth: 1, fontSize: 14, borderColor: colors.RED,}} />
                    </View>

                    <TouchableOpacity style={styles.botton_box}>
                        <Text style={styles.proceed}>Add To My Holding</Text>
                    </TouchableOpacity>
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

        padding: 15,
    },
    select_amc: {
        borderBottomWidth: 1,
        borderBottomColor: colors.GREY_1,
    },
    select: {
        fontSize: 13,
        marginVertical: 10,
        color: colors.DEEP_GRAY,
    },
    amc: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 15,
    },
    select2: {
        fontSize: 13,
    },
    folio_no: {
        fontSize: 11,
        marginVertical: 10,
    },
    amount: {
        fontSize: 11,
        color: colors.RED,
        marginVertical: 10,
    },
    botton_box: {
        backgroundColor: colors.RED,
        paddingVertical: 15,
        marginTop: 20,
    },
    proceed: {
        color: colors.WHITE,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: "center",
    },
});