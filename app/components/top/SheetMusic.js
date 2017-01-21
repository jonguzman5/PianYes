import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

class SheetMusic extends Component{
  constructor(){
    super();
    this.state = {
      img: ''
    }
  }
  render(){
    return(
      <Image style={styles.sheetMusic}
      source={{uri: 'http://localhost:3000/cImage'}}
       />
      )
  }
}
const styles = StyleSheet.create({
  sheetMusic: {
    height: 230,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'white',
  }
})
export default SheetMusic;
