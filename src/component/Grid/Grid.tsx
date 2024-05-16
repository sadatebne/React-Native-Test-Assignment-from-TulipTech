import React from 'react';
import { View, StyleSheet } from 'react-native';

interface GridProps {
  width: number;
  height: number;
  containerWidth: number;
  containerHeight: number;
  color: string; 
}

const Grid: React.FC<GridProps> = ({ width, height, containerWidth, containerHeight, color }) => {
  const renderCells = () => {
    const rows = Math.floor(containerHeight / height);
    const cols = Math.floor(containerWidth / width);
    const cells = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        cells.push(
          <View
            key={`${i}-${j}`}
            style={[styles.cell, { width, height, top: i * height, left: j * width, backgroundColor: color }]}
          />
        );
      }
    }

    return cells;
  };

  return (
    <View style={styles.container}>
      {renderCells()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  cell: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default Grid;
