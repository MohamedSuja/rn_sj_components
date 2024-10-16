import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  dropdownView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  dropdown: {
    width: '100%',
  },
  icon: {
    // marginRight: wp(1),
  },

  item: {
    flexDirection: 'row',
    marginTop: hp(0.5),
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: wp(1),
    paddingVertical: hp(0.5),
  },
  textItem: {
    fontSize: RFValue(12),
    color: Colors.black,
  },
  placeholderStyle: {
    fontSize: RFValue(12),
    color: Colors.black,
    marginLeft: wp(1),
  },
  selectedTextStyle: {
    fontSize: RFValue(12),
    marginLeft: wp(1),
  },
  iconStyle: {
    width: wp(10),
    height: wp(10),
  },

  dropdownContainerStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

    borderWidth: 1,

    padding: wp(1),
  },
});

export default styles;
