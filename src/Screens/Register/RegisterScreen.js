import React, { Component } from 'react'
import { TextInput, Text, StyleSheet, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from "react-redux";

import { Loading, TextInputComponent, ButtonComponent }  from '../../Components';
import { attemptToRegister } from './Action';
import { Colors } from '../../Constants';

class RegisterScreen extends Component {
  state = {
    emailText: '',
    passwordText: '',
    hideText: true,
    errorMessage: false,
  }

  showPassword(){
    this.setState({
      hideText: !this.state.hideText,
    });
  }

  onPressRegister() {
    if(this.state.emailText.length <1 || this.state.passwordText.length <1){
      this.setState({errorMessage: true})
    }
    else {
      this.setState({errorMessage: false})
      const email = this.state.emailText;
      const password = this.state.passwordText;
      this.props.register(email,password)
      if(this.props.registerToken){
        this.props.navigation.navigate('Login')
      }
    }
  }
  
  render() {
    const { registerLoading,registerError } = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
        <TextInputComponent text='email' value={this.state.emailText} hideText={this.state.hideText} onChangeText={(text) => this.setState({emailText: text})} />
        <View style={styles.textInputWrapper}>
          <TextInput
              style={styles.textInputStyle}
              value={this.state.passwordText}
              onChangeText={(text) => this.setState({ passwordText: text })}
              placeholder="Password"
              secureTextEntry={this.state.hideText}
          />
          <TouchableOpacity  style={styles.iconStyle} onPress={() => this.showPassword()}>
            {this.state.hideText === false
              ? <Ionicons name="md-eye" size={32} color="grey" />
              : <Ionicons name="md-eye-off" size={32} color="grey" />}
          </TouchableOpacity>
        </View>
        {this.state.errorMessage && 
          <Text style={styles.errorTextStyle}>Field should not be empty</Text>
        }
        <ButtonComponent text='Register' onPress={() => this.onPressRegister()}/>
        {registerLoading && <Loading/>}
        {registerError && <Text style={styles.errorTextStyle}>There seems to be an error. Please try again.</Text>} 
      </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  registerText: {
    marginTop:16,
    padding:10
  },
  textInputWrapper: {
    flexDirection: 'row',
    borderWidth:1,
    borderRadius: 5,
    borderColor: '#ECECEC',
    alignItems: 'center',
    height: 40,
    width:328,
    marginBottom: 16,
  },
  textInputStyle: {
    height: 40,
    width: 290,
    paddingLeft: 8,
  },
  iconStyle:{
    alignItems:'center',
    justifyContent:'center',
    width:38
  },
  errorTextStyle: {
    color: Colors.color_e41322,
    fontSize:12,
  }

})

const mapStateToProps = state => ({
  registerToken: state.register.registerToken,
  registerLoading: state.register.registerLoading,
  registerError: state.register.registerError,
});

const mapDispatchToProps = (dispatch) => {
  return {
    register: (id,id1) => dispatch(attemptToRegister(id,id1))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreen);