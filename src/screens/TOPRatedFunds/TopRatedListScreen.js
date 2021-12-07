import React, { useState, useRef, useEffect, useContext } from "react";
import { StyleSheet, Button, View, ImageBackground, TouchableOpacity, Text, Dimensions, KeyboardAvoidingView, TextInput, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { Styles, Config, Colors, FormValidate } from "../../common";
import { TopRatedFundType } from "../../components";
import { Ionicons, AntDesign, Entypo, FontAwesome5 } from "react-native-vector-icons";
import { Image, Header, CheckBox } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

function TopRatedListScreen(props) {
    const { token, cartDetails, getCartDetails } = props;

    const [cart, setCart] = useState([]);
    const [selectTab, setSelectTab] = useState("SIP");
    const toggleTab = (value) => {
        setSelectTab(value);
    };

    useEffect(() => {
        getCartDetails(token);
    }, []);

    useEffect(() => {
        if (cartDetails) {
            console.log("this", cartDetails.cartDetails);
            setCart(cartDetails.cartDetails);
        }
    }, [cartDetails]);

    return (
        <View style={styles.container}>
            <Header
                leftComponent={
                    <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}>
                        <AntDesign name={"arrowleft"} size={40} color={Colors.RED} />
                    </TouchableOpacity>
                }
                containerStyle={styles.header}
                backgroundColor={Colors.LIGHT_WHITE}
                centerComponent={<Image source={require("../../../assets/icon.png")} style={styles.logimg} />}
                rightComponent={
                    <View style={{ marginTop: 20, marginRight: 10 }}>
                        <AntDesign name={"shoppingcart"} size={40} color={Colors.RED} />
                    </View>
                }
            />

            {/* SIP_sec */}

            <View style={styles.sip_sec}>
                <TouchableOpacity onPress={() => toggleTab("SIP")} style={selectTab == "SIP" ? styles.sip_left : styles.lumpsum}>
                    <Text style={selectTab == "SIP" ? styles.sip : styles.lump}>SIP</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleTab("LUMPSUM")} style={selectTab == "LUMPSUM" ? styles.sip_left : styles.lumpsum}>
                    <Text style={selectTab == "LUMPSUM" ? styles.sip : styles.lump}>LUMPSUM</Text>
                </TouchableOpacity>
            </View>

            {/* My Selected Funds_sec */}
            <ScrollView style={styles.containerScroll}>
                <View style={styles.fund_sec}>
                    <Text style={styles.selected}>My Selected Funds</Text>
                    <Text style={styles.month}>SIP Per Month</Text>
                </View>

                {/* Monthly Investment_sec */}

                <View style={styles.fund_sec}>
                    <Text style={styles.investment}>Monthly Investment</Text>
                    <Text style={styles.price}>₹ 16,000</Text>
                </View>

                {selectTab === "SIP" && cart.filter((item) => item.trxn_nature === "S").map((item, key) => <TopRatedFundType key={key} title={item.product_name} sip={item.sip_amount} image={item.image_path} onPress={() => props.navigation.navigate("FundsDetails")} />)}
                {selectTab === "LUMPSUM" && cart.filter((item) => item.trxn_nature === "N").map((item, key) => <TopRatedFundType key={key} title={item.product_name} sip={item.sip_amount} image={item.image_path} onPress={() => props.navigation.navigate("FundsDetails")} />)}
            </ScrollView>
            <TouchableOpacity onPress={() => props.navigation.navigate("TopRatedSearch")}>
                <Text style={styles.more_funds}>I would like to add more funds</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("TopRatedSubmit")} style={styles.botton_box}>
                <Text style={styles.get_otp}>NEXT</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
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
    containerScroll: {
        width: "100%",
    },
    sip_sec: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 30,
    },
    sip_left: {
        width: "50%",
        borderBottomWidth: 1,
        borderBottomColor: Colors.RED,
    },
    lumpsum: {
        width: "50%",
        borderBottomWidth: 1,
        borderBottomColor: Colors.DEEP_GRAY,
    },
    sip: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        color: Colors.RED,
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
        color: Colors.DEEP_GRAY,
    },
    month: {
        fontSize: 13,
        fontWeight: "bold",
        color: Colors.DEEP_GRAY,
        position: "absolute",
        right: 0,
    },
    investment: {
        fontSize: 15,
        fontWeight: "bold",
        color: Colors.RED,
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.RED,
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
        color: Colors.RED,
        marginVertical: 10,
        marginLeft: 10,
    },
    more_funds: {
        fontSize: 18,
        color: Colors.RED,
        textAlign: "center",
        marginTop: 10,
    },
    botton_box: {
        backgroundColor: Colors.RED,
        marginHorizontal: 30,
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.DEEP_GRAY,
        paddingVertical: 10,
    },
    get_otp: {
        color: Colors.WHITE,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
});
const mapStateToProps = (state) => ({
    token: state.auth.token,
    users: state.auth.users,
    cartDetails: state.cartActions.cart,
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { AuthActions } = require("../../store/AuthRedux");
    const { CartActions } = require("../../store/CartActionsRedux");
    return {
        ...stateProps,
        ...ownProps,
        logOut: () => {
            AuthActions.logOut(dispatch);
        },
        getCartDetails: (dispatch, token) => {
            CartActions.cartDetails(dispatch, token);
        },
    };
};
export default connect(mapStateToProps, undefined, mapDispatchToProps)(TopRatedListScreen);
