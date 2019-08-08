import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Svg, G, Text as SVGText } from 'react-native-svg';
import * as Font from 'expo-font';

StyleSheet.setStyleAttributePreprocessor('fontFamily', Font.processFontFamily);

export default class App extends Component {
  state = { fontLoaded: false };
  async componentDidMount() {
    await Font.loadAsync({
      IBMPlexSansVar: require('./assets/fonts/IBMPlexSansVar.ttf'),
      'PublicSans-Thin_Regular': require('./assets/fonts/PublicSans-Thin_Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return this.state.fontLoaded ? (
      <View style={styles.container}>
        <Svg {...{
          fill: '#000',
          height: 200,
          width: '100%',
          viewBox: '-140 0 280 120',
        }}>
          <G fontSize={40} textAnchor="middle">
            <SVGText x={0} y={40} fontFamily="PublicSans-Thin_Regular">
              Hello, world!
            </SVGText>
            <SVGText x={0} y={80} fontFamily="IBMPlexSansVar">
              Hello, world!
            </SVGText>
            <SVGText x={0} y={120}>
              Hello, world!
            </SVGText>
          </G>
        </Svg>
        <Text style={[styles.text, { fontFamily: 'PublicSans-Thin_Regular' }]}>
          Hello, world!
        </Text>
        <Text style={[styles.text, { fontFamily: 'IBMPlexSansVar' }]}>
          Hello, world!
        </Text>
        <Text style={styles.text}>Hello, world!</Text>
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 56,
    color: '#000',
  }
});
