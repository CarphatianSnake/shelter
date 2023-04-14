import getPageName from "./getPageName.js";

// Function to get number of cards to render
function getNumberOfCards() {
  const pageWidth = window.innerWidth;
  const pageName = getPageName();

  if (pageName === "index") {
    if (pageWidth >= 892) {
      return 3;
    }
    if (pageWidth < 892 && pageWidth >= 576) {
      return 2;
    }
    if (pageWidth < 576) {
      return 1;
    }
  }

  if (pageName === "pets") {
    if (pageWidth >= 1100) {
      return 8;
    }
    if (pageWidth < 1100 && pageWidth >= 576) {
      return 6;
    }
    if (pageWidth < 576) {
      return 3;
    }
  }

}

export default getNumberOfCards;