import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { insertDeck } from '../actions';

class NewDeck extends Component {
  state = {
    title: ''
  };

  handleTextChange = title => {
    this.setState(() => ({ title }));
  };

  submit = () => {
    const title = this.state.title;
    this.props.insertDeck(title);
    this.props.navigation.navigate('Deck', {
      deckTitle: title
    });
  };
  render() {
    const { title } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Title</Text>
        <TextInput
          value={title}
          style={styles.input}
          onChangeText={this.handleTextChange}
        />

        <TouchableOpacity style={styles.button} onPress={() => this.submit()}>
          <Text style={styles.textButton}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  decks: state
});

const mapDispatchToProps = dispatch => ({
  insertDeck: title => dispatch(insertDeck(title))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  text: {
    color: '#424B54',
    fontWeight: 'bold',
    fontSize: 30
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
  },
  input: {
    width: 300,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#C5BAAF',
    margin: 5,
    fontSize: 20,
    color: '#424B54'
  }
});
