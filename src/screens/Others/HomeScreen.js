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
    ActivityIndicator,
    ScrollView
} from "react-native";
import { colors } from '../../common/theme';
import { Entypo, AntDesign } from 'react-native-vector-icons';
import { Image, Header, Overlay } from 'react-native-elements';

export default function HomeScreen(props) {

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <View style={styles.container}>
            <Header
                leftComponent={<TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={{ marginTop: 20 }}><Entypo name={"menu"} size={30} color={colors.RED} /></TouchableOpacity>}
                backgroundColor={colors.LIGHT_WHITE}
                containerStyle={styles.header}
                centerComponent={<Image
                    source={require('../../../assets/icon.png')}
                    style={styles.logimg}
                />}
            />
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.home_top}>
                    <Image
                        source={require('../../../assets/Hello.png')}
                        style={styles.Helloimg}
                    />
                    <Text style={styles.HelloIinvestor}>Hello, Investor</Text>
                    <Text style={styles.HelloIinvestor1}>You’re almost ready to submit</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Pan')} style={styles.botton_box}>
                        <Text style={styles.get_otp}>COMPLETE ACCOUNT SETUP</Text>
                    </TouchableOpacity>
                </View>
                {/* plan your goals section */}
                <Text style={styles.Plan}>Plan Your GOALS</Text>

                <ScrollView horizontal={true}>

                    <View style={styles.education}>
                        <View style={styles.child_sec}>
                            <Image
                                source={require('../../../assets/childimg.png')}
                                style={styles.goals_2}
                            />
                        </View>
                        <View style={styles.education_sec}>
                            <Text style={styles.child}>Car Purchase</Text>
                            <Text style={styles.child_text}>Plan for that dream car you always wanted</Text>
                        </View>
                    </View>

                    <View style={styles.education}>
                        <View style={styles.child_sec}>
                            <Image
                                source={require('../../../assets/childimg.png')}
                                style={styles.goals_2}
                            />
                        </View>
                        <View style={styles.education_sec}>
                            <Text style={styles.child}>Car Purchase</Text>
                            <Text style={styles.child_text}>Plan for that dream car you always wanted</Text>
                        </View>
                    </View>


                    <View style={styles.education}>
                        <View style={styles.child_sec}>
                            <Image
                                source={require('../../../assets/childimg.png')}
                                style={styles.goals_2}
                            />
                        </View>
                        <View style={styles.education_sec}>
                            <Text style={styles.child}>Car Purchase</Text>
                            <Text style={styles.child_text}>Plan for that dream car you always wanted</Text>
                        </View>
                    </View>

                    <View style={styles.education}>
                        <View style={styles.child_sec}>
                            <Image
                                source={require('../../../assets/childimg.png')}
                                style={styles.goals_2}
                            />
                        </View>
                        <View style={styles.education_sec}>
                            <Text style={styles.child}>Car Purchase</Text>
                            <Text style={styles.child_text}>Plan for that dream car you always wanted</Text>
                        </View>
                    </View>
                </ScrollView>

                <View style={styles.border}></View>

                {/* investment section */}

                <Text style={styles.Plan}>Investment Plans</Text>

                <View style={styles.investment_sec}>

                    <View style={styles.investment}>
                        <Image
                            source={require('../../../assets/term1.png')}
                            style={styles.term}
                        />
                        <Text style={styles.long}>Long Term</Text>
                    </View>

                    <View style={styles.investment}>
                        <Image
                            source={require('../../../assets/term2.png')}
                            style={styles.term}
                        />
                        <Text style={styles.long}>Tax Saving Funds
                        </Text>
                    </View>

                    <View style={styles.investment}>
                        <Image
                            source={require('../../../assets/term3.png')}
                            style={styles.term}
                        />
                        <Text style={styles.long}>Better Than
                            FD</Text>
                    </View>

                </View>

                <View style={styles.investment_sec}>
                    <View style={styles.investment}>
                        <Image
                            source={require('../../../assets/term4.png')}
                            style={styles.term}
                        />
                        <Text style={styles.long}>Aggressive
                            Funds</Text>
                    </View>
                    <View style={styles.investment}>
                        <Image
                            source={require('../../../assets/term5.png')}
                            style={styles.term}
                        />
                        <Text style={styles.long}>Funds For
                            SIP
                        </Text>
                    </View>
                    <View style={styles.investment}>
                        <Image
                            source={require('../../../assets/term6.png')}
                            style={styles.term}
                        />
                        <Text style={styles.long}>Emergency
                            Funds
                        </Text>
                    </View>

                </View>


                <View style={{ alignItems: "center" }}>
                    <View style={styles.all_plan}>
                        <Text style={styles.all_plan_text}>See All Investment Plan</Text>
                        <AntDesign name="down" size={20} color="#C0392B" />
                    </View>
                </View>

                <View style={styles.border}></View>

                {/* Top roted fund section */}

                <Text style={styles.roted_text}>Top Rated Funds</Text>

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
                <View style={styles.roted_border}></View>
                <View style={styles.border}></View>

                {/* quick access section */}

                <View style={styles.quick_sec}>
                    <Text style={styles.quick_text}>Quick Access</Text>
                    <ScrollView horizontal={true}>

                        <View style={styles.education_top}>
                            <View style={[styles.education, styles.quick_access]}>
                                <View style={styles.child_sec}>
                                    <Image
                                        source={require('../../../assets/term8.png')}
                                        style={styles.quick_img}
                                    />
                                </View>
                                <View style={styles.education_sec}>
                                    <Text style={styles.earn}>Refer & Earn</Text>
                                    <Text style={styles.child_text}>Now earn upto
                                        Rs. 5,000/-</Text>
                                </View>
                            </View>

                            <View style={[styles.education, styles.quick_access]}>
                                <View style={styles.child_sec}>
                                    <Image
                                        source={require('../../../assets/term8.png')}
                                        style={styles.quick_img}
                                    />
                                </View>
                                <View style={styles.education_sec}>
                                    <Text style={styles.earn}>Refer & Earn</Text>
                                    <Text style={styles.child_text}>Now earn upto
                                        Rs. 5,000/-</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {/* top roted fund */}
                <View style={styles.border}></View>
                <Text style={styles.roted_text}>Top Rated Funds</Text>
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
                            <Image
                                source={require('../../../assets/term10.png')}
                                style={styles.term9}
                            />
                            <Text style={styles.minimum}>Lock-ins</Text>
                        </View>
                        <View style={styles.amount_sec}>
                            <Image
                                source={require('../../../assets/term11.png')}
                                style={styles.Flexibility}
                            />
                            <Text style={styles.minimum}>Flexibility</Text>
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

            <Overlay isVisible={visible} overlayStyle={{ margin: 10, backgroundColor: '#fff' }}>
                <View style={{ padding: 10 }}>
                    <Text>Both Equity and Debt Mutual Funds
                        can be technically withdrawn as soon
                        as fund is available for daily sale and repurchase. Of course liquidity is one
                        of the biggest advantages of investing
                        in Mutual Funds which is not available
                        in many other asset classes. Amount redeemed or withdrawn will be credited to investor's bank account within 1-4 working days depending on the type of mutual funds.</Text>
                    <TouchableOpacity onPress={toggleOverlay}><Text style={{ color: '#ff0000' }}>CLOSE</Text></TouchableOpacity>
                </View>
            </Overlay>

        </View>
    );
}


