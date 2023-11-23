//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FeedInfoCard from '../../components/cards/FeedInfoCard';

// create a component
const Prompt = ({ data }) => {
    return (
        <View style={styles.container}>
            {data?.map(item => (
                <FeedInfoCard key={item?.image} image={item?.image} title={item?.title} answer={item?.answer} />
            ))}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingBottom: 15
    },
});

//make this component available to the app
export default Prompt;
