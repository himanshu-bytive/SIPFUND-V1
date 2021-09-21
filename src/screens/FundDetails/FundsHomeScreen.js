import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    Button,
    ScrollView,
    View,
    TouchableOpacity,
    Text,
} from "react-native";
import { connect } from 'react-redux'
import { Styles, Config, Colors, FormValidate } from '../../common'
import { MaterialIcons, AntDesign, Entypo, FontAwesome5, FontAwesome, Foundation } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { VictoryChartCode } from '../../components'

const data = [
    { x: 0, y: 0 },
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 3, y: 4 },
    { x: 4, y: 3 },
    { x: 5, y: 5 }
];

const investment = [
    { price: 1000, min: 'Min Investment' },
    { price: '2700 Cr', min: 'AUM' },
    { price: '60.28', min: 'Lumpsum' },
]

const rupees = [
    { text: '1M' },
    { text: '1Y' },
    { text: '2Y' },
    { text: '3Y' },
    { text: '4Y' },
    { text: '5Y' },
    { text: '6Y' },
    { text: 'ALL' },
]

function FundsHomeScreen(props) {
    const [selectTab, setSelectTab] = useState('1M');
    const toggleTab = (value) => {
        setSelectTab(value);
    };
    return (
        <View style={styles.container}>
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={30} color={Colors.RED} /></TouchableOpacity>}
                containerStyle={styles.header}
                backgroundColor={Colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
                rightComponent={<View style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={Colors.RED} /></View>}
            />
            <ScrollView style={styles.containerScroll}>

                <View style={styles.management_company}>
                    <Image
                        source={require('../../../assets/axis_img.png')}
                        style={styles.axis_img}
                    />

                    <TouchableOpacity onPress={() => props.navigation.navigate('FundsDetails1')}>
                        <View style={styles.axis}>
                            <Text style={styles.axis_asset}>Axis Asset Management Company</Text>
                            <Text style={styles.midcap}>Midcap Diversified </Text>
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={{ padding: 20 }}>

                    <View style={styles.fund_returns}>
                        <Text style={styles.fund}>Fund Returns</Text>
                        <View style={styles.since_inception}>
                            <Text style={styles.number}>13.5%</Text>
                            <Text style={styles.since}>Since Inception</Text>

                        </View>
                    </View>
                    <VictoryChartCode data={data} />
                    <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, }}></View>

                    {/* imges_sec */}
                    <View style={styles.footer_sec}>
                        {rupees.map((item, key) => <TouchableOpacity onPress={() => toggleTab(item.text)} key={key} style={styles.rupees_sec}>
                            <Image
                                source={(selectTab == item.text) ? require('../../../assets/layer_img2.png') : require('../../../assets/layer_img.png')}
                                style={styles.rupees}
                            />
                            <Text style={styles.rupees_text}>{item.text}</Text>
                        </TouchableOpacity>)}
                    </View>

                    {/* Min Investment_sec */}
                    <View style={styles.investment_sec}>
                        {investment.map((item, key) => <View key={key} style={styles.investment}>
                            <Text style={styles.price}>{item.price}</Text>
                            <Text style={styles.min}>{item.min}</Text>
                        </View>)}
                    </View>
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
        borderBottomColor: Colors.BLACK,
        borderBottomWidth: 1,
    },
    axis_img: {
        height: 53,
        width: 53,
        marginLeft: 20,
    },
    management_company: {

        flexDirection: "row",
        backgroundColor: Colors.WHITE,
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
        color: Colors.DEEP_GRAY,
    },

    fund_returns: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    fund: {
        fontSize: 15,
    },
    number: {
        fontSize: 15,
        textAlign: "right",
        color: Colors.RED,
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
        color: Colors.RED,
        marginLeft: 33,
        fontSize: 12,

    },

    investment_sec: {
        flexDirection: "row",
        marginTop: 30,
        justifyContent: "space-between",
        marginHorizontal: 10,
    },
    investment: {

        alignItems: "center",
    },
    price: {
        color: Colors.RED,
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
        color: Colors.RED,
    },
    footer_sec: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 30,
        justifyContent: "space-between"
    },
    rupees: {
        width: 30,
        height: 30,
    },
    rupees_sec: { alignItems: "center", },
    rupees_text: { fontSize: 12, },
});

const mapStateToProps = (state) => ({
    ticket: state.auth.ticket,
    users: state.auth.users,
})

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { AuthActions } = require('../../store/AuthRedux')
    return {
        ...stateProps,
        ...ownProps,
        logOut: () => { AuthActions.logOut(dispatch) },
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(FundsHomeScreen)