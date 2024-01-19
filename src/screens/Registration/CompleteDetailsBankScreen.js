/** @format */

import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Text,
  ActivityIndicator,
} from "react-native";
import moment from "moment";
import { connect } from "react-redux";
import { Styles, Colors } from "../../common";
import { MySelectPicker, MyTextInput } from "../../components";
import { AntDesign } from "react-native-vector-icons";
import { Image, Header, Overlay } from "react-native-elements";
import Cart from "../../components/Cart";

function CompleteDetailsBankScreen(props) {
  const pageActive = useRef(false);
  const [visible, setVisible] = useState(false);
  const {
    token,
    isFetching,
    updateRegister,
    createRegister,
    user,
    fatcaDetails,
    nseDetails,
    userDetails,
    accountTypes,
    banks,
    getBankDetails,
    bankDetails,
    isInn,
    isExit,
  } = props;
  const [accountTypeList, setAccountTypeList] = useState([]);
  const [bankList, setBankList] = useState([]);

  const [state, setState] = useState({
    showBank: false,
    accountType: "",
    accountNumber: "",
    ifsc: "",
    bank: "",
    branchName: "",
    branchAddress: "",
  });

  const [errors, setErrors] = useState({
    accountType: null,
    accountNumber: null,
    ifsc: null,
    showBank: null,
    bank: null,
    branchName: null,
    branchAddress: null,
  });

  useEffect(() => {
    if (isInn && pageActive.current) {
      pageActive.current = false;
      setVisible(true);
    }
  }, [isInn]);

  useEffect(() => {
    if (fatcaDetails || nseDetails || userDetails) {
      // console.log(fatcaDetails, nseDetails, userDetails)
      setTimeout(() => {
        setState({
          accountType: nseDetails.acc_type.ACC_TYPE,
          accountNumber: nseDetails.acc_no,
          ifsc: nseDetails.ifsc_code,
          bank: nseDetails.bank_name.BANK_CODE,
          branchName: nseDetails.branch_name,
          branchAddress: nseDetails.branch_addr1,
        });
      }, 1000);
    }
  }, [fatcaDetails, nseDetails, userDetails]);

  useEffect(() => {
    if (accountTypes) {
      const accountTypeList = accountTypes
        ? accountTypes.map((item) => ({
            value: item.ACC_TYPE,
            label: String(item.DESCRIPTION),
          }))
        : [];
      setAccountTypeList(accountTypeList);
    }
    if (banks) {
      const bankList = banks
        ? banks.map((item) => ({
            value: item.BANK_CODE,
            label: String(item.BANK_NAME),
          }))
        : [];
      setBankList(bankList);
    }
    if ((bankDetails && bankDetails.nseBankName) || bankDetails?.bankName) {
      let selectedBank = bankList.find(
        (x) => x.label == bankDetails.nseBankName
      );
      setState({
        ...state,
        showBank: true,
        bank: selectedBank ? selectedBank.value : "",
        branchName: bankDetails.branch,
        branchAddress: bankDetails.address,
      });
    }
  }, [accountTypes, banks, bankDetails]);

  const onAction = async () => {
    const {
      accountType,
      accountNumber,
      ifsc,
      bank,
      branchName,
      branchAddress,
      showBank,
    } = state;
    if (!accountType) {
      setErrors({ ...errors, accountType: "Please Select a Value" });
      return;
    }
    if (!accountNumber) {
      setErrors({ ...errors, accountNumber: "Please Add a Value" });
      return;
    }
    if (accountNumber.length < 9 || accountNumber.length > 21) {
      setErrors({ ...errors, accountNumber: "Please Add a Valid Value" });
      return;
    }
    if (!ifsc) {
      setErrors({ ...errors, ifsc: "Please Add a Value" });
      return;
    }
    if (ifsc.length < 9 || ifsc.length > 20) {
      setErrors({ ...errors, ifsc: "Please Add a Valid Value" });
      return;
    }
    if (!showBank) {
      setErrors({ ...errors, showBank: "Please Fetch Bank Details" });
      return;
    }
    if (!bank) {
      setErrors({ ...errors, bank: "Please Select a Value" });
      return;
    }
    if (!branchName) {
      setErrors({ ...errors, branchName: "Please Add a Value" });
      return;
    }
    if (!branchAddress) {
      setErrors({ ...errors, branchAddress: "Please Add a Value" });
      return;
    }
    let params = { ...{ nseDetails }, ...{ fatcaDetails }, ...{ userDetails } };
    let selAccountType = accountTypes.find((x) => x.ACC_TYPE === accountType);
    let selBank = banks.find((x) => x.BANK_CODE === bank);
    params.nseDetails.acc_type = {
      ACC_TYPE: selAccountType.ACC_TYPE,
      DESCRIPTION: selAccountType.DESCRIPTION,
    };
    params.nseDetails.acc_no = accountNumber;
    params.nseDetails.ifsc_code = ifsc;
    params.nseDetails.bank_name = {
      BANK_CODE: selBank.BANK_CODE,
      BANK_NAME: selBank.BANK_NAME,
    };
    params.nseDetails.branch_name = branchName;
    params.nseDetails.branch_addr1 = branchAddress;
    updateRegister(params, token);
    let paramsNew = {
      service_request: {
        acc_no: params.nseDetails.acc_no,
        acc_type: params.nseDetails.acc_type.ACC_TYPE,
        addr1: params.nseDetails.addr1,
        addr2: params.nseDetails.addr2,
        addr3: params.nseDetails.addr3,
        bank_name: params.nseDetails.bank_name.BANK_NAME,
        branch_addr1: params.nseDetails.branch_addr1,
        branch_addr2: params.nseDetails.branch_addr2,
        branch_addr3: params.nseDetails.branch_addr3,
        branch_city: params.nseDetails.branch_city,
        branch_country: params.nseDetails.branch_country,
        branch_name: params.nseDetails.branch_name,
        branch_pincode: params.nseDetails.branch_pincode,
        city: params.nseDetails.city.CITY,
        country: params.nseDetails.country.COUNTRY_CODE,
        dob: params.nseDetails.dob
          ? moment(params.nseDetails.dob).format("DD-MMM-YYYY")
          : "",
        dp_id: params.nseDetails.dp_id,
        email: params.nseDetails.email,
        exempt_category: params.nseDetails.exempt_category,
        exempt_ref_no: params.nseDetails.exempt_ref_no,
        exemption: params.nseDetails.exemption,
        father_name: params.nseDetails.father_name,
        guard_dob: params.nseDetails.guard_dob
          ? moment(params.nseDetails.guard_dob).format("DD-MMM-YYYY")
          : "",
        guard_exempt_category: "",
        guard_exemption: "",
        guard_kyc: params.nseDetails.guard_kyc,
        guard_name: params.nseDetails.guard_name,
        guard_pan: params.nseDetails.guard_pan,
        guard_pan_ref_no: "",
        guard_valid_pan: "",
        hold_nature: params.nseDetails.hold_nature.HOLD_NATURE_CODE,
        ifsc_code: params.nseDetails.ifsc_code,
        inv_name: params.nseDetails.inv_name,
        jh1_dob: params.nseDetails.jh1_dob
          ? moment(params.nseDetails.jh1_dob).format("DD-MMM-YYYY")
          : "",
        jh1_email: params.nseDetails.jh1_email,
        jh1_exempt_category: params.nseDetails.jh1_exempt_category,
        jh1_exempt_ref_no: params.nseDetails.jh1_exempt_ref_no,
        jh1_exemption: params.nseDetails.jh1_exemption,
        jh1_kyc: params.nseDetails.jh1_kyc,
        jh1_mobile_no: params.nseDetails.jh1_mobile_no,
        jh1_name: params.nseDetails.jh1_name,
        jh1_pan: params.nseDetails.jh1_pan,
        jh1_valid_pan: params.nseDetails.jh1_valid_pan,
        jh2_dob: params.nseDetails.jh2_dob
          ? moment(params.nseDetails.jh2_dob).format("DD-MMM-YYYY")
          : "",
        jh2_email: params.nseDetails.jh2_email,
        jh2_exempt_category: params.nseDetails.jh2_exempt_category,
        jh2_exempt_ref_no: params.nseDetails.jh2_exempt_ref_no,
        jh2_exemption: params.nseDetails.jh2_exemption,
        jh2_kyc: params.nseDetails.jh2_kyc,
        jh2_mobile_no: params.nseDetails.jh2_mobile_no,
        jh2_name: params.nseDetails.jh2_name,
        jh2_pan: params.nseDetails.jh2_pan,
        jh2_valid_pan: params.nseDetails.jh2_valid_pan,
        kyc: params.nseDetails.kyc,
        mfu_can: params.nseDetails.mfu_can,
        mobile_no: user.mobileNo,
        mother_name: params.nseDetails.mother_name,
        no_of_nominee: params.nseDetails.no_of_nominee,
        nominee1_addr1: params.nseDetails.nominee1_addr1,
        nominee1_addr2: params.nseDetails.nominee1_addr2,
        nominee1_addr3: params.nseDetails.nominee1_addr3,
        nominee1_city: params.nseDetails.nominee1_city,
        nominee1_dob: params.nseDetails.nominee1_dob
          ? moment(params.nseDetails.nominee1_dob).format("DD-MMM-YYYY")
          : "",
        nominee1_guard_name: params.nseDetails.nominee1_guard_name,
        nominee1_guard_pan: params.nseDetails.nominee1_guard_pan,
        nominee1_name: params.nseDetails.nominee1_name,
        nominee1_percent: 100.0,
        nominee1_pincode: params.nseDetails.nominee1_pincode,
        nominee1_relation: params.nseDetails.nominee1_relation,
        nominee1_state: params.nseDetails.nominee1_state,
        nominee1_type: params.nseDetails.nominee1_type,
        nominee2_dob: params.nseDetails.nominee2_dob
          ? moment(params.nseDetails.nominee2_dob).format("DD-MMM-YYYY")
          : "",
        nominee2_guard_name: params.nseDetails.nominee2_guard_name,
        nominee2_guard_pan: params.nseDetails.nominee2_guard_pan,
        nominee2_name: params.nseDetails.nominee2_name,
        nominee2_percent: params.nseDetails.nominee2_percent,
        nominee2_relation: params.nseDetails.nominee2_relation,
        nominee2_type: params.nseDetails.nominee2_type,
        nominee3_dob: params.nseDetails.nominee3_dob
          ? moment(params.nseDetails.nominee3_dob).format("DD-MMM-YYYY")
          : "",
        nominee3_guard_name: params.nseDetails.nominee3_guard_name,
        nominee3_guard_pan: params.nseDetails.nominee3_guard_pan,
        nominee3_name: params.nseDetails.nominee3_name,
        nominee3_percent: params.nseDetails.nominee3_percent,
        nominee3_relation: params.nseDetails.nominee3_relation,
        nominee3_type: params.nseDetails.nominee3_type,
        nri_addr1: params.nseDetails.nri_addr1,
        nri_addr2: params.nseDetails.nri_addr2,
        nri_addr3: params.nseDetails.nri_addr3,
        nri_city: params.nseDetails.nri_city,
        nri_country: "",
        nri_pincode: params.nseDetails.nri_pincode,
        nri_state: params.nseDetails.nri_state,
        occupation: params.nseDetails.occupation.OCCUPATION_CODE,
        off_fax: params.nseDetails.off_fax,
        off_phone: params.nseDetails.off_phone,
        pan: params.nseDetails.pan,
        pincode: params.nseDetails.pincode,
        res_fax: params.nseDetails.res_fax,
        res_phone: "",
        state: params.nseDetails.state.STATE_CODE,
        tax_status: params.nseDetails.tax_status.TAX_STATUS_CODE,
        title: params.nseDetails.title,
        trxn_acceptance: params.nseDetails.trxn_acceptance,
        valid_pan: params.nseDetails.valid_pan,
        Email_relation:
          params.nseDetails?.email_relation ||
          params.nseDetails?.Email_relation,
        Mobile_relation:
          params.nseDetails?.mobile_relation ||
          params.nseDetails?.Mobile_relation,
      },
    };
    setTimeout(() => createRegister(paramsNew, token), 3000);
    pageActive.current = true;
  };

  const onComplete = () => {
    setVisible(false);
    if (isInn && isExit) {
      props.navigation.navigate("Existing");
    } else {
      props.navigation.navigate("UploadDocument");
    }
  };
  return (
    <>
      <Header
        leftComponent={
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={{ marginTop: 20 }}
          >
            <AntDesign name={"arrowleft"} size={40} color={Colors.RED} />
          </TouchableOpacity>
        }
        containerStyle={styles.header}
        backgroundColor={Colors.LIGHT_WHITE}
        centerComponent={
          <Image
            source={require("../../../assets/icon.png")}
            style={styles.logimg}
          />
        }
        rightComponent={
          <Cart
            nav={() => {
              props.navigation.navigate("TopRatedList");
            }}
          />
        }
      />
      {isFetching && (
        <View style={Styles.loading}>
          <ActivityIndicator color={Colors.BLACK} size="large" />
        </View>
      )}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        // behavior="position"
        enabled
      >
        <ScrollView>
          <View style={styles.heading_sec}>
            <Text style={styles.heading}>
              Your bank account details are required as they need to be linked
              to your mutual fund account so that you can do the transactions.
              Your bank account details are safe and stored in encrypted format
              in NSE.
            </Text>
          </View>

          {/* state_sec */}
          <View style={styles.container_sec}>
            <Text style={styles.occupation}>
              Account Type <Text style={styles.error}>*</Text>
            </Text>
            <MySelectPicker
              values={accountTypeList}
              defultValue={state.accountType}
              error={errors.accountType}
              placeholder={"Select A/C type"}
              onChange={(accountType) => {
                setErrors({ ...errors, accountType: null });
                setState({ ...state, accountType });
              }}
            />

            <Text style={styles.occupation}>
              Account No. <Text style={styles.error}>*</Text>
            </Text>
            <MyTextInput
              keyboardType="numeric"
              maxLength={16}
              value={state.accountNumber}
              error={errors.accountNumber}
              onChangeText={(accountNumber) => {
                setErrors({ ...errors, accountNumber: null });
                setState({ ...state, accountNumber });
              }}
            />

            <Text style={styles.occupation}>
              IFSC Code <Text style={styles.error}>*</Text>
            </Text>
            <MyTextInput
              value={state.ifsc}
              error={errors.ifsc}
              autoCapitalize={"characters"}
              maxLength={11}
              onChangeText={(ifsc) => {
                setErrors({ ...errors, ifsc: null });
                setState({ ...state, ifsc });
              }}
            />

            <View style={{ alignItems: "center" }}>
              {isFetching ? (
                <View style={styles.botton_box}>
                  <ActivityIndicator size={30} color={Colors.WHITE} />
                </View>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    if (
                      state.accountNumber.length < 9 ||
                      state.accountNumber.length > 21
                    ) {
                      setErrors({
                        ...errors,
                        accountNumber: "Please Add a Valid Value",
                      });
                    } else {
                      getBankDetails(state.ifsc, token);
                      setErrors({ ...errors, showBank: null });
                    }
                  }}
                  style={[styles.botton_box, { marginTop: 10 }]}
                >
                  <Text style={styles.get_otp}>Fetch Bank Details</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          {/* <View style={styles.container_sec}>
            <Text style={styles.occupation}>
              Account Type <Text style={styles.error}>*</Text>
            </Text>
            <MySelectPicker
              values={accountTypeList}
              defultValue={state.accountType}
              error={errors.accountType}
              placeholder={"Select A/C type"}
              onChange={(accountType) => {
                setErrors({ ...errors, accountType: null });
                setState({ ...state, accountType });
              }}
            />

            <Text style={styles.occupation}>
              Account No. <Text style={styles.error}>*</Text>
            </Text>
            <MyTextInput
              keyboardType="numeric"
              maxLength={16}
              value={state.accountNumber}
              error={errors.accountNumber}
              onChangeText={(accountNumber) => {
                setErrors({ ...errors, accountNumber: null });
                setState({ ...state, accountNumber });
              }}
            />

            <Text style={styles.occupation}>
              IFSC Code <Text style={styles.error}>*</Text>
            </Text>
            <MyTextInput
              value={state.ifsc}
              error={errors.ifsc}
              autoCapitalize={"characters"}
              maxLength={20}
              onChangeText={(ifsc) => {
                setErrors({ ...errors, ifsc: null });
                setState({ ...state, ifsc });
              }}
            />

            <View style={{ alignItems: "center" }}>
              {isFetching ? (
                <View style={styles.botton_box}>
                  <ActivityIndicator size={30} color={Colors.WHITE} />
                </View>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    if (
                      state.accountNumber.length < 9 ||
                      state.accountNumber.length > 21
                    ) {
                      setErrors({
                        ...errors,
                        accountNumber: "Please Add a Valid Value",
                      });
                    } else {
                      getBankDetails(state.ifsc, token);
                      setErrors({ ...errors, showBank: null });
                    }
                  }}
                  style={[styles.botton_box, { marginTop: 10 }]}
                >
                  <Text style={styles.get_otp}>Fetch Bank Details</Text>
                </TouchableOpacity>
              )}
            </View>
          </View> */}

          {/* botton_box_sec */}
          <View
            style={{
              borderWidth: 6,
              borderColor: "#fff",
              marginVertical: 10,
            }}
          ></View>
          {errors.showBank && !state.showBank && (
            <Text style={[styles.error, { textAlign: "center" }]}>
              {errors.showBank}
            </Text>
          )}

          {/* container_2_sec */}
          {state.showBank && state.ifsc != "" && state.ifsc.length > 5 && (
            <View style={styles.container_sec}>
              <Text style={styles.occupation}>
                Bank Name <Text style={styles.error}>*</Text>
              </Text>
              <MySelectPicker
                values={bankList}
                defultValue={state.bank}
                error={errors.bank}
                onChange={(bank) => {
                  setErrors({ ...errors, bank: null });
                  setState({ ...state, bank });
                }}
              />

              <Text style={styles.occupation}>
                Branch Name <Text style={styles.error}>*</Text>
              </Text>
              <MyTextInput
                value={state.branchName}
                error={errors.branchName}
                onChangeText={(branchName) => {
                  setErrors({ ...errors, branchName: null });
                  setState({ ...state, branchName });
                }}
              />

              <Text style={styles.occupation}>
                Branch Address <Text style={styles.error}>*</Text>
              </Text>
              <MyTextInput
                value={state.branchAddress}
                error={errors.branchAddress}
                onChangeText={(branchAddress) => {
                  setErrors({ ...errors, branchAddress: null });
                  setState({ ...state, branchAddress });
                }}
              />
            </View>
          )}

          {/* click_box */}
          <View style={styles.footer}>
            <View style={styles.click_box}>
              <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={styles.botton_box}
              >
                <Text style={styles.get_otp}>Previous</Text>
              </TouchableOpacity>
              {isFetching ? (
                <View style={styles.botton_box}>
                  <ActivityIndicator size={30} color={Colors.WHITE} />
                </View>
              ) : (
                <TouchableOpacity onPress={onAction} style={styles.botton_box}>
                  <Text style={styles.get_otp}>Next</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Overlay
        isVisible={visible}
        overlayStyle={{ margin: 10, backgroundColor: "#fff" }}
      >
        <View style={{ padding: 10 }}>
          <Text
            style={{ paddingVertical: 5, fontSize: 18, fontWeight: "bold" }}
          >
            Thank you for creating your investor account!
          </Text>
          <Text
            style={{
              paddingVertical: 5,
              fontSize: 15,
              fontWeight: "bold",
              color: "#7E7E7E",
            }}
          >
            Please check your email and approve the link sent by NSE for your
            account activation.
          </Text>
          <TouchableOpacity onPress={() => onComplete()}>
            <Text style={{ color: "#ff0000", paddingTop: 20 }}>OK</Text>
          </TouchableOpacity>
        </View>
      </Overlay>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  header: {
    borderBottomColor: Colors.BLACK,
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    zIndex: 100,
  },
  container_sec: {
    padding: 10,
  },
  error: {
    color: "#ff0000",
    padding: 5,
  },
  logimg: {
    height: 65,
    width: 203,
    marginTop: 10,
  },
  heading_sec: {
    padding: 12,
  },
  heading: {
    fontSize: 12,
  },
  occupation: {
    fontSize: 15,
    color: Colors.DEEP_GRAY,
    fontWeight: "bold",
    marginTop: 10,
  },
  example: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 10,
  },
  private_sector: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 5,
  },
  private: {
    fontSize: 15,
    width: "92%",
    marginBottom: 2,
    marginLeft: 10,
  },
  Pincode: {
    color: Colors.RED,
    fontSize: 15,
    marginTop: 10,
  },
  footer: {
    alignItems: "center",
  },
  click_box: {
    flexDirection: "row",
    marginHorizontal: 25,
  },
  botton_box: {
    width: "50%",
    backgroundColor: Colors.RED,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  get_otp: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
const mapStateToProps = (state) => ({
  isFetching: state.registration.isFetching,
  token: state.auth.token,
  user: state.auth.user,
  nseDetails: state.registration.nseDetails,
  fatcaDetails: state.registration.fatcaDetails,
  userDetails: state.registration.userDetails,
  accountTypes: state.registration.accountTypes,
  banks: state.registration.banks,
  bankDetails: state.registration.bankDetails,
  isExit: state.registration.isExit,
  isInn: state.registration.isInn,
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { RegistrationActions } = require("../../store/RegistrationRedux");
  const { HomeActions } = require("../../store/HomeRedux");
  return {
    ...stateProps,
    ...ownProps,
    getBankDetails: (code, token) => {
      RegistrationActions.getBankDetails(dispatch, code, token);
    },
    createRegister: (params, token) => {
      RegistrationActions.createRegister(dispatch, params, token);
    },
    updateRegister: (params, token) => {
      RegistrationActions.updateRegister(dispatch, params, token);
    },
  };
};
export default connect(
  mapStateToProps,
  undefined,
  mapDispatchToProps
)(CompleteDetailsBankScreen);
