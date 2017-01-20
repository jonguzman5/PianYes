import {
  AlertIOS,
} from 'react-native';



export function getCAudio(){
  fetch("http://localhost:3000/audio", {method: "GET"})
  .then((response) => response.json())
  .then((resData) => {
      AlertIOS.alert(
          "GET Response",
          "Audio Query -> " + resData.cAudio
      )
  })
  .done();
}