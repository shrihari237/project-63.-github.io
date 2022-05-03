import React, { Component } from 'react';
import { StyleSheet, View, Text,TextInput } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default class App extends Component{
  constructor(){
   super();
   this.state = {
     text:""
   } 
  }
  render(){
    return(
      <View style={{flex:1}}>
        <HomeScreen />

        <TextInput 
        style={StyleSheet.inputBox}
        onChangeText={text =>{
          this.setState({
            text:text,
            isSearchPressed: false,
            word :"Loading...",
            lexicalCaterory :'',
            examples : [],
            definition : ""
          })
        }}
        />
      </View>
    )
  }
}
