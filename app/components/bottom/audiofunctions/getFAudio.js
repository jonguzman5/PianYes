import {
  AlertIOS,
} from 'react-native';

var Sound = require('react-native-simple-sound');

  export function getFAudio(){
    Sound.enable(true);
    Sound.prepare('f.wav');
    Sound.play('f.wav');
  }
