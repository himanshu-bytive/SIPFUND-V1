import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from "react-native";
import { connect } from 'react-redux'
import { Styles, Config, Colors } from '../../common'
import { MySelectPicker } from '../../components'
import { AntDesign } from 'react-native-vector-icons';
import { Image, Header } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

function OwnerChoice(props) {
    const { token, mainCategory, mainCat, subCatagorys, subCat, fetchScheme, schemeCat, schemeGo } = props
    const [catList, setCatList] = useState([]);
    const [subcatList, setSubCatList] = useState([]);
    const [schemeList, setSchemeList] = useState([]);
    useEffect(() => {
        if (token) {
            mainCategory(token)
        }
    }, [token]);

    useEffect(() => {
        if (mainCat) {
            const stateList = mainCat.map((item) => ({ value: item, label: String(item) }))
            setCatList(stateList)
        }
    }, [mainCat]);

    useEffect(() => {
        if (subCat) {
            const subcatList = subCat.map((item) => ({ value: item, label: String(item) }))
            setSubCatList(subcatList)
        }
    }, [subCat]);

    useEffect(() => {
        if (schemeCat) {
            const schemeList = schemeCat.map((item) => ({ value: item.productISIN, label: String(item.productName) }))
            setSchemeList(schemeList)
        }
    }, [schemeCat]);

    const [state, setState] = useState({
        catagory: '',
        subcatagory: '',
        scheme: '',
    });

    const [errors, setErrors] = useState({
        catagory: null,
        subcatagory: null,
        scheme: null,
    });

    const catAction = async (catagory) => {
        if (catagory) {
            setState({ ...state, catagory })
            subCatagorys({ catagory }, token)
        }
    }

    const subcatAction = async (subcatagory) => {
        if (subcatagory) {
            setState({ ...state, subcatagory })
            fetchScheme({ subcatagory }, token)
        }
    }

    const schemeAction = async () => {
        if (state.scheme) {
            schemeGo({ "isin": state.scheme }, token)
        }
    }

    return (
        <View style={styles.container}>
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: 20 }}><AntDesign name={"arrowleft"} size={40} color={Colors.RED} /></TouchableOpacity>}
                containerStyle={Styles.header}
                backgroundColor={Colors.LIGHT_WHITE}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
                rightComponent={<View style={{ marginTop: 20, marginRight: 10, }}><AntDesign name={"shoppingcart"} size={40} color={Colors.RED} /></View>}
            />

            <ScrollView style={styles.containerScroll}>
                <View style={styles.report_sec}>
                    <View>
                        <MySelectPicker
                            values={catList}
                            defultValue={state.catagory}
                            error={errors.catagory}
                            onChange={(catagory) => { setErrors({ ...errors, catagory: null }); catAction(catagory) }}
                        />
                    </View>


                    <View>
                        <MySelectPicker
                            values={subcatList}
                            defultValue={state.subcatagory}
                            error={errors.subcatagory}
                            onChange={(subcatagory) => { setErrors({ ...errors, subcatagory: null }); subcatAction(subcatagory) }}
                        />
                    </View>

                    <View>
                        <MySelectPicker
                            values={schemeList}
                            defultValue={state.scheme}
                            error={errors.scheme}
                            onChange={(scheme) => { setErrors({ ...errors, scheme: null }); setState({ ...state, scheme }) }}
                        />
                        <View style={{ position: "absolute", right: 10, marginVertical: 20, flexDirection: "row", alignItems: "center", }}>
                            <AntDesign name="down" size={20} color="#000000" />
                            <TouchableOpacity onPress={() => schemeAction()} style={styles.botton_box}>
                                <Text style={styles.get_otp}>GO</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
                <View style={styles.category_sec}>
                    <Text style={styles.category}>First select category.</Text>
                    <Text style={styles.category}>Then select subcategory.</Text>
                    <Text style={styles.category}>Then select scheme.</Text>
                    <Text style={styles.category}>Press GO.</Text>
                    <Text style={styles.category}>For changing scheme please press the scheme nameagain</Text>
                </View>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    container_sec: {
        margin: 10,

    },
    containerScroll: {
        width: '100%'
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },

    investment_summary: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: Colors.DEEP_GRAY,
    },

    schemetype1: {
        color: Colors.DEEP_GRAY,
        marginVertical: 20,
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 10,
    },
    botton_box: {
        paddingHorizontal: 20,
        backgroundColor: Colors.RED,
        marginLeft: 5,

    },
    get_otp: {
        color: Colors.WHITE,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: "center",
        paddingVertical: 5,
    },
    category_sec: {
        alignItems: "center",
        marginTop: "30%",
    },
    category: {
        fontSize: 13,
        textAlign: "center",
    },
});

const mapStateToProps = (state) => ({
    token: state.auth.token,
    users: state.auth.users,
    mainCat: state.ownerChoice.mainCat,
    subCat: state.ownerChoice.subCat,
    schemeCat: state.ownerChoice.schemeCat,
})

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { OwnerChoiceActions } = require('../../store/OwnerChoiceRedux')
    return {
        ...stateProps,
        ...ownProps,
        mainCategory: (token) => { OwnerChoiceActions.mainCategory(dispatch, token) },
        subCatagorys: (params, token) => { OwnerChoiceActions.subCatagorys(dispatch, params, token) },
        fetchScheme: (params, token) => { OwnerChoiceActions.fetchScheme(dispatch, params, token) },
        schemeGo: (params, token) => { OwnerChoiceActions.schemeGo(dispatch, params, token) },
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(OwnerChoice)