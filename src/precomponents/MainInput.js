import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import * as THEME from '../assets/theme';
import { Icon } from 'react-native-elements';

class MainInput extends Component<props> {
  constructor(props) {
    super(props);
    this.state = {
      inputVariableStyle: styles.unFocusedInput,
      iconVariableStyle: styles.iconUnFocused,
    };
  }

  onFocus() {
    this.setState({
      inputVariableStyle: styles.focusedInput,
      iconVariableStyle: styles.iconFocused,
    });
  }

  onBlur() {
    this.setState({
      inputVariableStyle: styles.unFocusedInput,
      iconVariableStyle: styles.iconUnFocused,
    });
  }

  render() {
    return (
      <View style={[styles.inputContainer, this.state.inputVariableStyle]}>
        <Icon
          name={this.props.iconName}
          iconStyle={[styles.iconStyle, this.state.iconVariableStyle]}
        />
        <TextInput
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          secureTextEntry={this.props.secureTextEntry}
          style={styles.inputText}
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()}
          autoCapitalize={this.props.autoCapitalize}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  unFocusedInput: {
    borderBottomColor: THEME.GREY,
  },
  focusedInput: {
    borderBottomColor: THEME.PRIMARY_COLOR_DARK,
  },
  iconStyle: {
    fontSize: 16,
    paddingBottom: 3,
    paddingRight: 10,
  },
  iconUnFocused: {
    color: THEME.GREY,
  },
  iconFocused: {
    color: THEME.PRIMARY_COLOR_DARK,
  },
  inputText: {
    fontSize: 14,
    flex: 1,
    color: THEME.PRIMARY_COLOR_DARK,
    fontFamily: 'Lato-Regular',
  },
});

export { MainInput };
