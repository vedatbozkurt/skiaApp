/*
Alt öğelerin tümüne değer atama
The Group component is an important construct in React Native Skia. Group components can be deeply nested with one another. It can apply the following operations to its children:

Paint properties
Transformations
Clipping operations
Bitmap Effects

transform?	Transform2d	Same API than in React Native. The default origin of the transformation is however different. It is the center object in React Native and the top-left corner in Skia.
origin?	Point	Sets the origin of the transformation. This property is not inherited by its children.
clipRect?	RectOrRRect	Rectangle or rounded rectangle to use to clip the children.
clipPath?	Path or string	Path to use to clip the children
invertClip?	boolean	Invert the clipping region: parts outside the clipping region will be shown and, inside will be hidden.
rasterize?	RefObject<Paint>	Draws the children as a bitmap and applies the effects provided by the paint.
*/
import React, {useEffect, useState} from 'react';
import {
  Canvas,
  Circle,
  Paint,
  Fill,
  Group,
  Image,
  Rect,
  Blur,
  Defs,
  ColorMatrix,
  usePaintRef,
} from '@shopify/react-native-skia';

export const GroupDemo = () => {
  // Paint Properties
  // All paint properties applied to a group will be inherited by its children.
  //   const r = 128;
  //   return (
  //     <Canvas style={{flex: 1}}>
  //       <Circle cx={r} cy={r} r={r} color="#51AFED" />
  //       {/* The paint is inherited by the following sibling and descendants. */}
  //       <Group color="lightblue" style="stroke" strokeWidth={10}>
  //         <Circle cx={r} cy={r} r={r / 2} />
  //         <Circle cx={r} cy={r} r={r / 3} color="white" />
  //       </Group>
  //     </Canvas>
  //   );
  // Transformations https://reactnative.dev/docs/transforms
  // in React Native the origin of transformation is the center of the object whereas
  // it is the top left position of the object in Skia.
  // return (
  //     <Canvas style={{ flex: 1 }}>
  //       <Fill color="#e8f4f8" />
  //       <Group color="lightblue" transform={[{ skewX: Math.PI / 6 }]}>
  //         <Rect x={64} y={64} width={128} height={128} rx={10} />
  //       </Group>
  //     </Canvas>
  //   );
  // Transformation of Origin
  // return (
  //     <Canvas style={{ flex: 1 }}>
  //       <Fill color="#e8f4f8" />
  //       <Group
  //         color="lightblue"
  //         origin={{ x: 64, y: 64 }}
  //         transform={[{ skewX: Math.PI / 6 }]}
  //       >
  //         <Rect x={64} y={64} width={128} height={128} rx={10} />
  //       </Group>
  //     </Canvas>
  //   );
  // Clipping Operations
  //   const star =
  //     'M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z';
  //   return (
  //     <Canvas style={{flex: 1, margin: 24}}>
  //       <Group clipPath={star}>
  //         <Image
  //           source={require('../assets/oslo.jpg')}
  //           x={0}
  //           y={0}
  //           width={256}
  //           height={256}
  //           fit="cover"
  //         />
  //       </Group>
  //     </Canvas>
  //   );
  // Invert Clip
  //   const star =
  //     "M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z";
  //   return (
  //     <Canvas style={{ flex: 1 }}>
  //       <Group clipPath={star} invertClip>
  //         <Image
  //           source={require("../assets/oslo.jpg")}
  //           x={0}
  //           y={0}
  //           width={256}
  //           height={256}
  //           fit="cover"
  //         />
  //       </Group>
  //     </Canvas>
  //   );

  // Bitmap Effects
  // https://kazzkiq.github.io/svg-color-filter/
  const paint = usePaintRef();
  return (
    <Canvas style={{ flex: 1}}>
      {/* Here we use <Defs /> so the paint is not used by the siblings and descendants */}
      <Defs>
        <Paint ref={paint}>
          <ColorMatrix
            value={[
              1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 18, -7,
            ]}
          >
            <Blur sigmaX={20} sigmaY={20} />
          </ColorMatrix>
        </Paint>
      </Defs>
      <Group color="lightblue" rasterize={paint}>
        <Circle cx={0} cy={128} r={128 * 0.95} />
        <Circle
          cx={256}
          cy={128}
          r={128 * 0.95}
        />
      </Group>
    </Canvas>
  );
};
