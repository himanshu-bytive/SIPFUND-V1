import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity,
    Text,
    ActivityIndicator
} from "react-native";
import { connect } from 'react-redux'
import { Colors } from '../../common'
import { MySelectPicker, MyTextInput } from '../../components'
import { AntDesign } from 'react-native-vector-icons';
import { Image, Header, Overlay } from 'react-native-elements';

function CompleteDetails3Screen(props) {
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const { token, isFetching, updateRegister, setUserInfo, createRegister, userInfo, accountTypes, banks, getBankDetails, bankDetails, } = props;
    const [accountTypeList, setAccountTypeList] = useState([]);
    const [bankList, setBankList] = useState([]);

    useEffect(() => {
        if (userInfo) {
            setState(JSON.parse(JSON.stringify(userInfo)))
        }
    }, [userInfo]);


    useEffect(() => {
        if (accountTypes) {
            const accountTypeList = accountTypes ? accountTypes.map((item) => ({ value: item.ACC_TYPE, label: String(item.DESCRIPTION) })) : []
            setAccountTypeList(accountTypeList)
        }
        if (banks) {
            const bankList = banks ? banks.map((item) => ({ value: item.BANK_CODE, label: String(item.BANK_NAME) })) : []
            setBankList(bankList)
        }
        if (bankDetails) {
            let selectedBank = bankList.find(x => x.label == bankDetails.label);
            // console.log(selectedBank)
            setState({ ...state, bank: bankDetails.bankName, branchName: bankDetails.branch, branchAddress: bankDetails.address })
        }
    }, [accountTypes, banks, bankDetails]);


    const [state, setState] = useState({
        accountType: '',
        accountNumber: '',
        ifsc: '',
        bank: '',
        branchName: '',
        branchAddress: '',
    });

    const [errors, setErrors] = useState({
        accountType: null,
        accountNumber: null,
        ifsc: null,
        bank: null,
        branchName: null,
        branchAddress: null,
    });

    const onAction = async () => {
        const { accountType, accountNumber, ifsc, bank, branchName, branchAddress } = state;
        if (!accountType) {
            setErrors({ ...errors, accountType: 'Please Select a Value' })
            return
        }
        if (!accountNumber) {
            setErrors({ ...errors, accountNumber: 'Please Add a Value' })
            return
        }
        if (!ifsc) {
            setErrors({ ...errors, ifsc: 'Please Add a Value' })
            return
        }
        if (!bank) {
            setErrors({ ...errors, bank: 'Please Select a Value' })
            return
        }
        if (!branchName) {
            setErrors({ ...errors, branchName: 'Please Add a Value' })
            return
        }
        if (!branchAddress) {
            setErrors({ ...errors, branchAddress: 'Please Add a Value' })
            return
        }
        let params = {

        }
        updateRegister(params, token)
        setUserInfo({ ...userInfo, ...state })
        let paramsNew = {
            "service_request": {
                "acc_no": "60247485000",
                "acc_type": "SB",
                "addr1": "trimurti na",
                "addr2": "",
                "addr3": "",
                "bank_name": "Bank of Maharashtra",
                "branch_addr1": "332, NEW SUBHEDAR LAYOUT, HUDKESHAWR ROAD, NAGPUR",
                "branch_addr2": "",
                "branch_addr3": "",
                "branch_city": "",
                "branch_country": "IND",
                "branch_name": "HUDKESHWAR",
                "branch_pincode": "",
                "city": "NAGPUR",
                "country": "IND",
                "dob": "01-Jul-1993",
                "dp_id": "",
                "email": "abhijatbahi0107@gmail.com",
                "exempt_category": "",
                "exempt_ref_no": "",
                "exemption": "N",
                "father_name": "vijay",
                "guard_dob": "",
                "guard_exempt_category": "",
                "guard_exemption": "",
                "guard_kyc": "",
                "guard_name": "",
                "guard_pan": "",
                "guard_pan_ref_no": "",
                "guard_valid_pan": "",
                "hold_nature": "SI",
                "ifsc_code": "MAHB0001403",
                "inv_name": "abhijat",
                "jh1_dob": "",
                "jh1_email": "",
                "jh1_exempt_category": "",
                "jh1_exempt_ref_no": "",
                "jh1_exemption": "",
                "jh1_kyc": "",
                "jh1_mobile_no": "",
                "jh1_name": "",
                "jh1_pan": "",
                "jh1_valid_pan": "",
                "jh2_dob": "",
                "jh2_email": "",
                "jh2_exempt_category": "",
                "jh2_exempt_ref_no": "",
                "jh2_exemption": "",
                "jh2_kyc": "",
                "jh2_mobile_no": "",
                "jh2_name": "",
                "jh2_pan": "",
                "jh2_valid_pan": "",
                "kyc": "Y",
                "mfu_can": "",
                "mobile_no": "9665974013",
                "mother_name": "renu",
                "no_of_nominee": "1",
                "nominee1_addr1": "",
                "nominee1_addr2": "",
                "nominee1_addr3": "",
                "nominee1_city": "",
                "nominee1_dob": "",
                "nominee1_guard_name": "",
                "nominee1_guard_pan": "",
                "nominee1_name": "vicky",
                "nominee1_percent": "100.0",
                "nominee1_pincode": "",
                "nominee1_relation": "Brother",
                "nominee1_state": "",
                "nominee1_type": "N",
                "nominee2_dob": "",
                "nominee2_guard_name": "",
                "nominee2_guard_pan": "",
                "nominee2_name": "",
                "nominee2_percent": "",
                "nominee2_relation": "",
                "nominee2_type": "",
                "nominee3_dob": "",
                "nominee3_guard_name": "",
                "nominee3_guard_pan": "",
                "nominee3_name": "",
                "nominee3_percent": "",
                "nominee3_relation": "",
                "nominee3_type": "",
                "nri_addr1": "",
                "nri_addr2": "",
                "nri_addr3": "",
                "nri_city": "",
                "nri_country": "",
                "nri_pincode": "",
                "nri_state": "",
                "occupation": "41",
                "off_fax": "",
                "off_phone": "",
                "pan": "BCDPA0031K",
                "pincode": "440022",
                "res_fax": "",
                "res_phone": "",
                "state": "MA",
                "tax_status": "01",
                "title": "",
                "trxn_acceptance": "OL",
                "valid_pan": "Y"
            }
        }
        createRegister(paramsNew, token)
        toggleOverlay()
        props.navigation.navigate('Register3')
    }

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
                    <Text style={styles.occupation}>Account Type <Text style={styles.error}>*</Text></Text>
                    <MySelectPicker
                        values={accountTypeList}
                        defultValue={state.accountType}
                        error={errors.accountType}
                        onChange={(accountType) => { setErrors({ ...errors, accountType: null }); setState({ ...state, accountType }) }}
                    />

                    <Text style={styles.occupation}>Account No. <Text style={styles.error}>*</Text></Text>
                    <MyTextInput
                        keyboardType='numeric'
                        value={state.accountNumber}
                        error={errors.accountNumber}
                        onChangeText={(accountNumber) => { setErrors({ ...errors, accountNumber: null }); setState({ ...state, accountNumber }) }}
                    />

                    <Text style={styles.occupation}>IFSC Code <Text style={styles.error}>*</Text></Text>
                    <MyTextInput
                        value={state.ifsc}
                        error={errors.ifsc}
                        onChangeText={(ifsc) => { setErrors({ ...errors, ifsc: null }); setState({ ...state, ifsc }) }}
                    />

                    <View style={{ alignItems: "center", }}>
                        {isFetching ? <View style={styles.botton_box}><ActivityIndicator size={30} color={Colors.WHITE} /></View> :
                            <TouchableOpacity onPress={() => getBankDetails(state.ifsc, token)} style={styles.botton_box}>
                                <Text style={styles.get_otp}>Fetch Bank Details</Text>
                            </TouchableOpacity>}
                    </View>
                </View>

                {/* botton_box_sec */}
                <View style={{ borderWidth: 6, borderColor: "#EAE9EE", marginVertical: 10, }}></View>

                {/* container_2_sec */}
                <View style={styles.container_sec}>

                    <Text style={styles.occupation}>Bank Name <Text style={styles.error}>*</Text></Text>
                    <MySelectPicker
                        values={bankList}
                        defultValue={state.bank}
                        error={errors.bank}
                        onChange={(bank) => { setErrors({ ...errors, bank: null }); setState({ ...state, bank }) }}
                    />

                    <Text style={styles.occupation}>Branch Name <Text style={styles.error}>*</Text></Text>
                    <MyTextInput
                        value={state.branchName}
                        error={errors.branchName}
                        onChangeText={(branchName) => { setErrors({ ...errors, branchName: null }); setState({ ...state, branchName }) }}
                    />

                    <Text style={styles.occupation}>Branch Address <Text style={styles.error}>*</Text></Text>
                    <MyTextInput
                        value={state.branchAddress}
                        error={errors.branchAddress}
                        onChangeText={(branchAddress) => { setErrors({ ...errors, branchAddress: null }); setState({ ...state, branchAddress }) }}
                    />

                </View>

                {/* click_box */}
            </ScrollView>

            <View style={styles.footer}>

                <View style={styles.click_box}>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Register2')} style={styles.botton_box}>
                        <Text style={styles.get_otp}>Previous</Text>
                    </TouchableOpacity>
                    {isFetching ? <View style={styles.botton_box}><ActivityIndicator size={30} color={Colors.WHITE} /></View> :
                        <TouchableOpacity onPress={onAction} style={styles.botton_box}>
                            <Text style={styles.get_otp}>Next</Text>
                        </TouchableOpacity>}
                </View>

            </View>

            <Overlay isVisible={visible} overlayStyle={{ margin: 10, backgroundColor: '#fff' }}>
                <View style={{ padding: 10 }}>
                    <Text style={{ paddingVertical: 5, fontSize: 18, fontWeight: "bold", }}>Thank you for creating your investor account!</Text>
                    <Text style={{ paddingVertical: 5, fontSize: 15, fontWeight: "bold", color: '#7E7E7E' }}>Please check your email and approve the link sent by NSE for your account activation.</Text>
                    <TouchableOpacity onPress={toggleOverlay}><Text style={{ color: '#ff0000', paddingTop: 20, }}>OK</Text></TouchableOpacity>
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
    error: {
        color: '#ff0000',
        padding: 5,
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
    isFetching: state.registration.isFetching,
    token: state.auth.token,
    user: state.home.user,
    userInfo: state.registration.userInfo,
    accountTypes: state.registration.accountTypes,
    banks: state.registration.banks,
    bankDetails: state.registration.bankDetails,
})

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { RegistrationActions } = require('../../store/RegistrationRedux')
    return {
        ...stateProps,
        ...ownProps,
        getBankDetails: (code, token) => { RegistrationActions.getBankDetails(dispatch, code, token) },
        setUserInfo: (info) => { RegistrationActions.setUserInfo(dispatch, info) },
        createRegister: (params, token) => { RegistrationActions.createRegister(dispatch, params, token) },
        updateRegister: (params, token) => { RegistrationActions.updateRegister(dispatch, params, token) },
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(CompleteDetails3Screen)