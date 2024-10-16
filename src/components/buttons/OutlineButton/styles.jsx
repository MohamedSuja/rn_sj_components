import Colors from "@/src/constants/Colors";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    borderColor: Colors.black,
    borderWidth: 1,
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
    borderRadius: 50,
  },
  text: {
    color: Colors.text,
    fontSize: RFValue(11),
    fontWeight: "700",
  },
});
