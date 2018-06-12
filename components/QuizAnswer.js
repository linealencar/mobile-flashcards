import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class QuizAnswer extends Component {
  state = {
    index: 0,
    indexMax: 0,
    score: 0
  };

  componentDidMount() {
    const questions = this.props.navigation.getParam('questions');
    const index = this.props.navigation.getParam('index');
    const indexMax = questions.length;

    this.setState({ indexMax: indexMax, index: index });
  }
  // submitCorrectAnswer = () => {
  //   this.setState({ score: score + 1 });

  //   const { index } = this.state;
  //   const newIndex = index + 1;

  //   if (newIndex < indexMax) {
  //     this.props.navigation.navigate('QuizAnswer');
  //   }

  //   this.setState({ index: index + 1 });
  // };
  render() {
    const questions = this.props.navigation.getParam('questions');
    const index = this.props.navigation.getParam('index');
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>{question.question}?</Text>
        <Text style={styles.mediumText}>{question.answer}</Text>

        <TouchableOpacity style={[styles.button]} onPress={this.onPress}>
          <Text style={styles.textButton}> Correct </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.textButton}> Incorrect </Text>
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
  bigText: {
    color: '#424B54',
    fontWeight: 'bold',
    fontSize: 50
  },
  mediumText: {
    color: '#C5BAAF',
    fontWeight: 'bold',
    fontSize: 40
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
  },
  green: {
    backgroundColor: '#2E3D34'
  },
  red: {
    backgroundColor: '#F00'
  }
});
