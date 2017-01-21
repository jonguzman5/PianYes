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

import {getBFlatAudio} from './audiofunctions/getBFlatAudio'

const styles = StyleSheet.create({
  bflatkey: {
    backgroundColor: 'black',
    height:135,
    width: 35,
    flexDirection: 'row',
    marginLeft: 305,
    zIndex: 2,
    marginTop: -300
  }
});

function BFlatKey(props){
  return(

    <TouchableOpacity onPress={()=>getBFlatAudio()}>
      <Image
        style={styles.bflatkey}
      />
    </TouchableOpacity>

    )
}

export default BFlatKey;
