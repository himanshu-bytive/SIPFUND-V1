import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    Button,
    View,
    Image,
    TouchableOpacity,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    TextInput,
    ActivityIndicator
} from "react-native";
import { connect } from 'react-redux'
import { Styles, Config, Colors, FormValidate } from '../../common'
import { styles } from './PanStyle'
import { Ionicons, AntDesign, Entypo, FontAwesome5 } from 'react-native-vector-icons';
import { Header, CheckBox } from 'react-native-elements';

function PanScreen(props) {
    const pageActive = useRef(false);
    const pannumberInput = useRef(null);
    const { token, isFetching, phone, pan, updatePan } = props;

    useEffect(() => {
        if (pan) {
            props.navigation.navigate('Home')
        }
    }, [pan]);


    const [state, setState] = useState({
        pannumber: '',
    });

    const [errors, setError] = useState({
        pannumber: null,
    });

    const onAction = async () => {
        if (!state.pannumber) {
            pannumberInput.current.focus();
            setError({ ...errors, pannumber: 'Please enter Pan' });
            return
        }
        pageActive.current = true;
        let params = {
            "mobileNo": phone,
            "pan": state.pannumber
        }
        updatePan(params, token);
        setState({ ...state, pannumber: '' });
    }

    return (
        <View style={styles.container}>
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={{ marginTop: 20 }}><Entypo name={"menu"} size={30} color={Colors.RED} /></TouchableOpacity>} containerStyle={styles.header}
                backgroundColor={Colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
            />
            <ScrollView style={Styles.containerScroll}>
                <View style={styles.mainbox}>
                    <View style={styles.imgbox}>
                        <Image
                            source={require('../../../assets/Pancard.png')}
                            style={styles.Panimg}
                        />
                    </View>
                    <Text style={styles.pan}>PAN Number</Text>
                    <View style={styles.text_box}>
                        <FontAwesome5 name="credit-card" size={20} color="#838280" />
                        <TextInput
                            ref={pannumberInput}
                            style={styles.inputsec}
                            placeholder={'Pan'}
                            onChangeText={(pannumber) => { setError({ ...errors, pannumber: null }); setState({ ...state, pannumber }) }}
                            value={state.pannumber}
                        />
                    </View>
                    {(errors.pannumber) && (<Text style={styles.error}>{errors.pannumber}</Text>)}
                    <View style={styles.button}>
                        {isFetching ? <View style={styles.botton_box}><ActivityIndicator size={30} color={Colors.WHITE} /></View> :
                            <TouchableOpacity onPress={() => onAction()} style={styles.botton_box}>
                                <Text style={styles.get_otp}>CREATE</Text>
                            </TouchableOpacity>}
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Image
                            source={require('../../../assets/pan_footer_img.png')}
                            style={styles.nseimg}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>

    );
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    phone: state.auth.phone,
    pan: state.home.pan,
    isFetching: state.home.isFetching,
    error: state.home.error,
})

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { HomeActions } = require('../../store/HomeRedux')
    return {
        ...stateProps,
        ...ownProps,
        updatePan: (params, token) => { HomeActions.updatePan(dispatch, params, token) },
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(PanScreen)