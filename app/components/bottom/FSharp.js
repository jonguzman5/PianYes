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

import {getFSharpAudio} from './audiofunctions/getFSharpAudio'

const styles = StyleSheet.create({
  fsharpkey: {
    backgroundColor: 'black',
    height:135,
    width: 35,
    flexDirection: 'row',
    marginLeft: 195,
    zIndex: 2,
    marginTop: -300
  }
});

function FSharpKey(props){
  return(

    <TouchableOpacity onPress={()=>getFSharpAudio()}>
      <Image
        style={styles.fsharpkey}
      />
    </TouchableOpacity>

    )
}

export default FSharpKey;
