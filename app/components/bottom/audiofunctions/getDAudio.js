import {
  AlertIOS,
} from 'react-native';

var Sound = require('react-native-simple-sound');

  export function getDAudio(){
    Sound.enable(true);
    Sound.prepare('d.wav');
    Sound.play('d.wav');
  }
