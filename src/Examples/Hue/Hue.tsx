/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-12-21 16:25:28
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-12-21 16:25:28
 */
import React from "react";
import {
  Canvas,
  Circle,
  vec,
  Fill,
  Paint,
  Skia,
  ShaderLib,
  useValue,
  useTouchHandler,
  BlurMask,
} from "@shopify/react-native-skia";
import { Dimensions } from "react-native";

// import { Shader } from "../../../../package/src/renderer/components/shaders/Shader";

const { width, height } = Dimensions.get("window");
const c = vec(width / 2, height / 2);

const source = Skia.RuntimeEffect.Make(`
uniform float cx;
uniform float cy;
uniform float r;

${ShaderLib.Math}
${ShaderLib.Colors}

float quadraticIn(float t) {
  return t * t;
}

half4 main(vec2 uv) { 
  float2 c = vec2(cx, cy);
  float mag = distance(uv, c);
  float theta = normalizeRad(canvas2Polar(uv, c).x);
  return hsv2rgb(vec3(theta/TAU, quadraticIn(mag/r), 1.0));
}`)!;

export const Hue = () => {
  const r = (width - 32) / 2;
  const translateX = useValue(c.x);
  const translateY = useValue(c.y);
  const onTouch = useTouchHandler({
    onActive: ({ x, y }) => {
      translateX.value = x;
      translateY.value = y;
    },
  });
  return (
    <Canvas style={{ flex: 1 }} onTouch={onTouch}>
      <Fill color="#1f1f1f" />
      <Paint>
        <BlurMask sigma={40} style="solid" />
        {/* <Shader source={source} uniforms={[c.x, c.y, r]} /> */}
      </Paint>
      <Circle c={c} r={r} />
      <Circle
        r={20}
        color="red"
        cx={() => translateX.value}
        cy={() => translateY.value}
      />
    </Canvas>
  );
};
