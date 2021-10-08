import React, { useState, useRef, useEffect } from "react";
import * as ImagePicker from 'expo-image-picker';
import { Camera } from "expo-camera";
import SignatureScreen from "react-native-signature-canvas";
import { Modal, TouchableOpacity, Image, View, Text, StyleSheet, Platform } from 'react-native';
import { Tooltip } from 'react-native-elements';
import { connect } from 'react-redux'
import { AntDesign, Entypo } from 'react-native-vector-icons';
import { Button } from "react-native-paper";

const MyImagePicker = (props) => {
    const { item, token, fileUpload } = props
    const [img, setImg] = useState(null);
    const [camera, setCamera] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [sign, setSign] = useState(false);
    const signBox = useRef(null);


    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

     // Check Camera Permissions
     useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

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
                "fileType": item.fileType
            }
            fileUpload(params, token)
            setImg(result.uri);
        }
    };

    const cameraImage = async (image) => {
        let params = {
            "file": image,
            "fileType": item.fileType
        }
        fileUpload(params, token)
        setImg(image.uri);
    };


    const signImage = (signature) => {
        // console.log('sss ', signature);
        setSign(false)
    };

    return (
        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: "row", width: "70%", }}>
                {item.icon}
                <Text style={styles.pan}>{item.name}</Text>
                <Tooltip popover={<Text style={{ color: '#fff' }}>{item.info}</Text>}>
                    <AntDesign name="exclamationcircleo" size={18} color="#EE4248" />
                </Tooltip>
            </View>
            <View style={{ width: "15%", }}>{img && <Image source={{ uri: img }} style={styles.image} />}</View>
            <View style={{ width: "10%" }}>
                {item.type == 'attachment' ?
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => setCamera(true)}><Entypo name={'camera'} size={22} color="#000000" /></TouchableOpacity>
                        <TouchableOpacity onPress={pickImage}><Entypo name={item.type} size={22} color="#000000" /></TouchableOpacity>
                    </View>
                    : <TouchableOpacity onPress={() => setSign(true)}><AntDesign name='form' size={22} color="#000000" /></TouchableOpacity>}
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
                    onOK={signImage}
                    onEmpty={() => setSign(false)}
                />
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    pan: {
        marginHorizontal: 10,
        fontSize: 18,
        fontWeight: "bold",
    },
    image: {
        borderRadius: 10,
        width: 50,
        height: 50
    },
    error: {
        color: '#ff0000',
        padding: 5,
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
export default connect(mapStateToProps, undefined, mapDispatchToProps)(MyImagePicker)