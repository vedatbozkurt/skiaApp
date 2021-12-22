import React from 'react';
import {StyleSheet, Dimensions, ScrollView, PixelRatio} from 'react-native';
import {
  Skia,
  PaintStyle,
  Canvas,
  Rect,
  DRect,
  Group,
  Oval,
  Line,
  Points,
  Patch,
  vec,
  rect,
  rrect,
  Paint,
  DashPathEffect,
} from '@shopify/react-native-skia';

import {Title} from './components/Title';

const {width} = Dimensions.get('window');
const SIZE = width / 4;
const paint = Skia.Paint();
paint.setAntiAlias(true);
paint.setColor(Skia.Color('#61DAFB'));

const strokePaint = paint.copy();
strokePaint.setStyle(PaintStyle.Stroke);
strokePaint.setStrokeWidth(2);

const c = {x: width / 2, y: SIZE / 2 + 16};
const S = 25;
const c1 = [
  vec(c.x - 2 * S, c.y - S),
  vec(c.x - S, c.y - 2 * S),
  vec(c.x - S, c.y - S),
];

const c2 = [vec(c.x, c.y - 2 * S), vec(c.x + S, c.y), vec(c.x + S, c.y - S)];

const c3 = [vec(c.x - 10, c.y + 10), vec(c.x + S, c.y), vec(c.x + S, c.y + S)];

const c4 = [
  vec(c.x - 2 * S, c.y + S),
  vec(c.x - S, c.y + 2 * S),
  vec(c.x - S, c.y + S),
];

const cubics = [...c1, ...c2, ...c3, ...c4];

const PADDING = 16;
const outer = rrect(rect(2 * SIZE + 3 * 16, PADDING, SIZE, SIZE), 25, 25);
const inner = rrect(
  rect(2 * SIZE + 4 * PADDING, 2 * PADDING, SIZE - 32, SIZE - 32),
  0,
  0,
);

const outer2 = rrect(rect(0, 0, 128, 128), 12, 12);
const inner2 = rrect(rect(25, 25, 128 - 50, 128 - 50), 50, 50);

const points = [
  vec(128, 0),
  vec(168, 80),
  vec(256, 93),
  vec(192, 155),
  vec(207, 244),
  vec(128, 202),
  vec(49, 244),
  vec(64, 155),
  vec(0, 93),
  vec(88, 80),
  vec(128, 0),
];

export const Shapes = () => {
  return (
    <ScrollView>
      <Title>Rectangles</Title>
      <Canvas style={styles.container}>
        <Group color="#61DAFB">
          <Rect rect={{x: PADDING, y: PADDING, width: 100, height: 100}} />
          <Rect
            x={SIZE + 2 * PADDING}
            y={PADDING}
            width={SIZE}
            height={SIZE}
            rx={25}
          />
          <DRect outer={outer} inner={inner} color="red" />
        </Group>
      </Canvas>
      <Canvas style={styles.container}>
        <DRect inner={inner2} outer={outer2} color="lightblue" />
      </Canvas>
      <Title>Ovals & Circles</Title>
      <Canvas style={styles.container}>
        <Group color="#61DAFB">
          <Oval x={PADDING} y={PADDING} width={2 * SIZE} height={SIZE}>
            <Paint
              style="stroke"
              color="#61fbcf"
              strokeWidth={10}
              opacity={0.5}>
              <DashPathEffect intervals={[10, 10]} />
            </Paint>
          </Oval>
          <Oval
            rect={rect(2 * SIZE + 2 * 16 + SIZE / 2, PADDING, SIZE, SIZE)}
          />
        </Group>
      </Canvas>
      <Title>Points & Lines</Title>
      <Canvas style={styles.container}>
        <Group color="#61DAFB" style="stroke" strokeWidth={PixelRatio.get()}>
          <Points mode="polygon" points={cubics} />
          <Line p1={c} p2={vec(SIZE, 0)} />
          <Points mode="points" points={cubics} color="red" />
        </Group>
      </Canvas>
      <Canvas style={styles.container}>
      <Points
        points={points}
        mode="polygon"
        color="lightblue"
        style="stroke"
        strokeWidth={4}
      />
      </Canvas>
      <Canvas style={styles.container}>
        <Line
          p1={vec(0, 0)}
          p2={vec(256, 256)}
          color="lightblue"
          style="stroke"
          strokeWidth={15}
        />
      </Canvas>
      <Title>Coon Patch</Title>
      <Canvas style={styles.container}>
        <Patch
          colors={['#61DAFB', '#fb61da', '#61fbcf', '#dafb61']}
          cubics={cubics}
        />
      </Canvas>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: SIZE + 32,
  },
});
