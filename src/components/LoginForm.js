import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { MainInput, MainButton } from '../precomponents';
import { emailChanged } from '../actions';

class LoginForm extends Component {
  state = { email: '', password: '' };

  onEmailChange(email) {
    this.props.emailChanged(email);
  }

  render() {
    return (
      <View style={styles.loginFormContainer}>
        <MainInput
          placeholder="Email"
          secureTextEntry={false}
          onChangeText={this.onEmailChange.bind(this)}
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

export default connect(
  null,
  { emailChanged },
)(LoginForm);
