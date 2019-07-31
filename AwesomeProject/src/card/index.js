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
  Image,
  Text,
} from 'react-native';

//ES6的方式引入图片文件
// import avatar from './img/avatar.png'


//也可以使用require方式引入
const avatar =require('./img/avatar.png');

const App = () => {
  return (
    <View style={S.box}>
        <View style={S.avatarWrap}>
            <Image 
            //    source={{uri:'https://static.npmjs.com/attachments/cjsbzwq57u0jxtc74vglc8ff9-gak-only.full.png'}} 
            source={require('./img/avatar.png')}
            //    source={avatar}
            style={S.avatar}
            />
        </View>

        <View style={S.content}>
          <Text 
             style={S.summary}
             numberOfLines={3}
             lineBreakMode="tail"
          >
              逝者长已矣，生者当如斯。李咏离开人世已过去九个多月时间了，至今仍有不少人追忆着他的辉煌过去，感谢他曾在舞台上给世人带来的欢声笑语。俗话说得好，爱屋逝者长已矣，生者当如斯。李咏离开人世已过去九个多月时间了，至今仍有不少人追忆着他的辉煌过去，感谢他曾在舞台上给世人带来的欢声笑语。俗话说得好，爱屋及乌，柔远能迩，很多人就将关心转移到了李咏家人身上，时刻为哈文和法图麦加油鼓气，一言一行都会成为热议不疲的焦点。
         </Text>
          <Text style={S.time}>11:16</Text>
        </View>

       
    </View>
  );
};



export default App;

const S = StyleSheet.create({
  box:{
      backgroundColor: '#fff',
      shadowColor: '#4F5EA3',
      shadowOpacity: 0.14,
      shadowOffset: {width:0,height:4},
      marginBottom: 18,
      paddingVertical: 16,
      paddingHorizontal: 18,
      shadowRadius: 8,
      borderRadius: 8,
      marginLeft: 20,
      marginRight: 20,
      flexDirection: 'row',
      elevation: 3,
  },
  avatarWrap:{
      marginRight: 18
  },
  avatar:{
      width: 45,
      height: 45,
      borderRadius: 45/2
  },
  content:{
      flex: 1
  },
  summary:{
      fontSize: 16,
      lineHeight: 22,
      fontWeight: '600',
      color: '#384337'
  },
  time:{
      marginTop: 10,
      color: '#A3ADB4'
  }
})
