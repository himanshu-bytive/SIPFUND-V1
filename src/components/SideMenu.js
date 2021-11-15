import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    Alert,
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    Linking,
    Image,
    TextInput,
    ActivityIndicator,
} from "react-native";
import { connect } from 'react-redux'
import { Styles, Config, Colors, FormValidate } from '../common'
import { Ionicons, AntDesign, Feather, Entypo, MaterialCommunityIcons, FontAwesome } from 'react-native-vector-icons';
import { Overlay, Header, CheckBox } from 'react-native-elements';

function SideMenu(props) {
    const pageActiveKyc = useRef(false);
    const pageActiveEmandate = useRef(false);
    const { token, isFetchingEkyc, isFetchingEmandate, nseDetails, userDetails, steps, docs, getList, postRequest, kycLists, emandateOptions, emandateRegistration, emandateLists, kycDetails } = props
    const [img, setImg] = useState(null);
    const [visibleKyc, setVisibleKyc] = useState(false);
    const [visibleEmandate, setVisibleEmandate] = useState(false);
    const [visibleEmandateValue, setVisibleEmandateValue] = useState(null);
    const [emandateValue, setEmandateValue] = useState('');

    useEffect(() => {
        if (docs) {
            let selectedData = docs?.responseString?.documents ? docs.responseString.documents.find(x => x.docType == 'AVATAR') : null;
            if (selectedData?.fileName) {
                setImg(docs.baseUrl + selectedData?.fileName)
            }
        }
    }, [docs]);

    useEffect(() => {
        if (kycLists && pageActiveKyc.current) {
            pageActiveKyc.current = false;
            setVisibleKyc(true)
            props.navigation.toggleDrawer()
        }
    }, [kycLists]);


    const handleKyc = (value) => {
        setVisibleKyc(false)
        pageActiveKyc.current = true;
        let params = {
            "service_request":
            {
                "amc_code": value.amc_code,
                "client_callback_url": "sipfund.com",
                "investor_email": userDetails.email,
                "investor_mobile_no": userDetails.mobileNo,
                "pan": userDetails.pan,
                "return_flag": "Y"
            }
        }
        postRequest(params, token)
    };

    useEffect(() => {
        if (kycDetails && pageActiveKyc.current) {
            pageActiveKyc.current = false;
            Linking.openURL(kycDetails)
        }
    }, [kycDetails]);


    const handlEemandate = (value) => {
        setVisibleEmandate(false)
        setVisibleEmandateValue(value)
    };

    const handlEemandateValue = () => {
        if (emandateValue) {
            let params = {
                "service_request":
                {
                    "acc_no": nseDetails?.acc_no,
                    "acc_type": nseDetails?.acc_type?.ACC_TYPE,
                    "ach_amount": emandateValue,
                    "ach_fromdate": new Date(),
                    "ach_todate": "31-Dec-2099",
                    "Bank_holder_name": nseDetails?.inv_name,
                    "bank_name": nseDetails?.bank_name?.BANK_NAME,
                    "branch_name": nseDetails?.branch_name,
                    "channel_type": visibleEmandateValue.channel_type,
                    "ifsc_code": nseDetails?.ifsc_code,
                    "iin": userDetails.IIN,
                    "micr_no": "",
                    "return_flag": visibleEmandateValue.return_flag
                }
            }
            emandateRegistration(params, token)
            setVisibleEmandateValue(null)
            setEmandateValue(null)
        }
    };

    useEffect(() => {
        if (emandateLists && pageActiveEmandate.current) {
            pageActiveEmandate.current = false;
            setVisibleEmandate(true)
            props.navigation.toggleDrawer()
        }
    }, [emandateLists]);

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: Colors.RED, flexDirection: 'row', marginTop: 0 }}>
                <Image
                    source={img ? { uri: img } : require('../../assets/profile_img.png')}
                    style={{ margin: 7, width: 40, height: 40, borderRadius: 100 }}
                />
                <View>
                    <Text style={styles.profileText}>{userDetails?.email}</Text>
                    <Text style={styles.profileText}>{userDetails?.mobileNo}</Text>
                </View>
            </View>
            {(isFetchingEkyc || isFetchingEmandate) && (<View style={Styles.loading}>
                <ActivityIndicator color={Colors.BLACK} size='large' />
            </View>)}

            <Overlay isVisible={visibleKyc} overlayStyle={{ margin: 10, borderRadius: 10, backgroundColor: '#fff' }}>
                <View style={styles.emaMainbox}>
                    <Text style={styles.emaAmc}>Choose AMC Option:</Text>
                    {kycLists.map((item, key) => <TouchableOpacity key={key} onPress={() => handleKyc(item)}><Text style={styles.emaMutual_fund}>{item.amc_name}</Text></TouchableOpacity>)}
                    <TouchableOpacity onPress={() => setVisibleKyc(false)}><Text style={styles.emaCancel}>Cancel</Text></TouchableOpacity>
                </View>
            </Overlay>

            <Overlay isVisible={visibleEmandate} overlayStyle={{ margin: 10, borderRadius: 10, backgroundColor: '#fff' }}>
                <View style={styles.emaMainbox}>
                    <Text style={styles.emaAmc}>Choose AMC Option:</Text>
                    {emandateLists.map((item, key) => <TouchableOpacity key={key}>
                        <CheckBox onPress={() => handlEemandate(item)} containerStyle={{ margin: 0, backgroundColor: Colors.TRANSPARENT, borderColor: Colors.TRANSPARENT }} checkedColor={Colors.LIGHT_RED1} title={item.description} checkedIcon='dot-circle-o' uncheckedIcon='circle-o' />
                    </TouchableOpacity>)}
                    <TouchableOpacity onPress={() => setVisibleEmandate(false)}><Text style={styles.emaCancel}>Cancel</Text></TouchableOpacity>
                </View>
            </Overlay>

            <Overlay isVisible={visibleEmandateValue ? true : false} overlayStyle={{ margin: 10, borderRadius: 10, backgroundColor: '#fff' }}>
                <View style={styles.mainbox}>
                    <Text style={styles.amc}>ENTER ACH-MANDATE AMOUNT</Text>
                    <TextInput
                        value={emandateValue}
                        onChangeText={(val) => setEmandateValue(val)}
                        style={styles.inputsec}
                        placeholder="Amount"
                    />
                    <View style={{ flexDirection: "row", alignSelf: 'flex-end' }}>
                        <TouchableOpacity onPress={() => visibleEmandateValue(null)}>
                            <Text style={styles.refreshcode}>CANCEL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text onPress={() => handlEemandateValue()} style={styles.refreshcode}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Overlay>

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

                <TouchableOpacity onPress={() => props.navigation.navigate(steps === 3 ? 'RegisterDetails' : 'UploadDocument')} style={[styles.profile_sec, styles.profile]}>
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


                <TouchableOpacity onPress={() => props.navigation.navigate('UploadDocument')} style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <MaterialCommunityIcons name={"file-upload"} size={30} color={Colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>Upload Documents</Text></View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => {
                    if (userDetails?.IIN) {
                        getList(token)
                        pageActiveKyc.current = true;
                    } else {
                        Alert.alert('IIN is not update')
                    }
                }} style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <MaterialCommunityIcons name={"account-search"} size={30} color={Colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>E-KYC</Text></View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => {
                    if (userDetails?.IIN) {
                        emandateOptions(token)
                        pageActiveEmandate.current = true;
                    } else {
                        Alert.alert('IIN is not update')
                    }
                }} style={[styles.profile_sec, styles.profile]}>
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

                <TouchableOpacity onPress={() => Linking.openURL('mailto:info@sipfund.com')} style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <Entypo name={"mail"} size={30} color={Colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>Mail Us</Text></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL(`tel:7064442444`)} style={[styles.profile_sec, styles.profile]}>
                    <View>
                        <FontAwesome name={"phone"} size={30} color={Colors.GRAY_LIGHT_4} />
                    </View>
                    <View><Text style={[styles.know_text, styles.know]}>Call Us</Text></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('AboutUs')} style={[styles.profile_sec, styles.profile]}>
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
    profileText: { color: Colors.WHITE, fontSize: 13, marginVertical: 3 },
    know: { color: Colors.BLACK, },
    border: {
        marginTop: 10,
        marginBottom: 10,
        height: 4,
        marginHorizontal: 20,
        backgroundColor: Colors.GRAY_LIGHT,

    },
    emaMainbox: {
        margin: 10,
        padding: 10,
    },
    emaAmc: {
        fontSize: 18,
        marginLeft: 15,
        marginVertical: 10,
        fontWeight: "bold",
    },
    emaMutual_fund: {
        fontSize: 15,
        marginVertical: 10,
    },
    emaCancel: {
        fontSize: 15,
        marginTop: 15,
        color: Colors.RED,
    },
    mainbox: {
        padding: 10,
    },
    amc: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
    },
    inputsec: {
        borderBottomWidth: 1,
        borderColor: Colors.GRAY_LIGHT,
        width: '95%',
        marginTop: 5,
    },
    refreshcode: {
        textAlign: "right",
        color: Colors.RED,
        fontSize: 15,
        marginHorizontal: 10,
        marginVertical: 20,
    },

})

const mapStateToProps = (state) => ({
    token: state.auth.token,
    steps: state.home.steps,
    docs: state.registration.documents,
    nseDetails: state.registration.nseDetails,
    userDetails: state.auth.user,
    isFetchingEkyc: state.ekyc.isFetching,
    kycLists: state.ekyc.kycLists,
    kycDetails: state.ekyc.kycDetails,
    isFetchingEmandate: state.emandate.isFetching,
    emandateLists: state.emandate.emandateLists,
    emandateDetails: state.emandate.emandateDetails,
})
const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { EkycActions } = require('../store/EkycRedux')
    const { EmandateActions } = require('../store/EmandateRedux')
    return {
        ...stateProps,
        ...ownProps,
        getList: (token) => { EkycActions.getList(dispatch, token) },
        postRequest: (params, token) => { EkycActions.postRequest(dispatch, params, token) },
        emandateOptions: (token) => { EmandateActions.emandateOptions(dispatch, token) },
        emandateRegistration: (params, token) => { EmandateActions.emandateRegistration(dispatch, params, token) },
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(SideMenu)