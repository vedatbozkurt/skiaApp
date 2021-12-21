/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-12-21 22:55:56
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-12-21 23:16:53
 */
import React from "react";
import { StyleSheet, View } from "react-native";

import { HomeScreenButton } from "../Home/HomeScreenButton";

export const SamplesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <HomeScreenButton title="HelloWorld" description="HelloWorld sample" route="HelloWorld" />
      <HomeScreenButton title="PaintDemo" description="PaintDemo sample" route="PaintDemo" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
