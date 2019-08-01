/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,  //样式的变量
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const App = () => {
  return (
    <View style={[style.container,style.other]}>
      <View style={style.subBox}>
          <Text>22221sg </Text>
      </View>
          <Text style={style.text}>1111</Text>
    </View>
  );
};



export default App;

const style = StyleSheet.create({
  container:{
    width: 200,
    height: 200,
    backgroundColor: '#ff6600',
    margin: 25,  //不能跟css一样写margin:"20 30 20 40"   可以这么写 margin:"20%"
    marginHorizontal: 40,   //水平方向
    marginVertical: 30,    //垂直方向
    padding: 30,
    borderWidth: 2,
    borderColor: '#532AA3',
    borderStyle: 'solid',
    // borderStyle: 'dotted',
    // borderStyle: 'dashed',
    borderLeftWidth: 5,
    position: 'relative',
    // display: 'none',
    // left: 200,
    // marginTop: 25,
    borderRadius: 10,
    shadowColor: 'red',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.5,
    shadowRadius: 14,
    elevation: 100, //在安卓设备上要加这个属性才可以显示  只是支持安卓5.0以上的系统
  },
  other: {
    marginLeft: 25,
    backgroundColor: '#00ff66'
  },
  subBox: {
    height: 50,
    backgroundColor: '#784578'
  },
  text:{
    color: 'red',
    fontWeight: '500'
  }
})
