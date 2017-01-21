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

import {getFAudio} from './audiofunctions/getFAudio'

const styles = StyleSheet.create({
  fkey: {
    backgroundColor: 'white',
    height:300,
    width: 53.57,
    flexDirection: 'row',
    marginLeft: 160.71,
    marginTop: -300
  }
});

function FKey(props){
  return(

    <TouchableOpacity onPress={()=>getFAudio()}>
      <Image
        style={styles.fkey}
      />
    </TouchableOpacity>

    )
}

export default FKey;
