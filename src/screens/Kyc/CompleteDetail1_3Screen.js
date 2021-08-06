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
import { Ionicons, AntDesign, Feather, Entypo, MaterialCommunityIcons, FontAwesome,Octicons, FontAwesome5, } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

export default function CompleteDetail1_3Screen(props) {
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* header  */}
                <Header
                    leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><Entypo name={"menu"} size={30} color={colors.WHITE} /></TouchableOpacity>} backgroundColor={colors.PEACH}
                    backgroundColor={colors.RED}
                />
                <View style={styles.profile_sec}>
                    <View>
                        <AntDesign name={"appstore1"} size={30} color={colors.RED} />
                    </View>
                    <View><Text style={styles.know_text}>Dashboard</Text></View>
                </View>

                <View style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <FontAwesome name={"user-o"} size={30} color={colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>Profile</Text></View>
                </View>

                <View style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <MaterialCommunityIcons name={"file-upload"} size={30} color={colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>Upload Documents</Text></View>
                </View>
                <View style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <FontAwesome name={"bell"} size={30} color={colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>Notification</Text></View>
                </View>
                <View style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <MaterialCommunityIcons name={"wallet-giftcard"} size={30} color={colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>Refer & Earn</Text></View>
                </View>
                <View style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <AntDesign name={"filetext1"} size={30} color={colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>Existing IIN</Text></View>
                </View>

                <View style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <FontAwesome name={"stack-exchange"} size={30} color={colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>Relationship Manager</Text></View>
                </View>
                <View style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <FontAwesome name={"user-o"} size={30} color={colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>Register</Text></View>
                </View>
                <View style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <Octicons name={"primitive-dot"} size={30} color={colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>E-Mandate</Text></View>
                </View>
                <View style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <Octicons name={"primitive-dot"} size={30} color={colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>E-KYC</Text></View>
                </View>

                <View style={styles.border}></View>
                <Text style={[styles.know_text, styles.know]}>Communicate</Text>
                <View style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <Entypo name={"mail"} size={30} color={colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>Mail Us</Text></View>
                </View>
                <View style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <FontAwesome name={"phone"} size={30} color={colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>Call Us</Text></View>
                </View>
                <View style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <FontAwesome name={"address-book"} size={30} color={colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>About Us</Text></View>
                </View>







            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '80%',
        

    },
    profile_sec: {
        flexDirection: "row",
        backgroundColor: colors.GRAY_LIGHT_3,
        paddingHorizontal: 20,
        paddingVertical: 7,
        marginVertical: 5,
    },
    profile: { backgroundColor: colors.WHITE, },
    mutual1: {
        width: 100,
        height: 100,
    },
    know_text: {
        paddingLeft: 20,
        paddingTop: 3,
        fontSize: 18,
        color: colors.RED,
    },
    know: { color: colors.BLACK, },
    border:{
        marginTop: 10,
        marginBottom:10,
        height: 4,
        marginHorizontal: 20,
        backgroundColor: colors.GRAY_LIGHT,
        
    },

});