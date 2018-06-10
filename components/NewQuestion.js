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

  handleTextChange = (question, answer) => {
    this.setState(() => ({ question, answer }));
  };
  submitQuestions = () => {
    const title = this.state.title;
    submitDeck(title);
    this.props.navigation.navigate('Deck');
  };
  render() {
    const { question, answer } = this.state;
    const titleDeck = this.props.navigation.getParam('titleDeck');
    console.log(titleDeck);
    return (
      <View style={styles.container}>
        <Text>Question</Text>

        <TextInput
          value={question}
          style={styles.input}
          onChangeText={this.handleTextChange}
        />
        <Text>Answer</Text>

        <TextInput
          value={answer}
          style={styles.input}
          onChangeText={this.handleTextChange}
        />

        <TouchableOpacity style={styles.button}>
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
