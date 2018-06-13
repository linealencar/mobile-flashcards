import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import { fetchDecks } from '../actions';

class DeckList extends Component {
  componentDidMount() {
    this.props.fetchDecks();
  }

  componentDidUpdate() {
    this.props.fetchDecks();
  }

  render() {
    const { decks } = this.props;
    return (
      <View>
        <FlatList
          data={decks}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Deck', {
                  deckTitle: item.title
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
const mapStateToProps = state => ({
  decks: state
});

const mapDispatchToProps = dispatch => ({
  fetchDecks: () => dispatch(fetchDecks())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList);

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
