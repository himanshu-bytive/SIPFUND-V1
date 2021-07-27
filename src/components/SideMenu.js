import React, { useContext, useEffect } from 'react';
import {
    Text,
    View,
    Dimensions,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    Linking,
    Alert,
    Share,
    Platform
} from 'react-native';
import { colors } from '../common/theme';
export default function SideMenu(props) {

    return (
        <View style={styles.mainViewStyle}>
           <Text>Sidebar...</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    myHeader: {
        marginTop: 0,
    },
    menuItemView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 1,
        padding: 10,
        flex: 1
    },
    active: {
        backgroundColor: colors.GREY.navActive,
        borderRightWidth: 2,
        borderRightColor: colors.BLACK,
    },
    viewIcon: {
        width: 24,
        height: 24,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        left: 1
    },
    menuName: {
        color: colors.BLACK,
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 15,
        width: "100%"
    },
    mainViewStyle: {
        backgroundColor: colors.WHITE,
        height: '100%',
    },
    compViewStyle: {
        position: 'relative',
        flex: 3
    },
    iconStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logOutButtonDark: {
        margin: 10,
        marginBottom: 30,
        backgroundColor: colors.GREEN.bright,
        borderWidth: 1,
        borderColor: colors.BLACK,
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonTitle: {
        fontSize: 22
    }
})