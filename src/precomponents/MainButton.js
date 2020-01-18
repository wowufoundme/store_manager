import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as THEME from '../assets/theme';

const MainButton = props => {
  return (
    <View style={styles.rect}>
      <Text style={styles.login}>{props.buttonText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rect: {
    marginTop: 20,
    width: '90%',
    height: 50,
    backgroundColor: THEME.PRIMARY_COLOR_DARK,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    color: THEME.WHITE,
    fontFamily: 'Lato-Regular',
  },
});

export { MainButton };
