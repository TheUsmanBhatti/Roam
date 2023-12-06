//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FeedInfoCard from '../../components/cards/FeedInfoCard';
import IconButton from '../../components/buttons/IconButton';
import { COLORS } from '../../theme/colors';

// create a component
const Prompt = ({ data }) => {
    return (
        <View style={styles.container}>
            <IconButton
                style={{ marginVertical: 15 }}
                icon="Add"
                label="Choose a prompt"
                backgroundColor={COLORS.tyrianPurple}
                color={COLORS.white}
            />

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
        paddingBottom: 15,
    },
});

//make this component available to the app
export default Prompt;
