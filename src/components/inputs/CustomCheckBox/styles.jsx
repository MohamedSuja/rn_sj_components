import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Colors from "../../../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.white,
    borderColor: Colors.text3,
    borderRadius: 5,
    borderWidth: 2,
    width: wp(6),
    height: wp(6),
    justifyContent: "center",
  },
});

export default styles;
