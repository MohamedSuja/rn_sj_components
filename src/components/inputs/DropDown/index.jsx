/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextStyle,
  StyleProp,
  Image,
  ImageProps,
  ImageSourcePropType,
  Animated,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Octicons from 'react-native-vector-icons/Octicons';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../../../constants/Colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const DropDown = props => {
  const {
    data,
    value,
    onChange,
    placeholder,
    style,
    iconColor,
    selectedTextStyle,
    textItemStyle,
    dropdownPosition,
    placeholderStyle,
    disable,
    testID,
    customRightIcon,
  } = props;

  const [focus, setFocus] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;
  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const toggleAnimate = () => {
    const config = {
      duration: 300,
      toValue: focus ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
  };

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={[styles.textItem, textItemStyle]}>{item.label}</Text>
        {item.value === value && (
          <Octicons
            style={styles.icon}
            color={Colors.black}
            name="check"
            size={wp(5)}
          />
        )}
      </View>
    );
  };

  const rightIcon = () => {
    return (
      <Animated.View
        style={{
          transform: [{rotate: arrowTransform}],
        }}>
        {customRightIcon?.() ?? (
          <Entypo color={Colors.black} name="chevron-small-down" size={wp(7)} />
        )}
      </Animated.View>
    );
  };

  return (
    <View
      style={[
        styles.dropdownView,

        focus && {
          backgroundColor: Colors.white,
          shadowColor: Colors.black,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        },
        style,
      ]}>
      <Dropdown
        testID={testID}
        style={[styles.dropdown]}
        placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
        selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
        containerStyle={styles.dropdownContainerStyle}
        iconStyle={styles.iconStyle}
        iconColor={iconColor}
        renderRightIcon={rightIcon}
        data={data}
        search={false}
        maxHeight={220}
        onFocus={() => {
          setFocus(true);
          toggleAnimate();
        }}
        onBlur={() => {
          setFocus(false);
          toggleAnimate();
        }}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        renderItem={renderItem}
        dropdownPosition={dropdownPosition}
        disable={disable}
      />
    </View>
  );
};

export default DropDown;
