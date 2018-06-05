import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

export default class NewQuestion extends Component {
  state = {
    input: ''
  };

  handleTextChange = input => {
    this.setState(() => ({ input }));
  };
  render() {
    const { input } = this.state;
    return (
      <View style={styles.container}>
        <Text>Question</Text>
        <TouchableOpacity style={styles.button}>
          <Text> Submit </Text>
        </TouchableOpacity>

        <TextInput
          value={input}
          style={styles.input}
          onChange={this.handleTextChange}
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
    borderColor: '#fcfcfc',
    margin: 50
  }
});
