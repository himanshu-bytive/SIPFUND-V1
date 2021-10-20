import React, { useState, useRef, useEffect } from "react";
import * as ImagePicker from 'expo-image-picker';
import { Camera } from "expo-camera";
import * as Permissions from 'expo-permissions';
import { Modal, Alert, TouchableOpacity, Image, View, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux'
import { Button } from "react-native-paper";

const ProfileImagePicker = (props) => {
    const { docType, token, fileUpload, url, data } = props
    const [img, setImg] = useState(null);
    const [camera, setCamera] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    // Check Camera Permissions
    useEffect(() => {
        (async () => {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                Alert.alert('Sorry, we need camera roll permissions to make this work!');
            }
        })();
    }, []);

    // Check Camera Permissions
    useEffect(() => {
        (async () => {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            if (status !== 'granted') {
                Alert.alert('Sorry, we need camera permissions to make this work!');
            }
        })();
    }, []);

    useEffect(() => {
        if (data) {
            let selectedData = data.find(x => x.docType == docType);
            if (selectedData?.fileName) {
                setImg(url + selectedData?.fileName)
            }
        }
    }, [data]);


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            let params = {
                "file": result,
                "fileType": docType
            }
            fileUpload(params, token)
            setImg(result.uri);
        }
    };

    const cameraImage = async (image) => {
        let params = {
            "file": image,
            "fileType": docType
        }
        fileUpload(params, token)
        setImg(image.uri);
    };

    return (
        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => Alert.alert(
                'SIP Fund',
                'Profile Image',
                [
                    {
                        text: "Camera",
                        onPress: () => {
                            setCamera(true)
                        }
                    },
                    {
                        text: "Document",
                        onPress: () => {
                            pickImage()
                        }
                    },
                ]
            )} style={{ marginVertical: 10 }}><Image
                    source={img ? { uri: img } : require('../../assets/profile_img.png')}
                    style={styles.bannerimg}
                /></TouchableOpacity>
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
        </View>
    );
}

const styles = StyleSheet.create({
    bannerimg: {
        height: 100,
        width: 100,
        borderRadius: 100,
    },
});

const mapStateToProps = (state) => ({
    token: state.auth.token,
})

const mapDispatchToProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { RegistrationActions } = require('../store/RegistrationRedux')
    return {
        ...stateProps,
        ...ownProps,
        fileUpload: (params, token) => { RegistrationActions.fileUpload(dispatch, params, token) },
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(ProfileImagePicker)