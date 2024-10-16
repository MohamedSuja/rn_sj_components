import Colors from "@/src/constants/Colors";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


export const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    marginTop: hp(2),
    borderColor: Colors.border7,
    borderWidth: 1,
    paddingHorizontal: wp(3),
    paddingVertical: hp(2),
  },
  cardLeftView: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconView: {
    backgroundColor: Colors.iconBackground,
    padding: wp(2.5),
    borderRadius: 50,
    borderColor: Colors.border7,
    borderWidth: 1,
  },
  cardTitleView: {
    marginLeft: wp(3),
  },
  cardTitle: {
    fontSize: RFValue(12),
    color: Colors.black,
    fontWeight: "600",
  },
  cardContact: {
    fontSize: RFValue(10),
    color: Colors.text14,
    fontWeight: "500",
    marginTop: hp(0.5),
  },
});
