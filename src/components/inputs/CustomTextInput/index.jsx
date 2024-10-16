import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../../constants/Colors';
import styles from './styles';

const CustomTextInput = props => {
  const {
    onChangeText,
    value,
    placeholder,
    style,
    errorText,
    inputStyle,
    keyboardType,
    placeholderTextColor,
    multiline,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={[styles.root, style]}>
      <TextInput
        style={[
          styles.textInput,
          isFocused && {
            shadowColor: Colors.black,
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.43,
            shadowRadius: 9.51,

            elevation: 15,
          },
          inputStyle,
        ]}
        keyboardType={keyboardType}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        multiline={multiline}
      />

      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

export default CustomTextInput;
