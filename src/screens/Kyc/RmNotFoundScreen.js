import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

const RmNotFoundScreen = () => {
    return (
        <View style={styles.container}>
            <Text>RM not found!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default connect(
    () => {
        return {};
    },
    undefined,
    () => {
        return {};
    }
)(RmNotFoundScreen);
