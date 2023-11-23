import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TabNavigator from './TabNavgator';
import ProfileDetail from '../modules/ProfileDetail';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
        </Stack.Navigator>
    );
};

export default HomeStack;
