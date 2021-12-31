import React, { useState, useRef, useEffect, useContext } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import { AntDesign } from "react-native-vector-icons";
import { Image, CheckBox } from "react-native-elements";
import { Styles, Config, Colors, FormValidate } from "../common";

export default function TopRatedFundType(props) {
  const { onPress, type, title, sip, image, deleteItem, fromSIP } = props;

  return (
    <View style={styles.axis_asset}>
      <View style={styles.company}>
        <Image source={{ uri: image }} style={styles.axisimg} />
        <View style={styles.management}>
          <Text style={styles.axis}>{title}</Text>
          <Text style={styles.moderately}>Moderately High Risk</Text>
        </View>

        <AntDesign
          onPress={() => deleteItem(title)}
          name={"delete"}
          size={25}
          color={Colors.RED}
        />
      </View>

      {/* border_sec */}
      <View style={styles.border_sec}>
        <View style={styles.border}>
          <View
            style={{ borderWidth: 1, borderColor: Colors.DEEP_GRAY }}
          ></View>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity style={styles.circle} onPress={onPress}>
            <AntDesign name="right" size={30} color="#C0392B" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Select Folio No._sec */}

      <View style={styles.selectfolio_sec}>
        <View style={styles.select}>
          <Text style={styles.no}>Select Folio No.</Text>
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              borderBottomColor: "#707070",
            }}
          >
            <Text style={styles.new}>New Folio</Text>
            <AntDesign name="caretdown" size={20} color="#C0392B" />
          </View>
        </View>

        {fromSIP && (
          <View style={styles.select}>
            <Text style={styles.no}>SIP Date</Text>

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.new}>5</Text>
              <AntDesign name="caretdown" size={20} color="#C0392B" />
            </View>
          </View>
        )}
        <View style={styles.select}>
          <Text style={styles.no}>{fromSIP ? "SIP" : "Amount"}</Text>
          <Text style={styles.new}>₹{sip}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  axis_asset: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: Colors.WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.GREY_1,
  },
  company: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  management: {
    marginLeft: 10,
    width: "70%",
  },
  axis: {
    fontSize: 15,
  },
  moderately: {
    fontSize: 12,
    color: Colors.DEEP_GRAY,
  },
  axisimg: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  checkbox: {
    position: "absolute",
    right: -20,
    top: -15,
  },
  border_sec: {
    flexDirection: "row",
    marginTop: 10,
  },
  border: {
    width: "80%",
  },
  icons: {
    width: "10%",
    marginTop: -15,
    marginLeft: 10,
  },
  selectfolio_sec: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  select: {
    alignItems: "center",
    //width: "31%",
  },
  no: {
    fontSize: 14,
    color: Colors.DEEP_GRAY,
  },
  new: {
    fontSize: 16,
  },
  circle: {
    borderWidth: 2,
    borderColor: Colors.GRAY_LIGHT_1,
    borderRadius: 100,
    height: 35,
    width: 35,
    paddingLeft: 2,
  },
});
