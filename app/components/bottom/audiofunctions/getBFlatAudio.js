import {
  AlertIOS,
} from 'react-native';

var Sound = require('react-native-simple-sound');

  export function getBFlatAudio(){
    Sound.enable(true);
    Sound.prepare('bFlat.wav');
    Sound.play('bFlat.wav');
  }
