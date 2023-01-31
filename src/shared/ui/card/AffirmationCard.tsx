import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface Props {
  affirmation: string;
}

const AffirmationCard = ({ affirmation }: Props) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.affirmationText}>{affirmation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  affirmationText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default AffirmationCard;
