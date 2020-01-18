import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { MainInput } from '../precomponents';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import * as THEME from '../assets/theme';

class LoginForm extends Component {
  state = { email: '', password: '' };

  onEmailChange(email) {
    this.props.emailChanged(email);
  }

  onPasswordChange(password) {
    this.props.passwordChanged(password);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{this.props.error}</Text>
        </View>
      );
    }
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
          autoCapitalize="none"
        />
        {this.renderError()}
        <Button
          title="Log in"
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          loading={this.props.loading}
          onPress={this.onButtonPress.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorContainer: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    marginVertical: 8,
    color: THEME.RED,
  },
  loginFormContainer: {
    paddingHorizontal: 20,
  },
  buttonStyle: {
    marginTop: 20,
    width: '100%',
    height: 50,
    backgroundColor: THEME.PRIMARY_COLOR_DARK,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: THEME.WHITE,
    fontSize: 14,
    fontFamily: 'Lato-Bold',
  },
});

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
  };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser },
)(LoginForm);
