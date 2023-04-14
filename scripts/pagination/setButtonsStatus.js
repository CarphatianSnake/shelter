import { getNumberOfCards } from "../utils/utils.js";
import getButtons from "./getButtons.js";
import setPageNumber from "./setPageNumber.js";

function setButtonsStatus(index) {

  const numberOfCards = getNumberOfCards();

  const buttonsContainer = document.querySelector(".pagination_buttons");
  const buttons = buttonsContainer.querySelectorAll(".btn");
  
  const {
    firstPageButton,
    previousPageButton,
    nextPageButton,
    lastPageButton
  } = getButtons();

  const addClass = (element) => element.classList.add("btn__disabled");

  buttons.forEach((button) => button.classList.remove("btn__disabled"));

  if (index <= 0) {
    addClass(firstPageButton);
    addClass(previousPageButton);
  }

  if (index >= 48 - numberOfCards) {
    addClass(nextPageButton);
    addClass(lastPageButton);
  }

  setPageNumber(index);

}

export default setButtonsStatus;