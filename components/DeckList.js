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
      <View>
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
              <View style={styles.item}>
                <Text style={styles.text}>{item.title}</Text>
                <Text>{item.questions.length} cards</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('NewDeck')}
        >
          <Text style={[styles.textButton]}> Add Deck </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    backgroundColor: '#E1CE7A',
    flexGrow: 1,
    margin: 1,
    padding: 3
  },
  text: {
    color: '#424B54',
    fontWeight: 'bold',
    fontSize: 20
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  button: {
    backgroundColor: '#424B54',
    width: 200,
    height: 45,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
