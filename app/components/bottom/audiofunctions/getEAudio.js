import {
  AlertIOS,
} from 'react-native';

var Sound = require('react-native-simple-sound');
  export function getEAudio(){
    Sound.enable(true);
    Sound.prepare('e.wav');
    Sound.play('e.wav');
  }
