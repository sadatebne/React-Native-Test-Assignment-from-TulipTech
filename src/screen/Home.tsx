import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RectangleWithInput from '../component/Rectangle-With-Input/RectangleWithInput'

const Home = () => {
  return (
    <ScrollView>
    <ScrollView horizontal={true}>
      <View style={{ flex: 1 }}>
        <RectangleWithInput />
      </View>
    </ScrollView>
  </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})