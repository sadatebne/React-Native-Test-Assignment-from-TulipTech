import React, { useState } from "react";
import { View, StyleSheet, Dimensions, TextInput, Text } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Grid from "../Grid/Grid";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

const Rectangle: React.FC = () => {
  const [startPoint, setStartPoint] = useState<{ x: number; y: number } | null>(
    null
  );
  const [rectangle, setRectangle] = useState<Rectangle | null>(null);
  const [gridWidth, setGridWidth] = useState("");
  const [gridHeight, setGridHeight] = useState("");
  const [gridColor, setGridColor] = useState("lightgrey"); // New state for grid color

  const onGestureEvent = ({
    nativeEvent,
  }: {
    nativeEvent: { translationX: number; translationY: number };
  }) => {
    if (startPoint) {
      const width = nativeEvent.translationX;
      const height = nativeEvent.translationY;
      setRectangle({
        x: startPoint.x,
        y: startPoint.y,
        width: width > 0 ? width : 0,
        height: height > 0 ? height : 0,
      });
    }
  };

  const onHandlerStateChange = ({
    nativeEvent,
  }: {
    nativeEvent: { state: State; x: number; y: number };
  }) => {
    if (nativeEvent.state === State.BEGAN) {
      setStartPoint({
        x: nativeEvent.x - (rectangle ? rectangle.width : 0),
        y: nativeEvent.y - (rectangle ? rectangle.height : 0),
      });
    } else if (nativeEvent.state === State.END) {
      setStartPoint(null); // Reset start point after gesture ends
    }
  };

  const handleGridWidthChange = (text: string) => {
    setGridWidth(text);
  };

  const handleGridHeightChange = (text: string) => {
    setGridHeight(text);
  };

  const handleGridColorChange = (color: string) => {
    // Function to handle grid color change
    setGridColor(color.toLowerCase());
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={{textAlign:'center',fontWeight:600, fontSize:15}}>Set Grid Width:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleGridWidthChange}
          value={gridWidth}
          keyboardType="numeric"
        />
        <Text style={{textAlign:'center',fontWeight:600, fontSize:15}}>Set Grid Height:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleGridHeightChange}
          value={gridHeight}
          keyboardType="numeric"
        />
      </View>
      <View style={{marginHorizontal:20, flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <Text style={{textAlign:'center',fontWeight:600, fontSize:15}}>Set Grid Color:</Text>
        <TextInput
          style={styles.input2}
          onChangeText={handleGridColorChange}
          value={gridColor}
        />
      </View>
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <View style={styles.gestureArea}>
          {rectangle && (
            <View
              style={[
                styles.rectangle,
                {
                  left: rectangle.x,
                  top: rectangle.y,
                  width: rectangle.width,
                  height: rectangle.height,
                },
              ]}
            >
              <Grid
                width={parseInt(gridWidth)}
                height={parseInt(gridHeight)}
                containerWidth={rectangle.width}
                containerHeight={rectangle.height}
                color={gridColor} // Pass grid color as prop
              />
            </View>
          )}
        </View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  input: {
    width: 50,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 5,
    paddingHorizontal: 5,
  },
  input2: {
    width: 100,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 5,
    paddingHorizontal: 5,
  },
  gestureArea: {
    width: screenWidth,
    height: screenHeight,
  },
  rectangle: {
    position: "absolute",
    backgroundColor: "skyblue",
    borderWidth: 1,
    borderColor: "black",
  },
});

export default Rectangle;
