import React, { Component } from 'react';
import { View } from 'react-native';
import { MainInput } from '../precomponents';

class LoginForm extends Component {
  state = { email: '', password: '' };

  render() {
    return (
      <View>
        <MainInput
          label="Email"
          placeholder="user@gmail.com"
          secureTextEntry={false}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <MainInput
          label="Password"
          placeholder="***********"
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
      </View>
    );
  }
}

export default LoginForm;
