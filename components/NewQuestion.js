import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { updateQuestion } from '../utils/API';

export default class NewQuestion extends Component {
  state = {
    question: '',
    answer: ''
  };

  submitQuestions = () => {
    const { question, answer } = this.state;
    const deck = this.props.navigation.getParam('deck');
    const newQuestion = { question: question, answer: answer };
    deck.questions.push(question);
    title = deck.title;

    updateQuestion({ title, deck });
    this.props.navigation.navigate('Deck');
  };
  render() {
    const { question, answer } = this.state;
    return (
      <View style={styles.container}>
        <Text>Question</Text>

        <TextInput
          value={question}
          style={styles.input}
          onChangeText={question => this.setState({ question })}
        />
        <Text>Answer</Text>

        <TextInput
          value={answer}
          style={styles.input}
          onChangeText={answer => this.setState({ answer })}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.submitQuestions()}
        >
          <Text> Submit </Text>
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ff0000',
    margin: 50
  }
});
