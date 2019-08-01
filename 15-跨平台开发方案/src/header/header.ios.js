/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';


export default class Name extends Component{
    constructor(props){
       super(props)
    }
    render() {
        return ( 
            <View>
                <StatusBar
                    barStyle="dark-content"  //改变导航栏颜色
                    hidden                  //默认为true显示导航栏  为false隐藏导航栏
                    backgroundColor="transparent"  //设置导航栏透明
                    translucent   //指定状态栏是否透明
                    ></StatusBar>
                <View style={S.header}>
                   <Text>Home</Text>
                </View>
            </View>
            
        );
  }
}

const S = StyleSheet.create({
    header: {
        paddingTop: 20,
        height: 64,
        alignItems: 'center',
        backgroundColor: '#E83A59',
        justifyContent: 'center',
    },
})
