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
                    uri: "https://sipfund.sfo2.digitaloceanspaces.com/master-images/Group-268.svg"
                    // uri: url
                }}
            />
        )
    }
    return (
        <Image
            // source={{ uri: url }}
            source={require('../../assets/moderate-funds.png')}
            style={style}
        />
    );
}

export default MyImage