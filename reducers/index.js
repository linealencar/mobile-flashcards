import {
  ADD_DECK,
  LOAD_DECKS,
  ADD_CARD,
  ADD_CORRECT_ANSWER,
  ADD_INCORRECT_ANSWER
} from '../actions';

function decks(state = [], action) {
  switch (action.type) {
    case ADD_CARD:
      return state.map(deck => {
        if (deck.title === action.title) {
          deck.questions.push(action.card);
        }
        return deck;
      });
    case ADD_DECK:
      return state.concat(action.deck);
    case LOAD_DECKS:
      return action.decks;
    default:
      return state;
  }
}

export default decks;
