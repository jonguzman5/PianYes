import React, { Component } from 'react';
import {
  Text,
  View,
  AlertIOS,
} from 'react-native';

export function getImage(props){
  fetch("http://localhost:3000/images", {method: "GET"})
  .then((response) => response.json())
  .then((responseData) => {
      AlertIOS.alert(
          "GET Response",
          "Image Query -> " + responseData
      )
  })
  .done();
}
