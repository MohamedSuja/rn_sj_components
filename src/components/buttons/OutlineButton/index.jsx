import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

const OutlineButton = props => {
  const {onPress, title, style} = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default OutlineButton;
