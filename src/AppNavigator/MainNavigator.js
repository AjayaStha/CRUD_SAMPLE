// import React, { Component } from 'react';
// import { View, Image, TouchableOpacity, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { LoginScreen, RegisterScreen, HomeScreen } from '../Screens';

const MainNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Register: { screen : RegisterScreen },
    Home: { screen: HomeScreen },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login'
  },
);

export default createAppContainer(MainNavigator);