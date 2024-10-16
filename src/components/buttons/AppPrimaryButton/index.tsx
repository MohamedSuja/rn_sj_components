import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import { styles } from "./styles";

interface AppPrimaryButtonProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  title: string;
  style?: StyleProp<ViewStyle>;
}

const AppPrimaryButton = (props: AppPrimaryButtonProps) => {
  const { onPress, title, style } = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppPrimaryButton;
