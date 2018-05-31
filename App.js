import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import getDecks from './flashcards';

export default class App extends Component {
  render() {
    const decks = getDecks();
    console.log(decks);
    return (
      <View style={styles.container}>
        <FlatList
          data={decks}
          renderItem={({ item }) => (
            <View style={[styles.box]}>
              <Text style={[styles.title]}>{item.title}</Text>
              <Text>{item.questions.length} Cards</Text>
            </View>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                backgroundColor: '#CED0CE'
              }}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
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
  box: {
    flex: 1
  },
  title: {
    color: '#e76e63',
    fontWeight: 'bold',
    fontSize: 30
  }
});
