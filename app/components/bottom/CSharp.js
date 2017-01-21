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

import {getCSharpAudio} from './audiofunctions/getCSharpAudio'

const styles = StyleSheet.create({
  csharpkey: {
    backgroundColor: 'black',
    height:135,
    width: 35,
    flexDirection: 'row',
    marginLeft: 35,
    zIndex: 2,
    marginTop: -300
  }
});

function CSharpKey(props){
  return(

    <TouchableOpacity onPress={()=>getCSharpAudio()}>
      <Image
        style={styles.csharpkey}
      />
    </TouchableOpacity>

    )
}

export default CSharpKey;
