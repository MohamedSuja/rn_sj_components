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
    backgroundColor: Colors.inputBackground,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(2),
  },
  image: {
    width: wp(10),
    height: wp(10),
    resizeMode: 'cover',
    borderRadius: 50,
    marginRight: wp(2),
  },
  inputView: {
    flex: 1,
    marginLeft: wp(2),
    marginTop: hp(1),
  },
  title: {
    color: Colors.text,
    fontSize: RFValue(13),
    fontWeight: '400',
  },
  dropdown: {},
  placeholderStyle: {
    color: Colors.text9,
    fontSize: RFValue(11.5),
    fontWeight: '400',
  },
  selectedTextStyle: {
    color: Colors.text9,
    fontSize: RFValue(11.5),
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
    marginTop: hp(0.3),
    marginLeft: -wp(15),
    width: wp(88),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingBottom: hp(0.5),
  },
  rightIcon: {
    position: 'absolute',
    right: 0,
    top: -hp(1.5),
  },
});

export default styles;
