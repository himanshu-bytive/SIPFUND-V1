import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    Button,
    ScrollView,
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
import { Entypo, AntDesign } from 'react-native-vector-icons';
import { Image, Header, CheckBox } from 'react-native-elements';

export default function GoalsScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header_top}>
                <Header
                    leftComponent={<TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={{ marginTop: 20 }}><Entypo name={"menu"} size={30} color={colors.RED} /></TouchableOpacity>}
                    backgroundColor={colors.PEACH}
                    centerComponent={<Image
                        source={require('../../../assets/icon.png')}
                        style={styles.logimg}
                    />}
                    rightComponent={{ text: 'KN', color: '#CD2700' }}
                />
                <Image
                    onPress={() => props.navigation.navigate('Home1')}
                    source={require('../../../assets/goals_1.png')}
                    style={styles.goals_1}
                />
                <Text style={styles.text_goals}>Goals</Text>
                <Text style={styles.text_goals1}>No Goals set as of now !</Text>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>

                <View style={styles.education}>
                    <View style={styles.child_sec}>
                        <Image
                            onPress={() => props.navigation.navigate('Goals1')}
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
                            onPress={() => props.navigation.navigate('Goals2')}
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
                            onPress={() => props.navigation.navigate('Goals3')}
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
                            onPress={() => props.navigation.navigate('Goals4')}
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
                            onPress={() => props.navigation.navigate('Goals5')}
                            source={require('../../../assets/car-purchase.png')}
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
                            onPress={() => props.navigation.navigate('Goals6')}
                            source={require('../../../assets/car-purchase.png')}
                            style={styles.goals_2}
                        />
                    </View>
                    <View style={styles.education_sec}>
                        <Text style={styles.child}>Car Purchase</Text>
                        <Text style={styles.child_text}>Plan for that dream car you always wanted</Text>
                    </View>
                </View>
            </ScrollView>
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
    goals_2: {
        height: 145,
        width: 145,
    },
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
        marginTop: 10,

    },
    education: {
        flexDirection: "row",
        width: '100%',
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
        paddingLeft: 20,
    },
    child_text: {

        fontSize: 18,
        color: colors.GRAY_LIGHT_1,
        paddingTop: 15,
        paddingLeft: 20,
    },
});