import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "@/src/constants/Colors";

const SelectPaymentCard = (props) => {
  const { onPress, title, content, isActive, cardType } = props;
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={styles.root}>
      <View style={styles.cardLeftView}>
        <View style={styles.iconView}>
          {cardType == "bank" && (
            <MaterialCommunityIcons
              name="bank"
              size={wp(5)}
              color={Colors.black}
            />
          )}
          {cardType == "card" && (
            <Ionicons name="card" size={wp(5)} color={Colors.black} />
          )}
        </View>

        <View style={styles.cardTitleView}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardContact}>{content}</Text>
        </View>
      </View>

      <Fontisto
        name={isActive ? "radio-btn-active" : "radio-btn-passive"}
        size={wp(5)}
        color={Colors.iconButton2}
      />
    </TouchableOpacity>
  );
};

export default SelectPaymentCard;
