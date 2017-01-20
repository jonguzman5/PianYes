import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import C from './C';
import D from './D';
import E from './E';
import F from './F';
import G from './G';
import A from './A';
import B from './B';
import CSharp from './CSharp';
import EFlat from './EFlat';
import FSharp from './FSharp';
import GSharp from './GSharp';
import BFlat from './BFlat';

class BottomContainer extends Component{
  render(){
    return(
      <View style={styles.bottomContainer}>
        <C/>
        <D/>
        <E/>
        <F/>
        <G/>
        <A/>
        <B/>
        <CSharp/>
        <EFlat/>
        <FSharp/>
        <GSharp/>
        <BFlat/>
      </View>
      )
  }
}
const styles = StyleSheet.create({
  bottomContainer: {
    height: 300,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'dimgray'
  }
})

export default BottomContainer;
