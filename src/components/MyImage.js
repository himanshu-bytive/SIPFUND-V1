import React from "react";
import { Image } from "react-native";
import { SvgUri } from "react-native-svg";

const MyImage = (props) => {
  const { svg, url, width, height, style, aspectRatio, sector } = props;
  if (sector) {
    return (
      <Image
        source={require("../../assets/sector.png")}
        style={{
          resizeMode: "contain",
          alignSelf: "center",
          aspectRatio: 1,
          height: 70,
          width: 70,
        }}
      />
    );
  }
  if (svg) {
    return (
      <>
        {height ? (
          <SvgUri
            style={{ resizeMode: "contain", alignSelf: "center" }}
            width={width}
            height={height ? height : 0}
            uri={url}
          />
        ) : (
          <SvgUri
            style={{
              resizeMode: "contain",
              alignSelf: "center",
              aspectRatio: 1,
            }}
            width={width}
            uri={url}
          />
        )}
      </>
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
