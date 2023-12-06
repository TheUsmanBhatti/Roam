//import liraries
import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../theme/colors';
import IconButton from '../../components/buttons/IconButton';
const { width, height } = Dimensions.get('window');
// create a component
const Photos = ({ data }) => {
    return (
        <View style={styles.container}>
            <IconButton style={{margin: 15}} icon="Add" label="Add Photo" backgroundColor={COLORS.tyrianPurple} color={COLORS.white} />

            <View style={styles.photosCon}>
                {data?.map(item => (
                    <View key={item} style={styles.imageBox}>
                        <Image source={{ uri: item }} style={styles.image} />
                    </View>
                ))}
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {},
    photosCon: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 2,
    },
    imageBox: {
        width: width < height ? '50%' : '25%',
        aspectRatio: 1,
        padding: 2,
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.gray.medium,
        borderRadius: 4,
    },
});

//make this component available to the app
export default Photos;
