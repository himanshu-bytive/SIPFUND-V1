import React, { useState, useRef, useEffect, useContext } from "react";
import { StyleSheet, Button, View, ImageBackground, TouchableOpacity, Text, Share, KeyboardAvoidingView, TextInput, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { Styles, Config, Colors, FormValidate } from "../../common";
import { Ionicons, AntDesign, MaterialIcons, Feather, Entypo, FontAwesome, FontAwesome5 } from "react-native-vector-icons";
import { Image, Header, ListItem, Overlay } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

const listTop = [
    {
        name: "You  receive reward for each one of them and your total reward gets collected in your Referral wallet. You can them redeem these reward points you will receive an email on your registered email id with the Amazon Gift Voucher.",
    },
    {
        name: "All rewards will be converted into Fully Redeemable Amazon Gift vouchers.",
    },
];

const list = [
    {
        name: "No limit on how many friends you can refer while this program is active.",
    },
    {
        name: "You can refer your friends via facebook, WhatsApp, SMS, Email & More",
    },
    {
        name: "Friends must be new users of sip fund.com.",
    },
    {
        name: "Your friend's first SIP investment value should be minimum Rs 2000 or LUMPSUM investment should be minimum Rs 20,000.",
    },
    {
        name: `To claim your referral reward you should be doing SIP or 20000 Lumpsum investment`,
    },
];

function ReferEarnScreen(props) {
    const { isFetching, token, getRefer, user, refers, refersConfig } = props;

    const [showTC, setShowTC] = useState(false);

    useEffect(() => {
        if (token) {
            getRefer(token);
        }
    }, [token]);

    const onShare = async () => {
        try {
            const result = await Share.share({
                message: "React Native | A framework for building native apps using React",
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View style={styles.container}>
            {/* header  */}
            <Header
                leftComponent={
                    <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}>
                        <AntDesign name={"arrowleft"} size={30} color={Colors.RED} />
                    </TouchableOpacity>
                }
                backgroundColor={Colors.PEACH}
                backgroundColor={Colors.WHITE}
                centerComponent={<Image source={require("../../../assets/icon.png")} style={styles.logimg} />}
                rightComponent={
                    <View style={{ marginTop: 20, marginRight: 10 }}>
                        <AntDesign name={"shoppingcart"} size={40} color={Colors.RED} />
                    </View>
                }
            />
            {isFetching && (
                <View style={Styles.loading}>
                    <ActivityIndicator color={Colors.BLACK} size="large" />
                </View>
            )}
            <ScrollView>
                {/* invest section */}
                {!showTC ? (
                    <>
                        <View style={styles.invest_sec}>
                            <Image source={require("../../../assets/earnimg1.png")} style={styles.Goalsimg} />
                            <Text style={styles.text_code}>YOUR REFERRAL CODE</Text>
                            <Text style={styles.earn_text}>{user?.referralCode}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    setShowTC(true);
                                }}
                            >
                                <Text style={styles.view_text}>VIEW T&C</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.invest_sec, styles.earn]}>
                            <View style={styles.earn_left}>
                                <View style={styles.repees_sec}>
                                    <View style={styles.repees_text}>
                                        <Text style={styles.repees_text_left}>You Have Earned</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.zero_text}>
                                            <Text style={styles.rupees_text}>₹</Text>
                                            {refers?.creditAmount}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <TouchableOpacity onPress={() => props.navigation.navigate("AmountHistory")} style={styles.earn_right}>
                                <MaterialIcons name={"keyboard-arrow-right"} size={50} color={Colors.RED} />
                            </TouchableOpacity>
                        </View>

                        {/* Share Your Referral Code start */}

                        <View style={styles.invest_sec}>
                            <Text style={styles.text_code}>Share Your Referral Code</Text>
                            <Text style={styles.earn_text}>{user?.referralCode}</Text>
                            <View style={styles.invite_sec}>
                                <View>
                                    <Text style={styles.text_code}>Start Inviting Friends</Text>
                                </View>
                                <TouchableOpacity onPress={onShare} style={styles.share_icon}>
                                    <Entypo name={"share"} size={30} color={Colors.GREEN_2} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={onShare} style={styles.social}>
                                <FontAwesome style={styles.social_icon} name={"whatsapp"} size={40} color={Colors.DEEP_GRAY_1} />
                                <Entypo style={styles.social_icon} name={"facebook-with-circle"} size={40} color={Colors.DEEP_GRAY_1} />
                                <Entypo style={styles.social_icon} name={"mail-with-circle"} size={40} color={Colors.DEEP_GRAY_1} />
                                <Entypo style={styles.social_icon} name={"twitter-with-circle"} size={40} color={Colors.DEEP_GRAY_1} />
                                <FontAwesome style={styles.social_icon} name={"stack-exchange"} size={40} color={Colors.DEEP_GRAY_1} />
                            </TouchableOpacity>
                            <View style={styles.border}></View>
                        </View>

                        {refersConfig?.createdIIN && (
                            <View style={[styles.invest_sec, styles.earn_sec]}>
                                <View style={styles.receive}>
                                    <View style={styles.receive_left}>
                                        <Image source={require("../../../assets/earnimg_2.png")} style={styles.earnimg} />
                                    </View>
                                    <View style={styles.receive_right}>
                                        <Text style={styles.text_receive}>{refersConfig.createdIIN.rfyRemarks}</Text>
                                    </View>
                                </View>
                            </View>
                        )}

                        {refersConfig?.investment && (
                            <View style={[styles.invest_sec, styles.earn_sec]}>
                                <View style={styles.receive}>
                                    <View style={styles.receive_left}>
                                        <Image source={require("../../../assets/earnimg_2.png")} style={styles.earnimg} />
                                    </View>
                                    <View style={styles.receive_right}>
                                        <Text style={styles.text_receive}>{refersConfig.investment.rfyRemarks}</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    </>
                ) : (
                    <>
                        <TouchableOpacity
                            onPress={() => {
                                setShowTC(false);
                            }}
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                padding: 20,
                            }}
                        >
                            <AntDesign name={"arrowleft"} size={25} />
                            <Text style={{ paddingLeft: 5 }}>Go Back</Text>
                        </TouchableOpacity>

                        {/* How You Earn section */}
                        <View style={[styles.invest_sec, styles.earn_sec]}>
                            <Text style={styles.earn_sec_text}>How You Earn</Text>
                        </View>

                        <View style={[styles.invest_sec, styles.earn_sec]}>
                            <Text style={styles.condition}>How it works?</Text>
                            {listTop.map((l, i) => (
                                <View key={i} style={styles.paragraph_sec}>
                                    <View style={styles.paragraph_left}>
                                        <Entypo style={{ margin: 0 }} name={"dot-single"} size={20} color={Colors.DEEP_GRAY_1} />
                                    </View>
                                    <View style={styles.paragraph_right}>
                                        <Text style={styles.paragraph_text}>{l.name}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                        <View style={[styles.invest_sec, styles.earn_sec]}>
                            <Text style={styles.condition}>Terms and conditions</Text>
                            {list.map((l, i) => (
                                <View key={i} style={styles.paragraph_sec}>
                                    <View style={styles.paragraph_left}>
                                        <Entypo style={{ margin: 0 }} name={"dot-single"} size={20} color={Colors.DEEP_GRAY_1} />
                                    </View>
                                    <View style={styles.paragraph_right}>
                                        <Text style={styles.paragraph_text}>{l.name}</Text>
                                    </View>
                                </View>
                            ))}
                            <Text style={styles.sipfund_text}>Sipfind.com reserves the right to cancel or modify Referral program</Text>
                            <Text style={styles.sipfund_text}>If your friend does not receive the referral code, please mail us at info@sipfind.com with your query.</Text>
                            <Text style={styles.sipfund_text}>Thank you</Text>
                        </View>
                    </>
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    invest_sec: {
        marginVertical: 8,
        alignItems: "center",
        backgroundColor: Colors.WHITE,
        marginHorizontal: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 10.62,
        elevation: 4,
        padding: 10,
    },
    Goalsimg: {
        width: 307,
        height: 114,
        marginTop: 20,
    },
    text_code: {
        fontSize: 13,
        color: Colors.GRAY_2,
        paddingTop: 10,
    },
    earn_text: {
        fontSize: 16,
        color: Colors.BLUE_1,
        paddingVertical: 10,
    },
    view_text: {
        fontSize: 12,
        color: Colors.RED,
        paddingBottom: 20,
        textDecorationLine: "underline",
    },
    earn: {
        flexDirection: "row",
        paddingVertical: 20,
    },
    earn_left: { width: "80%" },

    repees_sec: {
        flexDirection: "row",
    },
    repees_text: {
        width: "30%",
        alignItems: "center",
        paddingLeft: 20,
        marginRight: 20,
    },
    repees_text_left: {
        fontSize: 12,
        color: Colors.GRAY_2,
    },
    zero_text: { fontSize: 27 },
    rupees_text: {
        fontSize: 27,
        color: Colors.GREEN_2,
    },

    /* Share Your Referral Code start */
    invite_sec: { flexDirection: "row" },
    social: {
        flexDirection: "row",
        paddingVertical: 20,
    },
    share_icon: { marginLeft: 5 },
    social_icon: { marginHorizontal: 5 },

    border: {
        width: "80%",
        height: 1,
        marginHorizontal: 20,
        backgroundColor: Colors.DEEP_GRAY_1,
        marginTop: 5,
        marginBottom: 30,
    },
    earn_sec: {
        alignItems: null,
        paddingLeft: 20,
        paddingVertical: 20,
    },

    // How You Earn section
    earn_sec_text: {
        fontSize: 15,
        fontWeight: "bold",
        color: Colors.DEEP_GRAY_1,
    },
    receive: {
        flexDirection: "row",
        paddingTop: 20,
    },
    earnimg: {
        width: 47,
        height: 47,
        marginRight: 20,
    },
    receive_left: { width: "20%" },
    receive_right: { width: "80%" },
    text_receive: {
        fontSize: 14,
        color: Colors.DEEP_GRAY_1,
    },
    // paragraph_sec
    paragraph_sec: { flexDirection: "row", marginVertical: 5 },
    paragraph_left: { width: "10%" },
    paragraph_right: { width: "90%" },
    paragraph_text: { color: Colors.DEEP_GRAY_1 },

    sipfund_text: {
        paddingVertical: 10,
        color: Colors.DEEP_GRAY_1,
    },

    condition: {
        fontSize: 14,
        fontWeight: "bold",
        color: Colors.DEEP_GRAY,
        paddingVertical: 10,
    },
});
const mapStateToProps = (state) => ({
    token: state.auth.token,
    user: state.auth.user,
    isFetching: state.sideMenu.isFetching,
    refers: state.sideMenu.refers,
    refersConfig: state.sideMenu.refersConfig,
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { SideMenuActions } = require("../../store/SideMenuRedux");
    return {
        ...stateProps,
        ...ownProps,
        getRefer: (token) => {
            SideMenuActions.getRefer(dispatch, token);
        },
    };
};
export default connect(mapStateToProps, undefined, mapDispatchToProps)(ReferEarnScreen);
