import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TopContainer from './app/components/top/TopContainer';
import BottomContainer from './app/components/bottom/BottomContainer';
import getImage from './app/components/bottom/imagefunctions/getImage';

export default class PianYes extends Component {
  constructor(){
    super();
// state that needs to change
    this.state = {
      image: ''//'../../../app/images/C.png'
    }
    this.changeNote = this.changeNote.bind(this);
  }
//function that changes the image path state to a random one from the array
changeNote(symbol){
  if(symbol=='C'){
    this.setState({
      image: './app/images/C.png'
    })
      console.log('c')
  }else if(symbol==='D'){
    this.setState({
      image: './app/images/D.png'
    })
      console.log('D')
  }else if(symbol==='E'){
    this.setState({
      image: './app/images/E.png'
    })
  }else if(symbol==='F'){
    this.setState({
      image: './app/images/F.png'
    })
  }else if(symbol==='G'){
    this.setState({
      image: './app/images/G.png'
    })
  }else if(symbol==='A'){
    this.setState({
      image: './app/images/A.png'
    })
  }else if(symbol==='B'){
    this.setState({
      image: './app/images/B.png'
    })
  }else if(symbol==='cSharp'){
    this.setState({
      image: './app/images/cSharp.png'
    })
  }else if(symbol==='eFlat'){
    this.setState({
      image: './app/images/eFlat.png'
    })
  }else if(symbol==='fSharp'){
    this.setState({
      image: './app/images/fSharp.png'
    })
  }else if(symbol==='gSharp'){
    this.setState({
      image: './app/images/gSharp.png'
    })
  }else if(symbol==='bFlat'){
    this.setState({
      image: './app/images/bFlat.png'
    })
  }
}
 //passing the function down to the keys and bind it
 //passing the state down to the top image (and make the path state based)
  render() {
    return (
      <View>
{ /*passing down props that has state from this component */}
      <TopContainer changeNote={this.state.image}>
      </TopContainer>
{/* passing down a prop taht is a funciton and will update state of this component */}
      <BottomContainer changeNote={this.changeNote}>
      </BottomContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PianYes', () => PianYes);
