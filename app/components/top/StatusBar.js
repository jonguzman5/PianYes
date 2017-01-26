import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class StatusBar extends Component{
  render(){
    return(
      <View style={styles.statusBar}>
        <Text style={styles.header}>{'PianYes'}</Text>
      </View>
      )
  }
}
const styles = StyleSheet.create({
  statusBar: {
    height: 20,
    backgroundColor: '#580b1c',
  },
  header: {
    fontWeight: 'bold',
    marginLeft: 90,
    marginTop: 2,
  }
})
export default StatusBar;
