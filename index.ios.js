import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
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
