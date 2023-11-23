//import liraries
import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Typography from '../texts/Typography';
import { COLORS } from '../../theme/colors';

// create a component
const GroupMemberCard = ({ avatar, label }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image source={{ uri: avatar }} style={styles.avatar} />
            <Typography weight={'regular'} size={10} color={COLORS.black}>
                {label}
            </Typography>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    avatar: {
        width: 48,
        aspectRatio: 1,
        borderRadius: 25,
        backgroundColor: COLORS.gray.medium,
    },
});

//make this component available to the app
export default GroupMemberCard;
