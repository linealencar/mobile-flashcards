import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import getDeckByTitle from './flashcards';
import getDecks01 from './flashcards';

export default class Deck extends Component {
  render() {
    const deck = this.props.navigation.getParam('deck');
    return (
      <View style={styles.container}>
        <Text>{deck.questions.length} Cards</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Quiz')}
        >
          <Text> Quiz </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            this.props.navigation.navigate('NewQuestion', {
              titleDeck: deck.title
            })
          }
        >
          <Text> Add Question </Text>
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
