import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, StyleSheet} from 'react-native';
import Splash from './Splash';
import LoginForm from './LoginForm'


export default class Login extends Component {
    render() {
        return (
                <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} >
                    <View style={{flex:1}}>
                        <Splash>
                            <View style={styles.container}>
                                <LoginForm />
                            </View>
                        </Splash>
                    </View>
                </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})