import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';

interface GridWithInputProps {
  width: number;
  height: number;
}

const GridWithInput: FC<GridWithInputProps> = ({ width, height }) => {
  return <View style={{ width, height, backgroundColor: 'lightgrey', borderWidth: 1, borderColor: 'black' }} />;
};

export default GridWithInput;

const styles = StyleSheet.create({});
