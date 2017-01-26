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

import {getCAudio} from './audiofunctions/getCAudio'
import {getImage} from './imagefunctions/getImage'

const styles = StyleSheet.create({
  ckey: {
    backgroundColor: '#ECECEC',
    height:300,
    width: 53.57,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  }
});

function inizio(props){
  return(
  ()=>props.changeNote,
  getCAudio
  )
}

function CKey(props){
  return(
    <View>
    <TouchableOpacity onPress={inizio()}>
      <Image
        style={styles.ckey}
      />
      </TouchableOpacity>
      </View>
    )
}

export default CKey;
