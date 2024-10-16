import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    fontSize: RFValue(15),
    color: Colors.text5,
    fontWeight: '600',
    paddingLeft: wp(1),
  },
  placeholder: {
    color: Colors.text3,
    fontWeight: '600',
    fontSize: RFValue(15),
    position: 'absolute',
  },
});

export default styles;
