import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

interface Props extends TextProps {
  children: string;
}

const CustomText = ({ style, children, ...otherProps }: Props) => {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'black',
  },
});

export default CustomText;