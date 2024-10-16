import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: wp(2),
    paddingHorizontal: wp(2),
    backgroundColor: Colors.white,

    borderWidth: 1.5,
    borderColor: Colors.border7,

    marginVertical: wp(5),
    justifyContent: 'space-between',
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: wp(10),
    height: wp(10),
    resizeMode: 'cover',
    borderRadius: 50,
    marginRight: wp(2),
  },

  dropdown: {
    width: wp(16),
    marginLeft: wp(2),
  },
  placeholderStyle: {
    color: Colors.text9,
    fontSize: RFValue(12),
    fontWeight: '400',
  },
  selectedTextStyle: {
    color: Colors.text9,
    fontSize: RFValue(12),
    fontWeight: '400',
  },
  selectItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp(3),
  },
  textItem: {
    color: Colors.text,
    fontSize: RFValue(12),
    fontWeight: '400',
  },
  dropdownContainerStyle: {
    backgroundColor: Colors.inputBackground,
    marginTop: hp(1.5),
    width: wp(30),
    marginLeft: -wp(15),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingBottom: hp(0.5),
  },
  rightIcon: {},
  title: {
    color: Colors.text13,
    fontSize: RFValue(13),
    fontWeight: '700',
  },
});

export default styles;
