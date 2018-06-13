import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { fetchDecks } from '../actions';

class Deck extends Component {
  componentDidMount() {
    this.props.fetchDecks();
  }
  static navigationOptions = ({ navigation }) => {
    const { deckTitle } = navigation.state.params;

    return {
      title: deckTitle
    };
  };
  render() {
    const deckTitle = this.props.navigation.getParam('deckTitle');
    const { decks } = this.props;
    const deck = decks.find(obj => obj.title === deckTitle);
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>{deck.questions.length} cards</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            this.props.navigation.navigate('Quiz', {
              questions: deck.questions
            })
          }
        >
          <Text style={styles.textButton}> Quiz </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            this.props.navigation.navigate('NewQuestion', {
              deck: deck
            })
          }
        >
          <Text style={styles.textButton}> Add Question </Text>
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
)(Deck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  bigText: {
    color: '#424B54',
    fontWeight: 'bold',
    fontSize: 50
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
    justifyContent: 'center',
    margin: 5
  }
});
