/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  StyleSheet,  //样式的变量
  View,
  Text,
  ScrollView
} from 'react-native';

//引用组件
import Card from './card'

const App = () => {
  return (
    <View style={[S.container,S.other]}>
      <View style={S.header}>
        <Text style={S.fontSize}>Home</Text>
      </View>
      <View style={S.scrollView}>
        <ScrollView 
          //  style={S.scrollView}
          // contentContainerStyle={S.scrollView}
          >
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </ScrollView>
      </View>
      <Text>底部</Text>
      
    </View>
  );
};



export default App;

const S = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F5FCFF',
    // justifyContent: 'center', 
  },
  header:{
    height: 60,
    width: '100%',
    backgroundColor: '#E83A59',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20
  },
  fontSize:{
    fontSize: 28
  },
  scrollView:{
    backgroundColor: 'red',
    height: 300,
    marginTop: 20,
    marginBottom: 20
  }
    
})
