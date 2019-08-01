/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList
} from 'react-native';

import Card from './card';       //引入选项卡组件
import cardData from './card/mockData';  //引入数据
import Header from './header/header'
// import AndroidHeader from './header' 
// import IosHeader from './header'

//判断对于设备显示对于的文件
// const Header = Platform.select({
//   ios: IosHeader,
//   android: AndroidHeader
// })

export default class App extends Component{
  render() {

    return (
      <View style={S.container}>
        <Header/>
        <View style={S.scrollView}>
          <FlatList
            data={cardData}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>{
              return (
                <Card
                  {...{
                    source: item.source,
                    content: item.content,
                    time: item.time
                  }}
                />
              )
            }}
          />
        </View>

      </View>
    );
  }
}

const S = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F5FCFF',
    // justifyContent: 'center',
  },
  header: {
    paddingTop: 20,
    height: 64,
    alignItems: 'center',
    backgroundColor: '#E83A59',
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '600'
  },
  scrollView: {
    // height: 300,
    // backgroundColor: 'red',
    // marginTop: 20,
    // marginBottom: 20,

  }
})
