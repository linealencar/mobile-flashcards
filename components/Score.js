import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Score extends Component {
  render() {
    const { score, onBackToDeck, onRestartQuiz } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>{score}</Text>

        <TouchableOpacity style={styles.button} onPress={onRestartQuiz}>
          <Text style={styles.textButton}> Restart </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onBackToDeck}>
          <Text style={styles.textButton}> Back to Deck </Text>
        </TouchableOpacity>
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
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  button: {
    backgroundColor: '#424B54',
    width: 200,
    height: 45,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
