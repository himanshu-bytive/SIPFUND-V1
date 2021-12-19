import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";
import { AntDesign, Entypo } from "react-native-vector-icons";
import { connect } from "react-redux";

import { Colors } from "../../common";

const RmNotFoundScreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Header
        leftComponent={
          <TouchableOpacity
            onPress={() => props.navigation.toggleDrawer()}
            style={{ marginTop: 20 }}
          >
            <Entypo name={"menu"} size={30} color={Colors.RED} />
          </TouchableOpacity>
        }
        backgroundColor={Colors.LIGHT_WHITE}
        centerComponent={
          <Image
            source={require("../../../assets/icon.png")}
            style={styles.logimg}
          />
        }
        rightComponent={
          <View style={{ marginTop: 20, marginRight: 10 }}>
            <AntDesign name={"shoppingcart"} size={40} color={Colors.RED} />
          </View>
        }
      />
      <View style={styles.container}>
        <Image source={require("../../../assets/rm_not_found.png")} />
        <Text style={styles.text}>
          Soon a Relationship Manager will be assigned for you
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
  },
  logimg: {
    height: 65,
    width: 203,
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    marginTop: 15,
  },
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...ownProps,
  };
};
export default connect(
  () => {
    return {};
  },
  undefined,
  mapDispatchToProps
)(RmNotFoundScreen);
