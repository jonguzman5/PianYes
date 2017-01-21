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
import {getDImage} from './imagefunctions/getDImage'

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
    <TouchableOpacity onPress={()=>{getCAudio();getDImage();}}>
      <Image
        style={styles.ckey}
      />
    </TouchableOpacity>
    )
}

export default CKey;
