import React, { Component } from 'react';
import { View } from 'react-native';
import { MainInput } from '../precomponents';

class LoginForm extends Component {
  render() {
    return (
      <View>
        <MainInput
          placeholder="Enter an email address"
          secureTextEntry={false}
        />
      </View>
    );
  }
}

export default LoginForm;
