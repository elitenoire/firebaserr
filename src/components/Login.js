import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard, StyleSheet} from 'react-native';
import firebase from 'firebase';
import Splash from './Splash';
import LoginForm from './LoginForm'
import { Button, Spinner } from './common'


const Login = ({ loggedIn }) => {
    let content = null;
    switch(loggedIn) {
        case true:
            content = (
                <Button onPress={() => firebase.auth().signOut()}>
                    Log Out
                </Button>)
            break;
        case false:
            content = <LoginForm />
            break;
        default:
            content = <Spinner size="large"/>
    }
    
    return (
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} >
                <View style={{flex:1}}>
                    <Splash>
                        <View style={styles.container}>
                            {content}
                        </View>
                    </Splash>
                </View>
            </TouchableWithoutFeedback>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Login;