import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../buttons/IconButton';
import Heading1 from '../texts/Heading1';
import globalStyles from '../../theme/globalStyles';

const Header1 = ({ title, onIconLeftPress, onIconRightPress, iconLeft, iconRight }) => {
    return (
        <View style={globalStyles.headerContainer}>
            <IconButton onPress={onIconLeftPress} icon={iconLeft} />

            <Heading1>{title}</Heading1>

            <IconButton onPress={onIconRightPress} icon={iconRight} />
        </View>
    );
};

export default Header1;
