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
import { colors } from '../../common/theme';
import { MaterialIcons, AntDesign, Entypo, FontAwesome5, FontAwesome, Foundation } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function CompleteDetails5Screen(props) {
    return (

        <View style={styles.container}>

            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={40} color={colors.RED} /></TouchableOpacity>}
                containerStyle={styles.header}
                backgroundColor={colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
                rightComponent={<View style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={colors.RED} /></View>}
            />
            <ScrollView>
                <View style={{ alignItems: "center", }}>
                    <Text style={styles.heading}>Please Upload your documents for easy and quick
                        Activation of your transactional account.
                    </Text>
                </View>

                <View style={styles.document_status}>
                    <Text style={styles.document}>Document Status:</Text>
                    <Text style={styles.pending}>PENDING</Text>
                </View>

                {/* container_sec */}

                <View style={styles.container_sec}>

                    <Text style={styles.we_need}>We need to Required Documents</Text>

                    <View style={styles.pan_sec}>
                        <View style={{ flexDirection: "row", width: "95%", }}>

                            <FontAwesome5 name="credit-card" size={18} color="#EE4248" />
                            <Text style={styles.pan}>PAN</Text>
                            <AntDesign name="exclamationcircleo" size={18} color="#EE4248" />

                        </View>
                        <Entypo name="attachment" size={22} color="#000000" />
                    </View>

                    {/* Select Doc.._sec */}

                    <View style={styles.pan_sec}>
                        <View style={{ flexDirection: "row", width: "95%", }}>

                            <AntDesign name="idcard" size={20} color="#EE4248" />
                            <Text style={styles.pan}>Select Doc..</Text>
                            <View style={{ marginRight: 10, marginLeft: 20, }}>
                                <AntDesign name="caretdown" size={18} color="#000000" />
                            </View>
                            <AntDesign name="exclamationcircleo" size={18} color="#EE4248" />

                        </View>
                        <Entypo name="attachment" size={22} color="#000000" />
                    </View>


                    {/* Cancelled Cheque_ sec */}


                    <View style={styles.pan_sec}>
                        <View style={{ flexDirection: "row", width: "95%", }}>

                            <MaterialIcons name="cancel" size={22} color="#EE4248" />
                            <Text style={styles.pan}>Cancelled Cheque</Text>
                            <AntDesign name="exclamationcircleo" size={18} color="#EE4248" />

                        </View>
                        <Entypo name="attachment" size={22} color="#000000" />
                    </View>

                    {/* Investor Form_sec */}

                    <View style={styles.pan_sec}>
                        <View style={{ flexDirection: "row", width: "95%", }}>

                            <FontAwesome name="wpforms" size={22} color="#EE4248" />
                            <Text style={styles.pan}>Investor Form</Text>
                            <AntDesign name="exclamationcircleo" size={18} color="#EE4248" />

                        </View>
                        <Entypo name="attachment" size={22} color="#000000" />
                    </View>


                    {/* Passport Size Image_sec */}

                    <View style={styles.pan_sec}>
                        <View style={{ flexDirection: "row", width: "95%", }}>

                            <FontAwesome name="file-image-o" size={22} color="#EE4248" />
                            <Text style={styles.pan}>Passport Size Image</Text>
                            <AntDesign name="exclamationcircleo" size={18} color="#EE4248" />

                        </View>
                        <Entypo name="attachment" size={22} color="#000000" />
                    </View>

                    {/* Upload Video_sec */}

                    <View style={styles.pan_sec}>
                        <View style={{ flexDirection: "row", width: "95%", }}>

                            <Foundation name="play-video" size={25} color="#EE4248" />
                            <Text style={styles.pan}>Upload Video</Text>
                            <AntDesign name="exclamationcircleo" size={18} color="#EE4248" />

                        </View>
                        <Entypo name="attachment" size={22} color="#000000" />
                    </View>


                    {/* Upload Signature_sec */}


                    <View style={styles.pan_sec}>
                        <View style={{ flexDirection: "row", width: "95%", }}>

                            <FontAwesome5 name="file-signature" size={20} color="#EE4248" />
                            <Text style={styles.pan}>Upload Signature</Text>
                            <AntDesign name="exclamationcircleo" size={18} color="#EE4248" />

                        </View>
                        <Entypo name="attachment" size={22} color="#000000" />
                    </View>

                </View>


                <View style={styles.review_documents}>

                    <Text style={styles.review}>Review Your Documents</Text>

                </View>

                <View style={{ flexDirection: "row", marginHorizontal: 10, marginTop: 20, }}>
                    <View style={{ width: "95%", }}>
                        <AntDesign name="left" size={20} color="#EE4248" width="90%" />
                    </View>
                    <AntDesign name="right" size={20} color="#EE4248" />
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
    heading: {
        textAlign: "center",
        fontSize: 12,
        width: "80%",
        marginTop: 10,
    },
    document_status: {
        flexDirection: "row",
        paddingLeft: "45%",
        marginTop: 20,
    },
    document: {
        fontSize: 14,
        fontWeight: "bold",
    },
    pending: {
        fontSize: 14,
        paddingLeft: 20,
        color: colors.LIGHT_YELLOW,
        fontWeight: "bold",
    },
    container_sec: {

        margin: 15,
    },
    we_need: {
        fontSize: 14,

    },
    pan_sec: {
        flexDirection: "row",
        marginTop: 20,
    },
    pan: {
        marginHorizontal: 10,
        fontSize: 18,
        fontWeight: "bold",

    },
    review_documents: {
        backgroundColor: "#EAE9EE",
    },
    review: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.RED,
        marginVertical: 20,
        paddingLeft: 20,
    },






});