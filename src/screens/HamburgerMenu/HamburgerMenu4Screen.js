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

export default function HamburgerMenu4Screen(props) {

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
                    <Text style={styles.transaction}>Transaction History</Text>
                </View>

                <View style={styles.main_box}>

                    <View style={styles.transaction_history}>

                        <View style={styles.fund_sec}>
                            <Text style={styles.Fund}>Fund</Text>
                            <Text style={styles.axis}>Axis Mutual Fund</Text>
                        </View>
                        <View style={styles.fund_sec}>
                            <Text style={styles.Fund}>Folio No</Text>

                        </View>
                        <View style={styles.fund_sec}>
                            <Text style={styles.Fund}>Scheme Name</Text>
                            <Text style={styles.axis}>TAGPGGR / Axis Treasury Advantage</Text>
                        </View>
                        <View style={styles.fund_sec}>
                            <Text style={styles.Fund}>Trxn Type</Text>
                            <Text style={styles.axis}>Switch</Text>
                        </View>
                        <View style={styles.fund_sec}>
                            <Text style={styles.Fund}>Trxn Status</Text>
                            <Text style={styles.axis}>Pending Authorization</Text>
                        </View>
                        <View style={styles.fund_sec}>
                            <Text style={styles.Fund}>Amount</Text>
                            <Text style={styles.axis}>1000</Text>
                        </View>
                        <View style={styles.fund_sec}>
                            <Text style={styles.Fund}>Unit</Text>

                        </View>
                        <View style={styles.fund_sec}>
                            <Text style={styles.Fund}>Date</Text>
                            <Text style={styles.axis}>09-JUL-2021</Text>
                        </View>





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
    main_box: {
        backgroundColor: colors.GREY_1
    },
    transaction_history: {
        backgroundColor: colors.WHITE,
        margin: 15,
        padding: 10,
        
    },
    fund_sec: {
        flexDirection: "row",
        marginBottom: 5,
    },
    Fund: {
        width: "40%",
        fontSize: 10,
        fontWeight: "bold",
    },
    axis: {
        fontSize: 10,
        fontWeight: "bold",
        color: colors.DEEP_GRAY,
    },
    






});