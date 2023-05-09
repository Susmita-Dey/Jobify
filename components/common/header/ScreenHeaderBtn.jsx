import React from "react";
import { TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";
import { Link } from "expo-router";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress, onClickUrl }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      {/* <Link href={onClickUrl}> */}
        <Image
          source={iconUrl}
          resizeMode="cover"
          style={styles.btnImg(dimension)}
        />
      {/* </Link> */}
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
