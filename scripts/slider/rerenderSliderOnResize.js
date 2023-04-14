import data from "../../src/data/data.js";
import { getNumberOfCards } from "../utils/utils.js";
import addCardsToSlider from "./addCardsToSlider.js";

// Function to rerender slider on resize
function rerenderSliderOnResize(setPreviousSlide) {
  const cards = [...document.querySelectorAll(".pet-card")]; // Get current cards on page
  const numberOfCards = getNumberOfCards(); // Get number of cards to render
  // if number of cards !== number of cards on page - render new cards
  if (numberOfCards !== cards.length) {
    // Remove old cards from page
    const oldCards = document.querySelector(".slider_items-list");
    if (oldCards) {
      oldCards.remove();
    }
    // Clear object with previuos slide data
    setPreviousSlide({
      cards: null,
      direction: null
    });
    // And add new cards to page
    addCardsToSlider(data);
  }
}

export default rerenderSliderOnResize;