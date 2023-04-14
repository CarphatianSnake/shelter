import data from "../../src/data/data.js";
import addCardsToSlider from "./addCardsToSlider.js";
import addSlide from "./addSlide.js";
import changeSlide from "./changeSlide.js";

function onSlideHandler(e, previousSlide, setPreviousSlide) {

  // Get previous slide
  const prevSlide = previousSlide();

  // Get direction of slide
  const direction = e.target.className.includes("right") ? "right" : "left";

  // Create empty variable to save a new slide
  let newSlide = null;

  // Get old slide if it exists
  const oldSlide = document.querySelector(".slider_items-list");

  // If previous slide exsists (we check direction property of prev slide object) and direction is opposite to targeted direction, we will rerender previous slide, else - render new slide
  if (prevSlide.direction && direction !== prevSlide.direction) {
    const previousCards = prevSlide.cards.querySelectorAll(".pet-card");
    newSlide = addSlide(previousCards, direction); // save to newSlidevariable slide that we render
  } else {
    newSlide = addCardsToSlider(data, direction, oldSlide); // save to newSlidevariable slide that we render
  }

  setPreviousSlide({
    cards: oldSlide,
    direction: direction
  });

  const slides = {
    oldSlide,
    newSlide
  };

  const rightSliderArrow = document.querySelector(".btn_arrow__right");
  const leftSliderArrow = document.querySelector(".btn_arrow__left");

  const buttons = [ rightSliderArrow, leftSliderArrow ];

  changeSlide(slides, buttons, direction);

}

export default onSlideHandler;