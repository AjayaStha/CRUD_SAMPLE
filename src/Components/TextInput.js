import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = {
  container: {
    width: '100%',
    marginBottom: 16,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ECECEC',
    paddingLeft: 8
  },
  textInputStyle: {
    // backgroundColor: Colors.color_FFFFFF,
    paddingLeft: 16,
    // borderRadius: 5,
    // borderWidth: 1,
    // borderColor: '#ECECEC',
  },
  textStyle: {
    fontSize:12,
    color: '#d70809',
  },
  iconStyle:{
    alignItems:'center',
    justifyContent:'center',
    width:38,
    height:40
  },
};

const TextInputComponent = ({
  text='placeholder', value, onChangeText, customHeight=40, customWidth=328, keyboardType, error=null, icon=false, showEyeIcon=false, onPressEye, showPassword,
}) => (
  <View style={[styles.container,{height:customHeight, width: customWidth}]}>
    {icon &&
      <Ionicons name={icon} size={32} color="grey" />
    }
    <TextInput
      style={[styles.textInputStyle, { height:customHeight, width: 250 }]}
      value={value}
      onChangeText={onChangeText}
      placeholder={text}
      multiline={true}
      textAlignVertical={'top'}
      keyboardType={keyboardType}
      secureTextEntry={showPassword}
    />
    {showEyeIcon &&
      <TouchableOpacity  style={styles.iconStyle} onPress={onPressEye}>
      {showPassword === false ?
        <Ionicons name="md-eye" size={32} color="grey" />
         : <Ionicons name="md-eye-off" size={32} color="grey" />} 
      </TouchableOpacity>
      }
    
    {/* <Text style={styles.textStyle}>{error}</Text> */}
  </View>
);


export default TextInputComponent;