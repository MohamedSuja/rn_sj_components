/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../../constants/Colors';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';

const PinInput = props => {
  const {
    onChangeText,
    value,
    placeholder,
    style,
    errorText,
    inputStyle,
    keyboardType,
    placeholderTextColor,
    maxLength,
    inputViewStyle,
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState(value || '');
  const [isSecure, setIsSecure] = useState(true);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleTextChange = text => {
    setText(text);
    onChangeText && onChangeText(text);
  };

  return (
    <View style={[styles.root, style]}>
      <View
        style={[
          styles.inputView,
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
          inputViewStyle,
        ]}>
        <TextInput
          style={[
            styles.textInput,
            text.length > 0 && {
              letterSpacing: wp(5),
              paddingLeft: wp(5),
            },
            inputStyle,
          ]}
          keyboardType={keyboardType}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChangeText={handleTextChange}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          maxLength={maxLength}
          secureTextEntry={isSecure}
        />

        <TouchableOpacity style={styles.eyeButton}>
          {isSecure ? (
            <Feather
              name="eye"
              size={wp(5)}
              color={Colors.white}
              onPress={() => setIsSecure(!isSecure)}
            />
          ) : (
            <Feather
              name="eye-off"
              size={wp(5)}
              color={Colors.white}
              onPress={() => setIsSecure(!isSecure)}
            />
          )}
        </TouchableOpacity>
      </View>

      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

export default PinInput;
