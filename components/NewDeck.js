import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { submitDeck } from '../utils/API';

export default class NewDeck extends Component {
  state = {
    title: ''
  };

  handleTextChange = title => {
    this.setState(() => ({ title }));
  };

  submit = () => {
    const title = this.state.title;
    submitDeck(title);
  };
  render() {
    const { title } = this.state;
    return (
      <View style={styles.container}>
        <Text>Title</Text>
        <TextInput
          value={title}
          style={styles.input}
          onChangeText={this.handleTextChange}
        />

        <TouchableOpacity style={styles.button} onPress={() => this.submit()}>
          <Text> Submit </Text>
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#0A67A3',
    margin: 50
  }
});
