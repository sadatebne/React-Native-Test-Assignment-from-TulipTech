import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import GridWithInput from '../Grid-With-Input/GridWithInput';


interface Rectangle {
  height: number;
  width: number;
  rows: number;
  columns: number;
}

export default function RectangleWithInput() {

  const [rectHeight, setRectHeight] = useState<string>('');
  const [rectWidth, setRectWidth] = useState<string>('');
  const [gridHeight, setGridHeight] = useState<string>('');
  const [gridWidth, setGridWidth] = useState<string>('');

  const [rectangle, setRectangle] = useState<Rectangle | null>(null);

  // Function to create the parent rectangle
  const createParentRectangle = () => {
    const height = parseFloat(rectHeight);
    const width = parseFloat(rectWidth);
    if (!isNaN(height) && !isNaN(width) && height > 0 && width > 0) {
      setRectangle({ height, width, rows: 0, columns: 0 });
    } else {
      alert('Please enter valid numbers for height and width.');
      setRectangle(null);
    }
  };

  // Function to create the grid layout within the parent rectangle
  const createGridLayout = () => {
    const height = parseFloat(gridHeight);
    const width = parseFloat(gridWidth);
    
    if (!isNaN(height) && !isNaN(width) && height > 0 && width > 0) {
      if (rectangle) {
        const updatedRectangle: Rectangle = {
          ...rectangle,
          rows: Math.floor(rectangle.height / height),
          columns: Math.floor(rectangle.width / width)
        };
        setRectangle(updatedRectangle);
      } else {
        alert('Please create the parent rectangle first.');
      }
    } else {
      alert('Please enter valid numbers for grid height and width.');
    }
  };

  const removeAllGrids = () => {
    setRectangle(null);
  };

  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center',fontWeight:700, fontSize:20, marginVertical:20}}>Rectangle With Grid User Input</Text>
      <View>
        <Text style={{textAlign:'center',fontWeight:600, fontSize:15}}>Parent Rectangle</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter height"
          keyboardType="numeric"
          value={rectHeight}
          onChangeText={setRectHeight}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter width"
          keyboardType="numeric"
          value={rectWidth}
          onChangeText={setRectWidth}
        />
        <Button
          title="Create Parent Rectangle"
          onPress={createParentRectangle}
        />
      </View>
      
      {rectangle && (
        <View style={{ marginTop: 20 }}>
          <Text style={{textAlign:'center',fontWeight:600, fontSize:15}}>Grid Layout</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter grid height"
            keyboardType="numeric"
            value={gridHeight}
            onChangeText={setGridHeight}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter grid width"
            keyboardType="numeric"
            value={gridWidth}
            onChangeText={setGridWidth}
          />
          <Button
            title="Create Grid Layout"
            onPress={createGridLayout}
          />
        </View>
      )}

      {rectangle && (
        <View style={{ marginTop: 20 }}>
          <Button
            title="Remove All Grids"
            onPress={removeAllGrids}
          />
        </View>
      )}

      {rectangle && (
        <View style={[styles.rectangle, { height: rectangle.height, width: rectangle.width }]}>
          {rectangle.rows > 0 && rectangle.columns > 0 && Array.from({ length: rectangle.rows }).map((_, rowIndex) => (
            <View key={rowIndex} style={{ flexDirection: 'row' }}>
              {Array.from({ length: rectangle.columns }).map((_, colIndex) => (
                <GridWithInput key={colIndex} width={rectangle.width / rectangle.columns} height={rectangle.height / rectangle.rows} />
              ))}
            </View>
          ))}
        </View>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  rectangle: {
    marginTop: 20,
    backgroundColor: 'skyblue',
    overflow: 'hidden', 
  },
});
