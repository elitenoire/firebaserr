import React from 'react';
import { Text, View } from 'react-native';

//use props.children
const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderColor: '#daa',
        padding: 5,
        backgroundColor: '#fff',
    }
}

export { CardSection };


