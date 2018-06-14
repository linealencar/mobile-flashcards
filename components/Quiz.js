import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Card from './Card';
import Score from './Score';

export default class Quiz extends Component {
  state = {
    index: 0,
    score: 0
  };

  incrementIndex = () => {
    this.setState({ index: this.state.index + 1 });
  };

  incrementScore = () => {
    this.setState({ score: this.state.score + 1 });
  };

  render() {
    const questions = this.props.navigation.getParam('questions');
    const { index, score } = this.state;
    return (
      <View style={styles.container}>
        {index < questions.length ? (
          <Card
            questions={questions}
            index={index}
            onIncrementIndex={this.incrementIndex}
            onIncrementScore={this.incrementScore}
          />
        ) : (
          <Score score={score} />
        )}
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
  }
});
