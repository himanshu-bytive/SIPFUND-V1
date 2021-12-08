import React, { useState, useRef, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from "react-native";
import { connect } from "react-redux";
import { Styles, Config, Colors } from "../../common";
import { MySelectPicker } from "../../components";
import { AntDesign } from "react-native-vector-icons";
import { Image, Header } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

function OwnerChoice(props) {
  const pageActive = useRef(false);
  const {
    token,
    isFetching,
    mainCategory,
    mainCat,
    subCatagorys,
    subCat,
    fetchScheme,
    schemeCat,
    schemeGo,
    choices,
  } = props;
  const [catList, setCatList] = useState([]);
  const [subcatList, setSubCatList] = useState([]);
  const [schemeList, setSchemeList] = useState([]);
  const [dataAvailable, setDataAvailable] = useState(false);
  useEffect(() => {
    if (token) {
      mainCategory(token);
    }
  }, [token]);

  useEffect(() => {
    if (mainCat) {
      const stateList = mainCat.map((item) => ({
        value: item,
        label: String(item),
      }));
      setCatList(stateList);
    }
  }, [mainCat]);

  useEffect(() => {
    if (subCat) {
      const subcatList = subCat.map((item) => ({
        value: item,
        label: String(item),
      }));
      setSubCatList(subcatList);
    }
  }, [subCat]);

  useEffect(() => {
    if (schemeCat) {
      const schemeList = schemeCat.map((item) => ({
        value: item.productISIN,
        label: String(item.productName),
      }));
      setSchemeList(schemeList);
    }
  }, [schemeCat]);

  useEffect(() => {
    if (choices && pageActive.current) {
      pageActive.current = false;
      //props.navigation.navigate('TopRatedHome')
      setDataAvailable(true);
    }
  }, [choices]);

  const [state, setState] = useState({
    catagory: "",
    subcatagory: "",
    scheme: "",
  });

  const [errors, setErrors] = useState({
    catagory: null,
    subcatagory: null,
    scheme: null,
  });

  const catAction = async (catagory) => {
    if (catagory) {
      setState({ ...state, catagory });
      subCatagorys({ catagory }, token);
    }
  };

  const subcatAction = async (subcatagory) => {
    if (subcatagory) {
      setState({ ...state, subcatagory });
      fetchScheme({ subcatagory }, token);
    }
  };

  const schemeAction = async () => {
    if (state.scheme) {
      pageActive.current = true;
      schemeGo({ isin: state.scheme }, token);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={{ marginTop: 20 }}
          >
            <AntDesign name={"arrowleft"} size={40} color={Colors.RED} />
          </TouchableOpacity>
        }
        containerStyle={Styles.header}
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
      {isFetching && (
        <View style={Styles.loading}>
          <ActivityIndicator color={Colors.BLACK} size="large" />
        </View>
      )}
      <ScrollView style={styles.containerScroll}>
        <View style={styles.report_sec}>
          <View>
            <MySelectPicker
              values={catList}
              defultValue={state.catagory}
              error={errors.catagory}
              onChange={(catagory) => {
                setErrors({ ...errors, catagory: null });
                catAction(catagory);
              }}
            />
          </View>

          <View>
            <MySelectPicker
              values={subcatList}
              defultValue={state.subcatagory}
              error={errors.subcatagory}
              onChange={(subcatagory) => {
                setErrors({ ...errors, subcatagory: null });
                subcatAction(subcatagory);
              }}
            />
          </View>

          <View>
            <MySelectPicker
              values={schemeList}
              defultValue={state.scheme}
              error={errors.scheme}
              onChange={(scheme) => {
                setErrors({ ...errors, scheme: null });
                setState({ ...state, scheme });
              }}
            />
            <View style={{ margin: 15, flexDirection: "row-reverse" }}>
              <TouchableOpacity
                onPress={() => schemeAction()}
                style={styles.botton_box}
              >
                <Text style={styles.get_otp}>GO</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {dataAvailable ? (
          <View style={styles.axis_asset}>
            <View style={styles.company}>
              <View>
                <Image
                  source={{
                    uri: `https://sipfund.sfo2.digitaloceanspaces.com/product-AMC-images/${choices[0]?.nseProductDetail.productAMCImage}`,
                  }}
                  style={styles.axisimg}
                />
              </View>
              <View style={styles.axiswid}>
                <Text style={styles.axis}>
                  {choices[0]?.nseProductDetail?.productName}
                </Text>
                <Text style={styles.axis2}>{choices[0]?.text2}</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    invest(
                      `https://sipfund.sfo2.digitaloceanspaces.com/product-AMC-images/${choices[0]?.nseProductDetail.productAMCImage}`,
                      choices[0]?.nseProductDetail?.amcCode,
                      choices[0]?.nseProductDetail?.amcName,
                      choices[0]?.nseProductDetail?.productCode,
                      choices[0]?.nseProductDetail.productName
                    )
                  }
                  style={styles.botton_box}
                >
                  <Text style={styles.get_otp}>INVEST</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.value_sec}>
              <View style={styles.mininvestment}>
                <Text style={styles.min}>Min. Investment</Text>
                <Text style={styles.min}>
                  {choices[0]?.nseProductDetail.minimumSIPAmount > 1000
                    ? 1000
                    : choices[0]?.nseProductDetail.minimumSIPAmount}
                </Text>
              </View>
              <View style={styles.mininvestment}>
                <Text style={styles.min}>AUM</Text>
                <Text style={styles.min}>
                  {choices[0]?.api["PSRP-TotalMarketValueNet"]}
                </Text>
              </View>
              <View style={styles.mininvestment}>
                <Text style={styles.min}>Returns</Text>
                <Text style={styles.min}>
                  {choices[0]?.nseProductDetail.productCurrentNavValue}
                </Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: Colors.GREY_1,
                marginTop: 10,
              }}
            ></View>
          </View>
        ) : (
          <View style={styles.category_sec}>
            <Text style={styles.category}>First select category.</Text>
            <Text style={styles.category}>Then select subcategory.</Text>
            <Text style={styles.category}>Then select scheme.</Text>
            <Text style={styles.category}>Press GO.</Text>
            <Text style={styles.category}>
              For changing scheme please press the scheme nameagain
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  container_sec: {
    margin: 10,
  },
  containerScroll: {
    width: "100%",
  },
  logimg: {
    height: 65,
    width: 203,
    marginTop: 10,
  },

  investment_summary: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: Colors.DEEP_GRAY,
  },

  schemetype1: {
    color: Colors.DEEP_GRAY,
    marginVertical: 20,
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 10,
  },
  botton_box: {
    paddingHorizontal: 20,
    backgroundColor: Colors.RED,
    marginLeft: 5,
  },
  get_otp: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  category_sec: {
    alignItems: "center",
    marginTop: "30%",
  },
  category: {
    fontSize: 13,
    textAlign: "center",
  },
  returnsbox: { flexDirection: "row" },

  axis_asset: {
    marginTop: 60,
    marginHorizontal: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  company: {
    flexDirection: "row",
  },
  axis: {
    marginLeft: 10,
    fontSize: 15,
  },
  axiswid: { width: "68%" },
  axis2: {
    marginLeft: 10,
    fontSize: 12,
    color: Colors.DEEP_GRAY,
    paddingTop: 3,
  },
  axisimg: {
    height: 39,
    width: 39,
  },
  botton_box: {
    width: 80,
    backgroundColor: Colors.RED,
    height: 20,
  },
  get_otp: {
    color: Colors.WHITE,
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 4,
  },
  value_sec: {
    flexDirection: "row",
    marginLeft: 50,
  },
  mininvestment: {
    width: "33%",
    alignItems: "center",
  },
  min: {
    fontSize: 12,
  },
  footer_sec: {
    flexDirection: "row",
    marginHorizontal: 40,
    marginVertical: 30,
    justifyContent: "space-between",
  },
  rupees: {
    width: 40,
    height: 37,
  },
  rupees_sec: { alignItems: "center" },
  rupees_text: { fontSize: 12 },
});

const mapStateToProps = (state) => ({
  token: state.auth.token,
  users: state.auth.users,
  isFetching: state.ownerChoice.isFetching,
  mainCat: state.ownerChoice.mainCat,
  subCat: state.ownerChoice.subCat,
  schemeCat: state.ownerChoice.schemeCat,
  choices: state.ownerChoice.choices,
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { OwnerChoiceActions } = require("../../store/OwnerChoiceRedux");
  return {
    ...stateProps,
    ...ownProps,
    mainCategory: (token) => {
      OwnerChoiceActions.mainCategory(dispatch, token);
    },
    subCatagorys: (params, token) => {
      OwnerChoiceActions.subCatagorys(dispatch, params, token);
    },
    fetchScheme: (params, token) => {
      OwnerChoiceActions.fetchScheme(dispatch, params, token);
    },
    schemeGo: (params, token) => {
      OwnerChoiceActions.schemeGo(dispatch, params, token);
    },
  };
};
export default connect(
  mapStateToProps,
  undefined,
  mapDispatchToProps
)(OwnerChoice);
