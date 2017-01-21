import {
  AlertIOS,
} from 'react-native';

var Sound = require('react-native-simple-sound');

  export function getGSharpAudio(){
    Sound.enable(true);
    Sound.prepare('gSharp.wav');
    Sound.play('gSharp.wav');
  }
