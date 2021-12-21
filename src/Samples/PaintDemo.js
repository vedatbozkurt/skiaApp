/*
The following properties to the Paint component:
color
blendMode
style
strokeWidth
strokeJoin
strokeCap
strokeMiter
opacity

A paint component can additionnaly receive the following components as children:
Shaders
Image Filters
Color Filters
Mask Filters
Path Effects
*/
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Canvas, Circle, Paint, Group} from '@shopify/react-native-skia';

export const PaintDemo = () => {
  // const r = 80;
  // return (
  //   <Canvas style={{ flex: 1, margin: 20 }}>
  //     <Paint color="lightblue" />
  //     <Circle cx={r} cy={r} r={r} />
  //     {/* The paint is inherited by the following sibling and descendants. */}
  //     <Group style="stroke" strokeWidth={10}>
  //       <Circle cx={3 * r} cy={3 * r} r={r} />
  //     </Group>
  //   </Canvas>
  // );

  // Alternatively, paint properties can be assigned to a shape directly.
  // If you assign these properties to a Group component, these properties will
  // be inherited by children. The example below produces the same result as above.
  // const r = 80;
  // return (
  //     <Canvas style={{ flex: 1, margin: 20 }}>
  //       <Circle color="red" cx={r} cy={r} r={r} />
  //       {/* The paint is inherited by the following sibling and descendants. */}
  //       <Group color="lightblue" style="stroke" strokeWidth={10}>
  //         <Circle cx={3 * r} cy={3 * r} r={r} />
  //       </Group>
  //     </Canvas>
  //   );

  // You can also use the Paint component as a child of a Shape. This is useful to
  // draw a shape with many different fills and strokes.
  // const strokeWidth = 10;
  // const r = 128 - strokeWidth / 2;
  // return (
  //   <Canvas style={{ flex: 1, margin: 20 }}>
  //      <Circle cx={r + strokeWidth / 2} cy={r + strokeWidth / 2} r={r} color="red">
  //       <Paint color="lightblue" />
  //       <Paint color="red" style="stroke" strokeWidth={strokeWidth} />
  //       <Paint color="black" style="stroke" strokeWidth={strokeWidth / 2} />
  //     </Circle>
  //   </Canvas>
  // );

  // Opacity
  const strokeWidth = 10;
  const r = 128 - strokeWidth / 2;
  return (
    <Canvas style={{flex: 1}}>
      <Group opacity={0.9}>
        <Circle cx={r + strokeWidth} cy={r + strokeWidth} r={r} color="red">
          <Paint color="red" />
          <Paint color="#adbce6" style="stroke" strokeWidth={strokeWidth} />
          <Paint color="#ade6d8" style="stroke" strokeWidth={strokeWidth / 2} />
        </Circle>
      </Group>
    </Canvas>
  );
};
