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
  gsharpkey: {
    backgroundColor: 'black',
    height:135,
    width: 35,
    flexDirection: 'row',
    marginLeft: 250,
    zIndex: 2,
    marginTop: -300
  }
});

function GSharpKey(props){
  return(

    <TouchableOpacity onPress={()=>props()}>
      <Image
        style={styles.gsharpkey}
      />
    </TouchableOpacity>

    )
}

export default GSharpKey;
