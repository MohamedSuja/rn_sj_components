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

const AnimatedTextInput = props => {
  const {onChangeText, value, placeholder, style, placeholderStyle} = props;
  const [isFocused, setIsFocused] = useState(false);
  const placeholderPosition = useSharedValue(0);
  const [textInputValue, setTextInputValue] = useState('');

  const animatedPlaceholderStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: withTiming(placeholderPosition.value, {duration: 200})},
      ],
      bottom: isFocused ? 5 : 0,
    };
  });

  const handleFocus = () => {
    setIsFocused(true);
    placeholderPosition.value = -20; // Move placeholder up
  };

  const handleBlur = () => {
    if (textInputValue === '') {
      setIsFocused(false);
      placeholderPosition.value = 0; // Move placeholder back to original position
    }
  };

  const handleChangedText = text => {
    onChangeText && onChangeText(text);
    setTextInputValue(text);
  };

  return (
    <View style={[styles.container, style]}>
      <Animated.Text
        style={[
          styles.placeholder,
          placeholderStyle,
          animatedPlaceholderStyle,
        ]}>
        {placeholder}
      </Animated.Text>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={textInputValue}
        onChangeText={handleChangedText}
      />
    </View>
  );
};

export default AnimatedTextInput;
