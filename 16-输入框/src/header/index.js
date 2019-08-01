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
  TextInput,
  Platform
} from 'react-native';


export default class Name extends Component{
    constructor(props){
       super(props)
    }
    render() {
        return ( 
            <View style={S.header}>
                <StatusBar
                    barStyle="light-content"  //改变导航栏颜色
                    // hidden                  //默认为true显示导航栏  为false隐藏导航栏
                    backgroundColor="transparent"  //设置导航栏透明
                    translucent   //指定状态栏是否透明
                    ></StatusBar>
                <View style={S.titleWrap}>
                   <Text style={S.title}>Home</Text>
                </View>
                
                <View style={S.inputWrap}>
                    <TextInput
                        style={S.input}
                        placeholder="seerch"
                        underlineColorAndroid="transparent"
                    ></TextInput>
                </View>
                
            </View>
            
        );
  }
}

const S = StyleSheet.create({
    header: {
        backgroundColor: '#E83A59',
        ...Platform.select({
            ios: {
                height: 94,
                paddingTop: 20,
            },
            android: {
                height: 98,
                paddingTop: 24,
            }
        })
    },
    titleWrap:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 17,
        fontWeight: "600",
        color: "#fff"
    },
    inputWrap:{
        height: 30,
        backgroundColor: "rgba(255,255,255,0.6)",
        marginHorizontal: 8,
        borderRadius: 6,
        marginTop: 8,
        paddingHorizontal: 8,
        elevation: 60
    },
    input:{
        height: 30,
        padding: 0
    }
})
