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
import { Ionicons, AntDesign, Feather, Entypo, MaterialCommunityIcons, FontAwesome, Octicons, FontAwesome5, } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

export default function ProfileScreen(props) {
    return (
        <View style={styles.container}>
            {/* header  */}
            <Header
leftComponent={<TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={{ marginTop: 20 }}><Entypo name={"menu"} size={30} color={colors.RED} /></TouchableOpacity>}                containerStyle={styles.header}
                backgroundColor={colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
                rightComponent={<View style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={colors.RED} /></View>}
            />
            <ScrollView style={styles.containerScroll}>
                <View style={styles.banner}>

                    <Image
                        source={require('../../../assets/profile_img.png')}
                        style={styles.bannerimg}
                    />
                    <Text style={styles.profile_text}>VIVEK NIMJE</Text>
                    <Text style={styles.profile_text2}>ACCOUNT ACTIVE</Text>
                </View>
                <View style={styles.icon_sec}>
                    <View style={styles.icon_bg}><FontAwesome name={"phone"} size={25} color={colors.WHITE} /></View>
                    <View style={styles.border}></View>
                    <View style={styles.icon_bg}><FontAwesome name={"user-o"} size={25} color={colors.WHITE} /></View>
                    <View style={styles.border}></View>
                    <View style={styles.icon_bg}><Entypo name={"squared-minus"} size={25} color={colors.WHITE} /></View>
                    <View style={styles.border}></View>
                    <View style={styles.icon_bg}><Octicons name={"primitive-dot"} size={25} color={colors.WHITE} /></View>
                </View>

                <View style={styles.text_sec}>
                    <Text style={styles.icon_text}>MOBILE VERIFIED</Text>
                    <Text style={styles.icon_text}>ACCOUNT CREATED</Text>
                    <Text style={styles.icon_text}>Pan Updated</Text>
                    <Text style={styles.icon_text}>IIN Created</Text>
                </View>

                <View style={[styles.icon_sec, styles.bottomicon_sec]}>
                    <View style={styles.icon_bg}><AntDesign name={"filetext1"} size={25} color={colors.WHITE} /></View>
                    <View style={[styles.border, styles.border1]}></View>
                    <View style={styles.icon_bg}><Feather name={"check-circle"} size={25} color={colors.WHITE} /></View>
                    <View style={[styles.border, styles.border1]}></View>
                    <View style={styles.icon_bg}><FontAwesome name={"rupee"} size={25} color={colors.WHITE} /></View>
                </View>

                <View style={styles.text_sec}>
                    <Text style={styles.bottom_text}>Document Uploaded</Text>
                    <Text style={styles.bottom_text}>IIN Activated</Text>
                    <Text style={styles.bottom_text}>Investment</Text>

                </View>
                <View style={styles.mutual_sec}><Text style={styles.mutual_text}>Mutual Funds</Text></View>
                <View style={styles.mutual_bottomsec}>
                    <View style={styles.mutual_left}>
                        <Text style={styles.customer}>Customer Id :</Text>
                        <Text style={styles.id_text}>5011783651</Text>
                        <Text style={styles.customer}>Holding Nature :</Text>
                        <Text style={styles.id_text}>SINGLE</Text>
                        <Text style={styles.customer}>Email :</Text>
                        <Text style={styles.id_text}>viveknimje@yahoo.co.in</Text>

                    </View>
                    <View style={styles.mutual_right}>
                        <Text style={styles.customer}>PAN :</Text>
                        <Text style={styles.id_text}>AEVPN7613K</Text>
                        <Text style={styles.customer}>Tax Status :</Text>
                        <Text style={styles.id_text}>Individual</Text>
                        <Text style={styles.customer}>Mobile :</Text>
                        <Text style={styles.id_text}>9272511351</Text>
                    </View>
                </View>
                <View style={styles.address}>
                    <Text style={styles.customer}>Address :</Text>
                    <Text style={styles.id_text}>Plot No 115, Paradhi Layout, Belrarodi, Nagpur</Text>
                </View>


                <View style={styles.mutual_sec}><Text style={styles.mutual_text}>BANK DETAILS</Text></View>
                <View style={styles.mutual_bottomsec}>
                    <View style={styles.mutual_left}>
                        <Text style={styles.customer}>Bank Name :</Text>
                        <Text style={styles.id_text}>BOM</Text>
                        <Text style={styles.customer}>IFSC Code :</Text>
                        <Text style={styles.id_text}>MAHB0000153</Text>
                        <Text style={styles.customer}>Branch Name :</Text>
                        <Text style={styles.id_text}>viveknimje@yahoo.co.in</Text>

                    </View>
                    <View style={styles.mutual_right}>
                        <Text style={styles.customer}>Account Type :</Text>
                        <Text style={styles.id_text}>SB</Text>
                        <Text style={styles.customer}>Account No :</Text>
                        <Text style={styles.id_text}>60030475212</Text>
                        <Text style={styles.customer}>Branch Pincode :</Text>
                        <Text style={styles.id_text}>9272511351</Text>
                    </View>
                </View>
                <View style={styles.address}>
                    <Text style={styles.customer}>Bank Address :</Text>
                    <Text style={styles.id_text}>16, SHIRISH, SOUTH AMBAZARI ROAD, LAXMI NAGAR</Text>
                </View>
                <View style={styles.mutual_sec}><Text style={styles.mutual_text}>BROKER</Text></View>
                <View style={styles.mutual_bottomsec}>
                    <View style={styles.mutual_left}>
                        <Text style={styles.customer}>Broker Name :</Text>
                        <Text style={styles.id_text}>Sipfund Pvt. Ltd.</Text>

                    </View>
                    <View style={styles.mutual_right}>
                        <Text style={styles.customer}>Code</Text>
                        <Text style={styles.id_text}>ARN-102683</Text>

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
    banner: {
        backgroundColor: colors.GRAY_LIGHT_5,
        alignItems: "center",
    },
    bannerimg: {
        height: 78,
        width: 92,
        marginTop: 10,
        marginBottom: 20,
    },
    profile_text: {
        color: colors.WHITE,
        fontSize: 20,
        fontWeight: "bold",

    },
    profile_text2: {
        color: '#6FF43A',
        fontSize: 20,
        paddingVertical: 10,
        fontWeight: "bold",
    },
    icon_sec: {
        marginHorizontal: 20,
        marginTop: 30,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "center",
    },
    icon_bg: {
        height: 40,
        width: 40,
        backgroundColor: colors.DEEPGREEN,
        borderRadius: 100,
        alignItems: "center",
        paddingTop: 7,
    },
    border: {
        marginTop: 20,
        height: 4,
        width: 70,
        backgroundColor: colors.LIGHTYELLOW,
    },
    icon_text: {
        paddingHorizontal: 14,
        fontSize: 10,
    },
    text_sec: {
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: 10,
    },
    border1: {
        width: 122,
    },
    bottom_text: {
        paddingHorizontal: 30,
        fontSize: 10,

    },
    bottomicon_sec: { marginTop: 50, },
    mutual_sec: {
        backgroundColor: colors.LIGHT_WHITE,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 30,

    },
    mutual_text: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.RED,
    },
    // mutual_bottomsec
    mutual_bottomsec: {
        padding: 20,
        flexDirection: "row",
    },

    mutual_left: { width: '50%' },
    mutual_right: { width: '50%' },
    id_text: {
        color: colors.DEEP_GRAY,
        fontSize: 15,
        paddingVertical: 10,
    },
    customer: {
        paddingTop: 5,
        fontWeight: "bold",
        fontSize: 15,
    },

    address: { paddingLeft: 20, },



});