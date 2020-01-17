import React, { Component } from 'react';
import { View } from 'react-native';
import { MainInput } from '../precomponents';

class LoginForm extends Component {
  render() {
    return (
      <View>
        <View>
          <MainInput
            placeholder="Email"
            label="Email"
            secureTextEntry={true}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            autoFocus={false}
          />
        </View>
      </View>
    );
  }
}

export default LoginForm;
