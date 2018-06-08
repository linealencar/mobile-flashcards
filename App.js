import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
// import getDecks from './flashcards';
import Deck from './components/Deck';
import Quiz from './components/Quiz';
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import NewQuestion from './components/NewQuestion';
import { createStackNavigator } from 'react-navigation';

const Stack = createStackNavigator({
  DeckList: {
    screen: DeckList
  },
  Deck: {
    screen: Deck
  },
  Quiz: {
    screen: Quiz
  },
  NewDeck: {
    screen: NewDeck
  },
  NewQuestion: {
    screen: NewQuestion
  }
});

export default class App extends Component {
  render() {
    return <Stack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  box: {
    flex: 1
  },
  title: {
    color: '#e76e63',
    fontWeight: 'bold',
    fontSize: 30
  }
});
