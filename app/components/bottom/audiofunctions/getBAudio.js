import {
  AlertIOS,
} from 'react-native';

var Sound = require('react-native-simple-sound');

  export function getBAudio(){
    Sound.enable(true);
    Sound.prepare('b.wav');
    Sound.play('b.wav');
  }
