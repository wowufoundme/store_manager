import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { MainInput, MainButton } from '../precomponents';

class LoginForm extends Component {
  state = { email: '', password: '' };

  render() {
    return (
      <View style={styles.loginFormContainer}>
        <MainInput
          placeholder="Email"
          secureTextEntry={false}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          iconName="email"
          autoCapitalize="none"
        />
        <MainInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          iconName="lock"
        />
        <MainButton buttonText="Log in" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginFormContainer: {
    alignItems: 'center',
  },
});

export default LoginForm;
