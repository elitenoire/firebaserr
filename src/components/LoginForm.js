import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Button, Card, CardSection } from './common';


export default class LoginForm extends Component {
    render() {
        const { container, input, btnSmall } = styles;
        return (
            <View
                style={container}
            >
            
                <TextInput
                    style={input}
                    
                    placeholder="Username or Email"
                    placeholderTextColor="#C51162"
                    underlineColorAndroid="transparent"
                    returnKeyType="next"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    blurOnSubmit={false}
                    onSubmitEditing={() => this.passwordInput.focus()}
                />
            
                <TextInput
                    style={input}
                    placeholder="Password"
                    placeholderTextColor="#C51162"
                    underlineColorAndroid="transparent"
                    returnKeyType="go"
                    secureTextEntry
                    ref={node => this.passwordInput = node}
                />

                <View style={btnSmall}>
                    <Button>Log In</Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 25,
    },
    input: {
        height: 30,
        color: '#C51162',
        backgroundColor: '#F48FB1',
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    btnSmall: {
        paddingHorizontal: 70
    }
})

