import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    Button,
    View,
    ImageBackground,
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
import { Image, Header, CheckBox } from 'react-native-elements';

function PanScreen(props) {
    const { token, isFetching, error, pan, updatePan } = props;

    console.log(token)
    console.log('fech ... ', isFetching)

    // props.navigation.navigate('Goals')

    const onAction = () => {
        updatePan({
            "mobileNo": "9177994497",
            "pan": "XXXXX1111X"
        })
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
                        {<FontAwesome5 name="credit-card" size={20} color="#838280" />}
                        <TextInput style={{ borderBottomWidth: 1, borderColor: '#828282', width: "100%" }} />
                    </View>

                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => onAction()} style={styles.botton_box}>
                            <Text style={styles.get_otp}>CREATE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>

    );
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    isFetching: state.home.isFetching,
    error: state.home.error,
    pan: state.home.pan,
})

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { HomeActions } = require('../../store/HomeRedux')
    return {
        ...stateProps,
        ...ownProps,
        updatePan: (params) => { HomeActions.updatePan(dispatch, params) },
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(PanScreen)