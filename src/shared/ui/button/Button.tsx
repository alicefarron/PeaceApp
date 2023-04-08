import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {normalize} from 'shared/helpers';

interface Props {
  title: string;
  onPress: () => void;
  color: string;
  textColor: string;
}

const Button: React.FC<Props> = ({
  title,
  onPress,
  color = '#8E97FD',
  textColor = '#F6F1FB',
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: color}]}
      onPress={onPress}>
      <Text style={[styles.buttonText, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#2089dc',
    paddingVertical: 25,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: normalize(12),
  },
});

export default Button;
