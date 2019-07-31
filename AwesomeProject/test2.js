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
          <Text>subBox1 </Text>
      </View>
      <View style={style.subBox}>
          <Text>subBox2 </Text>
      </View>
      <View style={[style.subBox,style.subBox3]}>
          <Text>subBox33333333 </Text>
      </View>
    </View>
  );
};



export default App;

const style = StyleSheet.create({
  container:{
    display: 'flex',
    backgroundColor: 'skyblue',
    // flexDirection: 'row',    //表示垂直
    flexDirection: 'column',  //表示横向，交叉轴
    // justifyContent: 'flex-end', //从上往下排列
    justifyContent: 'center', //剧中对其
    // justifyContent: 'space-between', //剧中对其
    // justifyContent: 'space-around', //剧中对其
    alignItems: 'stretch',
    // alignItems: 'flex-start',
    // alignItems: 'flex-end',
    // flexWrap: 'wrap',
    alignItems: 'center',
    height: 500,
  },
  subBox: {
    backgroundColor: 'red',
    // alignSelf: 'flex-start',
    height: 50,
    // flexGrow: 1,
    // width: '100%'
    flex: 1
  },
  subBox3:{
    backgroundColor: 'blue',
    // alignSelf: 'flex-start',
    // flexGrow: 1
  },
  text:{
  }
})
