import {
  AlertIOS,
} from 'react-native';

var Sound = require('react-native-simple-sound');

  export function getFSharpAudio(){
    Sound.enable(true);
    Sound.prepare('fSharp.wav');
    Sound.play('fSharp.wav');
  }
