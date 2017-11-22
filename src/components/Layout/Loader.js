import React from 'react';
import { ActivityIndicator, TouchableHighlight } from 'react-native';
import theme from 'themes';

export default Loader = ({ onPress = () => { } }) => (
    <TouchableHighlight underlayColor={theme.colors.mainDark} style={loaderStyles.container} onPress={onPress}>
        <ActivityIndicator size="large" color="white" />
    </TouchableHighlight>
);