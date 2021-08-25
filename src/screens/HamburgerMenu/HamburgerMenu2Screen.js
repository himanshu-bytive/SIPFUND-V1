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
import { Header, Overlay,CheckBox } from 'react-native-elements';
import Investments from '../../components/Investments'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const mutualfund = [
    { title: 'Axis Treasury Advantage Fund - Growth',text:'Folio',number:'91075739541',text1:'Units',number1:'9.211',text2:'Value',number2:'22372.87',text3:'Switch To',text4:'Select Scheme',button:'ADD', },
    { title: 'Axis Treasury Advantage Fund - Growth',text:'Folio',number:'91075739541',text1:'Units',number1:'9.211',text2:'Value',number2:'22372.87',text3:'Switch To',text4:'Select Scheme',button:'ADD', },
]

export default function HamburgerMenu2Screen(props) {

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <View style={styles.container}>
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={30} color={colors.RED} /></TouchableOpacity>}
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
                    <Text style={styles.transaction}>Switch</Text>

                    <View style={styles.tab_sec}>

                        <View style={styles.tab1}>
                            <Text style={styles.switch}>SWITCH</Text>

                        </View>

                        <View style={styles.tab1}>
                            <Text style={styles.switch}>EXTERNAL SWITCH</Text>
                        </View>

                    </View>
                </View>


                    {/* Axis Mutual Fund_sec... */}

                    {mutualfund.map((item) =>  <View style={styles.fund_sec}>

                        <View style={styles.axis_sec}>
                            <Text style={styles.axis}>Axis Mutual Fund</Text>

                        </View>

                            
                        <View style={styles.growth_sec}>
                            <Text style={styles.axis_treasury}>{item.title}</Text>

                            <View style={styles.value_sec}>
                                <View style={styles.folio_sec}>

                                    <Text style={styles.folio}>{item.text}</Text>
                                    <Text style={styles.folio}>{item.number}</Text>
                                </View>

                                <View style={styles.folio_sec}>

                                    <Text style={styles.folio}>{item.text1}</Text>
                                    <Text style={styles.folio}>{item.number1}</Text>
                                </View>

                                <View style={styles.folio_sec}>
                                    <Text style={styles.folio}>{item.text2}</Text>
                                    <Text style={styles.folio}>{item.number2}</Text>

                                </View>
                            </View>

                            <Text style={styles.folio}>{item.text3}</Text>
                            <View style={styles.scheme_sec}>

                                <Text style={styles.select}>{item.text4}</Text>
                                <AntDesign name="right" size={15} />

                            </View>

                            <View style={styles.units_sec}>
                            <CheckBox title='Amount' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' />
                            <CheckBox title='All Units' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' />

                            </View>

                            <View style={styles.input_box}>

                                <TextInput style={styles.inputsec}
                                    placeholder="Enter Amount"
                                />

                                <TouchableOpacity style={styles.botton_box}>
                                    <Text style={styles.get_otp}>{item.button}</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        



                    </View>)}

        
















            </ScrollView>
            <TouchableOpacity style={styles.botton_box2}>
                            <Text style={styles.proceed}>PROCED</Text>
                        </TouchableOpacity>


        </View>
    );
}


const styles = StyleSheet.create({
    container: { flex: 1,
        backgroundColor:'#D3D6DB' },

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

    fund_sec: {
        backgroundColor: colors.WHITE,
       marginHorizontal:15,
       marginTop:10,

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
        marginBottom:20,
        marginHorizontal:15,
    },
    proceed: {
        color: colors.WHITE,
        fontSize: 16,
        textAlign: "center",
    },
 


});