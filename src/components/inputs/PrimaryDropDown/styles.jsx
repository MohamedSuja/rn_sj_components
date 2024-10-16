import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Colors from "../../../../constants/Colors";

const styles = StyleSheet.create({
  dropdownView: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",

    backgroundColor: Colors.inputBackground,
    borderRadius: 5,
  },
  dropdown: {
    width: "100%",
    paddingVertical: wp(1.5),
  },
  icon: {
    // marginRight: wp(1),
  },

  item: {
    flexDirection: "row",
    marginTop: hp(0.5),
    alignItems: "center",
    justifyContent: "space-between",
    // padding: wp(1),
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(2),
  },
  textItem: {
    fontSize: RFValue(12),
    color: Colors.black,
    fontWeight: "600",
  },
  placeholderStyle: {
    color: Colors.text3,
    fontWeight: "600",
    fontSize: RFValue(14),
    marginLeft: wp(1.5),
  },
  selectedTextStyle: {
    fontSize: RFValue(12),
    marginLeft: wp(1.5),
    fontWeight: "600",
  },
  iconStyle: {
    width: wp(10),
    height: wp(10),
  },

  dropdownContainerStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

    paddingVertical: hp(1),
    backgroundColor: Colors.inputBackground,
  },
});

export default styles;
