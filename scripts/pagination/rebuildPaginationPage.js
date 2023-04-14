import { getNumberOfCards } from "../utils/utils.js";
import renderPaginationPage from "./renderPaginationPage.js";

// Rebuild pagination page on resize
function rebuildPaginationPage(props) {

  const {
    paginationData,
    firstCardIndex,
    setFirstCardIndex
  } = props;

  const index = firstCardIndex(); // get first card index from state
  const numberOfCards = getNumberOfCards(); // get number of cards must be on page
  const cardsList = document.querySelectorAll(".pet-card"); // get pet card elements on page
  const cardsNumber = cardsList.length; // get number of cards on page
  const remainder = index % numberOfCards;
  const oldCards = document.querySelector(".pagination_items-list")

  if (cardsNumber !== numberOfCards) {

    if (remainder) {
      const newIndex = index - remainder;
      setFirstCardIndex(newIndex);
      oldCards.remove();
      renderPaginationPage(paginationData, firstCardIndex);
    }

    else {
      oldCards.remove();
      renderPaginationPage(paginationData, firstCardIndex);
    }

  }

}

export default rebuildPaginationPage;