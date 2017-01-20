import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  AlertIOS,
} from 'react-native';

import {getCAudio} from './getCAudio'
import cAudio from '../../audio/c.wav'

const styles = StyleSheet.create({
  ckey: {
    backgroundColor: '#ECECEC',
    height:300,
    width: 53.57,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  }
});

function CKey(props){
  return(
    <TouchableOpacity onPress={props.cAudio}>
      <Image
        style={styles.ckey}
      />
    </TouchableOpacity>
    )
}

export default CKey;
