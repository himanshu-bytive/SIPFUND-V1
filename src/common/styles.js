import { StyleSheet } from "react-native";
import { colors } from './theme';
export const commonStyles = StyleSheet.create({
    header: {
        borderBottomColor: "#707070",
        borderBottomWidth: 1,
    },
    containerScroll: {
        width: '100%'
    },
    headerImg: {
        height: 65,
        width: 203,
        marginTop: 10,
    },
    headerkn: {
        marginTop: 20,
        borderWidth: 1,
        backgroundColor: colors.WHITE,
        borderColor: colors.RED, padding: 5,
        borderRadius: 7,
    },
    textkn: {
        fontSize: 22,
        color: colors.RED,
        fontWeight: "bold",
    },
    carticon:{
        marginTop: 20, 
        marginRight: 10,
    },

    Header_top: {
        backgroundColor: colors.PEACH,
        width: '100%',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: colors.DARK_GREY,
        alignItems: "center",
        marginTop:-2,
    },



});