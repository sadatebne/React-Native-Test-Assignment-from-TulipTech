import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Feather from '@expo/vector-icons/Feather';
import GestureDraw from '../screen/GestureDraw';


const Tab = createBottomTabNavigator();

const BottomTabList = [
  {
    name: 'Rectangle Draw With Input Screen',
    component: Home,
    tabBarLabel: 'Rectangle-With-Input',
    tabBarIcon: () => <Feather name="home" size={24} color={'blue'} />,
  },
  {
    name: 'GestureDrawScreen',
    component: GestureDraw,
    tabBarLabel: 'RectangleWithGesture',
    tabBarIcon: () => <Feather name="mouse-pointer" size={24} color={'blue'} />
  },

];

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator >
    {BottomTabList.map((item, index) => (
      <Tab.Screen
        key={index}
        name={item.name}
        component={item.component}
        options={{
          tabBarLabel: item.tabBarLabel,
          tabBarIcon: item.tabBarIcon
        }}
      />
    ))}
  </Tab.Navigator>
  )
}



const styles = StyleSheet.create({})