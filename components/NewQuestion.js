import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { insertCard } from '../actions';
import { connect } from 'react-redux';

class NewQuestion extends Component {
  state = {
    question: '',
    answer: ''
  };

  submitQuestions = () => {
    const title = this.props.navigation.state.params.deckTitle;

    this.props.addCard(title, this.state);

    this.props.navigation.goBack();
  };
  render() {
    const { question, answer } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Question</Text>

        <TextInput
          value={question}
          style={styles.input}
          onChangeText={question => this.setState({ question })}
        />
        <Text style={styles.text}>Answer</Text>

        <TextInput
          value={answer}
          style={styles.input}
          onChangeText={answer => this.setState({ answer })}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.submitQuestions()}
        >
          <Text style={styles.textButton}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCard: (title, card) => dispatch(insertCard(title, card))
});

export default connect(
  null,
  mapDispatchToProps
)(NewQuestion);

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
