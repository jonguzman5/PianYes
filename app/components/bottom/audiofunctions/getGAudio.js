import {
  AlertIOS,
} from 'react-native';

var Sound = require('react-native-simple-sound');

  export function getGAudio(){
    Sound.enable(true);
    Sound.prepare('g.wav');
    Sound.play('g.wav');
  }
