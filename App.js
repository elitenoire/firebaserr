import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import SplashPage from './src/components/SplashPage';
import firebase from 'firebase';
import Login from './src/components/Login';


export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyAEh6mlGxVgArVdNAOEvn4Z_WyHVM1J6uE',
        authDomain: 'fir-rr.firebaseapp.com',
        databaseURL: 'https://fir-rr.firebaseio.com',
        projectId: 'fir-rr',
        storageBucket: 'fir-rr.appspot.com',
        messagingSenderId: '620220230863'
        });
  };

  render() {
    return  (
      <Login />
    );
  }
}




