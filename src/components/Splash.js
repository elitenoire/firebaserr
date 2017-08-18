import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Splash = ({ children }) => {
    const { container, brand, main } = styles;
    return (
        <View style={container}>
            <KeyboardAvoidingView
                behavior="padding"
                style={{flex:1}}
            >
                <View style={main}>
                    <FontAwesome name="rebel" size={100} color="#C51162" />
                    <Text style={brand}>SPICED</Text>
                </View>

                {children}
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#16a085',
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        flex:1,
        paddingBottom: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    brand: {
        color: '#fff',
        fontSize: 25,
        fontFamily: 'notoserif',
    },
})

export default Splash;