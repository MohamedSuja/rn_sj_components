import { TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "./styles";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const CustomCheckBox = (props) => {
  const { onPress, isChecked } = props;
  const [isHandleChecked, setHandleCheck] = useState(false);

  useEffect(() => {
    setHandleCheck(isChecked);
  }, [isChecked]);

  const handlePress = () => {
    onPress && onPress(!isHandleChecked);
    setHandleCheck(!isHandleChecked);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.5}
    >
      {isHandleChecked && (
        <FontAwesome5 name="check" size={wp(4)} color="black" />
      )}
    </TouchableOpacity>
  );
};

export default CustomCheckBox;
