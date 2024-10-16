import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Octicons from "react-native-vector-icons/Octicons";
import { styles } from "./styles";
import Colors from "@/src/constants/Colors";

const BeneficiaryButton = (props) => {
  const { title, icon, onPress } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.leftView}>
        {icon}
        <Text style={styles.title}>{title}</Text>
      </View>

      <Octicons name="chevron-right" size={30} color={Colors.black} />
    </TouchableOpacity>
  );
};

export default BeneficiaryButton;
