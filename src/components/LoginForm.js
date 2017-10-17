import React, { Component } from 'react';
import { View, Text, TextInput, Keyboard, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Button, Spinner } from './common';


export default class LoginForm extends Component {
    state = {user: '', password: '', error: '', loading: false};

    loginHandler = ()=> {
        //dismiss keyboard after button press
        Keyboard.dismiss();
        //get user's name and password
        const { user, password } = this.state;
        //clear error message (if any), show spinner every time user logs in
        this.setState({error: '', loading: true})
        //handle login via firebase
        firebase.auth().signInWithEmailAndPassword(user, password)
            .then(this.loginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(user, password)
                    .then(this.loginSuccess.bind(this))
                    .catch((err) => this.loginFail(err))
            })
    }
    //handle login success - navigate to home screen
    loginSuccess() {
        this.setState({email:'', password:'', loading: false, error: ''})
    }

    loginFail(err) {
        this.setState({error: err.message, loading: false})
    }

    renderSpinnerOrErrMsg() {
        const { errContainer, errMsg } = styles;
        return this.state.loading
            ? <Spinner size="small" />
            : (
                <View style={errContainer}>
                    <Text style={errMsg}>
                        {this.state.error}
                    </Text>
                </View>
            );
    }

    render() {
        const { container, input } = styles;

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

                {this.renderSpinnerOrErrMsg()}

                <Button onPress={this.loginHandler} disabled={this.state.loading}>
                    Log In
                </Button>

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
        marginBottom: 5,
        borderRadius: 5,
    },
    errContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    errMsg: {
        color: '#C51162',
    },
})

