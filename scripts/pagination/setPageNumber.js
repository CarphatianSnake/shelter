import { getNumberOfCards, transitionDuration } from "../utils/utils.js";

function setPageNumber(index) {

  const numberOfCards = getNumberOfCards();
  const numberOfPages = 48 / numberOfCards;
  let pageNumber = (index + numberOfCards) / numberOfCards;

  if (pageNumber < 1) {
    pageNumber = 1;
  }

  if (pageNumber > numberOfPages) {
    pageNumber = numberOfPages;
  }

  const pageIndicator = document.querySelector(".pagination_page-indicator");

  const halfTransition = transitionDuration / 2;

  pageIndicator.classList.add("opacity__zero");

  setTimeout(() => {
    pageIndicator.innerText = pageNumber;
    pageIndicator.classList.remove("opacity__zero");
  }, halfTransition)

}

export default setPageNumber;