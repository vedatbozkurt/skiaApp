/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-12-21 22:57:12
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-12-22 21:29:13
 */
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AnimationExample, DrawingExample } from "./Examples";
import { API } from "./Examples/API";
import { Breathe } from "./Examples/Breathe";
import { Filters } from "./Examples/Filters";
import { Gooey } from "./Examples/Gooey";
import { Hue } from "./Examples/Hue";
import { HomeScreen } from "./Home";
import { SamplesScreen } from "./Samples/SamplesScreen";
import {HelloWorld} from "./Samples/HelloWorld";
import {PaintDemo} from "./Samples/PaintDemo";
import {GroupDemo} from "./Samples/Group";
import {ImageDemo} from "./Samples/ImageDemo";
import {ShaderDemo} from "./Samples/ShaderDemo";
import {EffectsDemo} from "./Samples/EffectsDemo";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "🎨 Skia",
          }}
        />

        <Stack.Screen name="API" component={API} />
        <Stack.Screen name="Breathe" component={Breathe} />
        <Stack.Screen name="Filters" component={Filters} />
        <Stack.Screen name="Gooey" component={Gooey} />
        <Stack.Screen name="Hue" component={Hue} />
        <Stack.Screen name="Drawing" component={DrawingExample} />
        <Stack.Screen name="Animation" component={AnimationExample} />
        <Stack.Screen name="Samples" component={SamplesScreen} />
        <Stack.Screen name="HelloWorld" component={HelloWorld} />
        <Stack.Screen name="PaintDemo" component={PaintDemo} />
        <Stack.Screen name="Group" component={GroupDemo} />
        <Stack.Screen name="ImageDemo" component={ImageDemo} />
        <Stack.Screen name="ShaderDemo" component={ShaderDemo} />
        <Stack.Screen name="EffectsDemo" component={EffectsDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
