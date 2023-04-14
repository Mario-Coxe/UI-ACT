import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class CheckBox extends Component {
  render() {
    return (
      <View style={[styles.checkBox, this.props.isChecked && styles.checked]} pointerEvents="none" />
    );
  }
}

const styles = StyleSheet.create({
  checkBox: {
    width: 10,
    height: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D6001B',
    marginBottom: -80,
    marginTop: 70,
  },
  checked: {
    backgroundColor: '#D6001B',
  },
});
