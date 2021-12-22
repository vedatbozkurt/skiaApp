/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-12-22 15:19:16
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-12-22 15:54:49
 */
/*
https://shaders.skia.org/
The syntax is very similar to GLSL.
The first step is to create a shader and compile it using RuntimeEffect.Make.

Creates a shader from source. Shaders can be nested with one another.
Name	Type	Description
source	RuntimeEffect	Compiled shaders
uniforms	number	uniform values
children	Shader	Shaders to be used as uniform
*/

import React, {useEffect, useState} from 'react';
import {
  Skia,
  Canvas,
  Paint,
  Shader,
  Fill,
  ImageShader,
  Circle,
  LinearGradient,
  RadialGradient,
  vec,
  Rect,
  TwoPointConicalGradient,
  SweepGradient,
  FractalNoise,
  Turbulence,
  BlendShader,
  ColorShader,
} from '@shopify/react-native-skia';

// const source = Skia.RuntimeEffect.Make(`
// vec4 main(vec2 pos) {
//   vec2 normalized = pos/vec2(256);
//   return vec4(normalized.x, normalized.y, 0.5, 1);
// }`)!;
// export const ShaderDemo = () => {
//   // Simple Shader
//   return (
//     <Canvas style={{flex: 1}}>
//       <Paint>
//         <Shader source={source} />
//       </Paint>
//       <Fill />
//     </Canvas>
//   );
// };

// // Using Uniforms
// const source = Skia.RuntimeEffect.Make(`
// uniform float blue;
// uniform float r;

// vec4 main(vec2 pos) {
//   vec2 normalized = pos/vec2(2 * r);
//   return distance(pos, vec2(r)) > r ? vec4(1) : vec4(normalized.x, normalized.y, blue, 1);
// }`)!;

// export const ShaderDemo = () => {
//   const blue = 1.0;
//   const r = 128;
//   return (
//     <Canvas style={{ flex: 1 }}>
//       <Paint>
//         <Shader source={source} uniforms={[blue, r]} />
//       </Paint>
//       <Fill />
//     </Canvas>
//   );
// };

// // Nested Shaders
// const source = Skia.RuntimeEffect.Make(`
// uniform shader image;

// half4 main(float2 xy) {
//   xy.x += sin(xy.y / 3) * 4;
//   return image.eval(xy).rbga;
// }`)!;

// export const ShaderDemo = () => {
//   return (
//     <Canvas style={{ flex: 1 }}>
//       <Paint>
//         <Shader source={source}>
//           <ImageShader
//             source={require("../assets/oslo.jpg")}
//             fit="cover"
//             fitRect={{ x: 0, y: 0, width: 256, height: 256 }}
//           />
//         </Shader>
//       </Paint>
//       <Fill />
//     </Canvas>
//   );
// };

// // Image Shaders
// source	ReturnType<typeof require>	Source of the image
// tx?	TileMode	Can be clamp, repeat, mirror, or decal.
// ty?	TileMode	Can be clamp, repeat, mirror, or decal.
// fm?	FilterMode	Can be linear or nearest.
// mm?	MipmapMode	Can be none, linear or nearest.
// fit?	Fit	Calculate the transformation matrix to fit the rectangle defined by fitRect. See images.
// fitRect	IRect	The destination reactangle to calculate the transformation matrix via the fit property.
// transform?	Transforms2d	see transformations.

// export const ShaderDemo = () => {
//   return (
//     <Canvas style={{ flex: 1 }}>
//       <Paint>
//         <ImageShader
//           source={require("../assets/oslo.jpg")}
//           fit="cover"
//           fitRect={{ x: 0, y: 0, width: 256, height: 256 }}
//         />
//       </Paint>
//       <Circle cx={128} cy={128} r={128} />
//     </Canvas>
//   );
// };

// // Linear Gradient
// Returns a shader that generates a linear gradient between the two specified points.
// Name	Type	Description
// start	Point	Start position of the gradient.
// end	Point	End position of the gradient.
// colors	string[]	Colors to be distributed between start and end.
// positions?	number[]	The relative positions of colors. If supplied must be same length as colors.
// mode?	TileMode	Can be clamp, repeat, mirror, or decal.
// flags?	number	By default gradients will interpolate their colors in unpremul space and then premultiply each of the results. By setting this to 1, the gradients will premultiply their colors first, and then interpolate between them.
// transform?	Transforms2d	see transformations.
// export const ShaderDemo = () => {
//   return (
//     <Canvas style={{ flex: 1 }}>
//       <Paint>
//         <LinearGradient
//           start={vec(0, 0)}
//           end={vec(256, 256)}
//           colors={["blue", "yellow"]}
//         />
//       </Paint>
//       <Rect x={0} y={0} width={256} height={256} />
//     </Canvas>
//   );
// };

// Radial Gradient
// Returns a shader that generates a radial gradient given the center and radius.

// Name	Type	Description
// c	Point	Center of the gradient.
// r	number	Radius of the gradient.
// colors	string[]	Colors to be distributed between start and end.
// positions?	number[]	The relative positions of colors. If supplied must be same length as colors.
// mode?	TileMode	Can be clamp, repeat, mirror, or decal.
// flags?	number	By default gradients will interpolate their colors in unpremul space and then premultiply each of the results. By setting this to 1, the gradients will premultiply their colors first, and then interpolate between them.
// transform?	Transforms2d	see transformations.

