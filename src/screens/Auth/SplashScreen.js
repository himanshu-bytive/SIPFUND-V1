import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
} from "react-native";
import { connect } from 'react-redux'
import { Styles, Config, Colors, FormValidate } from '@common'

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 30 }}>
                <Text style={styles.slogan}>Achieve Your <Text style={styles.sloganRed}>Dreams</Text></Text>
            </View>
            <View>
                <Image
                    source={require('../../../assets/icon.png')}
                    style={styles.imgeWidht}
                />
            </View>
            <View style={styles.mainbox}>
                <Text style={styles.most_trusted}>Most trusted for</Text>
                <Text style={styles.most_trusted}>Mutual Fund Investment</Text>
                <Image
                    source={require('../../../assets/nse.png')}
                    style={styles.nseimg}

                />
                <Image
                    source={require('../../../assets/powerby.png')}
                    style={styles.powerbyimg}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 70,
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    mainbox: {
        alignItems: "center",
    },
    slogan: {
        fontSize: 30,
        marginBottom: 15,
        color: Colors.BLACK,
    },
    sloganRed: {
        color: Colors.RED,
    },
    most_trusted: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 20
    },
    nseimg: {
        marginVertical: 20,
    },
});