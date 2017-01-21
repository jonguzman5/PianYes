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

import {getDAudio} from './audiofunctions/getDAudio'

const styles = StyleSheet.create({
  dkey: {
    backgroundColor: 'white',
    height:300,
    width: 53.57,
    flexDirection: 'row',
    marginLeft: 53.57,
    marginTop: -300
  }
});

function DKey(props){
  return(

    <TouchableOpacity onPress={getDAudio}>
      <Image
        style={styles.dkey}
      />
    </TouchableOpacity>

    )
}

export default DKey;
