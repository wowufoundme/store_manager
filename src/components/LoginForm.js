import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
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
        <Button
          title="Log in"
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          loading={false}
          onPress={this.onButtonPress.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser },
)(LoginForm);
