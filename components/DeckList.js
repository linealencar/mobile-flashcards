import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

export default class DeckList extends Component {
  state = {
    decks: []
  };
  componentDidMount() {
    AsyncStorage.getItem('@flashCards:card').then(resultData => {
      this.setState({ decks: Object.values(JSON.parse(resultData)) });
    });
  }

  render() {
    const { decks } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          data={decks}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Deck', {
                  deck: item
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('NewDeck')}
        >
          <Text> Add Deck </Text>
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
  box: {
    flex: 1
  },
  title: {
    color: '#e76e63',
    fontWeight: 'bold',
    fontSize: 30
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});
