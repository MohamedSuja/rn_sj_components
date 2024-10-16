import Colors from "@/src/constants/Colors";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryButton,
    paddingVertical: hp(1.6),
    paddingHorizontal: wp(5),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    color: Colors.white,
    fontSize: RFValue(12),
    fontWeight: "700",
  },
});
