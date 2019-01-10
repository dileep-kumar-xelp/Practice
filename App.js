/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import HomePage from "./src/components/HomePage";
const stack = createStackNavigator({
  HomePage: { screen: HomePage }
});
const Drawer = createDrawerNavigator({
  HomePage: { screen: HomePage }
});

export default createAppContainer(stack);
