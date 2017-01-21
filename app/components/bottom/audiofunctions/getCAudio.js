import {
  AlertIOS,
} from 'react-native';

var Sound = require('react-native-simple-sound');

  export function getCAudio(){
    Sound.enable(true);
    Sound.prepare('c.wav');
    Sound.play('c.wav');
  }
