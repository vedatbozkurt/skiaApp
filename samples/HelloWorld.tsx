import React, { useEffect, useState } from 'react';
import {Canvas, Circle, Paint, Group} from "@shopify/react-native-skia";

const PaintDemo = () => {
  const r = 90;
  return (
    <Canvas style={{ flex: 1 }}>
      <Paint color="lightblue" />
      <Circle cx={r} cy={r} r={r} />
      {/* The paint is inherited by the following sibling and descendants. */}
      <Group style="stroke" strokeWidth={10}>
        <Circle cx={3 * r} cy={3 * r} r={r} />
      </Group>
    </Canvas>
  );
};

export default PaintDemo;