import { AsyncStorage } from 'react-native';

const CARD_STORAGE_KEY = '@flashCards:card';

export function submitDeck(title) {
  return AsyncStorage.mergeItem(
    CARD_STORAGE_KEY,
    JSON.stringify({ [title]: { title, questions: [] } })
  );
}
// export function submitCardTitle(key) {
//   return AsyncStorage.mergeItem(key, JSON.stringify('Aline'));
// }

// export function getDeckList(key) {
//   return AsyncStorage.getItem(CARD_STORAGE_KEY).then(resultData => alert(resultData);
// }

// export function getAllCards() {
//   listData = [];
//   let keys = AsyncStorage.getAllKeys();
//   keys.forEach(async function(inKey) {
//     const card = await AsyncStorage.getItem(inKey);
//     card.key = inKey;
//     listData.push(card);
//   });
//   console.log(keys);
// }
