import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const MainButton = props => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="Outline button" type="outline">
        <Text style={styles.buttonText}>{props.buttonTitle} Wohoooooo</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 100,
  },
  buttonStyle: {},
  buttonText: {
    color: '#222',
  },
});

export { MainButton };
