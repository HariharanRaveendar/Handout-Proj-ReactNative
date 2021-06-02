import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src//container/homescreen/index';
export default class App extends React.Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:"red"}}>
        <HomeScreen />
      </View>
    );
  }
}