const styles = StyleSheet.create({
    container: { marginBottom: 200, },
    header: {
        borderBottomColor: colors.BLACK,
        borderBottomWidth: 1
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
        color: colors.GRAY_DEEP,
        fontWeight: "bold",
        marginVertical: 30,
    },
    botton_box: {
        backgroundColor: colors.RED,
        paddingHorizontal: 50,
        paddingVertical: 20,
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.GRAY_DEEP,
        width: '85%',
        fontWeight: "bold",

    },
    get_otp: {
        color: colors.WHITE,
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: 5,
        textAlign: "center"
    },
    Plan: {
        fontSize: 20,
        color: colors.DEEP_GRAY,
        fontWeight: "bold",
        marginTop: 30,
        paddingHorizontal: 10,
    },
    education_top: {
        paddingLeft: 50,
        flexDirection: "row",
    },
    education: {
        flexDirection: "row",
        width: 370,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: colors.GRAY_LIGHT,
        borderRadius: 15,
        marginVertical: 20,
        marginHorizontal: 5,
        padding: 20,
        backgroundColor: colors.WHITE,
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
        borderColor: colors.BLACK,
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
        color: colors.GRAY_LIGHT_1,
        paddingTop: 15,
        paddingLeft: 20,
    },
    border: {
        marginTop: 10,
        height: 4,
        marginHorizontal: 20,
        backgroundColor: colors.GRAY_LIGHT,
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
        backgroundColor: colors.WHITE,
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
        width: 112,
        height: 113,
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
        color: colors.RED,
        fontWeight: "bold",
    },
    roted_text: {
        fontSize: 20,
        color: colors.DEEP_GRAY,
        fontWeight: "bold",
        paddingLeft: 20,
        marginTop: 20,
    },
    fund_img: {
        height: 122,
        width: 126,
    },
    quick_sec: {
        backgroundColor: colors.PINK,
        paddingBottom: 20,
    },

    quick_text: {
        fontSize: 20,
        color: colors.RED,
        fontWeight: "bold",
        paddingLeft: 20,
        marginVertical: 20,
    },
    quick_img: {
        height: 94,
        width: 82,
    },
    earn: {
        color: colors.RED,
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 20,
    },
    ship_text: {
        color: colors.BLACK,
        textAlign: "center",
        paddingTop: 10,

    },
    /* top roted fund sec2 */
    roted_bottom: {
        flexDirection: "row",
        paddingLeft: 40,
        marginVertical: 30,
    },
    amount_sec: {

        width: 150,
        borderWidth: 3,
        borderStyle: "solid",
        borderColor: colors.YELLOW_LIGHT,
        marginVertical: 20,
        marginHorizontal: 5,
        padding: 10,
        backgroundColor: colors.WHITE,
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
        color: colors.BLACK,
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
        padding: 40,
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
        color: colors.GREY_1,
    },
    botton_box: {
        alignItems: "center",
        backgroundColor: colors.RED,
        paddingHorizontal: 70,
        paddingVertical: 20,
        marginTop: 80,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.DEEP_GRAY,

    },
    get_otp: {
        color: colors.WHITE,
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
        color: colors.DEEP_GRAY,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingBottom: 40,
        marginTop: 20,
    },
    view: {
        fontSize: 15,
        textAlign: "center",
        color: colors.RED,
        fontWeight: "bold",
        paddingBottom: 5
    },
    // // qip_sec:{
    // //     backgroundColor:colors.WHITE,
    // //     shadowColor: "#000",
    // //     shadowOffset: {
    // //         width: 5,
    // //         height: 5,
    // //     },
    // //     shadowOpacity: 0.23,
    // //     shadowRadius: 2.62,
    // //     elevation: 4,
    // },

});