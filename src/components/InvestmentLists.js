import React, { useState, useRef, useEffect, useContext } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { Colors } from "../common";
import SvgUri from "expo-svg-uri";
export default function InvestmentLists(props) {
  const { data, counts, onPress } = props;
  if (counts) {
    return (
      <View style={styles.investment_sec}>
        {data.map((item, key) => (
          <View key={key} style={styles.investment}>
            {key < counts && (
              <TouchableOpacity
                onPress={() => onPress(item)}
                style={{ width: "100%" }}
              >
                <SvgUri
                  width="100%"
                  height="113"
                  source={{
                    uri: item.planImagePath,
                  }}
                />

                <Text style={styles.long}>{item.plan}</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>
    );
  } else {
    return (
      <View style={styles.investment_sec}>
        {data.map((item, key) => (
          <View key={key} style={styles.investment}>
            <TouchableOpacity
              onPress={() => onPress(item)}
              style={{ width: "100%" }}
            >
              <SvgUri
                width="100%"
                height="113"
                source={{
                  uri: item.planImagePath,
                }}
              />
              <Text style={styles.long}>{item.plan}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  investment_sec: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 10,
  },
  investment: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: Colors.WHITE,
    width: "29.333%",
    alignItems: "center",
    margin: "2%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  term: {
    width: "100%",
    height: 113,
    borderRadius: 20,
  },
  long: {
    textAlign: "center",
    paddingVertical: 10,
    //paddingHorizontal: 15,
    fontSize: 14,
    fontWeight: "bold",
  },
});
