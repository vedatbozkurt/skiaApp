/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-12-21 22:58:06
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-12-21 22:58:06
 */
import React from "react";
import { StyleSheet, View } from "react-native";

import { HomeScreenButton } from "./HomeScreenButton";

export const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <HomeScreenButton title="API" description="API examples" route="API" />
      <HomeScreenButton
        title="🧘 Breathe"
        description="Simple declarative example"
        route="Breathe"
      />
      <HomeScreenButton
        title="🏞 Filters"
        description="Simple Image Filters"
        route="Filters"
      />
      <HomeScreenButton
        title="🟣 Gooey Effect"
        description="Simple Gooey effect"
        route="Gooey"
      />
      <HomeScreenButton
        title="💡 Hue"
        description="Hue Color Selection"
        route="Hue"
      />
      <HomeScreenButton
        title="Drawing"
        description="Use touches to draw with Skia"
        route="Drawing"
      />
      <HomeScreenButton
        title="Animation"
        description="Animated with Skia"
        route="Animation"
      />
      <HomeScreenButton
        title="Samples"
        description="Doc Samples"
        route="Samples"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
