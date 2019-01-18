import React from 'react';
import { createAppContainer, createSwitchNavigator,createDrawerNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import MapScreen from '../screens/MapScreen';
import VideoScreen from '../screens/VideoScreen';
import CameraScreen from '../screens/CameraScreen';
import TestScreen from '../screens/TestScreen';
import KeyboardScreen from '../screens/KeyboardScreen';
//import styles from '../assets/styles';

export default createAppContainer(createDrawerNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: {
      screen: MainTabNavigator
  },
  Map: {
      screen: MapScreen
  },
  Video: {
      screen: VideoScreen
  },
  Camera: {
      screen: CameraScreen
  },
  TestScreen: {
      screen: TestScreen
  },
  KeyboardScreen: {
      screen: KeyboardScreen
  },
}));