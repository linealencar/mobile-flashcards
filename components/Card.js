import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Answer from './Answer';

export default class Card extends Component {
  state = {
    showAnswer: false
  };

  requestAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer });
  };
  render() {
    const { question, onIncrementIndex, onIncrementScore } = this.props;
    const { showAnswer } = this.state;

    return (
      <View style={styles.container}>
        {showAnswer ? (
          <View>
            <Text style={styles.mediumText}>{question.answer}</Text>
            <Answer
              onIncrementIndex={onIncrementIndex}
              onIncrementScore={onIncrementScore}
            />
          </View>
        ) : (
          <View>
            <Text style={styles.mediumText}>{question.question}</Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.requestAnswer()}
        >
          <Text style={styles.textButton}> Answer </Text>
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
  }
});
