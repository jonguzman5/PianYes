import {
  AlertIOS,
} from 'react-native';

var Sound = require('react-native-simple-sound');

  export function getEFlatAudio(){
    Sound.enable(true);
    Sound.prepare('eFlat.wav');
    Sound.play('eFlat.wav');
  }
