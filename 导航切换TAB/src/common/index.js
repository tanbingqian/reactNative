import React,{Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
//引入头部
import Card from '../card';
import cardData from '../card/mockData';

export default class IndexScreen extends Component {
    render() {
        return (
            <View>
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
            
        )
    }
}