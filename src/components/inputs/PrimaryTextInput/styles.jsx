import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  root: {},
  container: {
    flex: 1,
    backgroundColor: Colors.inputBackground,
    borderRadius: 5,
  },
  textInput: {
    fontSize: RFValue(12),
    color: Colors.text5,
    fontWeight: '600',
    paddingLeft: wp(2),
    paddingVertical: wp(3.5),
  },
  placeholderView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  placeholder: {
    color: Colors.text3,
    fontWeight: '600',
    fontSize: RFValue(14),
    left: wp(2),
  },
  errorText: {
    color: Colors.red,
    fontSize: RFValue(11),
    marginTop: wp(1),
    marginLeft: wp(2),
  },
});

export default styles;
