/*
source	require	Source of the image.
x	number	Left position of the destination image.
y	number	Right position of the destination image.
width	number	Width of the destination image.
height	number	Height of the destination image.
fit?	Fit	Method to make the image fit into the rectangle. Value can be contain, fill, cover fitHeight, fitWidth, scaleDown, none (default is contain).
*/
import React, {useEffect, useState} from 'react';
import {Canvas, Image, Fill} from '@shopify/react-native-skia';

export const ImageDemo = () => {
  return (
    <Canvas style={{flex: 1}}>
      <Fill color="red" />
      <Image
        source={require('../../assets/oslo.jpg')}
        fit="contain"
        x={0}
        y={0}
        width={256}
        height={256}
      />
    </Canvas>
  );
};
