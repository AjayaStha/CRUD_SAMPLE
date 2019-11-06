import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ButtonComponent = ({ onPress, text='Enter', width=120 }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container,{width:width}]}
  >
    <Text style={styles.textStyle}>{text}</Text>
  </TouchableOpacity>
);

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    // width: 120,
    backgroundColor: '#80BB01',
    borderRadius: 5,
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
};
export default (ButtonComponent);
