import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = ({ size }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={size || 'large'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 3,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export { Spinner };