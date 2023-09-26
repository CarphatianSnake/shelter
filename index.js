import data from "./src/data/data.js";
import { useState, onClickHandler } from "./scripts/utils/utils.js";
import addCardsToSlider from "./scripts/slider/addCardsToSlider.js";
import onSlideHandler from "./scripts/slider/onSlideHandler.js";
import rerenderSliderOnResize from "./scripts/slider/rerenderSliderOnResize.js";

// getter and setter for previous slide for slider
const [ previousSlide, setPreviousSlide ] = useState({
  cards: null,
  direction: null
});

document.addEventListener("click", (e) => {
  if (e.target.dataset.action === "slide") {
    onSlideHandler(e, previousSlide, setPreviousSlide)
  }
  onClickHandler(e);
})

window.addEventListener("resize", () => {
  rerenderSliderOnResize(setPreviousSlide);
});

// Initial slider render
// addCardsToSlider(data);

document.addEventListener("DOMContentLoaded", () => addCardsToSlider(data))
