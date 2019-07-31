import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export default class Name extends Component{
  constructor(props){
      super(props);
  }

  render(){

    let {
      source,
      content,
      time
    } = this.props;

    return (
      <View style={S.box}>
        <View style={S.avatarWrap}>
          <Image
            source={source}
            style={S.avatar}
          />
        </View>

        <View style={S.content}>
          <Text
            style={S.summary}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {content}
          </Text>
          <Text style={S.time}>{time}</Text>
        </View>
      </View>
    )
  }
}

const S = StyleSheet.create({
  box: {
    // height: 90,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 18,
    paddingVertical: 16,
    paddingHorizontal: 18,
    shadowColor: '#4F5EA3',
    shadowOpacity: 0.14,
    shadowOffset: {width:0, height:4},
    shadowRadius: 8,
    borderRadius: 8,
    elevation: 3,
  },
  avatarWrap: {
    marginRight: 18,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45/2
  },
  content: {
    flex: 1,
  },
  summary: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
    color: '#384337'
  },
  time: {
    marginTop: 10,
    color: '#A3ADB4'
  }
})
