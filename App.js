import React from 'react';
import firebase from 'firebase';
import Login from './src/components/Login';


export default class App extends React.Component {
  state = {loggedIn: null};

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyAEh6mlGxVgArVdNAOEvn4Z_WyHVM1J6uE',
        authDomain: 'fir-rr.firebaseapp.com',
        databaseURL: 'https://fir-rr.firebaseio.com',
        projectId: 'fir-rr',
        storageBucket: 'fir-rr.appspot.com',
        messagingSenderId: '620220230863'
        });

    firebase.auth().onAuthStateChanged((user) => {
      user ? this.setState({loggedIn: true}) : this.setState({loggedIn: false})
    })
  };

  render() {
    return  (
      <Login loggedIn={this.state.loggedIn} />
    );
  }
}




