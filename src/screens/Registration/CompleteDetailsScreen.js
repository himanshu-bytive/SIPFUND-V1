import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    ActivityIndicator,
    Platform,
    Text,
} from "react-native";
import { connect } from 'react-redux'
import moment from 'moment';
import { Styles, Colors, FormValidate } from '../../common'
import { MySelectPicker, MyDatePicker, MyTextInput } from '../../components'
import { AntDesign } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

const titleList = [{ value: 'Mr', label: 'Mr.' }, { value: 'Mrs', label: 'Mrs.' }, { value: 'Ms', label: 'Ms.' }, { value: 'M/s', label: 'M/s.' }]
const pepList = [{ value: 'N', label: 'No' }, { value: 'Y', label: 'Yes' }, { value: 'R', label: 'Related to PEP ' }]

function CompleteDetailsScreen(props) {
    const pageActive = useRef(false);
    const { token, users, fatcaDetails, nseDetails, userDetails, pan, updateRegister, settings, occupations, incomes, updateSuccess, isFetching } = props;
    const [occupationsList, setOccupationsList] = useState([]);
    const [incomesList, setIncomesList] = useState([]);
    const relationList = [
        { value: 'Father', label: 'Father' },
        { value: 'Mother', label: 'Mother' },
        { value: 'Brother', label: 'Brother' },
        { value: 'Sister', label: 'Sister' },
        { value: 'Daughter', label: 'Daughter' },
        { value: 'Wife', label: 'Wife' },
        { value: 'Husband', label: 'Husband' },
        { value: 'Son Daughter', label: 'Son Daughter' },
        { value: 'Father-in-law', label: 'Father-in-law' },
        { value: 'Mother-in-law', label: 'Mother-in-law' },
        { value: 'Son-in-law', label: 'Son-in-law' },
        { value: 'Daughter-in-law', label: 'Daughter-in-law' },
        { value: 'Uncle', label: 'Uncle' },
        { value: 'Aunt', label: 'Aunt' },
        { value: 'Niece', label: 'Niece' },
        { value: 'Nephew', label: 'Nephew' },
        { value: 'Grand Father', label: 'Grand Father' },
        { value: 'Grand Mother', label: 'Grand Mother' },
        { value: 'Other', label: 'Other' },
    ]

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
        nominate: true,
        nominateMinor: false,
        nominate1name: '',
        nominate1relation: '',
        nominate1dob: null,
        nominate1guard_name: '',
        nominate1guard_pan: '',
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

    useEffect(() => {
        if (updateSuccess && pageActive.current) {
            pageActive.current = false;
            props.navigation.navigate('RegisterAddress')
        }
    }, [updateSuccess]);

    useEffect(() => {
        settings(token)
    }, []);

    useEffect(() => {
        if (fatcaDetails || nseDetails || userDetails) {
            setState({
                occupation: nseDetails.occupation.OCCUPATION_CODE,
                dob: new Date(nseDetails.dob),
                title: nseDetails.title,
                investor: nseDetails?.inv_name ? nseDetails.inv_name : users.name,
                investorPan: nseDetails?.pan ? nseDetails.pan : (users.pan ? users.pan : pan),
                email: users.email,
                fatherName: nseDetails.father_name,
                motherName: nseDetails.mother_name,
                income: fatcaDetails.app_income.APP_INCOME_CODE,
                pep: fatcaDetails.pep.code,
                nominate: true,
                nominateMinor: (nseDetails.nominee1_type && nseDetails.nominee1_type == 'Y') ? true : false,
                nominate1name: nseDetails.nominee1_name,
                nominate1relation: nseDetails.nominee1_relation,
                nominate1dob: new Date(nseDetails.nominee1_dob),
                nominate1guard_name: nseDetails.nominee1_guard_name,
                nominate1guard_pan: nseDetails.nominee1_guard_pan,
            })
        }
    }, [fatcaDetails, nseDetails, userDetails]);

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


    const onAction = async () => {
        const { occupation, dob, title, investor, investorPan, email, fatherName, motherName, income, pep, nominate, nominateMinor, nominate1name, nominate1relation, nominate1dob, nominate1guard_name, nominate1guard_pan } = state;
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
        if (!FormValidate.isString(investor)) {
            setErrors({ ...errors, investor: 'Please Add a Value' })
            return
        }
        if (!investorPan) {
            setErrors({ ...errors, investorPan: 'Please Add a Value' })
            return
        }
        if (!FormValidate.validatePan(investorPan)) {
            setErrors({ ...errors, nominate1guard_pan: 'Please Add Validate PAN' })
            return
        }
        if (!FormValidate.isEmail(email)) {
            setErrors({ ...errors, email: 'Please Add a Email' })
            return
        }
        if (!FormValidate.isString(fatherName)) {
            setErrors({ ...errors, fatherName: 'Please Add Fathers Name' })
            return
        }
        if (!FormValidate.isString(motherName)) {
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
        if (nominate) {
            if (!FormValidate.isString(nominate1name)) {
                setErrors({ ...errors, nominate1name: 'Please Add Nominate Name' })
                return
            }
            if (!nominate1relation) {
                setErrors({ ...errors, nominate1relation: 'Please Select a Value' })
                return
            }
        }
        if (nominate && nominateMinor) {
            if (!nominate1dob) {
                setErrors({ ...errors, nominate1dob: 'Please Select a Date' })
                return
            }
            if (!nominate1guard_name) {
                setErrors({ ...errors, nominate1guard_name: 'Please Add Nominate Guard Name' })
                return
            }
            if (!nominate1guard_pan) {
                setErrors({ ...errors, nominate1guard_pan: 'Please Add Nominate Guard PAN' })
                return
            }
            if (!FormValidate.validatePan(nominate1guard_pan)) {
                setErrors({ ...errors, nominate1guard_pan: 'Please Add Validate Nominate Guard PAN' })
                return
            }
        }
        let params = { ...{ nseDetails }, ...{ fatcaDetails }, ...{ userDetails } }
        let selOccupation = occupations.find(x => x.OCCUPATION_CODE === occupation);
        let selTitle = titleList.find(x => x.value === title);
        let selIncome = incomes.find(x => x.APP_INCOME_CODE === income);
        let selPep = pepList.find(x => x.value === pep);
        params.nseDetails.occupation = {
            "OCCUPATION_CODE": selOccupation.OCCUPATION_CODE,
            "OCCUPATION_DESC": selOccupation.OCCUPATION_DESC
        }
        params.nseDetails.dob = dob ? dob.getTime() : '',
            params.nseDetails.title = selTitle.value
        params.nseDetails.inv_name = investor
        params.nseDetails.pan = investorPan
        params.nseDetails.email = email
        params.nseDetails.father_name = fatherName
        params.nseDetails.mother_name = motherName
        params.fatcaDetails.app_income = {
            "APP_INCOME_CODE": selIncome.APP_INCOME_CODE,
            "APP_INCOME_DESC": selIncome.APP_INCOME_DESC
        }
        params.fatcaDetails.pep = {
            "code": selPep.value,
            "desc": selPep.label
        }
        params.nseDetails.no_of_nominee = nominate ? "1" : ''
        params.nseDetails.nominee1_name = nominate1name
        params.nseDetails.nominee1_relation = nominate1relation
        params.nseDetails.nominee1_dob = nominate1dob ? nominate1dob.getTime() : '',
            params.nseDetails.nominee1_guard_name = nominate1guard_name
        params.nseDetails.nominee1_guard_pan = nominate1guard_pan
        params.nseDetails.nominee1_type = nominateMinor ? 'Y' : 'N'
        updateRegister(params, token)
        pageActive.current = true;
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={40} color={Colors.RED} /></TouchableOpacity>}
                containerStyle={styles.header}
                backgroundColor={Colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
                rightComponent={<View style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={Colors.RED} /></View>}
            />
            {isFetching && (<View style={Styles.loading}>
                <ActivityIndicator color={Colors.BLACK} size='large' />
            </View>)}
            <ScrollView>
                {/* container_sec */}
                <View style={styles.container_sec}>

                    <Text style={styles.occupation}>Occupation <Text style={styles.error}>*</Text></Text>
                    <MySelectPicker
                        values={occupationsList}
                        placeholder={'Select Occupation'}
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
                        placeholder={'Select Title'}
                        defultValue={state.title}
                        error={errors.title}
                        onChange={(title) => { setErrors({ ...errors, title: null }); setState({ ...state, title }) }}
                    />

                    {/* Investor Name_sec */}
                    <Text style={styles.occupation}>Investor Name <Text style={styles.error}>*</Text></Text>
                    <MyTextInput
                        value={state.investor}
                        placeholder={'Investor Name'}
                        error={errors.investor}
                        onChangeText={(investor) => { setErrors({ ...errors, investor: null }); setState({ ...state, investor }) }}
                    />


                    {/* Individual PAN_sec */}
                    <Text style={styles.occupation}>Individual PAN <Text style={styles.error}>*</Text></Text>
                    <MyTextInput
                        placeholder={'Investor Pan'}
                        value={state.investorPan}
                        error={errors.investorPan}
                        onChangeText={(investorPan) => { setErrors({ ...errors, investorPan: null }); setState({ ...state, investorPan }) }}
                    />

                    {/* Email Id_sec */}
                    <Text style={styles.occupation}>Email Id <Text style={styles.error}>*</Text></Text>
                    <MyTextInput
                        placeholder={'Email'}
                        value={state.email}
                        error={errors.email}
                        onChangeText={(email) => { setErrors({ ...errors, email: null }); setState({ ...state, email }) }}
                    />

                    <Text style={styles.occupation}>Father Name <Text style={styles.error}>*</Text></Text>
                    <MyTextInput
                        placeholder={'Father Name'}
                        value={state.fatherName}
                        error={errors.fatherName}
                        onChangeText={(fatherName) => { setErrors({ ...errors, fatherName: null }); setState({ ...state, fatherName }) }}
                    />

                    <Text style={styles.occupation}>Mother Name <Text style={styles.error}>*</Text></Text>
                    <MyTextInput
                        placeholder={'Mother Name'}
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
                        placeholder={'Select Income'}
                        defultValue={state.income}
                        error={errors.income}
                        onChange={(income) => { setErrors({ ...errors, income: null }); setState({ ...state, income }) }}
                    />


                    <Text style={styles.occupation}>PEP (Politically Exposed Person) <Text style={styles.error}>*</Text></Text>
                    <MySelectPicker
                        values={pepList}
                        placeholder={'Select PEP'}
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
                    onPress={() => { setErrors({ ...errors, nominate: null }); setState({ ...state, nominate: !state.nominate }) }}
                />

                {state.nominate && (<View style={styles.container_sec}>
                    <Text style={styles.occupation}>Name <Text style={styles.error}>*</Text></Text>
                    <MyTextInput
                        placeholder={'Nominate Name'}
                        value={state.nominate1name}
                        error={errors.nominate1name}
                        onChangeText={(nominate1name) => { setErrors({ ...errors, nominate1name: null }); setState({ ...state, nominate1name }) }}
                    />

                    <Text style={styles.occupation}>Relation <Text style={styles.error}>*</Text></Text>
                    <MySelectPicker
                        values={relationList}
                        defultValue={state.nominate1relation}
                        error={errors.nominate1relation}
                        onChange={(nominate1relation) => { setErrors({ ...errors, nominate1relation: null }); setState({ ...state, nominate1relation }) }}
                    />
                </View>)}
                {(state.nominate && state.nominateMinor) && (<View style={styles.container_sec}>
                    <Text style={styles.occupation}>DOB/DOI <Text style={styles.error}>*</Text></Text>
                    <MyDatePicker defultValue={state.nominate1dob} error={errors.nominate1dob} onChange={(nominate1dob) => { setErrors({ ...errors, nominate1dob: null }); setState({ ...state, nominate1dob }) }} />

                    <Text style={styles.occupation}>Nominee Guardian Name <Text style={styles.error}>*</Text></Text>
                    <MyTextInput
                        placeholder={'Nominee Guardian Name'}
                        value={state.nominate1guard_name}
                        error={errors.nominate1guard_name}
                        onChangeText={(nominate1guard_name) => { setErrors({ ...errors, nominate1guard_name: null }); setState({ ...state, nominate1guard_name }) }}
                    />

                    <Text style={styles.occupation}>Nominee Guardian PAN <Text style={styles.error}>*</Text></Text>
                    <MyTextInput
                        placeholder={'Nominee Guardian PAN'}
                        value={state.nominate1guard_pan}
                        error={errors.nominate1guard_pan}
                        onChangeText={(nominate1guard_pan) => { setErrors({ ...errors, nominate1guard_pan: null }); setState({ ...state, nominate1guard_pan: (nominate1guard_pan).toUpperCase() }) }}
                    />
                </View>)}

                {state.nominate && (<View style={styles.container_sec}>
                    <CheckBox
                        title='Is Nominate Minor?'
                        containerStyle={styles.checkbox_style}
                        textStyle={{ color: Colors.BLACK, fontSize: 12, marginLeft: 5, }}
                        checked={state.nominateMinor}
                        checkedColor={Colors.BLACK}
                        uncheckedColor={Colors.BLACK}
                        onPress={() => { setErrors({ ...errors, nominateMinor: null }); setState({ ...state, nominateMinor: !state.nominateMinor }) }}
                    />
                </View>)}

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
        </KeyboardAvoidingView>
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
    users: state.auth.user,
    nseDetails: state.registration.nseDetails,
    fatcaDetails: state.registration.fatcaDetails,
    userDetails: state.registration.userDetails,
    pan: state.home.pan,
    isFetching: state.registration.isFetching,
    occupations: state.registration.occupations,
    incomes: state.registration.incomes,
    updateSuccess: state.registration.updateSuccess,
})

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { RegistrationActions } = require('../../store/RegistrationRedux')
    return {
        ...stateProps,
        ...ownProps,
        settings: (token) => { RegistrationActions.settings(dispatch, token) },
        updateRegister: (params, token) => { RegistrationActions.updateRegister(dispatch, params, token) },
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(CompleteDetailsScreen)