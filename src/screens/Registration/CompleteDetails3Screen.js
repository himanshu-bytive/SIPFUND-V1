import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    Button,
    ScrollView,
    View,
    ImageBackground,
    TouchableOpacity,
    Text,
    Dimensions,
    KeyboardAvoidingView,
    TextInput,
    ActivityIndicator
} from "react-native";
import { connect } from 'react-redux'
import { Styles, Config, Colors, FormValidate } from '../../common'
import { Ionicons, AntDesign, Entypo, FontAwesome5 } from 'react-native-vector-icons';
import { Image, Header, Overlay, CheckBox } from 'react-native-elements';

function CompleteDetails3Screen(props) {

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <View style={styles.container}>
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={40} color={Colors.RED} /></TouchableOpacity>}
                containerStyle={styles.header}
                backgroundColor={Colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
                rightComponent={<View style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={Colors.RED} /></View>}
            />
            <ScrollView>
                <View style={styles.heading_sec}>
                    <Text style={styles.heading}>Your bank account details are required as they need to be linked to your mutual fund account so that you can do the transactions. Your bank account details are safe and stored in encrypted format in NSE.</Text>
                </View>

                {/* state_sec */}
                <View style={styles.container_sec}>
                    <Text style={styles.occupation}>Account Type</Text>
                    <View style={styles.private_sector}>

                        <Text style={styles.private}>Saving Account</Text>
                        <AntDesign name="right" size={20} color="#000000" />
                    </View>
                    <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, }}></View>

                    {/* address_sec */}


                    <Text style={styles.occupation}>Account No.</Text>
                    <Text style={styles.example}>4093101003831</Text>

                    <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, }}></View>

                    {/* pincode_sec */}

                    <Text style={styles.Pincode}>IFSC Code</Text>
                    <Text style={styles.example}>CNRB0004093</Text>

                    <View style={{ borderWidth: 1, borderColor: Colors.RED, }}></View>

                    <View style={{ alignItems: "center", }}>

                        <TouchableOpacity onPress={toggleOverlay} style={styles.botton_box}>
                            <Text style={styles.get_otp}>Fetch Bank Details</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                {/* botton_box_sec */}

                <View style={{ borderWidth: 6, borderColor: "#EAE9EE", marginVertical: 10, }}></View>

                {/* container_2_sec */}


                <View style={styles.container_sec}>

                    <Text style={styles.occupation}>Bank Name</Text>
                    <View style={styles.private_sector}>

                        <Text style={styles.private}>Canara Bank</Text>
                        <AntDesign name="right" size={20} color="#000000" />
                    </View>
                    <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, }}></View>


                    <Text style={styles.occupation}>Branch Name</Text>
                    <Text style={styles.example}>COTAI</Text>

                    <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, }}></View>

                    <Text style={styles.occupation}>Branch Address</Text>
                    <Text style={styles.example}>Kishor Nagar PO</Text>

                    <View style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY, }}></View>

                </View>



                {/* click_box */}
            </ScrollView>

            <View style={styles.footer}>

                <View style={styles.click_box}>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Register2')} style={styles.botton_box}>
                        <Text style={styles.get_otp}>Previous</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Register3')} style={styles.botton_box}>
                        <Text style={styles.get_otp}>Next</Text>
                    </TouchableOpacity>

                </View>

            </View>

            <Overlay isVisible={visible} overlayStyle={{ margin: 10, backgroundColor: '#fff' }}>
                <View style={{ padding: 10 }}>
                    <Text style={{paddingVertical:5,fontSize:18,fontWeight:"bold", }}>Thank you for creating your investor account!</Text>
                    <Text style={{paddingVertical:5,fontSize:15,fontWeight:"bold",color:'#7E7E7E' }}>Please check your email and approve the link sent by NSE for your account activation.</Text>
                    <TouchableOpacity onPress={toggleOverlay}><Text style={{ color: '#ff0000',paddingTop:20, }}>OK</Text></TouchableOpacity>
                </View>
            </Overlay>

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAE9EE",
    },
    header: {
        borderBottomColor: Colors.BLACK,
        borderBottomWidth: 1
    },
    container_sec: {
        backgroundColor: "#fff",
        padding: 10,
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    heading_sec: {
        backgroundColor: "#EAE9EE",
        padding: 12,
    },
    heading: {
        fontSize: 12,
    },
    occupation: {
        fontSize: 15,
        color: Colors.DEEP_GRAY,
        fontWeight: "bold",
        marginTop: 10,

    },
    example: {
        fontSize: 15,
        marginTop: 10,
        marginLeft: 10,
    },
    private_sector: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 5,
    },
    private: {
        fontSize: 15,
        width: "92%",
        marginBottom: 2,
        marginLeft: 10,
    },
    Pincode: {
        color: Colors.RED,
        fontSize: 15,
        marginTop: 10,
    },
    footer: {
        alignItems: "center",
        marginBottom: 20
    },
    click_box: {
        flexDirection: "row",
        marginHorizontal: 25,
    },
    botton_box: {
        width: "50%",
        backgroundColor: Colors.RED,
        paddingVertical: 10,
        marginTop: 10,
        marginHorizontal: 5,
    },
    get_otp: {
        color: Colors.WHITE,
        fontSize: 18,
        fontWeight: 'bold',
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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(CompleteDetails3Screen)