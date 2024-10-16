import Colors from "@/src/constants/Colors";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.walletsCardBackground,
    padding: wp(5),
    borderRadius: 15,
    marginVertical: hp(1.5),
  },
  leftView: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: RFValue(13),
    color: Colors.black,
    fontWeight: "700",
    marginLeft: wp(3),
  },
});
