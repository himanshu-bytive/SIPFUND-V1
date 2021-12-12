import React, { useState, useRef, useEffect, useContext } from "react";
import { StyleSheet, Button, View, ImageBackground, TouchableOpacity, Text, Dimensions, KeyboardAvoidingView, TextInput, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import RNPickerSelect from "react-native-picker-select";
import { Styles, Config, Colors, FormValidate } from "../../common";
import { Ionicons, AntDesign, FontAwesome, FontAwesome5 } from "react-native-vector-icons";
import { Image, Header, CheckBox, Overlay } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

// const filterList = [
//   { name: "1M", label: "1M Returns", value: "1m", status: false },
//   { name: "1Y", label: "1Y Returns", value: "1y", status: false },
//   { name: "2Y", label: "2Y Returns", value: "2y", status: false },
//   { name: "3Y", label: "3Y Returns", value: "3y", status: false },
//   { name: "5Y", label: "5Y Returns", value: "5y", status: false },
//   { name: "ALL", label: "ALL Returns", value: "10y", status: false },
// ];
const filterList = [
    { name: "1M", label: "1M Returns", value: "DP-Return1Mth", status: false },
    { name: "1Y", label: "1Y Returns", value: "DP-Return1Yr", status: false },
    { name: "2Y", label: "2Y Returns", value: "DP-Return2Yr", status: false },
    { name: "3Y", label: "3Y Returns", value: "DP-Return3Yr", status: false },
    { name: "5Y", label: "5Y Returns", value: "DP-Return5Yr", status: false },
    {
        name: "ALL",
        label: "ALL Returns",
        value: "DP-ReturnSinceInception",
        status: false,
    },
];
const monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

const roted = [
    {
        images: require("../../../assets/axis_img.png"),
        text: "Axis Asset Management Company",
        text2: "Moderately High Risk",
        button: "INVEST",
        mintext: "Min. Investment",
        maxtext: "1000",
        aumtext: "AUM",
        aumtext2: "2097 Cr",
        returntext: "Ruturns",
        returntext2: "16.0%",
    },
    {
        images: require("../../../assets/adityabirlaimg.png"),
        text: "Aditya Birla Sun Life AMC Limited",
        text2: "Moderately High Risk",
        button: "INVEST",
        mintext: "Min. Investment",
        maxtext: "1000",
        aumtext: "AUM",
        aumtext2: "2097 Cr",
        returntext: "Ruturns",
        returntext2: "16.0%",
    },
    {
        images: require("../../../assets/barodaimg.png"),
        text: "Baroda Asset Management India",
        text2: "Moderately High Risk",
        button: "INVEST",
        mintext: "Min. Investment",
        maxtext: "1000",
        aumtext: "AUM",
        aumtext2: "2097 Cr",
        returntext: "Ruturns",
        returntext2: "16.0%",
    },
    {
        images: require("../../../assets/MidCap_img.png"),
        text: "BNP Paribas Asset Management",
        text2: "Moderately High Risk",
        button: "INVEST",
        mintext: "Min. Investment",
        maxtext: "1000",
        aumtext: "AUM",
        aumtext2: "2097 Cr",
        returntext: "Ruturns",
        returntext2: "16.0%",
    },
    {
        images: require("../../../assets/bioaxa.png"),
        text: "BOI AXA Investment Managers Pr…",
        text2: "Moderately High Risk",
        button: "INVEST",
        mintext: "Min. Investment",
        maxtext: "1000",
        aumtext: "AUM",
        aumtext2: "2097 Cr",
        returntext: "Ruturns",
        returntext2: "16.0%",
    },
];

function TopRatedHomeScreen(props) {
    const { isFetching, token, getAllcategorys, getDetails, category, details, addItomToSip } = props;

    useEffect(() => {
        if (token) {
            getAllcategorys(token);
            updateFilterSelection(filterList[4].value);
        }
    }, [token]);
    useEffect(() => {
        if (details) {
            //   console.log("details", details);
        }
    }, [details]);

    const roted = () => {
        let date = new Date();
        let params = {
            Category: "Equity",
            Month: getMonth(),
            Year: date.getFullYear(),
            Fund_Type: "Consumption",
        };
        console.log("params", params);
        getDetails(params, token);
    };

    const [filter, setFilter] = useState(filterList);
    const [filterValue, setFilterValue] = useState("DP-Return5Yr");
    const updateFilterSelection = (value) => {
        setFilterValue(value);
        let selected = filter.find((x) => x.value == value);
        const index = filter.indexOf(selected);
        if (index > -1) {
            let tempFilterList = JSON.parse(JSON.stringify(filterList));
            tempFilterList[index].status = true;
            setFilter(tempFilterList);
        }
    };
    const getMonth = () => {
        const date = new Date();
        const month = date.getMonth();
        return monthsArr[month - 1];
    };

    const [selectCat, setSelectCat] = useState("Equity");
    const [selectSubCat, setSelectSubCat] = useState("Consumption");
    const feachDetails = async (item) => {
        setSelectSubCat(item);
        let date = new Date();
        let params = {
            Category: selectCat,
            Month: getMonth(),
            Year: date.getFullYear(),
            Fund_Type: item,
        };
        console.log("params Top Rated=", params);
        getDetails(params, token);
    };

    // tab start
    const [selectTab, setSelectTab] = useState("SIP");
    const toggleTab = (value) => {
        setSelectTab(value);
    };
    // tab end

    // overlay start
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const [states, setStates] = useState({
        amount: "5000",
        date: 5,
        productName: "",
        productCode: "",
        amcCode: "",
        amcName: "",
        imagePath: "",
    });

    const invest = (imagePath, amcCode, amcName, productCode, productName) => {
        setStates({
            ...states,
            productCode,
            productName,
            amcCode,
            amcName,
            imagePath,
        });
        console.log("imagePath", imagePath);
        console.log("amcCode", amcCode);
        console.log("amcName", amcName);
        console.log("productCode", productCode);
        console.log("productName", productName);
        setVisible(!visible);
    };
    const sipFromDate = () => {
        const date = new Date();

        return date.getDate() + "-" + monthsArr[date.getMonth()] + "-" + date.getFullYear();
    };
    const sipEndDate = () => {
        const date = new Date();

        return date.getDate() + "-" + monthsArr[date.getMonth()] + "-" + (parseInt(date.getFullYear(), 10) + 30);
    };
    // overlay end

    const plusMinus = (type, value) => {
        if (type === "plus") {
            let date = parseInt(value) + 1;
            if (date > 30) {
                date = 30;
            }
            setStates({ ...states, date });
        } else {
            let date = parseInt(value) - 1;
            if (date < 1) {
                date = 1;
            }
            setStates({ ...states, date });
        }
    };

    const addToCartLumpSum = () => {
        let params = {
            cartDetails: {
                trxn_nature: "N",
                amc: states.amcCode,
                amc_name: states.amcName,
                folio: "",
                product_code: states.productCode,
                product_name: states.productName,
                reinvest: "Z",
                amount: states.amount,
                sip_amount: states.amount,
                imagePath: states.imagePath,
            },
        };
        console.log("params", params);
        console.log("token=", token);
        addItomToSip(params, token);
    };
    const addToCartSip = () => {
        let fromDate = sipFromDate();
        let endDate = sipEndDate();
        let params = {
            cartDetails: {
                trxn_nature: "S",
                sip_period_day: states.date,
                sip_from_date: fromDate,
                sip_freq: "OM",
                sip_end_date: endDate,
                sip_amount: states.amount,
                reinvest: "Z",
                product_name: states.productName,
                product_code: states.productCode,
                folio: "",
                amount: states.amount,
                amc_name: states.amcName,
                amc: states.amcCode,
            },
        };
        console.log("params", params);
        console.log("token=", token);
        addItomToSip(params, token);
    };

    return (
        <View style={styles.container}>
            {/* Header_sec */}
            <Header
                leftComponent={
                    <TouchableOpacity onPress={() => props.navigation.navigate("Home")} style={{ marginTop: 20 }}>
                        <AntDesign name={"arrowleft"} size={30} color={Colors.RED} />
                    </TouchableOpacity>
                }
                backgroundColor={Colors.PEACH}
                backgroundColor={Colors.LIGHT_WHITE}
                centerComponent={<Image source={require("../../../assets/icon.png")} style={styles.logimg} />}
                rightComponent={
                    <TouchableOpacity onPress={() => props.navigation.navigate("TopRatedList")} style={{ marginTop: 20, marginRight: 10 }}>
                        <AntDesign name={"shoppingcart"} size={40} color={Colors.RED} />
                    </TouchableOpacity>
                }
            />
            {isFetching && (
                <View style={Styles.loading}>
                    <ActivityIndicator color={Colors.BLACK} size="large" />
                </View>
            )}

            {/* Invest Now sec */}
            <ScrollView>
                <View style={{ borderWidth: 0.5, borderColor: Colors.GREY_1 }}></View>
                <ScrollView horizontal={true} style={styles.Investnow_sec}>
                    {category &&
                        Object.keys(category[0]).map((item, key) => (
                            <TouchableOpacity key={key} onPress={() => setSelectCat(item)}>
                                <Text style={item == selectCat ? styles.Equity : styles.Debt}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                </ScrollView>
                <View style={{ borderWidth: 0.5, borderColor: Colors.GREY_1 }}></View>
                <ScrollView horizontal={true} style={styles.Investnow_sec}>
                    {category && category[0] && selectCat
                        ? category[0][selectCat].map((item, key) => (
                              <TouchableOpacity key={key} onPress={() => feachDetails(item)}>
                                  <Text style={item == selectSubCat ? styles.Equity : styles.Debt}>{item}</Text>
                              </TouchableOpacity>
                          ))
                        : null}
                </ScrollView>
                {selectSubCat && <View style={{ borderWidth: 0.5, borderColor: Colors.GREY_1 }}></View>}

                {/* Topratedfunds_sec */}
                <View style={styles.toprated}>
                    <Text style={styles.top}>Top Rated Funds</Text>
                    <View style={styles.returnsright}>
                        <View style={styles.returnsbox}>
                            <RNPickerSelect
                                placeholder={
                                    {
                                        //   label: "Select a Item",
                                        //   value: null,
                                    }
                                }
                                style={{
                                    inputIOS: styles.custom,
                                    inputAndroid: styles.custom,
                                    placeholder: styles.custom,
                                }}
                                useNativeAndroidPickerStyle={false}
                                onValueChange={(value) => updateFilterSelection(value)}
                                value={filterValue}
                                items={filter}
                                Icon={() => {
                                    return <AntDesign name="caretdown" size={15} style={{ marginTop: 7, marginRight: -20 }} color="#C0392B" />;
                                }}
                            />
                        </View>
                        <View style={{ borderWidth: 1, borderColor: Colors.RED }}></View>
                    </View>
                </View>

                {/* Axis Asset Management Company */}

                {details === null
                    ? roted()
                    : details.map((item) => (
                          <View key={item[0]["_id"]} style={styles.axis_asset}>
                              <View style={styles.company}>
                                  <View>
                                      <Image source={{ uri: item[0].imagePath }} style={styles.axisimg} />
                                  </View>
                                  <View style={styles.axiswid}>
                                      <Text style={styles.axis}>{item[0].api["FSCBI-FundName"]}</Text>
                                      <Text style={styles.axis2}>{item.text2}</Text>
                                  </View>
                                  <View>
                                      <TouchableOpacity onPress={() => invest(item[0].imagePath, item[0].amcCode, item[0].amcName, item[0].productCode, item[0].productName)} style={styles.botton_box}>
                                          <Text style={styles.get_otp}>INVEST</Text>
                                      </TouchableOpacity>
                                  </View>
                              </View>
                              <View style={styles.value_sec}>
                                  <View style={styles.mininvestment}>
                                      <Text style={styles.min}>Min. Investment</Text>
                                      <Text style={styles.min}>{item[0].api["PI-MinimumInitial"] > 1000 ? 1000 : item[0].api["PI-MinimumInitial"]}</Text>
                                  </View>
                                  <View style={styles.mininvestment}>
                                      <Text style={styles.min}>AUM</Text>
                                      <Text style={styles.min}>{item[0].api["PSRP-TotalMarketValueNet"]}</Text>
                                  </View>
                                  <View style={styles.mininvestment}>
                                      <Text style={styles.min}>Returns</Text>
                                      <Text style={styles.min}>{item[0].api[filterValue]}</Text>
                                  </View>
                              </View>
                              <View
                                  style={{
                                      borderWidth: 1,
                                      borderColor: Colors.GREY_1,
                                      marginTop: 10,
                                  }}
                              ></View>
                          </View>
                      ))}

                <View style={styles.footer_sec}>
                    {filter.map((item, key) => (
                        <TouchableOpacity onPress={() => updateFilterSelection(item.value)} key={key} style={styles.rupees_sec}>
                            <Image source={item.status ? require("../../../assets/rupees2.png") : require("../../../assets/rupeees.png")} style={styles.rupees} />
                            <Text style={styles.rupees_text}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <View style={styles.pop_top}>
                    <View style={styles.click_sec}>
                        <View style={selectTab == "SIP" ? styles.buttom_botton2 : styles.buttom_botton}>
                            <TouchableOpacity onPress={() => toggleTab("SIP")}>
                                <Text style={selectTab == "SIP" ? styles.sip_text2 : styles.sip_text}>SIP</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={selectTab == "LUMPSUM" ? styles.buttom_botton2 : styles.buttom_botton}>
                            <TouchableOpacity onPress={() => toggleTab("LUMPSUM")}>
                                <Text style={selectTab == "LUMPSUM" ? styles.sip_text2 : styles.sip_text}>Lumpsum</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {selectTab == "SIP" && (
                        <View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    paddingHorizontal: 50,
                                }}
                            >
                                <View style={styles.amount_sec}>
                                    <Text style={styles.amount_tex}>Amount</Text>
                                    <View style={styles.bordersec}>
                                        <TextInput value={states.amount} onChangeText={(amount) => setStates({ ...states, amount })} placeholder="5000" style={styles.amount_tex2} />
                                    </View>
                                </View>
                                <View style={styles.amount_sec}>
                                    <Text style={styles.amount_tex}>Date</Text>
                                    <View style={[styles.bordersec, { flexDirection: "row" }]}>
                                        <Text style={styles.new}>{states.date}</Text>
                                        <View>
                                            <TouchableOpacity onPress={() => plusMinus("plus", states.date)}>
                                                <AntDesign name="caretup" size={15} color="#C0392B" />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => plusMinus("minus", states.date)}>
                                                <AntDesign name="caretdown" size={15} color="#C0392B" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={{ alignItems: "center" }}>
                                <TouchableOpacity onPress={addToCartSip} style={styles.buttom_botton2box}>
                                    <Text style={styles.sip_text2}>Add To Cart</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}

                    {selectTab == "LUMPSUM" && (
                        <View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    paddingHorizontal: 50,
                                }}
                            >
                                <View style={styles.amount_sec}>
                                    <Text style={styles.amount_tex}>Amount</Text>
                                    <View style={styles.bordersec}>
                                        <TextInput value={states.amount} onChangeText={(amount) => setStates({ ...states, amount })} placeholder="5000" style={styles.amount_tex2} />
                                    </View>
                                </View>
                            </View>

                            <View style={{ alignItems: "center" }}>
                                <TouchableOpacity onPress={addToCartLumpSum} style={styles.buttom_botton2box}>
                                    <Text style={styles.sip_text2}>Add To Cart</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </View>
            </Overlay>
        </View>
    );
}

// StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    Investnow_sec: {
        flexDirection: "row",
        marginHorizontal: 10,
        paddingBottom: 5,
        marginTop: 10,
    },
    Debt: {
        marginHorizontal: 5,
        fontSize: 13,
        color: "#696565",
        fontWeight: "bold",
    },
    Equity: {
        marginHorizontal: 5,
        fontSize: 13,
        color: Colors.RED,
        fontWeight: "bold",
    },

    toprated: {
        flexDirection: "row",
        marginLeft: 10,
        marginBottom: 30,
        marginTop: 30,
    },
    top: {
        width: "73%",
        fontSize: 15,
        fontWeight: "bold",
        color: "#696565",
    },
    return: { fontSize: 15 },

    returnsbox: { flexDirection: "row" },

    axis_asset: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    company: {
        flexDirection: "row",
    },
    axis: {
        marginLeft: 10,
        fontSize: 15,
    },
    axiswid: { width: "68%" },
    axis2: {
        marginLeft: 10,
        fontSize: 12,
        color: Colors.DEEP_GRAY,
        paddingTop: 3,
    },
    axisimg: {
        height: 39,
        width: 39,
    },
    botton_box: {
        width: 80,
        backgroundColor: Colors.RED,
        height: 20,
    },
    get_otp: {
        color: Colors.WHITE,
        fontSize: 10,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 4,
    },
    value_sec: {
        flexDirection: "row",
        marginLeft: 50,
    },
    mininvestment: {
        width: "33%",
        alignItems: "center",
    },
    min: {
        fontSize: 12,
    },
    footer_sec: {
        flexDirection: "row",
        marginHorizontal: 40,
        marginVertical: 30,
        justifyContent: "space-between",
    },
    rupees: {
        width: 40,
        height: 37,
    },
    rupees_sec: { alignItems: "center" },
    rupees_text: { fontSize: 12 },

    // tab
    pop_top: { marginHorizontal: 30 },
    click_sec: {
        flexDirection: "row",
        paddingVertical: 20,
    },
    buttom_botton: {
        width: "46%",
        borderWidth: 1,
        borderColor: Colors.RED,
        borderRadius: 5,
        marginHorizontal: 2,
        alignItems: "center",
    },
    buttom_botton2: {
        width: "45%",
        borderRadius: 5,
        backgroundColor: Colors.RED,
        marginHorizontal: 2,
        alignItems: "center",
    },
    sip_text: {
        fontSize: 20,
        color: Colors.RED,
        fontWeight: "bold",
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    sip_text2: {
        fontSize: 20,
        color: Colors.WHITE,
        fontWeight: "bold",
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    amount_sec: { alignItems: "center" },
    bordersec: {
        borderWidth: 1,
        borderColor: Colors.GRAY_DEEP_1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginTop: 3,
    },
    new: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 5,
    },
    buttom_botton2box: {
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: Colors.RED,
        marginLeft: 2,
        alignItems: "center",
        marginVertical: 30,
        paddingHorizontal: 30,
    },
    amount_tex2: {
        color: Colors.DEEP_GRAY,
        width: 100,
        textAlign: "center",
        paddingVertical: 5,
        fontSize: 18,
    },
    amount_tex: { fontSize: 18 },
});
const mapStateToProps = (state) => ({
    token: state.auth.token,
    isFetching: state.toprated.isFetching,
    category: state.toprated.category,
    details: state.toprated.details,
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { TopRatedActions } = require("../../store/TopRatedFundRedux");
    const { CartActions } = require("../../store/CartActionsRedux");
    return {
        ...stateProps,
        ...ownProps,
        getAllcategorys: (token) => {
            TopRatedActions.getAllcategorys(dispatch, token);
        },
        getDetails: (params, token) => {
            TopRatedActions.getDetails(dispatch, params, token);
        },
        addItomToSip: (params, token) => {
            CartActions.addItomToSip(dispatch, params, token);
        },
    };
};
export default connect(mapStateToProps, undefined, mapDispatchToProps)(TopRatedHomeScreen);
