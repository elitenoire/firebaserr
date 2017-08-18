import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Splash from './Splash';

export default class SplashPage extends Component {
    render() {
        const { main, body, title, subtitle, footer } = styles;
        return (
            <Splash>
                <View style={body}>
                    <View style={main}>
                        <Text style={title}>Share highlights of your day</Text>
                        <Text style={title}>with friends</Text>
                    </View>
                    <View style={footer}>
                        <Text style={subtitle}>Powered by React Native</Text>
                    </View>
                </View>
            </Splash>
        )
    }
}


const styles = StyleSheet.create({
  main: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 250,
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.7,
  },
  subtitle: {
    fontWeight: '200',
    fontSize: 12,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 10,
  }
})
