import {
  AlertIOS,
} from 'react-native';

var Sound = require('react-native-simple-sound');

  export function getAAudio(){
    Sound.enable(true);
    Sound.prepare('a.wav');
    Sound.play('a.wav');
  }
