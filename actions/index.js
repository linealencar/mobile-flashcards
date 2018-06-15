import * as API from '../utils/API';

export const ADD_DECK = 'ADD_DECK';
export const LOAD_DECKS = 'LOAD_DECKS';

export const ADD_CARD = 'ADD_CARD';

export const ADD_CORRECT_ANSWER = 'ADD_CORRECT_ANSWER';
export const ADD_INCORRECT_ANSWER = 'ADD_INCORRECT_ANSWER';

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  };
}

export const insertDeck = title => dispatch => {
  API.submitDeck(title);
  return dispatch(addDeck({ title: title, questions: [] }));
};

export function loadDecks(decks) {
  return {
    type: LOAD_DECKS,
    decks
  };
}

export const fetchDecks = () => dispatch =>
  API.getDecks().then(decks => dispatch(loadDecks(decks)));

export function addCard(title, card) {
  return {
    type: ADD_CARD,
    title,
    card
  };
}

export const insertCard = (title, card) => dispatch => {
  console.log('1');
  API.addCard(title, card).then(() => {
    console.log('2');
    return dispatch(addCard(title, card));
  });
};

export function addCorrectAnswer(post) {
  return {
    type: ADD_CORRECT_ANSWER,
    post
  };
}

export function addIncorrectAnswer(posts) {
  return {
    type: ADD_INCORRECT_ANSWER,
    posts
  };
}
