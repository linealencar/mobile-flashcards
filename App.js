import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
// import getDecks from './flashcards';
import Card from './components/Card';
import Quiz from './components/Quiz';
import DeckList from './components/DeckList';
import NewCard from './components/NewCard';
import NewQuestion from './components/NewQuestion';
import { createStackNavigator } from 'react-navigation';

const Stack = createStackNavigator({
  DeckList: {
    screen: DeckList
  },
  Card: {
    screen: Card
  },
  Quiz: {
    screen: Quiz
  },
  NewCard: {
    screen: NewCard
  },
  NewQuestion: {
    screen: NewQuestion
  }
});

export default class App extends Component {
  render() {
    // const decks = getDecks();
    // console.log(decks);
    return (
      <Stack />
      // <View style={styles.container}>
      //   <FlatList
      //     data={decks}
      //     renderItem={({ item }) => (
      //       <View style={[styles.box]}>
      //         <Text style={[styles.title]}>{item.title}</Text>
      //         <Text>{item.questions.length} Cards</Text>
      //       </View>
      //     )}
      //     ItemSeparatorComponent={() => (
      //       <View
      //         style={{
      //           height: 1,
      //           backgroundColor: '#CED0CE'
      //         }}
      //       />
      //     )}
      //     keyExtractor={(item, index) => index.toString()}
      //   />
      // </View>
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
