import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

interface Props {
    title: string;
    imageSource: any;
    description: string;
}

const NewsCard = ({ title, imageSource, description }: Props) => {
  return (
    <View style={styles.cardContainer}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
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
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    descriptionText: {
        fontSize: 14,
        textAlign: 'center',
    },
});

export default NewsCard;