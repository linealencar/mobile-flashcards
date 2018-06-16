import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Answer = ({ onHandleAnswer }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.green]}
        onPress={() => onHandleAnswer(1)}
      >
        <Text style={styles.textButton}> Correct </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.red]}
        onPress={() => onHandleAnswer(0)}
      >
        <Text style={styles.textButton}> Incorrect </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Answer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
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
  red: {
    backgroundColor: '#ff4040'
  },
  green: {
    backgroundColor: '#00cc00'
  }
});