// export const ShaderDemo = () => {
//   return (
//     <Canvas style={{ flex: 1 }}>
//       <Paint>
//         <RadialGradient
//           c={vec(128, 128)}
//           r={128}
//           colors={["blue", "yellow"]}
//         />
//       </Paint>
//       <Rect x={0} y={0} width={256} height={256} />
//     </Canvas>
//   );
// };

// Two Point Conical Gradient
// Returns a shader that generates a conical gradient given two circles.

// Name	Type	Description
// start	Point	Center of the start circle.
// startR	number	Radius of the start circle.
// end	number	Center of the end circle.
// endR	number	Radius of the end circle.
// colors	string[]	Colors to be distributed between start and end.
// positions?	number[]	The relative positions of colors. If supplied must be same length as colors.
// mode?	TileMode	Can be clamp, repeat, mirror, or decal.
// flags?	number	By default gradients will interpolate their colors in unpremul space and then premultiply each of the results. By setting this to 1, the gradients will premultiply their colors first, and then interpolate between them.
// transform?	Transforms2d	see transformations.
// export const ShaderDemo = () => {
//   return (
//     <Canvas style={{flex: 1}}>
//       <Paint>
//         <TwoPointConicalGradient
//           start={vec(128, 128)}
//           startR={128}
//           end={vec(128, 16)}
//           endR={16}
//           colors={['blue', 'yellow']}
//         />
//       </Paint>
//       <Rect x={0} y={0} width={256} height={256} />
//     </Canvas>
//   );
// };


// Sweep Gradient
// Returns a shader that generates a sweep gradient given a center.

// Name	Type	Description
// c	Point	Center of the gradient
// start?	number	Start angle in degrees (default is 0).
// end?	number	End angle in degrees (default is 360).
// positions?	number[]	The relative positions of colors. If supplied must be same length as colors.
// mode?	TileMode	Can be clamp, repeat, mirror, or decal.
// flags?	number	By default gradients will interpolate their colors in unpremul space and then premultiply each of the results. By setting this to 1, the gradients will premultiply their colors first, and then interpolate between them.
// transform?	Transforms2d	see transformations.
// export const ShaderDemo = () => {
//   return (
//     <Canvas style={{ flex: 1 }}>
//       <Paint>
//         <SweepGradient
//           c={vec(128, 128)}
//           colors={["cyan", "magenta", "yellow", "cyan"]}
//         />
//       </Paint>
//       <Rect x={0} y={0} width={256} height={256} />
//     </Canvas>
//   );
// };

// Fractal Perlin Noise Shader
// Name	Type	Description
// freqX	number	base frequency in the X direction; range [0.0, 1.0]
// freqY	number	base frequency in the Y direction; range [0.0, 1.0]
// octaves	number	
// seed	number	
// tileWidth?	number	if this and tileHeight are non-zero, the frequencies will be modified so that the noise will be tileable for the given size.
// tileHeigth?	number	if this and tileWidth are non-zero, the frequencies will be modified so that the noise will be tileable for the given size.

// export const ShaderDemo = () => {
//   return (
//     <Canvas style={{ flex: 1 }}>
//       <Paint>
//         <FractalNoise freqX={0.05} freqY={0.05} octaves={4} seed={2}/>
//       </Paint>
//       <Fill color="white" />
//       <Rect x={0} y={0} width={256} height={256} />
//     </Canvas>
//   );
// };

// Turbulence Perlin Noise Shader
// freqX	number	base frequency in the X direction; range [0.0, 1.0]
// freqY	number	base frequency in the Y direction; range [0.0, 1.0]
// octaves	number	
// seed	number	
// tileWidth?	number	if this and tileHeight are non-zero, the frequencies will be modified so that the noise will be tileable for the given size.
// tileHeigth?	number	if this and tileWidth are non-zero, the frequencies will be modified so that the noise will be tileable for the given size.

// export const ShaderDemo = () => {
//   return (
//     <Canvas style={{ flex: 1 }}>
//       <Paint>
//         <Turbulence freqX={0.05} freqY={0.05} octaves={4} />
//       </Paint>
//       <Fill color="white" />
//       <Rect x={0} y={0} width={256} height={256} />
//     </Canvas>
//   );
// };


// Blend Shader
// Returns a shader that combines the given shaders with a BlendMode.
// Name	Type	Description
// mode	BlendMode	see blend modes.
// children	ReactNode	Shaders to blend
// export const ShaderDemo = () => {
//   return (
//     <Canvas style={{ flex: 1 }}>
//       <Paint>
//         <BlendShader mode="difference">
//           <RadialGradient
//             r={128}
//             c={vec(128, 128)}
//             colors={["blue", "yellow"]}
//           />
//           <Turbulence freqX={0.05} freqY={0.05} octaves={4} />
//         </BlendShader>
//       </Paint>
//       <Rect x={0} y={0} width={256} height={256} />
//     </Canvas>
//   );
// };

// Color Shader
// Returns a shader with a given color.
// color	string	Color
export const ShaderDemo = () => {
  return (
    <Canvas style={{ flex: 1 }}>
      <Paint>
        <ColorShader color="blue" />
      </Paint>
      <Rect x={0} y={0} width={256} height={256} />
    </Canvas>
  );
};
