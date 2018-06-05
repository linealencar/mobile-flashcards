import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

export default class NewCard extends Component {
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
        <Text>Title</Text>
        <TextInput
          value={input}
          style={styles.input}
          onChange={this.handleTextChange}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('NewQuestion')}
        >
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
