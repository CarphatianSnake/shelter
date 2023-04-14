import { constructElement, getNumberOfCards } from "../utils/utils.js";
import prepareCards from "../petCards/prepareCards.js";
import setButtonsStatus from "./setButtonsStatus.js";

function renderPaginationPage(paginationData, firstCardIndex, direction) {

  const paginationWindow = document.querySelector(".pagination_window");

  const index = firstCardIndex();
  const numberOfCards = getNumberOfCards();
  const data = paginationData.slice(index, index + numberOfCards);
  const cards = prepareCards(data);

  const page = constructElement(
    "ul",
    {
      classList: ["pagination_items-list"]
    }
  );

  cards.forEach((card) => {
    page.append(card);
  })

  // depending of direction prepend or append slide to it window
  if (direction === "right") {
    paginationWindow.prepend(page);
  } else {
    paginationWindow.append(page);
  }

  setButtonsStatus(index);

  return page;

}

export default renderPaginationPage;