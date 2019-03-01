import React from 'react';
import { View, Text } from 'react-native';

export const Error = ({errorStore}) => {
    const { error, isError } = errorStore;
    return ( isError ? <View style={styles.errorStyle}><Text style={styles.textStyle}>{error}</Text></View> : null)
}

const styles = {
    errorStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 25
    },
    textStyle: {
        fontSize: 16,
        color: 'red'
    }
}
