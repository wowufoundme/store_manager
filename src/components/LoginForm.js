import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { MainInput, MainButton } from '../precomponents';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
  state = { email: '', password: '' };

  onEmailChange(email) {
    this.props.emailChanged(email);
  }

  onPasswordChange(pw) {
    this.props.passwordChanged(pw);
  }

  render() {
    return (
      <View style={styles.loginFormContainer}>
        <MainInput
          value={this.props.email}
          placeholder="Email"
          secureTextEntry={false}
          onChangeText={this.onEmailChange.bind(this)}
          iconName="email"
          autoCapitalize="none"
        />
        <MainInput
          value={this.props.password}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={this.onPasswordChange.bind(this)}
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

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    pw: state.auth.password,
  };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged },
)(LoginForm);
