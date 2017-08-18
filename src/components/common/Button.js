import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


const Button = ({ children, onPress }) => {
    const { container, text } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={container}>
            <Text style={text}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#C51162',
        marginLeft: 5,
        marginRight: 5
    },
    text: {
        alignItems: 'center',
        color: '#C51162',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 5
    },
})

export { Button };