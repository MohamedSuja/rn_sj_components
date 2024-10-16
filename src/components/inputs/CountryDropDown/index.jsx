import {View, Text, Image, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import {Dropdown} from 'react-native-element-dropdown';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../../../constants/Colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const CountryDropDown = props => {
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
    title,
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
      <View style={styles.selectItem}>
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
        style={[
          styles.rightIcon,
          {
            transform: [{rotate: arrowTransform}],
          },
        ]}>
        {customRightIcon?.() ?? (
          <Entypo color={Colors.black} name="chevron-small-down" size={wp(8)} />
        )}
      </Animated.View>
    );
  };
  return (
    <View
      style={[
        styles.root,
        focus && {
          shadowColor: Colors.black,
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.43,
          shadowRadius: 9.51,

          elevation: 15,
        },

        style,
      ]}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg',
        }}
      />
      <View style={styles.inputView}>
        <Text style={styles.title}>{title}</Text>

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
    </View>
  );
};

export default CountryDropDown;
