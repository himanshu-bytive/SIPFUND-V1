import React from "react";
import { Image } from 'react-native';
import SvgUri from "expo-svg-uri";

const MyImage = (props) => {
    const { svg, url, width, height, style } = props
    if (svg) {
        return (
            <SvgUri
                width={width}
                height={height}
                source={{
                    uri: "http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
                    // uri: url
                }}
            />
        )
    }
    return (
        <Image
            source={{ uri: url }}
            style={style}
        />
    );
}

export default MyImage