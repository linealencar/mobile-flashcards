import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Card from './Card';
import Score from './Score';

export default class Quiz extends Component {
  state = {
    index: 0,
    score: 0,
    showAnswer: false
  };

  restartQuiz = () => {
    this.setState({ index: 0, score: 0, showAnswer: false });
  };

  toggleAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer });
  };

  handleAnswer = points => {
    const { index, score } = this.state;
    this.setState({
      index: index + 1,
      score: score + points,
      showAnswer: false
    });
  };

  render() {
    const { index, score, showAnswer } = this.state;
    const { navigation } = this.props;
    const { questions } = navigation.state.params;
    return (
      <View style={styles.container}>
        <Text>
          {index + 1}/{questions.length}
        </Text>
        {index < questions.length ? (
          <Card
            question={questions[index]}
            onHandleAnswer={this.handleAnswer}
            onToggleAnswer={this.toggleAnswer}
            showAnswer={showAnswer}
          />
        ) : (
          <Score
            score={score}
            onBackToDeck={() => this.props.navigation.goBack()}
            onRestartQuiz={this.restartQuiz}
          />
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
