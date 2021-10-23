import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    Button,
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
import SvgUri from "expo-svg-uri";
import { Ionicons, AntDesign, EvilIcons, Entypo, FontAwesome5 } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

function Plan3(props) {
    const searchInput = useRef(null);
    let timer = useRef(null);
    const [search, setSearch] = useState('');
    const { token, goalDetail, isFetching, fetchFunds, funds } = props;

    useEffect(() => {
        searchInput.current.focus();
    }, [token]);

    const searchResults = (value) => {
        clearTimeout(timer.current);
        setSearch(value);
        timer.current = setTimeout(() => {
            if (value) {
                let params = { name: value }
                fetchFunds(params, token)
            }
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={40} color={Colors.RED} /></TouchableOpacity>}
                containerStyle={Styles.header}
                backgroundColor={Colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={Styles.headerImg}
                />}
                rightComponent={<View style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={Colors.RED} /></View>}
            />
            {isFetching && (<View style={Styles.loading}>
                <ActivityIndicator color={Colors.BLACK} size='large' />
            </View>)}
            <ScrollView>
                <View style={styles.education}>
                    <View style={styles.child_sec}>
                        <SvgUri
                            width="117"
                            height="117"
                            source={{ uri: goalDetail.goalImagePath }}
                        />
                    </View>
                    <View style={styles.education_sec}>
                        <Text style={styles.child}>{goalDetail.goal}</Text>
                        <Text style={styles.child_text}>{goalDetail.goalDescription}</Text>
                    </View>
                </View>

                <View style={styles.formsec}>
                    <EvilIcons name="search" size={30} color="#CD2700" />
                    <TextInput
                        ref={searchInput}
                        style={styles.Midcap}
                        placeholder={''}
                        onChangeText={(value) => searchResults(value)}
                        value={search}
                    />
                </View>

                <Text style={styles.results}>{funds.length} results</Text>

                {/* Axis Asset Management Company Ltd */}
                {funds.map((item, key) => <View key={key} style={styles.axis_asset}>
                    <View style={styles.company}>
                        <Image
                            source={{ uri: `https://sipfund.sfo2.digitaloceanspaces.com/product-AMC-images/${item.productAMCImage}` }}
                            style={styles.axisimg}
                        />
                        <View style={styles.management}>
                            <Text style={styles.axis}>{item.productDisplayName}</Text>
                            <View style={styles.midcap}>
                                <Text style={styles.moderately}>{item.productName}</Text>
                                <View style={{ borderWidth: 1, borderColor: Colors.DARK_GREY, }}></View>
                                <Text style={styles.moderately}>{item.productISIN}</Text>
                            </View>
                        </View>
                        <View style={styles.icon}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Plan4')}>
                                <AntDesign name="right" size={30} color="#838280" /></TouchableOpacity>
                        </View>
                    </View>
                </View>)}

            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    axis_asset: {
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: Colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        padding: 20,
    },
    company: {
        flexDirection: "row",
    },
    management: {
        marginLeft: 15,
        width: "75%",
    },
    axis: {
        fontSize: 15,

    },
    midcap: {
        flexDirection: "row",
        paddingVertical: 5,

    },
    moderately: {
        fontSize: 12,
        color: Colors.DEEP_GRAY,
        marginHorizontal: 5,
    },
    axisimg: {
        height: 39,
        width: 39,
    },
    adityabirla_img: {
        height: 24,
        width: 47,
    },
    icon: {
        position: "absolute",
        right: 0,
        marginTop: 8,
    },
    education: {
        flexDirection: "row",


        borderColor: Colors.GRAY_LIGHT,
        marginBottom: 20,
        padding: 20,
        backgroundColor: Colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,


    },
    education_sec: {
        width: '60%',
        marginTop: 10,
        paddingTop: 30,

    },
    goals_2: {
        height: 145,
        width: 145,

    },
    child: {
        fontSize: 16,
        fontWeight: "bold",
        paddingLeft: 20,
        color: Colors.DEEP_GRAY,
    },
    child_text: {
        fontSize: 16,
        color: Colors.RED,
        paddingTop: 15,
        paddingLeft: 20,
        fontWeight: "bold",
    },
    formsec: {
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 50,
        borderColor: Colors.DEEP_GRAY,
        marginHorizontal: 20,
        padding: 15,
    },
    Midcap: {
        fontSize: 18,
        paddingLeft: 10,
    },
    results: {
        fontSize: 12,
        marginLeft: 50,
        marginTop: 10,
        color: Colors.DEEP_GRAY,
        marginBottom: 20,
    },


});
const mapStateToProps = (state) => ({
    token: state.auth.token,
    users: state.auth.users,
    goalDetail: state.goals.goalDetail,
    isFetching: state.addmorefunds.isFetching,
    funds: state.addmorefunds.funds,
})

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { AddMoreFundsActions } = require('../../store/AddMoreFundsRedux')
    return {
        ...stateProps,
        ...ownProps,
        fetchFunds: (params, token) => { AddMoreFundsActions.fetchFunds(dispatch, params, token) },
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(Plan3)