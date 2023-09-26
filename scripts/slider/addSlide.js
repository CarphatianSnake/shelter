import { constructElement } from "../utils/utils.js";

// Depends of direction append or prepend slide to slider
function addSlide(cardsList, direction) {

  const sliderWindow = document.querySelector(".slider_window");

  // create new slide
  const slide = constructElement(
    "ul",
    {
      classList: ["slider_items-list"]
    }
  );

  // append cards to a new slide
  cardsList.forEach((card) => {
    slide.append(card);
  })

  // depending of direction prepend or append slide to slider's window
  if (direction === "right") {
    sliderWindow.prepend(slide);
  } else {
    sliderWindow.append(slide);
  }

  return slide; // return slide element
}

export default addSlide;