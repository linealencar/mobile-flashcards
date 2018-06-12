import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Quiz extends Component {
  state = {
    index: 0
  };
  render() {
    const questions = this.props.navigation.getParam('questions');
    const { index } = this.state;
    console.log(questions[index]);
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>{questions[index].question}?</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            this.props.navigation.navigate('QuizAnswer', {
              questions: questions,
              index: index
            })
          }
        >
          <Text style={styles.textButton}> Answer </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.textButton}> Correct </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.textButton}> Incorrect </Text>
        </TouchableOpacity> */}
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
