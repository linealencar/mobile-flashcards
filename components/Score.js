import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Score extends Component {
  render() {
    const { score } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>{score}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  bigText: {
    color: '#424B54',
    fontWeight: 'bold',
    fontSize: 50
  }
});
