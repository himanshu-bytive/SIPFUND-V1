import React from "react";
import { Image } from "react-native";
import { SvgUri } from "react-native-svg";

const MyImage = (props) => {
  const {svg, url, width, height, style} = props;
  if (svg) {
    return (
      <SvgUri
        style={{ resizeMode: "contain", aspectRatio: 1, alignSelf: 'center' }}
        width={width}
        uri={url}
      />
    );
  }
  return (
    <Image
      source={{ uri: url }}
      // source={require('../../assets/moderate-funds.png')}
      style={style}
    />
  );
};

export default MyImage;
