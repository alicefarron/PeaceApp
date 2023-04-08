import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Button from '../../shared/ui/button/Button';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Button title="Button" onPress={() => {}} />
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
