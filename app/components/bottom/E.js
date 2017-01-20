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
  ekey: {
    backgroundColor: '#ECECEC',
    height:300,
    width: 53.57,
    flexDirection: 'row',
    marginLeft: 107.14,
    marginTop: -300
  }
});

function EKey(props){
  return(

    <TouchableOpacity onPress={()=>props()}>
      <Image
        style={styles.ekey}
      />
    </TouchableOpacity>

    )
}

export default EKey;
