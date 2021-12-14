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
    ActivityIndicator,
} from "react-native";
import { connect } from 'react-redux'
import { DataTable } from 'react-native-paper';
import { Styles, Config, Colors, FormValidate } from '../../common'
import { Ionicons, AntDesign, MaterialIcons, Feather, Entypo, FontAwesome, FontAwesome5, } from 'react-native-vector-icons';
import { Image, Header, ListItem, Overlay, Slider } from 'react-native-elements';

function Top10Holdings(props) {
    const { detailsInfo } = props
    const [topHoldings, setTopHoldings] = useState([])
    const [totalWeight, setTotalWeight] = useState(0)

    useEffect(() => {
        let detailedPortFolio = detailsInfo ? detailsInfo[0].api['FHV2-HoldingDetail'] : [];
        let topHoldings = []
        let totalWeight = 0
        for (let i = 0; i < 5; i++) {
            totalWeight += parseFloat(detailedPortFolio[i].Weighting);
            topHoldings.push(detailedPortFolio[i])
        }
        setTopHoldings(topHoldings)
        setTotalWeight(totalWeight)
    }, [detailsInfo]);

    return (<View style={styles.contain_box}>
        <DataTable style={styles.dataTable}>
            <DataTable.Header style={styles.headerbg}>
                <DataTable.Title numberOfLines={4} style={styles.headerCell}>Name</DataTable.Title>
                <DataTable.Title numberOfLines={4} style={[styles.headerCell, { borderRightWidth: 0 }]} >Assets%</DataTable.Title>
            </DataTable.Header>

            {topHoldings.map((item, key) => <DataTable.Row key={key} style={styles.headersec}>
                <DataTable.Cell style={styles.bodyCell}>{item.Name}</DataTable.Cell>
                <DataTable.Cell style={[styles.bodyCell, { borderRightWidth: 0 }]} >{item.Weighting} %</DataTable.Cell>
            </DataTable.Row>)}
        </DataTable>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dataTable: {
        borderWidth: 1,
        borderColor: Colors.DEEP_GRAY,
    },
    dataTablebottom: {
        borderRightWidth: 1,
        borderColor: Colors.DEEP_GRAY,
    },
    headerbg: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.DEEP_GRAY,
    },
    headerCell: {
        padding: 5,
        borderRightWidth: 1,
        borderRightColor: Colors.DEEP_GRAY,
        justifyContent: 'center',
    },
    bodyCell: {
        padding: 5,
        borderRightWidth: 1,
        borderRightColor: Colors.DEEP_GRAY,
        justifyContent: 'center',
    },


});

const mapStateToProps = (state) => ({
    token: state.auth.token,
    users: state.auth.user,
    detailsInfo: state.fundDetail.detailsInfo,
})


export default connect(mapStateToProps)(Top10Holdings)