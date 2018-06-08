import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import getDecks from './flashcards';
import { getDeckList } from '../utils/API';

export default class DeckList extends Component {
  componentDidMount() {
    // try {
    //   var value = AsyncStorage.getItem('@flashCards:card');
    //   if (value !== null) {
    //     //this.setState({selectedValue: value});
    //     console.log('Recovered selection from disk: ' + value);
    //   } else {
    //     console.log('Initialized with no selection on disk.');
    //   }
    // } catch (error) {
    //   console.log('AsyncStorage error: ' + error.message);
    // }

    // const dumpRaw = () => {
    //   return AsyncStorage.getAllKeys().then(keys => {
    //     return Promise.reduce(
    //       keys,
    //       (result, key) => {
    //         return AsyncStorage.getItem(key).then(value => {
    //           result[key] = value;
    //           return result;
    //         });
    //       },
    //       {}
    //     );
    //   });
    // };

    // dumpRaw().then(data => console.log('Data ' + data));

    AsyncStorage.getItem('@flashCards:card').then(
      resultData => {
        alert(resultData);
        //console.log(Object.values(resultData));
      }
      //resultData.map(deck => alert(deck.title));
    );
    // console.log('Async ' + resultData);
  }

  render() {
    const decks = getDecks();
    //const decks02 = getDeckList();
    // console.log('Decks 02 ' + decks02);

    return (
      <View style={styles.container}>
        <FlatList
          data={decks}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Deck', {
                  titleCard: item.title
                })
              }
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
