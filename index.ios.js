/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import StatusBar from './app/components/top/StatusBar';
import TopContainer from './app/components/top/TopContainer';
import BottomContainer from './app/components/bottom/BottomContainer';

export default class PianYes extends Component {
  render() {
    return (
      <View>
      <TopContainer>
        <StatusBar/>
      </TopContainer>

      <BottomContainer>
      </BottomContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PianYes', () => PianYes);
