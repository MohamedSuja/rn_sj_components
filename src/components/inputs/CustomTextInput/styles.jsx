import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  root: {},

  textInput: {
    fontSize: RFValue(12),
    color: Colors.text6,
    fontWeight: '600',
    paddingLeft: wp(2),
    paddingVertical: wp(3.5),
    backgroundColor: Colors.inputBackground,
    borderRadius: 10,
  },

  errorText: {
    color: Colors.red,
    fontSize: RFValue(11),
    marginTop: wp(1),
    marginLeft: wp(2),
  },
});

export default styles;
