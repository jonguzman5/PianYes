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
  gkey: {
    backgroundColor: '#ECECEC',
    height:300,
    width: 53.57,
    flexDirection: 'row',
    marginLeft: 214.28,
    marginTop: -300
  }
});

function GKey(props){
  return(

    <TouchableOpacity onPress={()=>props()}>
      <Image
        style={styles.gkey}
      />
    </TouchableOpacity>

    )
}

export default GKey;
