// this component is used to display loading indicator
import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import { Colors } from '../Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    height: '100%',
    width: '100%',
    opacity: 0.8,
    backgroundColor: Colors.color_FFFFFF,
  },
  textStyle: {
    fontSize: 16,
    color: Colors.color_8A8A8A,
  },
});

const Loading = () => (
  <View style={ styles.container }>
    <ActivityIndicator
      size="large"
      color={Colors.color_8A8A8A}
    />
    <Text style={ styles.textStyle }>Loading</Text>
  </View>
);

export default (Loading);
