import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    Button,
    View,
    Linking,
    ImageBackground,
    TouchableOpacity,
    Text,
    Dimensions,
    KeyboardAvoidingView,
    TextInput,
    ActivityIndicator,

} from "react-native";
import { connect } from 'react-redux'
import { Styles, Config, Colors, FormValidate } from '@common'
import { Ionicons, AntDesign, MaterialIcons, Feather, Entypo, FontAwesome, FontAwesome5, } from 'react-native-vector-icons';
import { Image, Header, ListItem, Overlay } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

function RelationshipScreen(props) {



    return (
        <View style={styles.container}>
            {/* header  */}
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={30} color={Colors.RED} /></TouchableOpacity>} backgroundColor={Colors.PEACH}
                backgroundColor={Colors.WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}

                rightComponent={<View style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={Colors.RED} /></View>}
            />
            <ScrollView>
                <Image
                    source={require('../../../assets/relationship_img.png')}
                    style={styles.qipimg}
                />
                <View style={styles.proof}>
                    <Text style={styles.nametext}>VISHNU DARIRA</Text>
                    <Text style={styles.nametext}>9513355663</Text>
                    <Text style={styles.nametext}>Vishnu@sipfund.com</Text>
                    <View style={styles.social}>
                        <TouchableOpacity onPress={() => Linking.openURL('whatsapp://send?text=hello')} style={styles.icons}>
                            <FontAwesome name="whatsapp" size={30} color="#4CAF50" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('mailto:support@example.com')}><Entypo name="mail" size={30} color="#646365" /></TouchableOpacity>
                    </View>
                </View>

                <View style={styles.query}>
                    <Text style={styles.addtext}>Add Query</Text>
                    <TextInput style={{ borderWidth: 1, fontSize: 16, borderColor: '#828282', height: 100, }} />

                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.botton_box}>
                        <Text style={styles.get_otp}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
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
    qipimg: {
        width: 370,
        height: 147,
        margin: 10,
        width: '95%'
    },

    proof: {
        alignItems: "center",
        paddingTop: 30,
    },
    nametext: {
        paddingVertical: 5,
        fontSize: 16,
        color: Colors.DEEP_GRAY_3,
        fontWeight: "bold",

    },
    query: { marginHorizontal: 30, },
    addtext: {
        fontSize: 14,
        fontWeight: "bold",
        color: Colors.DEEP_GRAY_3,
        paddingBottom: 5,
    },
    social: { flexDirection: "row", },
    icons: {
        paddingRight: 10,
        marginBottom: 40,
    },

    bottom: { alignItems: "center", },
    botton_box: {
        backgroundColor: Colors.LIGHT_RED,
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginTop: 20,


    },
    get_otp: {
        color: Colors.WHITE,
        fontSize: 16,
        marginRight: 5,
        textAlign: "center",
    },


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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(RelationshipScreen)