import React from 'react';
import { Text, View } from 'react-native';

const Card = (props) => {
    //use CardSection instead of Text
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle: {
        flexDirection: 'column',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#ddd',
        marginTop: 1,
        marginHorizontal: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 0.2,
        elevation: 2,
        position: 'relative',
    }
}

export { Card };