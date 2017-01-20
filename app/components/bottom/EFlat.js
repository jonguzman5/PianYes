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
  eflatkey: {
    backgroundColor: 'black',
    height:135,
    width: 35,
    flexDirection: 'row',
    marginLeft: 90,
    zIndex: 2,
    marginTop: -300
  }
});

function EFlatKey(props){
  return(

    <TouchableOpacity onPress={()=>props()}>
      <Image
        style={styles.eflatkey}
      />
    </TouchableOpacity>

    )
}

export default EFlatKey;
