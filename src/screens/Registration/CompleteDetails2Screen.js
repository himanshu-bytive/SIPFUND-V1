import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity,
    Text,
} from "react-native";
import { connect } from 'react-redux'
import { Colors } from '../../common'
import { MySelectPicker, MyTextInput } from '../../components'
import { AntDesign } from 'react-native-vector-icons';
import { Image, Header } from 'react-native-elements';

function CompleteDetails2Screen(props) {

    const { token, updateRegister, setUserInfo, states, citys, getCitys, getPincode, userInfo, pincodeInfo } = props;
    const [stateList, setStateList] = useState([]);
    const [cityList, setCityList] = useState([]);


    useEffect(() => {
        if (userInfo) {
            setState(JSON.parse(JSON.stringify(userInfo)))
        }
    }, [userInfo]);

    useEffect(() => {
        if (states) {
            const stateList = states ? states.map((item) => ({ value: item.STATE_CODE, label: String(item.STATE_NAME) })) : []
            setStateList(stateList)
        }
        if (citys) {
            const cityList = citys ? citys.map((item) => ({ value: item.CITY, label: String(item.CITY) })) : []
            setCityList(cityList)
        }
    }, [states, citys]);

    useEffect(() => {
        if (pincodeInfo) {
            getCitys(pincodeInfo.stateCode, token)
            setState({ ...state, states: pincodeInfo.stateCode, city: pincodeInfo.cityName });
        }
    }, [pincodeInfo]);

    const [state, setState] = useState({
        address: '',
        pincode: '',
        states: '',
        city: '',
    });

    const [errors, setErrors] = useState({
        address: null,
        pincode: null,
        states: null,
        city: null,
    });

    const getStateCitys = async (pincode) => {
        if (pincode && pincode.length > 5) {
            getPincode(pincode, token)
        }
    }

    const onAction = async () => {
        const { address, pincode, states, city } = state;
        if (!address) {
            setErrors({ ...errors, address: 'Please Add a Address' })
            return
        }
        if (!pincode) {
            setErrors({ ...errors, pincode: 'Please Add a Date' })
            return
        }
        if (!states) {
            setErrors({ ...errors, states: 'Please Select a Value' })
            return
        }
        if (!city) {
            setErrors({ ...errors, city: 'Please Select a Value' })
            return
        }
        let params = {

        }
        updateRegister(params, token)
        setUserInfo({ ...userInfo, ...state })
        props.navigation.navigate('Register2')
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

                    <Text style={styles.occupation}>Address1 (As per address proof) <Text style={styles.error}>*</Text></Text>
                    <MyTextInput
                        multiline={true}
                        numberOfLines={4}
                        style={{ height: 100 }}
                        placeholder={'Add Comments'}
                        value={state.address}
                        error={errors.address}
                        onChangeText={(address) => { setErrors({ ...errors, address: null }); setState({ ...state, address }) }}
                    />

                    {/* DOB/DOI_sec */}
                    <Text style={styles.occupation}>Pincode <Text style={styles.error}>*</Text></Text>
                    <MyTextInput
                        keyboardType='numeric'
                        value={state.pincode}
                        error={errors.pincode}
                        onChangeText={(pincode) => { setErrors({ ...errors, pincode: null }); setState({ ...state, pincode }); getStateCitys(pincode) }}
                    />

                    {/* TITLE_sec */}
                    <Text style={styles.occupation}>State <Text style={styles.error}>*</Text></Text>
                    <MySelectPicker
                        values={stateList}
                        defultValue={state.states}
                        error={errors.states}
                        onChange={(states) => { setErrors({ ...errors, states: null }); setState({ ...state, states, city: '' }); getCitys(states, token) }}
                    />

                    {/* Investor Name_sec */}
                    <Text style={styles.occupation}>City <Text style={styles.error}>*</Text></Text>
                    <MySelectPicker
                        values={cityList}
                        defultValue={state.city}
                        error={errors.city}
                        onChange={(city) => { setErrors({ ...errors, city: null }); setState({ ...state, city }) }}
                    />
                </View>

            </ScrollView>
            {/* click_box */}
            <View style={styles.footer}>
                <View style={styles.click_box}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Register1')} style={styles.botton_box}>
                        <Text style={styles.get_otp}>Previous</Text>
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
        backgroundColor: "#EAE9EE",
    },
    header: {
        borderBottomColor: Colors.BLACK,
        borderBottomWidth: 1
    },
    container_sec: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fff",
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    error: {
        color: '#ff0000',
        padding: 5,
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
    user: state.home.user,
    userInfo: state.registration.userInfo,
    pincodeInfo: state.registration.pincodeInfo,
    states: state.registration.states,
    citys: state.registration.citys,
})

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { RegistrationActions } = require('../../store/RegistrationRedux')
    return {
        ...stateProps,
        ...ownProps,
        getCitys: (code, token) => { RegistrationActions.getCitys(dispatch, code, token) },
        getPincode: (code, token) => { RegistrationActions.getPincode(dispatch, code, token) },
        setUserInfo: (info) => { RegistrationActions.setUserInfo(dispatch, info) },
        updateRegister: (params, token) => { RegistrationActions.updateRegister(dispatch, params, token) },
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(CompleteDetails2Screen)