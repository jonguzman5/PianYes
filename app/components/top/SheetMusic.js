import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

class SheetMusic extends Component{
  render(){
    return(
      <Image
        style={styles.sheetMusic}
        source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/01/ef/06/01ef061a1c17d9db0861420380e206c9.jpg'}}
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
