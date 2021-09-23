import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from "react-native";
import { connect } from 'react-redux'
import { Colors, FormValidate } from '../../common'
import { MySelectPicker, MyDatePicker, MyTextInput } from '../../components'
import { AntDesign } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

const titleList = [{ value: 'MR', label: 'MR.' }, { value: 'MRS', label: 'MRS.' }]
const yesNoList = [{ value: 'Yes', label: 'Yes' }, { value: 'No', label: 'No' }]

function CompleteDetailsScreen(props) {
    const { token, setUserInfo, settings, occupations, incomes, userInfo } = props;
    const [occupationsList, setOccupationsList] = useState([]);
    const [incomesList, setIncomesList] = useState([]);

    useEffect(() => {
        settings(token)
    }, []);

    useEffect(() => {
        if (userInfo) {
            setState(JSON.parse(JSON.stringify(userInfo)))
        }
    }, [userInfo]);

    useEffect(() => {
        if (occupations) {
            const occupationsList = occupations ? occupations.map((item) => ({ value: item.OCCUPATION_CODE, label: String(item.OCCUPATION_DESC) })) : []
            setOccupationsList(occupationsList)
        }
        if (incomes) {
            const incomesList = incomes ? incomes.map((item) => ({ value: item.APP_INCOME_CODE, label: String(item.APP_INCOME_DESC) })) : []
            setIncomesList(incomesList)
        }
    }, [occupations, incomes]);

    const [state, setState] = useState({
        occupation: '',
        dob: null,
        title: '',
        investor: '',
        investorPan: '',
        email: '',
        fatherName: '',
        motherName: '',
        income: '',
        pep: '',
        nominate: false,
    });

    const [errors, setErrors] = useState({
        occupation: null,
        dob: null,
        title: null,
        investor: null,
        investorPan: null,
        email: null,
        fatherName: null,
        motherName: null,
        income: null,
        pep: null,
        nominate: null,
    });

    const onAction = async () => {
        const { occupation, dob, title, investor, investorPan, email, fatherName, motherName, income, pep, nominate } = state;
        if (!occupation) {
            setErrors({ ...errors, occupation: 'Please Select a Value' })
            return
        }
        if (!dob) {
            setErrors({ ...errors, dob: 'Please Select a Date' })
            return
        }
        if (!title) {
            setErrors({ ...errors, title: 'Please Select a Value' })
            return
        }
        if (!investor) {
            setErrors({ ...errors, investor: 'Please Add a Value' })
            return
        }
        if (!investorPan) {
            setErrors({ ...errors, investorPan: 'Please Add a Value' })
            return
        }
        if (!FormValidate.isEmail(email)) {
            setErrors({ ...errors, email: 'Please Add a Email' })
            return
        }
        if (!fatherName) {
            setErrors({ ...errors, fatherName: 'Please Add Fathers Name' })
            return
        }
        if (!motherName) {
            setErrors({ ...errors, motherName: 'Please Add Mothers Name' })
            return
        }
        if (!income) {
            setErrors({ ...errors, income: 'Please Select a Value' })
            return
        }
        if (!pep) {
            setErrors({ ...errors, pep: 'Please Select a Value' })
            return
        }
        setUserInfo(state)
        props.navigation.navigate('Register1')

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
                {/* container_sec */}
                <View style={styles.container_sec}>

                    <Text style={styles.occupation}>Occupation <Text style={styles.error}>*</Text></Text>
                    <MySelectPicker
                        values={occupationsList}
                        defultValue={state.occupation}
                        error={errors.occupation}
                        onChange={(occupation) => { setErrors({ ...errors, occupation: null }); setState({ ...state, occupation }) }}
                    />

                    {/* DOB/DOI_sec */}
                    <Text style={styles.occupation}>DOB/DOI <Text style={styles.error}>*</Text></Text>
                    <MyDatePicker defultValue={state.dob} error={errors.dob} onChange={(dob) => { setErrors({ ...errors, dob: null }); setState({ ...state, dob }) }} />

                    {/* TITLE_sec */}
                    <Text style={styles.occupation}>TITLE <Text style={styles.error}>*</Text></Text>
                    <MySelectPicker
                        values={titleList}
                        defultValue={state.title}
                        error={errors.title}
                        onChange={(title) => { setErrors({ ...errors, title: null }); setState({ ...state, title }) }}
                    />


                    {/* Investor Name_sec */}
                    <Text style={styles.occupation}>Investor Name <Text style={styles.error}>*</Text></Text>
                    <MyTextInput
                        value={state.investor}
                        error={errors.investor}
                        onChangeText={(investor) => { setErrors({ ...errors, investor: null }); setState({ ...state, investor }) }}
                    />


                    {/* Individual PAN_sec */}
                    <Text style={styles.occupation}>Individual PAN <Text style={styles.error}>*</Text></Text>
                    <MyTextInput
                        // keyboardType='numeric'
                        value={state.investorPan}
                        error={errors.investorPan}
                        onChangeText={(investorPan) => { setErrors({ ...errors, investorPan: null }); setState({ ...state, investorPan }) }}
                    />

                    {/* Email Id_sec */}
                    <Text style={styles.occupation}>Email Id <Text style={styles.error}>*</Text></Text>
                    <MyTextInput
                        value={state.email}
                        error={errors.email}
                        onChangeText={(email) => { setErrors({ ...errors, email: null }); setState({ ...state, email }) }}
                    />

                    <Text style={styles.occupation}>Father Name <Text style={styles.error}>*</Text></Text>
                    <MyTextInput
                        value={state.fatherName}
                        error={errors.fatherName}
                        onChangeText={(fatherName) => { setErrors({ ...errors, fatherName: null }); setState({ ...state, fatherName }) }}
                    />

                    <Text style={styles.occupation}>Mother Name <Text style={styles.error}>*</Text></Text>
                    <MyTextInput
                        value={state.motherName}
                        error={errors.motherName}
                        onChangeText={(motherName) => { setErrors({ ...errors, motherName: null }); setState({ ...state, motherName }) }}
                    />

                </View>

                <View style={{ borderWidth: 5, borderColor: "#EAE9EE", marginTop: 5, }}></View>

                {/* KYC_sec */}
                <View style={styles.container_sec}>

                    <Text style={styles.kyc}>KYC</Text>
                    <Text style={styles.occupation}>Annual Income <Text style={styles.error}>*</Text></Text>
                    <MySelectPicker
                        values={incomesList}
                        defultValue={state.income}
                        error={errors.income}
                        onChange={(income) => { setErrors({ ...errors, income: null }); setState({ ...state, income }) }}
                    />


                    <Text style={styles.occupation}>PEP (Politically Exposed Person) <Text style={styles.error}>*</Text></Text>
                    <MySelectPicker
                        values={yesNoList}
                        defultValue={state.pep}
                        error={errors.pep}
                        onChange={(pep) => { setErrors({ ...errors, pep: null }); setState({ ...state, pep }) }}
                    />
                </View>
                <View style={{ borderWidth: 5, borderColor: "#EAE9EE", marginTop: 5, }}></View>

                {/* Nominee Details_sec */}
                <Text style={styles.Nominee}>Nominee Details</Text>

                {/* check_box */}
                <CheckBox
                    title='Do you want to nominate some one?'
                    containerStyle={styles.checkbox_style}
                    textStyle={{ color: Colors.BLACK, fontSize: 12, marginLeft: 5, }}
                    checked={state.nominate}
                    checkedColor={Colors.BLACK}
                    uncheckedColor={Colors.BLACK}
                    onPress={(nominate) => { setErrors({ ...errors, nominate: null }); setState({ ...state, nominate: !state.nominate }) }}
                />

            </ScrollView>
            {/* click_box */}
            <View style={styles.footer}>

                <View style={styles.click_box}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={styles.botton_box}>
                        <Text style={styles.get_otp}>Skip</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onAction} style={styles.botton_box}>
                        <Text style={styles.get_otp}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        borderBottomColor: Colors.BLACK,
        borderBottomWidth: 1
    },
    container_sec: {
        margin: 10,
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
    occupation: {
        fontSize: 15,
        color: Colors.DEEP_GRAY,
        fontWeight: "bold",
        marginTop: 10,
    },
    private_sector: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 5,
    },
    private: {
        fontSize: 15,
        width: "92%",

    },
    date: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 5,
    },
    dd: { marginLeft: 8, },
    AVVPJ6708P: {
        marginTop: 10,
        fontSize: 15,
    },
    kyc: {
        fontSize: 15,
        fontWeight: "bold",
    },
    Nominee: {
        fontSize: 15,
        marginLeft: 10,
        fontWeight: "bold",
        marginVertical: 10,
    },
    checkbox_style: {
        backgroundColor: Colors.TRANSPARENT,
        borderColor: Colors.TRANSPARENT,
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
        marginTop: 20,

        borderColor: Colors.DEEP_GRAY,

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
    token: state.auth.token,
    userInfo: state.registration.userInfo,
    occupations: state.registration.occupations,
    incomes: state.registration.incomes,
})

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { RegistrationActions } = require('../../store/RegistrationRedux')
    return {
        ...stateProps,
        ...ownProps,
        settings: (token) => { RegistrationActions.settings(dispatch, token) },
        setUserInfo: (info) => { RegistrationActions.setUserInfo(dispatch, info) },
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(CompleteDetailsScreen)