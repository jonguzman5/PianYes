import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import {getAAudio} from './audiofunctions/getAAudio'

const styles = StyleSheet.create({
  akey: {
    backgroundColor: 'white',
    height:300,
    width: 53.57,
    flexDirection: 'row',
    marginLeft: 267.85,
    marginTop: -300
  }
});

function AKey(props){
  return(

    <TouchableOpacity onPress={()=>getAAudio()}>
      <Image
        style={styles.akey}
      />
    </TouchableOpacity>

    )
}

export default AKey;
