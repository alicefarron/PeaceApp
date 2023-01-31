import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const Input: React.FC<Props> = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10,
    width: '100%',
    borderColor: '#eee',
    borderWidth: 1,
    padding: 5,
  },
  input: {
    width: '100%',
    height: 30,
    padding: 5,
    fontSize: 16,
  },
});

export default Input;