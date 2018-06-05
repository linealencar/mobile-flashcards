import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import getDeckByTitle from './flashcards';
import getDecks01 from './flashcards';

const flashcards = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
};
export default class Card extends Component {
  render() {
    console.log('01 ' + flashcards['React'].title);
    const titleCard = this.props.navigation.state.params.titleCard;
    console.log('02 ' + flashcards[titleCard].title);
    //const deck = getDeckByTitle(titleCard);
    console.log('03 ' + getDecks01().title);
    console.log('04 ' + getDeckByTitle(titleCard).title);
    return (
      <View style={styles.container}>
        <Text>3 Cards -</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('NewCard')}
        >
          <Text> Add Card </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Quiz')}
        >
          <Text> Quiz </Text>
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
    padding: 10,
    margin: 10
  }
});
