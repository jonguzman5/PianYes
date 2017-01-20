import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import SheetMusic from './SheetMusic';

class TopContainer extends Component{
  render(){
    return(
      <View style={styles.topContainer}>
        {this.props.children}
        {/*<SheetMusic/>*/}
      </View>
      )
  }
}
const styles = StyleSheet.create({
  topContainer: {
    height: 300,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'lightgray'
  }
})

export default TopContainer;
