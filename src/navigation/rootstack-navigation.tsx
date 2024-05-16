import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './bottomTab-navigation';

const RootStack = createNativeStackNavigator();
const RootStackNavigation = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name='BottomTabNavigation' component={BottomTabNavigation}/>
    </RootStack.Navigator>
  )
}

export default RootStackNavigation

const styles = StyleSheet.create({})