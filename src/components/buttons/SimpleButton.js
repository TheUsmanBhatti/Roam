//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../theme/colors';
import Typography from '../texts/Typography';

// create a component
const SimpleButton = ({
    label,
    backgroundColor = COLORS.tyrianPurple,
    color = COLORS.white,
    borderColor = COLORS.tyrianPurple,
    variant = 'contained',
    style,
    onPress,
}) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 12,
            backgroundColor: variant == 'contained' ? backgroundColor : 'transparent',
            borderRadius: 30,
            borderWidth: 1,
            borderColor: borderColor,
            ...style,
        },
    });

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Typography weight={'medium'} color={color} style={{ textAlign: 'center' }}>
                {label}
            </Typography>
        </TouchableOpacity>
    );
};

//make this component available to the app
export default SimpleButton;
