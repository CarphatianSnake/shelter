import { getSlideTransitions, delay, transitionDuration } from "../utils/utils.js";

function changeSlide(slides, buttons, direction) {

  // Get sepated slides
  const { oldSlide, newSlide } = slides;

  // Prepare classes for transition
  const [ oldSlideTranslate, newSlideTranslate ] = getSlideTransitions(direction);

  oldSlide.classList.add("transform-animation"); // add transform animation class
  oldSlide.classList.add(oldSlideTranslate); // add transition class, that hides old slide from slider
  
  newSlide.classList.add(newSlideTranslate); // add transition class, that inits new slide position to start animation

  // Get parent window
  const parentWindow = oldSlide.parentNode;
  
  // Add overflow hidden to sliders window, to show only content inside it
  parentWindow.classList.add("overflow__hidden");

  // Block pointer events on buttons during transition duration
  buttons.forEach((button) => {
    button.classList.add("events__none");
  })

  setTimeout(() => {
    oldSlide.classList.add("opacity__zero");
    newSlide.classList.add("transform-animation"); // add transform animation class to a new slide after short delay
    newSlide.classList.remove(newSlideTranslate); // after a short delay remove transition class to animate new slide appearing
  }, delay)

  // After stansition duration timeout remove old slide from page, remove overflow hidden from slider window and remove pointer events blocking class from arrows
  setTimeout(() => {
    oldSlide.remove();
    parentWindow.classList.remove("overflow__hidden");
    buttons.forEach((button) => {
      button.classList.remove("events__none");
    })
    newSlide.classList.remove("transform-animation");
  }, transitionDuration)

}

export default changeSlide;