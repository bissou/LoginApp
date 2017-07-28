import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions
} from 'react-native';


const { width, height } = Dimensions.get('window');

export default class MemberArea extends Component {
  render() {
    return (
     <Text> Hello , it's a member area scene</Text>
    );
  }
}