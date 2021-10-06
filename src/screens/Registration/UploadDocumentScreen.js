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
import { MyImagePicker } from '../../components'
import { MaterialIcons, AntDesign, Entypo, FontAwesome5, FontAwesome, Foundation } from 'react-native-vector-icons';
import { Image, Header } from 'react-native-elements';

let documentsKyc = [
    { name: 'PAN', fileType: 'PC', info: 'Upload PAN', type: 'attachment', icon: (<FontAwesome5 name="credit-card" size={18} color="#EE4248" />) },
    { name: 'Cancelled Cheque', fileType: 'CH', info: 'Upload Cancelled Cheque', type: 'attachment', icon: (<MaterialIcons name="cancel" size={22} color="#EE4248" />) },
]

let documents = [
    { name: 'PAN', fileType: 'PC', info: 'Upload PAN', type: 'attachment', icon: (<FontAwesome5 name="credit-card" size={18} color="#EE4248" />) },
    { name: 'Select Doc', fileType: 'CH', info: 'Upload Select Doc', type: 'attachment', icon: (<AntDesign name="idcard" size={20} color="#EE4248" />) },
    { name: 'Cancelled Cheque', fileType: 'CH', info: 'Upload Cancelled Cheque', type: 'attachment', icon: (<MaterialIcons name="cancel" size={22} color="#EE4248" />) },
    { name: 'Investor Form', fileType: 'IP', info: 'Upload Investor Form', type: 'attachment', icon: (<FontAwesome name="wpforms" size={22} color="#EE4248" />) },
    { name: 'Passport Size Image', fileType: 'PIC', info: 'Upload Passport Size Image', type: 'attachment', icon: (<FontAwesome name="file-image-o" size={22} color="#EE4248" />) },
    { name: 'Upload Video', fileType: 'VID', info: 'Upload Upload Video', type: 'attachment', icon: (<Foundation name="play-video" size={25} color="#EE4248" />) },
    { name: 'Upload Signature', fileType: 'CH', info: 'Upload Upload Signature', type: 'form', icon: (<FontAwesome5 name="file-signature" size={20} color="#EE4248" />) },
]

function UploadDocumentScreen(props) {
    const { token, user, steps, docs, getDocuments } = props
    const [document, setDocument] = useState(user?.userDetails?.ekycIsDone ? documentsKyc : documents);

    useEffect(() => {
        if (token) {
            getDocuments(token)
        }
    }, [token]);

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
                <View style={{ alignItems: "center", }}>
                    <Text style={styles.heading}>Please Upload your documents for easy and quick
                        Activation of your transactional account.
                    </Text>
                </View>

                <View style={styles.document_status}>
                    <Text style={styles.document}>Document Status:</Text>
                    <Text style={styles.pending}>{docs ? docs.documentVerifiedStatus : 'PENDING'}</Text>
                </View>

                {/* container_sec */}
                <View style={styles.container_sec}>
                    <Text style={styles.we_need}>We need to Required Documents</Text>
                    {document.map((item, key) => <View key={key} style={styles.pan_sec}>
                        <MyImagePicker item={item} />
                    </View>)}
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
        color: Colors.LIGHT_YELLOW,
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
        color: Colors.RED,
        marginVertical: 20,
        paddingLeft: 20,
    },

});
const mapStateToProps = (state) => ({
    token: state.auth.token,
    docs: state.registration.documents,
    steps: state.home.steps,
    user: state.home.user,
})

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { RegistrationActions } = require('../../store/RegistrationRedux')
    const { AuthActions } = require('../../store/AuthRedux')
    return {
        ...stateProps,
        ...ownProps,
        getDocuments: (token) => { RegistrationActions.getDocuments(dispatch, token) },
        logOut: () => { AuthActions.logOut(dispatch) },
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(UploadDocumentScreen)