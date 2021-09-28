import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
    Dimensions,
    ScrollView,
} from "react-native";
import { connect } from 'react-redux'
import { Styles, Config, Colors, FormValidate } from '../../common'
import { Entypo, AntDesign } from 'react-native-vector-icons';
import { Header, Overlay, CheckBox, Input } from 'react-native-elements';
import Investments from '../../components/Investments'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const investmentData = [
    { title: 'Long Term', image: require('../../../assets/term1.png') },
    { title: 'Tax Saving Funds', image: require('../../../assets/term2.png') },
    { title: 'Better Than', image: require('../../../assets/term3.png') },
    { title: 'Tax Saving Funds', image: require('../../../assets/term4.png') },
    { title: 'Better Than FD', image: require('../../../assets/term5.png') },
    { title: 'Aggressive Funds', image: require('../../../assets/term6.png') },
]

function HomeScreen(props) {
    const { token, logOut, isFetching, error, steps, home, user, cart, getsteps, getHomeData, getUserDetails, getcartDetails } = props;

    // console.log(user.userDetails)

    useEffect(() => {
        if (token) {
            getsteps({}, token)
            getHomeData({}, token)
            getcartDetails({}, token)
        }
    }, [token]);

    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const [eMandateType, setEMandateType] = useState(null);
    const toggleEMandate = (type) => {
        setEMandateType(type);
    };

    return (
        <View style={styles.container}>
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={{ marginTop: 20 }}><Entypo name={"menu"} size={30} color={Colors.RED} /></TouchableOpacity>}
                rightComponent={<TouchableOpacity onPress={() => logOut()} style={{ marginTop: 20 }}><AntDesign name={"shoppingcart"} size={30} color={Colors.RED} /></TouchableOpacity>}
                backgroundColor={Colors.LIGHT_WHITE}
                containerStyle={Styles.header}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
            />
            <ScrollView style={styles.containerScroll}>
                <View style={styles.home_top}>
                    <TouchableOpacity onPress={() => toggleEMandate('one')}>
                        <Image
                            source={require('../../../assets/Hello.png')}
                            style={styles.Helloimg}
                        />
                    </TouchableOpacity>
                    <Text style={styles.HelloIinvestor}>Hello, Investor</Text>
                    <Text style={styles.HelloIinvestor1}>You’re almost ready to submit</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Goals')} style={styles.botton_box}>
                        <Text style={styles.get_otp}>COMPLETE ACCOUNT SETUP</Text>
                    </TouchableOpacity>
                </View>
                {/* plan your goals section */}
                <Text style={styles.Plan}>Plan Your GOALS</Text>

                <ScrollView horizontal={true}>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Plan1')}>
                        <View style={styles.education}>
                            <View style={styles.child_sec}>
                                <Image
                                    source={require('../../../assets/childimg.png')}
                                    style={styles.goals_2}
                                />
                            </View>
                            <View style={styles.education_sec}>
                                <Text style={styles.child}>Child’s Education</Text>
                                <Text style={styles.child_text}>Secure your child’s
                                    future, invest for
                                    his education</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Plan1')}>
                        <View style={styles.education}>
                            <View style={styles.child_sec}>
                                <Image
                                    source={require('../../../assets/plan_img2.png')}
                                    style={styles.goals_2}
                                />
                            </View>
                            <View style={styles.education_sec}>
                                <Text style={styles.child}>Dream Home</Text>
                                <Text style={styles.child_text}>Plan your home down
                                    payment for the
                                    dream house</Text>
                            </View>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Plan1')}>
                        <View style={styles.education}>
                            <View style={styles.child_sec}>
                                <Image
                                    source={require('../../../assets/plan_img3.png')}
                                    style={styles.goals_2}
                                />
                            </View>
                            <View style={styles.education_sec}>
                                <Text style={styles.child}>Retire Rich</Text>
                                <Text style={styles.child_text}>Secure your post
                                    retirement expense,
                                    get income after
                                    retirement</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Plan1')}>
                        <View style={styles.education}>
                            <View style={styles.child_sec}>
                                <Image
                                    source={require('../../../assets/plan_img4.png')}
                                    style={styles.goals_2}
                                />
                            </View>
                            <View style={styles.education_sec}>
                                <Text style={styles.child}>Child’s Marriage</Text>
                                <Text style={styles.child_text}>Invest now for
                                    expenses of chid’s
                                    marriage in future</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Plan1')}>
                        <View style={styles.education}>
                            <View style={styles.child_sec}>
                                <Image
                                    source={require('../../../assets/plan_img4.png')}
                                    style={styles.goals_2}
                                />
                            </View>
                            <View style={styles.education_sec}>
                                <Text style={styles.child}>Car Purchase</Text>
                                <Text style={styles.child_text}>Plan for that dream car you always wanted</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </ScrollView>

                <View style={styles.border}></View>

                {/* investment section */}

                <Text style={styles.Plan}>Investment Plans</Text>

                <Investments data={investmentData} onPress={() => props.navigation.navigate('Invest2')} />

                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Invest1')}>
                        <View style={styles.all_plan}>
                            <Text style={styles.all_plan_text}>See All Investment Plan</Text>
                            <AntDesign name="down" size={20} color="#C0392B" />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.border}></View>

                {/* Top roted fund section */}

                <Text style={styles.roted_text}>Top Rated Funds</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Toprated1')}>
                    <View style={[styles.education, styles.education_roted]}>
                        <View style={styles.child_sec}>
                            <Image
                                source={require('../../../assets/term7.png')}
                                style={styles.fund_img}
                            />
                        </View>
                        <View style={styles.education_sec}>
                            <Text style={styles.child}>Get Top Rated Funds</Text>
                            <Text style={styles.child_text}>At SIPFund.com we help you in choosing the best for you!</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.roted_border}></View>
                <View style={styles.border}></View>

                {/* quick access section */}

                <View style={styles.quick_sec}>
                    <Text style={styles.quick_text}>Quick Access</Text>
                    <ScrollView horizontal={true}>

                        <View style={styles.education_top}>
                            <View style={[styles.education, styles.quick_access]}>
                                <View style={styles.child_sec}>
                                    <TouchableOpacity onPress={() => props.navigation.navigate('ReferEarn')}>
                                        <Image
                                            source={require('../../../assets/term8.png')}
                                            style={styles.quick_img}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.education_sec}>
                                    <Text style={styles.earn}>Refer & Earn</Text>
                                    <Text style={styles.child_text}>Now earn upto
                                        Rs. 5,000/-</Text>
                                </View>
                            </View>



                            <View style={[styles.education, styles.quick_access]}>
                                <View style={styles.child_sec}>
                                    <TouchableOpacity onPress={() => props.navigation.navigate('Relationship')}>
                                        <Image
                                            source={require('../../../assets/quick_img3.png')}
                                            style={styles.quick_img3}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.education_sec}>
                                    <Text style={styles.earn}>Talk To Experts</Text>
                                    <Text style={styles.child_text}>Get best advice
                                        while investing
                                        money</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {/* top roted fund */}
                <View style={styles.border}></View>
                <TouchableOpacity onPress={() => props.navigation.navigate('Goals')}>
                    <Text style={styles.roted_text}>Any questions?</Text>
                </TouchableOpacity>
                <Text style={styles.child_text}>We would love to have your questions!</Text>
                <Text style={[styles.child_text, styles.ship_text]}>SIPFund.com brings 5 things you must know
                    before investing.</Text>

                {/* top roted fund sec2 */}
                <ScrollView horizontal={true}>
                    <View style={styles.roted_bottom}>

                        <View style={styles.amount_sec}>
                            <TouchableOpacity onPress={toggleOverlay} style={{ alignItems: 'center' }}>
                                <Image
                                    source={require('../../../assets/term9.png')}
                                    style={styles.term9}
                                />
                                <Text style={styles.minimum}>Minimum Amount</Text>
                            </TouchableOpacity>
                        </View>



                        <View style={styles.amount_sec}>
                            <TouchableOpacity onPress={toggleOverlay} style={{ alignItems: 'center' }}>
                                <Image
                                    source={require('../../../assets/term10.png')}
                                    style={styles.term9}
                                />
                                <Text style={styles.minimum}>Lock-ins</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.amount_sec}>
                            <TouchableOpacity onPress={toggleOverlay} style={{ alignItems: 'center' }}>
                                <Image
                                    source={require('../../../assets/term11.png')}
                                    style={styles.Flexibility}
                                />
                                <Text style={styles.minimum}>Flexibility</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.amount_sec}>
                            <TouchableOpacity onPress={toggleOverlay} style={{ alignItems: 'center' }}>
                                <Image
                                    source={require('../../../assets/term12.png')}
                                    style={styles.Flexibility}
                                />
                                <Text style={styles.minimum}>Payment Methods</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.amount_sec}>
                            <TouchableOpacity onPress={toggleOverlay} style={{ alignItems: 'center' }}>
                                <Image
                                    source={require('../../../assets/term13.png')}
                                    style={styles.Flexibility}
                                />
                                <Text style={styles.minimum}>Easy Withdrawal</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </ScrollView>

                <View style={styles.border}></View>

                {/* Faq screen */}
                <View style={styles.mainbox}>
                    <View>
                        <Text style={styles.faqs}>FAQ’s</Text>
                    </View>
                    <View style={styles.imgbox}>

                        <Image
                            source={require('../../../assets/FAQimg.png')}
                            style={styles.FAQimg}
                        />
                    </View>
                    <View style={styles.singletext}>
                        <Entypo name="dot-single" size={40} color="#FFCE00" />
                        <Text style={styles.Mutualfund}>What is a Mutual Fund?</Text>
                    </View>
                    <View style={styles.singletext}>
                        <Entypo name="dot-single" size={40} color="#FFCE00" />
                        <Text style={styles.Mutualfund}>What is Open Ended Fund?</Text>
                    </View>


                    <TouchableOpacity onPress={() => props.navigation.navigate('Upi')} style={styles.botton_box}>
                        <Text style={styles.get_otp}>MORE FAQ’s</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.border}></View>
                <Text style={styles.knowledge}>Knowledge Centre</Text>

                {/* gallary */}

                <View style={styles.gallary}>
                    {/* <View style={styles.qip_sec}> */}
                    <Image
                        source={require('../../../assets/qip_img.png')}
                        style={styles.qipimg}
                    />
                    {/* </View> */}
                    <Image
                        source={require('../../../assets/fundimg.png')}
                        style={styles.qipimg}
                    />
                    <Image
                        source={require('../../../assets/ratingimg.png')}
                        style={styles.qipimg}
                    />
                </View>
                <Text style={styles.view}>View All</Text>
                <View style={styles.border}></View>
            </ScrollView>

            <Overlay isVisible={visible} overlayStyle={{ margin: 10, padding: 0, backgroundColor: '#fff' }}>
                <View style={{ backgroundColor: '#12478D', alignItems: "center", paddingVertical: 5, }}>
                    <Image
                        source={require('../../../assets/overlay_img.png')}
                        style={{ width: 56, height: 51, }}
                    />

                </View>
                <View style={{ padding: 20, }}>
                    <Text style={styles.mutual}>Do Mutual Funds allow <Text style={styles.view}>easy withdrawal
                        of amount?</Text></Text>
                    <Text style={{ paddingTop: 10, fontSize: 15, }}>Both Equity and Debt Mutual Funds
                        can be technically withdrawn as soon
                        as fund is available for daily sale and repurchase. Of course liquidity is one
                        of the biggest advantages of investing
                        in Mutual Funds which is not available
                        in many other asset classes. Amount redeemed or withdrawn will be credited to investor's bank account within 1-4 working days depending on the type of mutual funds.</Text>
                    <TouchableOpacity onPress={toggleOverlay}>
                        <Text style={{ color: '#ff0000', paddingTop: 10, fontSize: 15, textAlign: "right" }}>CLOSE</Text>
                    </TouchableOpacity>
                </View>
            </Overlay>

            <Overlay isVisible={eMandateType === 'one' ? true : false}>
                <View style={styles.emaMainbox}>
                    <TouchableOpacity onPress={() => toggleEMandate('two')}><Text style={styles.emaAmc}>Choose AMC Option:</Text>
                        <Text style={styles.emaMutual_fund}>Birla Sun Life Mutual Fund</Text></TouchableOpacity>
                    <Text style={styles.emaMutual_fund}>HDFC Mutual Fund</Text>
                    <Text style={styles.emaMutual_fund}>HSBC Asset Management (India) Pvt Ltd</Text>
                    <Text style={styles.emaMutual_fund}>IDFC Asset Management Company Pvt Ltd</Text>
                    <Text style={styles.emaMutual_fund}>Kotak Mahindra Mutual Fund</Text>
                    <Text style={styles.emaMutual_fund}>nion Asset Management Company Private  Limited</Text>
                    <TouchableOpacity onPress={() => toggleEMandate(null)}><Text style={styles.emaCancel}>Cancel</Text></TouchableOpacity>
                </View>
            </Overlay>

            <Overlay isVisible={eMandateType === 'two' ? true : false}>
                <View style={styles.emaMainbox}>
                    <Text style={styles.emaAmc}>Choose E-Mandate Option:</Text>
                    <CheckBox onPress={() => toggleEMandate('three')} containerStyle={styles.emaAmcCheck} textStyle={styles.emaAmcCheckFont} title='Debit Card - Do it now' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' />
                    <CheckBox containerStyle={styles.emaAmcCheck} textStyle={styles.emaAmcCheckFont} title='Net Banking - Do it now' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' />
                    <CheckBox containerStyle={styles.emaAmcCheck} textStyle={styles.emaAmcCheckFont} title='Debit Card - Send me email' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' />
                    <CheckBox containerStyle={styles.emaAmcCheck} textStyle={styles.emaAmcCheckFont} title='Net Banking - Send me email' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' />
                    <TouchableOpacity onPress={() => toggleEMandate(null)}><Text style={styles.emaCancel}>Cancel</Text></TouchableOpacity>
                </View>
            </Overlay>

            <Overlay isVisible={eMandateType === 'three' ? true : false}>
                <View style={styles.emaMainbox}>
                    <Text style={styles.emaAmc}>ENTER ACH-MANDATE AMOUNT</Text>
                    <Input placeholder='3000' />
                    <View style={{ alignItems: 'flex-end' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => toggleEMandate(null)}><Text style={styles.emaCancel}>CANCEL</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => toggleEMandate(null)}><Text style={styles.emaCancel}>SUBMIT</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Overlay>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    containerScroll: {
        width: '100%'
    },
    home_top: {
        alignItems: 'center',
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    Helloimg: {
        height: 300,
        width: 210,
    },

    HelloIinvestor: {
        fontSize: 16,
        fontWeight: "bold",

    },
    HelloIinvestor1: {
        fontSize: 16,
        color: Colors.GRAY_DEEP,
        fontWeight: "bold",
        marginTop: 30,
    },


    Plan: {
        fontSize: 20,
        color: Colors.DEEP_GRAY,
        fontWeight: "bold",
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    education_top: {
        paddingLeft: 20,
        flexDirection: "row",
    },
    education: {
        flexDirection: "row",
        width: 370,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: Colors.GRAY_LIGHT,
        borderRadius: 15,
        marginVertical: 20,
        marginHorizontal: 5,
        padding: 20,
        backgroundColor: Colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    education_roted: {
        width: '90%',
        marginHorizontal: 20,
        marginVertical: 30,
    },
    quick_access: {
        borderRadius: 0,
        borderColor: Colors.BLACK,
        borderWidth: 1,
        width: 340,

    },

    child_sec: { width: '40%' },
    goals_2: {
        height: 145,
        width: 145,
    },
    education_sec: {
        width: '60%',
        marginTop: 10,

    },
    child: {
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 20,
    },
    child_text: {
        fontSize: 18,
        color: Colors.GRAY_LIGHT_1,
        paddingTop: 15,
        paddingLeft: 20,
    },
    border: {
        marginTop: 10,
        height: 4,
        marginHorizontal: 20,
        backgroundColor: Colors.GRAY_LIGHT,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    investment_sec: {
        flexDirection: "row",
    },
    investment: {
        borderRadius: 20,
        backgroundColor: Colors.WHITE,
        width: '30%',
        alignItems: "center",
        margin: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    term: {
        width: '100%',
        height: 113,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    long: {
        textAlign: "center",
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: "bold"
    },
    all_plan: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
    },
    all_plan_text: {
        fontSize: 16,
        color: Colors.RED,
        fontWeight: "bold",
    },
    roted_text: {
        fontSize: 20,
        color: Colors.DEEP_GRAY,
        fontWeight: "bold",
        paddingLeft: 20,
        marginTop: 20,
    },
    fund_img: {
        height: 122,
        width: 126,
    },
    quick_sec: {
        backgroundColor: Colors.PINK,
        paddingBottom: 20,
    },

    quick_text: {
        fontSize: 20,
        color: Colors.RED,
        fontWeight: "bold",
        paddingLeft: 20,
        marginVertical: 20,
    },
    quick_img: {
        height: 94,
        width: 82,
    },
    quick_img2: {
        height: 96,
        width: 96,
    },
    quick_img3: {
        height: 95,
        width: 86,
    },
    earn: {
        color: Colors.RED,
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 20,
    },
    ship_text: {
        color: Colors.BLACK,
        textAlign: "center",
        paddingTop: 10,

    },
    roted_bottom: {
        flexDirection: "row",
        paddingLeft: 20,
        marginVertical: 30,
    },
    amount_sec: {

        width: 150,
        borderWidth: 3,
        borderStyle: "solid",
        borderColor: Colors.YELLOW_LIGHT,
        marginVertical: 20,
        marginHorizontal: 5,
        padding: 10,
        backgroundColor: Colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        alignItems: "center",
    },
    minimum: {
        fontSize: 13,
        color: Colors.BLACK,
    },
    term9: {
        width: 50,
        height: 66,
        marginVertical: 10,
    },
    Flexibility: {
        width: 75,
        height: 75,
        marginVertical: 10,
    },
    /* Faq screen */
    mainbox: {
        alignItems: "center",
        paddingVertical: 40,
    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    imgbox: {
        alignItems: "center",
        marginBottom: 20,
    },
    FAQimg: {
        height: 205,
        width: 243,
        marginVertical: 30,

    },
    faqs: {
        fontSize: 22,
        fontWeight: "bold",
        color: '#716D6E',
    },
    singletext: {
        flexDirection: "row",
        marginTop: 10,
    },
    Mutualfund: {
        fontSize: 20,
        marginTop: 9,
        color: Colors.GREY_1,
    },
    botton_box: {
        alignItems: "center",
        backgroundColor: Colors.RED,
        width: width - 50,
        paddingVertical: 20,
        marginVertical: 50,
        borderRadius: 10,
        // borderWidth: 2,
        // borderColor: Colors.DEEP_GRAY,
        marginHorizontal: 10,

    },
    get_otp: {
        color: Colors.WHITE,
        fontSize: 20,
        fontWeight: 'bold',
    },
    // gallary
    gallary: {
        width: '100%',
        alignItems: "center",
        textAlign: "center",
    },
    qipimg: {
        width: 368,
        height: 207,
        marginVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    knowledge: {
        fontSize: 22,
        color: Colors.DEEP_GRAY,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingBottom: 40,
        marginTop: 20,
    },
    view: {
        fontSize: 15,
        textAlign: "center",
        color: Colors.RED,
        fontWeight: "bold",
        paddingBottom: 5
    },
    mutual: {
        fontSize: 14,
        fontWeight: "bold",
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
    emaAmcCheck: {
        backgroundColor: Colors.TRANSPARENT,
        fontSize: 15,
        borderWidth: 0,
        margin: 0,
        marginLeft: -10,
        padding: 0,
        paddingVertical: 5
    },
    emaAmcCheckFont: {
        fontSize: 17,
    },
    emaCancel: {
        fontSize: 15,
        marginTop: 15,
        marginLeft: 15,
        color: Colors.RED,
    },
});

const mapStateToProps = (state) => ({
    token: state.auth.token,
    users: state.auth.users,
    isFetching: state.home.isFetching,
    error: state.home.error,
    steps: state.home.steps,
    home: state.home.home,
    user: state.home.user,
    cart: state.home.cart,
})

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { AuthActions } = require('../../store/AuthRedux')
    const { HomeActions } = require('../../store/HomeRedux')
    return {
        ...stateProps,
        ...ownProps,
        logOut: () => dispatch(AuthActions.logout()),
        getsteps: (params, token) => { HomeActions.getsteps(dispatch, params, token) },
        getHomeData: (params, token) => { HomeActions.getHomeData(dispatch, params, token) },
        getcartDetails: (params, token) => { HomeActions.getcartDetails(dispatch, params, token) },
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(HomeScreen)