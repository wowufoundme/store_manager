import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MainButton = props => {
  return (
    <View style={styles.rect}>
      <Text style={styles.login}>{props.buttonText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rect: {
    width: '75%',
    height: 50,
    backgroundColor: 'rgba(24, 1, 159, 1)',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    color: 'rgba(255,255,255,1)',
    fontFamily: 'Lato-Regular',
  },
});

export { MainButton };
