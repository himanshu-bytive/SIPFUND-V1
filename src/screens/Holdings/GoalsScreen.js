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
import { colors } from '../../common/theme';
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';

export default function GoalsScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header_top}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#ccc', iconStyle: { color: colors.RED ,paddingTop:30,} }}
                    backgroundColor={colors.PEACH}
                    centerComponent={<Image
                        source={require('../../../assets/icon.png')}
                        style={styles.logimg}
                    />}
                    rightComponent={{ text: 'KN', color: '#CD2700' }}
                />

                <Image
                    source={require('../../../assets/goals_1.png')}
                    style={styles.goals_1}
                />
                <Text style={styles.text_goals}>Goals</Text>
                <Text style={styles.text_goals1}>No Goals set as of now !</Text>
            </View>

            <View style={styles.education}>
                <View style={styles.child_sec}>
                    <Image
                        source={require('../../../assets/childimg.png')}
                        style={styles.goals_2}
                    />
                </View>
                <View style={styles.education_sec}>
                    <Text style={styles.child}>Child’s Education</Text>
                    <Text style={styles.child_text}>Secure your child’s future, invest for his education</Text>
                </View>
            </View>
            <View style={styles.education}>
                <View style={styles.child_sec}>
                    <Image
                        source={require('../../../assets/home.png')}
                        style={styles.goals_2}
                    />
                </View>
                <View style={styles.education_sec}>
                    <Text style={styles.child}>Dream Home</Text>
                    <Text style={styles.child_text}>Plan your home down payment for the dream house</Text>
                </View>
            </View>
            <View style={styles.education}>
                <View style={styles.child_sec}>
                    <Image
                        source={require('../../../assets/retire.png')}
                        style={styles.goals_2}
                    />
                </View>
                <View style={styles.education_sec}>
                    <Text style={styles.child}>Retire Rich</Text>
                    <Text style={styles.child_text}>Secure your post retirement expense, get income after retirement</Text>
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
                    <Text style={styles.child}>Child’s Marriage</Text>
                    <Text style={styles.child_text}>Invest now for expenses of chid’s marriage in future</Text>
                </View>
            </View>
            <View style={styles.education}>
                <View style={styles.child_sec}>
                    <Image
                        source={require('../../../assets/car-purchase.png')}
                        style={styles.goals_2}
                    />
                </View>
                <View style={styles.education_sec}>
                    <Text style={styles.child}>Car Purchase</Text>
                    <Text style={styles.child_text}>Plan for that dream car you always wanted</Text>
                </View>
            </View>            






        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',


    },
    header_top: {
        alignItems: "center",
        backgroundColor: colors.PEACH,
        width: '100%',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: colors.GREY_1,
    },
    header: {
        width: '100%',
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: colors.GREY_1,
        backgroundColor: '#F9F9F9',
        alignItems: "center",
        backgroundColor: colors.LIGHT_WHITE,
        paddingTop: 10,
        paddingBottom: 10,


    },
    logimg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },

    goals_1: {

        height: 87,
        width: 94,
    },
    goals_2:{height: 145,
        width: 145,},
    









    text_goals: {
        fontSize: 20,
        marginVertical: 15,
        fontWeight: "bold",

    },

    text_goals1: {
        fontSize: 20,
        marginBottom: 15,
    },
    child_sec: { width: '40%' },
    education_sec: {
        width: '60%',
        marginTop:10,
        
    },
    education: {
        flexDirection: "row",
        width: '90%',
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: colors.GRAY_LIGHT,
        borderRadius: 15,
        marginVertical: 20,
        padding: 20,
    },
    child: {

        fontSize: 20,
        fontWeight: "bold",
        paddingLeft:20,
    },
    child_text: {

        fontSize: 18,
        color: colors.GRAY_LIGHT_1,
        paddingTop: 15,
        paddingLeft:20,
    },



















    // slogan: {
    //     fontSize: 25,
    //     color: '#000',
    //     marginTop: 100

    // },
    // sloganRed: {
    //     color: '#ff0000',
    // },
    // otpsec: {
    //     fontSize: 20,
    // },
    // nseimg: { marginTop: 50, },

    // inputsec: {
    //     borderWidth: 2,
    //     borderColor: colors.GRAY_LIGHT,
    //     width: '70%',
    //     height: 50,
    //     fontSize: 20,
    //     marginTop: 5,
    //     marginBottom: 20,
    //     borderRadius: 10,
    //     paddingHorizontal: 10,
    //     backgroundColor: colors.LITTLE_WHITE,
    // },
    // refreshcode: {
    //     width: '70%',
    //     textAlign: "right",
    //     color: colors.RED,
    //     fontSize: 15,
    // },
    // confrom_button: {
    //     marginTop: 5,
    //     marginBottom: 5,
    // },

    // checkbox_style: {
    //     backgroundColor: colors.TRANSPARENT,
    //     borderColor: colors.TRANSPARENT,
    // },
    // botton_box: {
    //     flexDirection: 'row',
    //     backgroundColor: colors.RED,
    //     paddingHorizontal: 70,
    //     paddingVertical: 10,
    //     marginTop: 20,
    //     borderRadius: 10,
    // },
    // get_otp: {
    //     color: colors.WHITE,
    //     fontSize: 22,
    //     fontWeight: 'bold',
    //     marginRight: 5,
    // },
});