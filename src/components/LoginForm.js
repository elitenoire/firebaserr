import React, { Component } from 'react';
import { View, Text, TextInput, Keyboard, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection } from './common';


export default class LoginForm extends Component {
    state = {user: '', password: '', error: ''};

    loginHandler() {
        //dismiss keyboard after button press
        Keyboard.dismiss();
        //get user's name and password
        const { user, password } = this.state;
        //clear error message (if any) every time user logs in
        this.setState({error: ''})
        //handle login via firebase
        firebase.auth().signInWithEmailAndPassword(user, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(user, password)
                    .catch((err) => {
                        console.log(err.code, err.message);
                        this.setState({error: err.message})
                    })
            })
    }

    render() {
        const { container, input, btnSmall, errMsg } = styles;

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
                    value={this.state.user}
                    onChangeText={text => this.setState({user : text})}
                />
            
                <TextInput
                    style={input}
                    placeholder="Password"
                    placeholderTextColor="#C51162"
                    underlineColorAndroid="transparent"
                    returnKeyType="go"
                    secureTextEntry
                    ref={node => this.passwordInput = node}
                    value={this.state.password}
                    onChangeText={text => this.setState({password : text})}
                />

                <Text style={errMsg}>
                    {this.state.error}
                </Text>

                <View style={btnSmall}>
                    <Button onPress={this.loginHandler.bind(this)}>
                        Log In
                    </Button>
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
    errMsg: {
        color: '#C51162',
        marginBottom: 5,
        alignSelf: 'center',
    },
    btnSmall: {
        paddingHorizontal: 70
    }
})

