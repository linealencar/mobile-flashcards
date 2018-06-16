import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Answer from './Answer';

const Card = ({ question, onHandleAnswer, onToggleAnswer, showAnswer }) => {
  return (
    <View style={styles.container}>
      {showAnswer ? (
        <View>
          <Text style={styles.bigText}>{question.answer}</Text>
          <Answer onHandleAnswer={onHandleAnswer} />
        </View>
      ) : (
        <View>
          <Text style={styles.bigText}>{question.question}</Text>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={() => onToggleAnswer()}>
        <Text style={styles.textButton}> Answer </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

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
