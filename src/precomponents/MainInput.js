import React from 'react';
import { TextInput, View } from 'react-native';

const MainInput = props => {
  return (
    <View>
      <TextInput
        placeholer={props.placeholder}
        placeholderTextColor="#222222"
        secureTextEntry={props.secureTextEntry}
        autoCapitalize={props.autoCapitalize}
        autoComplete={props.autoComplete}
        autoCorrect={props.autoCorrect}
        autoFocus={props.autoFocus}
        defaultValue={props.defaultValue}
      />
    </View>
  );
};

export { MainInput };
