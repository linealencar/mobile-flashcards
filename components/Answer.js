import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Answer extends Component {
  submitCorrectAnswer = () => {
    const { onIncrementIndex, onIncrementScore } = this.props;
    onIncrementIndex();
    onIncrementScore();
  };

  submitIncorrectAnswer = () => {
    const { onIncrementIndex } = this.props;
    onIncrementIndex();
  };
  render() {
    const { answer } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.mediumText}>{answer}</Text>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => this.submitCorrectAnswer()}
        >
          <Text style={styles.textButton}> Correct </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.red]}
          onPress={() => this.submitIncorrectAnswer()}
        >
          <Text style={styles.textButton}> Incorrect </Text>
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
  text: {
    color: '#424B54',
    fontWeight: 'bold',
    fontSize: 20
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
    justifyContent: 'center',
    margin: 5
  },
  red: {
    backgroundColor: '#ff4040'
  },
  incorrect: {
    backgroundColor: '#00cc00'
  }
});
