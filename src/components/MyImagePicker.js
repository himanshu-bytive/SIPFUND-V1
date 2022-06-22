import React, { useState, useRef, useEffect } from "react";
import * as ImagePicker from "react-native-image-picker";
import { Camera, requestCameraPermissionsAsync } from "expo-camera";
import SignatureScreen from "react-native-signature-canvas";
import * as Permissions from "expo-permissions";
import {
  Modal,
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
  Alert,
  ToastAndroid,
} from "react-native";
import { connect } from "react-redux";
import { AntDesign, Entypo, FontAwesome } from "react-native-vector-icons";
import { Button } from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";
import DocumentInstructions from "./DocumentInstructions";
import Colors from "../common/Colors";

const MyImagePicker = (props) => {
  const { items, docs, token, fileUpload, fileUploadSign } = props;
  const selList = [
    {
      value: "Aadhaar Card Front",
      label: "Aadhaar Card Front",
      fileType: "AA1",
    },
    { value: "Aadhaar Card Back", label: "Aadhaar Card Back", fileType: "AA2" },
    { value: "Passport", label: "Passport", fileType: "PA" },
    { value: "Driving Licence", label: "Driving Licence", fileType: "DL" },
  ];
  const [img, setImg] = useState(null);
  const [camera, setCamera] = useState(false);
  const [recording, setRecording] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [sign, setSign] = useState(false);
  const [item, setItem] = useState(selList[0]);
  const signBox = useRef(null);

  const addressVerificationDocs = ["AA1", "AA2", "DL"];

  const docVerificationCompleted = (fileType) => {
    if (fileType === "") {
      fileType = "AA1";
    }
    /* Check if any of the address verification docs are verified */
    for (var item in addressVerificationDocs) {
      for (var doc in docs.responseString.documents) {
        if (
          docs.responseString.documents[addressVerificationDocs[item]]
            ?.status === "PENDING"
        ) {
          return true;
        } else if (
          docs.responseString.documents[addressVerificationDocs[item]]
            ?.status === "COMPLETE"
        ) {
          return false;
        }
      }
    }

    for (var doc in docs.responseString.documents) {
      if (docs.responseString.documents[doc]?.docType === fileType) {
        if (docs.responseString.documents[doc]?.status === "PENDING") {
          return true;
        } else if (docs.responseString.documents[doc]?.status === "COMPLETE") {
          return false;
        }
      }
    }
  };

  // Check Camera Permissions
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      console.log("status", status);
      if (status !== "granted") {
        Alert.alert("Sorry, we need camera permissions to make this work!");
      }
    })();
  }, []);

  // Check Camera Permissions
  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        Alert.alert(
          "Sorry, we need camera roll permissions to make this work!"
        );
      }
    })();
  }, []);

  useEffect(() => {
    if (items) {
      setItem(items);
    }
  }, [items]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibrary({
      mediaTypes: "photo",
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    let fileType;
    if (item?.fileType) {
      fileType = item?.fileType;
    } else {
      fileType =
        item?.name === "Aadhaar Card Front"
          ? "AA1"
          : item?.name === "Aadhaar Card Back"
          ? "AA2"
          : "";
    }
    if (!result.didCancel) {
      let params = {
        file: result,
        fileType,
      };
      console.log(params);
      fileUpload(params, token);
      setImg(result.uri);
    }
  };

  const cameraImage = async (image) => {
    let fileType;
    if (item?.fileType) {
      fileType = item?.fileType;
    } else {
      fileType =
        item?.name === "Aadhaar Card Front"
          ? "AA1"
          : item?.name === "Aadhaar Card Back"
          ? "AA2"
          : "";
    }
    let params = {
      file: image,
      fileType,
    };
    fileUpload(params, token);
    setImg(image.uri);
  };

  const signImage = (signature) => {
    let params = { signature: signature };
    fileUploadSign(params, token);
    setImg(signature);
    setSign(false);
  };

  const setSelectDoc = (val) => {
    let selected = selList.find((x) => x.value == val);
    if (selected) {
      setItem({
        ...item,
        name: val,
        fileType: selected.fileType,
        info: selected.label,
      });
    } else {
      setItem({
        ...item,
        name: val,
      });
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", width: "70%" }}
      >
        {item?.icon}
        {item?.multi ? (
          <View
            style={{
              borderBottomWidth: 2,
              backgroundColor: Colors.TRANSPARENT,
              borderColor: Colors.GRAY_LIGHT,
              marginTop: 5,
              textAlign: "left",
            }}
          >
            <View style={{ marginTop: -10, marginRight: 15 }}>
              <RNPickerSelect
                placeholder={{
                  label: "Select a Item",
                  value: null,
                }}
                style={{
                  inputIOS: styles.custom,
                  inputAndroid: styles.custom,
                  placeholder: styles.custom,
                }}
                useNativeAndroidPickerStyle={false}
                onValueChange={(value) => setSelectDoc(value)}
                value={item?.name}
                items={selList}
                Icon={() => {
                  return (
                    <AntDesign
                      style={{ left: 10, top: 5 }}
                      name="down"
                      color={"#444"}
                      size={18}
                    />
                  );
                }}
              />
            </View>
          </View>
        ) : (
          <Text style={styles.pan}>{item?.name}</Text>
        )}
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              "Instructions",
              item?.fileType === "PC" ||
                item?.fileType === "CH" ||
                item?.fileType === "KF" ||
                item?.fileType === "PA" ||
                item?.fileType === "VID" ||
                item?.fileType === "SIGN"
                ? item
                  ? DocumentInstructions[item?.fileType]
                  : ""
                : DocumentInstructions.AADHAAR
            );
          }}
        >
          <AntDesign name="exclamationcircleo" size={18} color="#EE4248" />
        </TouchableOpacity>
        {docVerificationCompleted(item?.fileType) !== undefined &&
          (docVerificationCompleted(item?.fileType) ? (
            <TouchableOpacity
              onPress={() => {
                ToastAndroid.show("Verification Pending!", ToastAndroid.SHORT);
              }}
            >
              <FontAwesome
                name="exclamation-circle"
                size={18}
                style={{ marginLeft: 10 }}
                color="#D4A340"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                ToastAndroid.show("Document Verified", ToastAndroid.SHORT);
              }}
            >
              <FontAwesome
                name="check"
                size={18}
                style={{ marginLeft: 5 }}
                color="#00CC00"
              />
            </TouchableOpacity>
          ))}
      </View>
      <View style={{ width: "15%" }}>
        {img && <Image source={{ uri: img }} style={styles.image} />}
      </View>
      <View
        pointerEvents={
          docVerificationCompleted(item?.fileType) !== undefined
            ? "none"
            : "auto"
        }
        style={{
          opacity:
            docVerificationCompleted(item?.fileType) !== undefined ? 0.25 : 1,
        }}
      >
        {item?.type == "attachment" ? (
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => {
                if (item?.name !== null) {
                  setCamera(true);
                } else {
                  ToastAndroid.show(
                    "You need to select a document first!",
                    ToastAndroid.LONG
                  );
                }
              }}
            >
              <Entypo name={"camera"} size={22} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (item?.name !== null) {
                  pickImage();
                } else {
                  ToastAndroid.show(
                    "You need to select a document first!",
                    ToastAndroid.LONG
                  );
                }
              }}
            >
              <Entypo name={item?.type} size={22} color="#000000" />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={() => setSign(true)}>
            <AntDesign name="form" size={22} color="#000000" />
          </TouchableOpacity>
        )}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={camera}
        onRequestClose={() => {
          setCamera(false);
        }}
      >
        <Camera
          style={{ flex: 1 }}
          ratio="16:9"
          flashMode={Camera.Constants.FlashMode.on}
          type={type}
          ref={(ref) => {
            setCameraRef(ref);
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                backgroundColor: "black",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button
                icon="close"
                style={{ marginLeft: 12 }}
                mode="outlined"
                color="white"
                onPress={() => {
                  setCamera(false);
                }}
              >
                Close
              </Button>
              {item?.name == "Upload Video" ? (
                <TouchableOpacity
                  onPress={async () => {
                    if (!recording) {
                      setRecording(true);
                      let video = await cameraRef.recordAsync();
                      cameraImage(video);
                      setCamera(false);
                    } else {
                      setRecording(false);
                      cameraRef.stopRecording();
                    }
                  }}
                >
                  <View
                    style={{
                      borderWidth: 2,
                      borderRadius: 50,
                      borderColor: "white",
                      height: 50,
                      width: 50,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 16,
                      marginTop: 16,
                    }}
                  >
                    <View
                      style={{
                        borderWidth: 2,
                        borderRadius: 50,
                        borderColor: "white",
                        height: 40,
                        width: 40,
                        backgroundColor: recording ? "red" : "white",
                      }}
                    ></View>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={async () => {
                    if (cameraRef) {
                      let photo = await cameraRef.takePictureAsync();
                      cameraImage(photo);
                      setCamera(false);
                    }
                  }}
                >
                  <View
                    style={{
                      borderWidth: 2,
                      borderRadius: 50,
                      borderColor: "white",
                      height: 50,
                      width: 50,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 16,
                      marginTop: 16,
                    }}
                  >
                    <View
                      style={{
                        borderWidth: 2,
                        borderRadius: 50,
                        borderColor: "white",
                        height: 40,
                        width: 40,
                        backgroundColor: "white",
                      }}
                    ></View>
                  </View>
                </TouchableOpacity>
              )}

              <Button
                icon="axis-z-rotate-clockwise"
                style={{ marginRight: 12 }}
                mode="outlined"
                color="white"
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                {type === Camera.Constants.Type.back ? "Front" : "Back "}
              </Button>
            </View>
          </View>
        </Camera>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={sign}
        onRequestClose={() => {
          setSign(false);
        }}
      >
        <SignatureScreen
          ref={signBox}
          imageType="image/jpeg"
          onOK={signImage}
          onEmpty={() => setSign(false)}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  pan: {
    marginHorizontal: 10,
    fontSize: 18,
    flex: 0,
    fontWeight: "bold",
  },
  image: {
    borderRadius: 10,
    width: 50,
    height: 50,
  },
  error: {
    color: "#ff0000",
    padding: 5,
  },
  custom: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    paddingHorizontal: 10,
  },
});

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { RegistrationActions } = require("../store/RegistrationRedux");
  return {
    ...stateProps,
    ...ownProps,
    fileUpload: (params, token) => {
      RegistrationActions.fileUpload(dispatch, params, token);
    },
    fileUploadSign: (params, token) => {
      RegistrationActions.fileUploadSign(dispatch, params, token);
    },
  };
};
export default connect(
  mapStateToProps,
  undefined,
  mapDispatchToProps
)(MyImagePicker);
