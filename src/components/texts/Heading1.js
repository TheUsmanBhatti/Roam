import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

const Heading1 = ({ children }) => {
    return <Text style={styles.heading}>{children}</Text>;
};

const styles = StyleSheet.create({
    heading: { fontSize: 22, fontFamily: 'ganos-Medium', lineHeight: 28, color: COLORS.black },
});

export default Heading1;
