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
import { Styles, Config, Colors, FormValidate } from '../../common'
import { Ionicons, AntDesign, MaterialIcons, Feather, Entypo, FontAwesome, FontAwesome5, } from 'react-native-vector-icons';
import { Image, Header, ListItem, Overlay } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

const reports = [
    { number: '1.', title: 'Live Portfolio Report', link: 'Download' },
    { number: '2.', title: 'Load Free units Report', link: 'Download' }
]

const tax = [
    { number: '1.', title: 'Live Portfolio Report', link: 'Download' },
    { number: '2.', title: 'Load Free units Report', link: 'Download' },
    { number: '3.', title: 'Dividend Report', link: 'Download' },
    { number: '4.', title: 'Financial Year Transaction Report', link: 'Download' },
]


function ReportsScreen(props) {
    return (
        <View style={styles.container}>
            {/* header  */}
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={30} color={Colors.RED} /></TouchableOpacity>} backgroundColor={Colors.PEACH}
                backgroundColor={Colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}

                rightComponent={<View style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={Colors.RED} /></View>}
            />
            <ScrollView>
                <View style={styles.contain}>
                    <Text style={styles.nametext}>Reports</Text>
                </View>

                {/* loop start */}
                {reports.map((item) =>
                    <View style={styles.report_sec}>
                        <View style={styles.tax_left}>
                            <Text style={styles.tax_left_text}>{item.number}</Text>
                            <Text style={styles.tax_left_text}>{item.title}</Text>
                        </View>
                        <View style={styles.bottom}>
                            <TouchableOpacity style={styles.botton_box}>
                                <Text style={styles.get_otp}>{item.link}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                {/* loop end */}

                <View style={styles.contain}>
                    <Text style={styles.nametext}>Tax Package Reports</Text>
                </View>



                {/* bottom loop start */}
                {tax.map((item) => <View style={styles.report_sec}>
                    <View style={styles.tax_left}>
                        <Text style={styles.tax_left_text}>{item.number}</Text>
                        <Text style={styles.tax_left_text}>{item.title}</Text>
                    </View>
                    <View style={styles.bottom}>
                        <TouchableOpacity style={styles.botton_box}>
                            <Text style={styles.get_otp}>{item.link}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                )}

                {/* bottom loop end */}



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
    contain: {
        alignItems: "center",
        backgroundColor: Colors.DEEP_GRAY_4,
    },
    nametext: {
        fontSize: 23,
        fontWeight: "bold",
        paddingVertical: 10,
    },
    report_sec: {
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    bottom: {
        alignItems: 'flex-end',
    },
    botton_box: {
        backgroundColor: Colors.LIGHT_RED1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    get_otp: {
        color: Colors.WHITE,
        fontSize: 16,
        marginRight: 5,
        textAlign: "center",
    },
    tax_left: {
        flexDirection: "row",
        width: '70%'
    },
    tax_left_text: {
        fontSize: 18,
        fontWeight: "bold",
        paddingTop: 12,
    },


});
const mapStateToProps = (state) => ({
    token: state.auth.token,
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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(ReportsScreen)