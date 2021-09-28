import React, { useState, useRef, useEffect } from "react";
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity, Image, View, Text, StyleSheet, Platform } from 'react-native';
import { Tooltip } from 'react-native-elements';
import { connect } from 'react-redux'
import { AntDesign, Entypo } from 'react-native-vector-icons';

const MyImagePicker = (props) => {
    const { item, token, fileUpload } = props
    const [img, setImg] = useState(null);


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

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            let params = {
                "filename": "IMG_20210907_135724.jpg",
                "mediaType": "image",
                "fileType": item.fileType
            }
            // console.log(result)
            // fileUpload(params, token)
            setImg(result.uri);
        }
    };

    return (
        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: "row", width: "75%", }}>
                {item.icon}
                <Text style={styles.pan}>{item.name}</Text>
                <Tooltip popover={<Text style={{ color: '#fff' }}>{item.info}</Text>}>
                    <AntDesign name="exclamationcircleo" size={18} color="#EE4248" />
                </Tooltip>
            </View>
            <View style={{ width: "15%", }}>{img && <Image source={{ uri: img }} style={styles.image} />}</View>
            {item.type == 'attachment' ? <TouchableOpacity onPress={pickImage}><Entypo name={item.type} size={22} color="#000000" /></TouchableOpacity> : <AntDesign name='form' size={22} color="#000000" />}
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