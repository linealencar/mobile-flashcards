import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Deck from './components/Deck';
import Quiz from './components/Quiz';
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import NewQuestion from './components/NewQuestion';
import QuizAnswer from './components/QuizAnswer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import { createStackNavigator } from 'react-navigation';

const Stack = createStackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      title: 'Deck List',
      headerTintColor: '#424B54',
      headerStyle: {
        backgroundColor: '#EBCFB2'
      }
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: '#424B54',
      headerStyle: {
        backgroundColor: '#EBCFB2'
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: '#424B54',
      headerStyle: {
        backgroundColor: '#EBCFB2'
      }
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      title: 'New Deck',
      headerTintColor: '#424B54',
      headerStyle: {
        backgroundColor: '#EBCFB2'
      }
    }
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      title: 'New Question',
      headerTintColor: '#424B54',
      headerStyle: {
        backgroundColor: '#EBCFB2'
      }
    }
  },
  QuizAnswer: {
    screen: QuizAnswer,
    navigationOptions: {
      title: 'Quiz Answer',
      headerTintColor: '#424B54',
      headerStyle: {
        backgroundColor: '#EBCFB2'
      }
    }
  }
});

export default class App extends Component {
  render() {
    const store = createStore(reducer);
    return (
      <Provider store={store}>
        <Stack />
      </Provider>
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
  box: {
    flex: 1
  },
  title: {
    color: '#e76e63',
    fontWeight: 'bold',
    fontSize: 30
  }
});
