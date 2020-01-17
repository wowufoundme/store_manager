import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const MainHeader = props => {
  return (
    <View style={styles.viewStyle}>
      <Header
        placement="left"
        leftComponent={{
          icon: 'menu',
          color: '#1a237e',
          size: 20,
        }}
        centerComponent={
          <View>
            <Text style={styles.headerTextStyle}>{props.headerText}</Text>
          </View>
        }
        rightComponent={{ icon: 'home', color: '#1a237e', size: 20 }}
        containerStyle={styles.containerStyle}
        centerContainerStyle={styles.centerContainerStyle}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ['#ffffff', '#ffffff'],
          start: { x: 0.5, y: 0 },
          end: { x: 0.5, y: 1 },
        }}
        barStyle="light-content"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    position: 'relative',
  },
  headerTextStyle: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
  },
  viewStyle: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
});

export { MainHeader };
