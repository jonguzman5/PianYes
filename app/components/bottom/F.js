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

    <TouchableOpacity onPress={()=>props()}>
      <Image
        style={styles.fkey}
      />
    </TouchableOpacity>

    )
}

export default FKey;
