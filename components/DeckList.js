import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import getDecks from './flashcards';

export default class DeckList extends Component {
  render() {
    const decks = getDecks();
    console.log(decks);
    return (
      <View style={styles.container}>
        <FlatList
          data={decks}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Card')}
            >
              <View style={[styles.box]}>
                <Text style={[styles.title]}>{item.title}</Text>
                <Text>{item.questions.length} Cards</Text>
              </View>
            </TouchableOpacity>
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
