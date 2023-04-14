import renderPaginationPage from "./renderPaginationPage.js";
import changeSlide from "../slider/changeSlide.js";

function onPageButtonClick(paginationData, firstCardIndex, direction) {

  const currentPaginationPage = document.querySelector(".pagination_items-list");
  
  const nextPaginationPage = renderPaginationPage(paginationData, firstCardIndex, direction);

  const slides = {
    oldSlide: currentPaginationPage,
    newSlide: nextPaginationPage
  };

  const buttonsContainer = document.querySelector(".pagination_buttons");
  const buttons = buttonsContainer.querySelectorAll(".btn");
  
  changeSlide(slides, buttons, direction);

}

export default onPageButtonClick;