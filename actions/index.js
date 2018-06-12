import * as API from '../utils/API';

export const ADD_DECK = 'ADD_DECK';
export const LOAD_DECKS = 'LOAD_DECKS';

export const ADD_QUESTION = 'UPDATE_QUESTION';

export const ADD_CORRECT_ANSWER = 'ADD_CORRECT_ANSWER';
export const ADD_INCORRECT_ANSWER = 'ADD_INCORRECT_ANSWER';

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  };
}

// export const insertPost = post => dispatch =>
//   APIPost.insert(post).then(post => dispatch(addPost(post)));

export function loadDecks(decks) {
  return {
    type: LOAD_DECKS,
    decks
  };
}

export const fetchDecks = () => dispatch =>
  API.getDecks().then(decks => dispatch(loadDecks(decks)));

// export const votePost = (postId, voteType) => dispatch =>
//   APIPost.votePost(postId, voteType).then(post =>
//     dispatch(votePostFunction(post))
//   );

export function addQuestion(deck) {
  return {
    type: ADD_QUESTION,
    deck
  };
}

// export const deletePost = postId => dispatch =>
//   APIPost.deletePost(postId).then(post => dispatch(deletePostFunction(post)));

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

// export const fetchPosts = () => dispatch =>
//   APIPost.getAll().then(posts => dispatch(loadPostsFunction(posts)));
