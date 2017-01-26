import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import SheetMusic from './SheetMusic';
import StatusBar from './StatusBar';

class TopContainer extends Component{
  render(){
        console.log(this.props)

    return(
      <View style={styles.topContainer}>
        <StatusBar/>
        <SheetMusic image={this.props.changeNote} />
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
    backgroundColor: 'black'
  }
})

export default TopContainer;
