import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const MainInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholer="Placeholder text"
        placeholderTextColor="red"
        value=""
        secureTextEntry={props.secureTextEntry}
        style={styles.inputText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    color: '#222222',
    height: 100,
    width: '100%',
    backgroundColor: '#222222',
    padding: 20,
  },
  inputText: {
    width: '100%',
    height: '100%',
    color: '#ededed',
    backgroundColor: '#13abbb',
  },
});

export { MainInput };
