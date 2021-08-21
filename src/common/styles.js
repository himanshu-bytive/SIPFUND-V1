import { StyleSheet } from "react-native";
import { colors } from './theme';
export const commonStyles = StyleSheet.create({
    header: {
        borderBottomColor: colors.BLACK,
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
    headerkn: { marginTop: 20,
         borderWidth: 1, 
         backgroundColor: colors.WHITE,
          borderColor: colors.RED, padding: 5,
           borderRadius: 7, },
           textkn:{fontSize:22,
        color:colors.RED,
    fontWeight:"bold",},
});