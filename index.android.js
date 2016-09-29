/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import HeartFloater from './heart-floater'

class Hearts extends Component {
  render() {
    return (
      <HeartFloater />
    );
  }
}


AppRegistry.registerComponent('hearts', () => Hearts);
