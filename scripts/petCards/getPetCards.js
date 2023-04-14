import { getNumberOfCards, getRandomValue } from "../utils/utils.js";

// Get pet cards array to work with
function getPetCards(data) {

  const numberOfCards = getNumberOfCards();
  const cardsData = [];

  // Get single pet card that is not exists in cardsToCompareWith array (default cards to compare is original pets data)
  function getSingleCard(data, cardsToCompareWith) {
    const value = getRandomValue(0, data.length - 1);
    const card = data[value];
    const isDuplicated = cardsToCompareWith.find(item => item.id === card.id);

    return isDuplicated ? getSingleCard(data, cardsToCompareWith) : card;
  }

  for (let i = 0; i < numberOfCards; i++) {
    const card = getSingleCard(data, cardsData); // get new card
    cardsData.push(card); // push new card to cards array
  }

  return cardsData;
}

export default getPetCards;