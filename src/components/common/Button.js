import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


const Button = ({ children, onPress, disabled }) => {
    const { container, main, text } = styles;
    return (
        <View style={container}>
            <TouchableOpacity
                onPress={onPress}
                disabled={disabled}
                style={disabled? [main, {opacity: 0.3}] : main}
                >
                    <Text style={text}>{children}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 70
    },
    main: {
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
        paddingVertical: 5,
        paddingHorizontal: 5
    },
})

export { Button };