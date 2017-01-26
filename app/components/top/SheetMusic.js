import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import getImage from '../bottom/imagefunctions/getImage';

function SheetMusic(props){
    const imageUrl = `${props.image.image}`

  return(
    <Image style={styles.sheetMusic}
    source={ require('../../../app/images/C.png')}
    />
    )
}
// class SheetMusic extends Component{
//   render(){
//     return(
//       <Image style={styles.sheetMusic}
//       //make source state based
//         source={this.props.ChangeNote}
//        />
//       )
//   }
// }
const styles = StyleSheet.create({
  sheetMusic: {
    height: 250,
    width: 300,
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 40,
    backgroundColor: 'white',
  }
})
export default SheetMusic;
