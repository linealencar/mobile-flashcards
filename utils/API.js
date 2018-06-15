import { AsyncStorage } from 'react-native';

const CARD_STORAGE_KEY = '@flashCards:card';

export function submitDeck(title) {
  return AsyncStorage.mergeItem(
    CARD_STORAGE_KEY,
    JSON.stringify({ [title]: { title, questions: [] } })
  );
}

export const addCard = async (title, card) => {
  console.log('add card');
  const deck = await getDeck(title);
  console.log(deck);
  deck.questions.push(card);
  return AsyncStorage.mergeItem(
    CARD_STORAGE_KEY,
    JSON.stringify({ [deck.title]: deck })
  );
};

export function getDecks() {
  return AsyncStorage.getItem(CARD_STORAGE_KEY).then(resultData => {
    return resultData ? Object.values(JSON.parse(resultData)) : [];
  });
}

export function getDeck(title) {
  return AsyncStorage.getItem(CARD_STORAGE_KEY).then(resultData => {
    return resultData ? JSON.parse(resultData)[title] : {};
  });
}

export function remove() {
  return AsyncStorage.removeItem(CARD_STORAGE_KEY);
}
