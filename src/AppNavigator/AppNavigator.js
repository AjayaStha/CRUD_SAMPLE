import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { connect } from "react-redux";

import { Loading } from '../Components';
import MainNavigator from './MainNavigator';
import { HomeScreen } from '../Screens';

class AppNavigator extends Component {
  render() {
    const { token } = this.props;
    if(token) {
      return (
        <View style={{flex:1}}>
          <HomeScreen/>
        </View>
      )
    }
    else{ 
      return (
        <View style={{flex:1}}>
          <MainNavigator/>
        </View>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  token: state.login.loginToken
})

export default connect(mapStateToProps)(AppNavigator);