import React, { useState, useRef, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import SignatureScreen from "react-native-signature-canvas";
import * as Permissions from "expo-permissions";
import { Modal, TouchableOpacity, Image, View, Text, StyleSheet, Alert, ToastAndroid } from "react-native";
import { Tooltip } from "react-native-elements";
import { connect } from "react-redux";
import { AntDesign, Entypo, FontAwesome } from "react-native-vector-icons";
import { Button } from "react-native-paper";
import MySelectPicker from "./MySelectPicker";
import DocumentInstructions from "./DocumentInstructions";

const MyImagePicker = (props) => {
    const { items, docs, token, fileUpload, fileUploadSign } = props;
    const selList = [
        { value: "Aadhaar Card Front", label: "Aadhaar Card Front", fileType: "AA1" },
        { value: "Aadhaar Card Back", label: "Aadhaar Card Back", fileType: "AA2" },
        { value: "Passport", label: "Passport", fileType: "PIC" },
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

    const mapFileToDocType = {
        KF: "KF",
        PA: "PA",
        CH: "CH",
        PC: "PC",
        SIGN: "SIGN",
        VID: "VID",
        AADHAAR: "AA1",
    };

    const docVerificationCompleted = (fileType) => {
        if (fileType === "") {
            fileType = "AADHAAR";
        }
        for (var doc in docs.responseString.documents) {
            if (docs.responseString.documents[doc]?.docType === fileType) {
                if (docs.responseString.documents[doc]?.status === "PENDING") {
                    return true;
                }
            }
        }
        return false;
    };

    // Check Camera Permissions
    useEffect(() => {
        (async () => {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== "granted") {
                Alert.alert("Sorry, we need camera roll permissions to make this work!");
            }
        })();
    }, []);

    // Check Camera Permissions
    useEffect(() => {
        (async () => {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            if (status !== "granted") {
                Alert.alert("Sorry, we need camera permissions to make this work!");
            }
        })();
    }, []);

    useEffect(() => {
        if (items) {
            setItem(items);
        }
    }, [items]);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            let params = {
                file: result,
                fileType: item?.fileType,
            };
            fileUpload(params, token);
            setImg(result.uri);
        }
    };

    const cameraImage = async (image) => {
        let params = {
            file: image,
            fileType: item?.fileType,
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
            setItem({ ...item, name: val, fileType: selected.fileType, info: selected.label });
        }
    };

    return (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", width: "70%" }}>
                {item?.icon}
                {item?.multi ? (
                    <View style={{ width: "100%", marginTop: -20 }}>
                        <MySelectPicker values={selList} defultValue={item?.name} onChange={(val) => setSelectDoc(val)} />
                    </View>
                ) : (
                    <Text style={styles.pan}>{item?.name}</Text>
                )}
                <TouchableOpacity
                    onPress={() => {
                        Alert.alert("Instructions", item?.fileType === "PC" || item?.fileType === "CH" || item?.fileType === "KF" || item?.fileType === "PA" || item?.fileType === "VID" || item?.fileType === "SIGN" ? (item ? DocumentInstructions[item?.fileType] : "") : DocumentInstructions.AADHAAR);
                    }}
                >
                    <AntDesign name="exclamationcircleo" size={18} color="#EE4248" />
                </TouchableOpacity>
                {docs[item?.fileType] ? (
                    <></>
                ) : (
                    docVerificationCompleted(item?.fileType) && (
                        <TouchableOpacity
                            onPress={() => {
                                console.log(docs);
                                ToastAndroid.show("Verification Pending!", ToastAndroid.SHORT);
                            }}
                        >
                            <FontAwesome name="exclamation-circle" size={18} style={{ marginLeft: 10 }} color="#D4A340" />
                        </TouchableOpacity>
                    )
                )}
            </View>
            <View style={{ width: "15%" }}>{img && <Image source={{ uri: img }} style={styles.image} />}</View>
            <View style={{ width: "10%" }}>
                {item?.type == "attachment" ? (
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => setCamera(true)}>
                            <Entypo name={"camera"} size={22} color="#000000" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={pickImage}>
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
                    <View style={{ flex: 1, backgroundColor: "transparent", justifyContent: "flex-end" }}>
                        <View style={{ backgroundColor: "black", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
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
                                    setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
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
                <SignatureScreen ref={signBox} imageType="image/jpeg" onOK={signImage} onEmpty={() => setSign(false)} />
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    pan: {
        marginHorizontal: 10,
        fontSize: 18,
        width: "90%",
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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(MyImagePicker);
