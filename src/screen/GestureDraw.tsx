import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Rectangle from "../component/Rectangle/Rectangle";

export default function GestureDraw() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Text style={{textAlign:'center',fontWeight:700, fontSize:20, marginVertical:20}}>Draw Rectangle With Gesture</Text>
      <Rectangle />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
