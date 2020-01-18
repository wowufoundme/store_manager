import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const MainInput = props => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.labelText}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        style={styles.inputText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 0,
    paddingHorizontal: 15,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  labelText: {
    flex: 1,
    fontFamily: 'Lato-Regular',
  },
  inputText: {
    flex: 3,
    fontFamily: 'Lato-Regular',
  },
});

export { MainInput };
