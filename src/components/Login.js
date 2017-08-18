import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, StyleSheet} from 'react-native';
// import firebase from 'firebase';
import Splash from './Splash';
import LoginForm from './LoginForm'


export default class Login extends Component {
//     componentWillMount(){
//         firebase.initializeApp({
//             apiKey: 'AIzaSyAEh6mlGxVgArVdNAOEvn4Z_WyHVM1J6uE',
//             authDomain: 'fir-rr.firebaseapp.com',
//             databaseURL: 'https://fir-rr.firebaseio.com',
//             projectId: 'fir-rr',
//             storageBucket: 'fir-rr.appspot.com',
//             messagingSenderId: '620220230863'
//         });
//     };

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