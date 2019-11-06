import React, { Component } from 'react'
import { Image, Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { Avatar } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux';

import { ButtonComponent, TextInputComponent } from '../../Components';
import { Colors } from '../../Constants';
import {  updateName, updatePhone, updateEmail, updateImage, clearData } from './Action';

class HomeScreen extends Component {
  // state = {
  //   nameText: '',
  //   phoneText: '',
  //   emailText: '',
  //   photoData: null,
  // }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    
    ImagePicker.launchImageLibrary(options, response => {
      // console.warn('responese', response)
      if(response.uri) {
        const source = "file:///" + response.path
        this.props.updateImage(source)
      }
    })
  }

  onPressSave = () => {   
    this.props.clearData()
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          
          {this.props.photo !== null ? 
            <Avatar
              size="xlarge"
              rounded
              showEditButton
              onPress={this.handleChoosePhoto}
              activeOpacity={0.7}
              containerStyle={{marginBottom:16,marginTop:16}}
              source={{
                uri:this.props.photo,
                cache: 'reload',
              }}
            />
            :
            <Avatar
              size="xlarge"
              rounded
              icon={{name: 'user', type: 'font-awesome'}}
              showEditButton
              onPress={this.handleChoosePhoto}
              activeOpacity={0.7}
              containerStyle={{marginBottom:16,marginTop:16}}
            />
            
          
        }
          <TextInputComponent text='name' value={this.props.name} onChangeText={this.props.updateName} icon='md-person'/>
           
          <TextInputComponent text='phone' value={this.props.phone} onChangeText={this.props.updatePhone} keyboardType='numeric' icon='md-call'/>
          <TextInputComponent text='email' value={this.props.email} onChangeText={this.props.updateEmail} icon='md-mail'/>
          
          <View style={{marginTop:24}}>
            <Text style={styles.textStyle}>Note: Data is saved automatically.</Text>
            <ButtonComponent onPress={this.onPressSave} text='Clear All Data' width={200} />
          </View>

        </View>
      </TouchableWithoutFeedback>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 10,
  },
  viewStyle: {
    height: 1,
    width: '100%',
    marginLeft: 16,
    backgroundColor: Colors.color_c9ccc9
  },
  textStyle: {
    fontSize:14,
    fontWeight:'bold',
    color: Colors.color_80BB01,
    marginBottom: 16
  }
})

const mapStateToProps = state => ({
  profile: state.profile.profileData,
  name: state.profile.name,
  phone: state.profile.phone,
  email: state.profile.email,
  photo: state.profile.photo,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateName: (text) => dispatch(updateName(text)),
    updatePhone: (text) => dispatch(updatePhone(text)),
    updateEmail: (text) => dispatch(updateEmail(text)),
    updateImage: (data) => dispatch(updateImage(data)),
    clearData: () => dispatch(clearData())
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);