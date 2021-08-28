import { Dimensions, Platform } from 'react-native';
import Colors from './Colors';

const { height, width } = Dimensions.get('window');
let Styles = {
    width: Dimensions.get('window').width,
    height: Platform.OS !== 'ios' ? height : (height - 20),
    header: {
        borderBottomColor: "#707070",
        borderBottomWidth: 1,
    },
    container:{
        flex: 1,
        backgroundColor: Colors.WHITE,
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
        backgroundColor: Colors.WHITE,
        borderColor: Colors.RED, padding: 5,
        borderRadius: 7,
    },
    textkn: {
        fontSize: 22,
        color: Colors.RED,
        fontWeight: "bold",
    },
    carticon: {
        marginTop: 20,
        marginRight: 10,
    },

    Header_top: {
        backgroundColor: Colors.PEACH,
        width: '100%',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: Colors.DARK_GREY,
        alignItems: "center",
        marginTop: -2,
    },
}
export default Styles;