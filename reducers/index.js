import {
  ADD_DECK,
  LOAD_DECKS,
  ADD_QUESTION,
  ADD_CORRECT_ANSWER,
  ADD_INCORRECT_ANSWER
} from '../actions';
// import { combineReducers } from 'redux';

// function categories(state = [], action) {
//   switch (action.type) {
//     case LIST_CATEGORY:
//       return action.categories;
//     default:
//       return state;
//   }
// }

function decks(state = {}, action) {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      };
    case LOAD_DECKS:
      return {
        ...state,
        ...action.decks
      };
    default:
      return state;
  }
}

export default decks;
