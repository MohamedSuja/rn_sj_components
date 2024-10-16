import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../../constants/Colors';
import styles from './styles';

const PrimaryTextInput = props => {
  const {
    onChangeText,
    value,
    placeholder,
    style,
    placeholderStyle,
    errorText,
    inputStyle,
    inputContainerStyle,
  } = props;
  const placeholderPosition = useSharedValue(0);
  const textSizeValue = useSharedValue(1);
  const placeholderPositionLeft = useSharedValue(0);
  const [textInputValue, setTextInputValue] = useState('');

  const animatedPlaceholderStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: withTiming(placeholderPosition.value, {duration: 200})},
        {
          translateX: withTiming(placeholderPositionLeft.value, {
            duration: 200,
          }),
        },
        {
          scale: withTiming(textSizeValue.value, {
            duration: 200,
          }),
        },
      ],
    };
  });

  const handleFocus = () => {
    placeholderPosition.value = -hp(4); // Move placeholder up
    textSizeValue.value = RFValue(10) / RFValue(12);
    placeholderPositionLeft.value = -wp(5);
  };

  const handleBlur = () => {
    if (textInputValue === '') {
      placeholderPosition.value = 0; // Move placeholder back to original position
      textSizeValue.value = 1;
      placeholderPositionLeft.value = 0;
    }
  };

  const handleChangedText = text => {
    onChangeText && onChangeText(text);
    setTextInputValue(text);
  };

  return (
    <View style={[styles.root, style]}>
      <View style={[styles.container, inputContainerStyle]}>
        <View style={styles.placeholderView}>
          <Animated.Text
            style={[
              styles.placeholder,
              placeholderStyle,
              animatedPlaceholderStyle,
            ]}>
            {placeholder}
          </Animated.Text>
        </View>

        <TextInput
          style={[styles.textInput, inputStyle]}
          keyboardType="numeric"
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={textInputValue}
          onChangeText={handleChangedText}
        />
      </View>
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

export default PrimaryTextInput;
