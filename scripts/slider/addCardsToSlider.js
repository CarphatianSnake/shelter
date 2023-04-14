import getPetCards from "../petCards/getPetCards.js";
import prepareCards from "../petCards/prepareCards.js";
import addSlide from "./addSlide.js";

// Function that add cards depending on window width
function addCardsToSlider(data, direction = null, oldCardsList = null) {
  
  const oldCardsIds = [];

  if (oldCardsList) {
    const oldCards = oldCardsList.querySelectorAll(".pet-card");
    oldCards.forEach((card) => {
      oldCardsIds.push(card.dataset.id);
    })
  }

  // Filter original data to remove data with id's of previous slide cards
  const filteredData = data.filter((item) => !oldCardsIds.includes(item.id));

  // Prepare new slide
  const cardsData = getPetCards(filteredData); // get pet data
  const cardsList = prepareCards(cardsData); // prepare array of pet cards

  return addSlide(cardsList, direction); // add slide to page and return slide element
}

export default addCardsToSlider;