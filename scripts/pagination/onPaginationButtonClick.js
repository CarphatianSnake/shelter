import getButtons from "./getButtons.js";
import onPageButtonClick from "./onPageButtonClick.js";
import { getNumberOfCards } from "../utils/utils.js";

function onPaginationButtonClick(e, props) {
  
  const target = e.target; // save event target to constant

  // Set props data to separated constants
  const {
    paginationData,
    firstCardIndex,
    setFirstCardIndex
  } = props;

  // Function that switches pagination page depending on calculated first card index
  function onPageSwitch(firstIndex) {
    setFirstCardIndex(firstIndex);
    onPageButtonClick(paginationData, firstCardIndex, "left");
  }

  function getFirstIndex() {

    // Get pagination buttons element
    const {
      firstPageButton,
      previousPageButton,
      nextPageButton,
      lastPageButton
    } = getButtons();

    // Depending on targeted button set first card index
    switch (target) {
      case (firstPageButton):
        return 0
      case (previousPageButton):
        return firstCardIndex() - getNumberOfCards();
      case (nextPageButton):
        return firstCardIndex() + getNumberOfCards();
      case (lastPageButton):
        return 48 - getNumberOfCards();
    }
  }
  
  const firstIndex = getFirstIndex(); // Get first card index

  onPageSwitch(firstIndex); // switch pagination page
    
}

export default onPaginationButtonClick;