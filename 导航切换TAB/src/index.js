import React from 'react';
import { View, Text, Button,ListView } from 'react-native';
import { createAppContainer, createStackNavigator,createBottomTabNavigator, StackActions, NavigationActions } from 'react-navigation';



import MineScreen from "./common/mine";
import NewsScreen from "./common/news";
import IndexScreen from "./common/index";


const BottomTabNavigator = createBottomTabNavigator(
    {
        Index: {
            screen: IndexScreen,
            navigationOptions: {
                tabBarLabel: '首页',
                //tabBarIcon:({focused}) => (
                //    <TabBarIcon
                //        focused={focused}
                //        name={'首页'}
                //        color={focused ? SELECTED_COLOR : UNSELECTED_COLOR}
                //    />
               // )
            }
        },
        News: {
            screen: NewsScreen,
            navigationOptions: {
                tabBarLabel: '新闻',
               // tabBarIcon:({focused}) => (
                   // <TabBarIcon
                   //     focused={focused}
                   //     name={'新闻'}
                  //      color={focused ? SELECTED_COLOR : UNSELECTED_COLOR}
                  //  />
               // )
            }
        },
        My: {
            screen: MineScreen,
            navigationOptions: {
                tabBarLabel: '我的',
               // tabBarIcon:({focused}) => (
               //     <TabBarIcon
               //         focused={focused}
               //         name={'我的'}
               //         color={focused ? SELECTED_COLOR : UNSELECTED_COLOR}
               //     />
              //  )
            }
        }
 },{
      initialRouteName: 'Index',
             // order: ORDER,
             // tabBarOptions: {
             //     activeTintColor: SELECTED_COLOR,
             //     activeBackgroundColor: SELECTED_BGCOLOR,
             //     inactiveTintColor: UNSELECTED_COLOR,
            //      inactiveBackgroundColor: UNSELECTED_BGCOLOR,
              //   style: {
               //       backgroundColor: 'pink',
              //    },
              //    labelStyle: {
              //        paddingBottom: 5,
              //        fontSize: 14,
              //    }
             // }
});

export default createAppContainer(BottomTabNavigator);

//const AppNavigator = createStackNavigator({
//  Home: {
//    screen: HomeScreen,
//  },
// Details: {
//    screen: DetailsScreen,
//  },
//}, {
//    initialRouteName: 'Home',
//});
//export default createAppContainer(AppNavigator);

