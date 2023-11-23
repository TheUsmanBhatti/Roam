import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import TabNavigator from './src/navigations/TabNavgator';
import HomeStack from './src/navigations/HomeStack';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <HomeStack />
                {/* <TabNavigator /> */}
            </NavigationContainer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    },
});

export default App;
