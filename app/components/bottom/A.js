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

    <TouchableOpacity onPress={()=>props()}>
      <Image
        style={styles.akey}
      />
    </TouchableOpacity>

    )
}

export default AKey;
