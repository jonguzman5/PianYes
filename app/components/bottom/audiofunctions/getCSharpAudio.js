import {
  AlertIOS,
} from 'react-native';

var Sound = require('react-native-simple-sound');

  export function getCSharpAudio(){
    Sound.enable(true);
    Sound.prepare('cSharp.wav');
    Sound.play('cSharp.wav');
  }
