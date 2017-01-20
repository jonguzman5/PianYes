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
  bkey: {
    backgroundColor: '#ECECEC',
    height:300,
    width: 53.57,
    flexDirection: 'row',
    marginLeft: 321.42,
    marginTop: -300
  }
});

function BKey(props){
  return(

    <TouchableOpacity onPress={()=>props()}>
      <Image
        style={styles.bkey}
      />
    </TouchableOpacity>

    )
}

export default BKey;
