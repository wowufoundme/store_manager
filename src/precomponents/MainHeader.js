import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const MainHeader = props => {
  return (
    <View style={styles.viewStyle}>
      <Header
        placement="left"
        centerComponent={
          <View>
            <Text style={styles.headerTextStyle}>{props.headerText}</Text>
          </View>
        }
        containerStyle={styles.containerStyle}
        centerContainerStyle={styles.centerContainerStyle}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ['#3700B3', '#6200EE'],
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
    color: '#ffffff',
    fontFamily: 'Lato-Bold',
    fontSize: 20,
  },
  viewStyle: {
    flex: 1,
  },
});

export { MainHeader };
