import { AsyncStorage } from 'react-native';
import { CLIENT_RENEG_LIMIT } from 'tls';

const CARD_STORAGE_KEY = '@flashCards:card';

export function submitDeck(title) {
  return AsyncStorage.mergeItem(
    CARD_STORAGE_KEY,
    JSON.stringify({ [title]: { title, questions: [] } })
  );
}

export function updateQuestion({ title, deck }) {
  return AsyncStorage.mergeItem(
    CARD_STORAGE_KEY,
    JSON.stringify({ [title]: deck })
  );
}

// export function getDecks() {
//   // console.log('oi');
//   return AsyncStorage.getItem(CARD_STORAGE_KEY).then(resultData => {
//     Object.values(JSON.parse(resultData));
//   });
// }

export function remove() {
  return AsyncStorage.removeItem(CARD_STORAGE_KEY);
}
