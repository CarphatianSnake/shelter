function getButtons() {
  const firstPageButton = document.querySelector(".first-page");
  const previousPageButton = document.querySelector(".previous-page");
  const nextPageButton = document.querySelector(".next-page");
  const lastPageButton = document.querySelector(".last-page");

  return {
    firstPageButton,
    previousPageButton,
    nextPageButton,
    lastPageButton
  }
}

export default getButtons;