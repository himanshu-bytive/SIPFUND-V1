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
import { connect } from 'react-redux'
import { Styles, Config, Colors, FormValidate } from '../common'
import { Ionicons, AntDesign, Feather, Entypo, MaterialCommunityIcons, FontAwesome, Octicons, FontAwesome5, } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

function SideMenu(props) {
    const { userDetails } = props
    return (
        <View style={styles.container}>
            <Header
                leftComponent={<TouchableOpacity><Entypo name={"user"} size={30} color={Colors.WHITE} /></TouchableOpacity>}
                backgroundColor={Colors.RED}
                centerComponent={<View>
                    <Text style={styles.profileText}>{userDetails?.email}</Text>
                    <Text style={styles.profileText}>{userDetails?.mobileNo}</Text>
                </View>}
            />
            <ScrollView>
                <TouchableOpacity onPress={() => props.navigation.navigate('dashboard')} style={styles.profile_sec}>
                    <View>
                        <AntDesign name={"appstore1"} size={30} color={Colors.RED} />
                    </View>
                    <View><Text style={styles.know_text}>Dashboard</Text></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('Profile')} style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <FontAwesome name={"user-o"} size={30} color={Colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>Profile</Text></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('ReferEarn')} style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <MaterialCommunityIcons name={"wallet-giftcard"} size={30} color={Colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>Refer & Earn</Text></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('Register')} style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <FontAwesome name={"user-o"} size={30} color={Colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>Register</Text></View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => props.navigation.navigate('Existing')} style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <AntDesign name={"filetext1"} size={30} color={Colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>Existing IIN</Text></View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => props.navigation.navigate('Relationship')} style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <FontAwesome name={"stack-exchange"} size={30} color={Colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>Relationship Manager</Text></View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <MaterialCommunityIcons name={"file-upload"} size={30} color={Colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>Upload Documents</Text></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <MaterialCommunityIcons name={"account-search"} size={30} color={Colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>E-KYC</Text></View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <Entypo name={"hair-cross"} size={30} color={Colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>E-Mandate</Text></View>
                </TouchableOpacity>



                <TouchableOpacity onPress={() => props.navigation.navigate('Notifications')} style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <FontAwesome name={"bell"} size={30} color={Colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>Notification</Text></View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => props.navigation.navigate('Reports')} style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <AntDesign name={"profile"} size={30} color={Colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>Reports</Text></View>
                </TouchableOpacity>







                <View style={styles.border}></View>
                <Text style={[styles.know_text, styles.know]}>Communicate</Text>

                <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <Entypo name={"mail"} size={30} color={Colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>Mail Us</Text></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <FontAwesome name={"phone"} size={30} color={Colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>Call Us</Text></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <FontAwesome name={"address-book"} size={30} color={Colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>About Us</Text></View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profile_sec: {
        flexDirection: "row",
        backgroundColor: Colors.GRAY_LIGHT_3,
        paddingHorizontal: 20,
        paddingVertical: 7,
        marginVertical: 5,
    },
    profile: { backgroundColor: Colors.WHITE, },
    mutual1: {
        width: 100,
        height: 100,
    },
    know_text: {
        paddingLeft: 20,
        paddingTop: 3,
        fontSize: 18,
        color: Colors.RED,
    },
    profileText: { color: Colors.WHITE, fontSize: 18, },
    know: { color: Colors.BLACK, },
    border: {
        marginTop: 10,
        marginBottom: 10,
        height: 4,
        marginHorizontal: 20,
        backgroundColor: Colors.GRAY_LIGHT,

    },
})

const mapStateToProps = (state) => ({
    token: state.auth.token,
    userDetails: state.auth.user,
})
export default connect(mapStateToProps)(SideMenu)