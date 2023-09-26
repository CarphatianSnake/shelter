import data from "./src/data/data.js";
import { useState, onClickHandler } from "./scripts/utils/utils.js";
import preparePaginationData from "./scripts/pagination/preparePaginationData.js";
import renderPaginationPage from "./scripts/pagination/renderPaginationPage.js";
import rebuildPaginationPage from "./scripts/pagination/rebuildPaginationPage.js";
import onPaginationButtonClick from "./scripts/pagination/onPaginationButtonClick.js";

// getter and setter for current index of first element on pagination page
const [ firstCardIndex, setFirstCardIndex ] = useState(0);
// pagination data to work with
const paginationData = preparePaginationData(data); 

// paginationProps for functions
const paginationProps = {
  paginationData,
  firstCardIndex,
  setFirstCardIndex
};

document.addEventListener("click", (e) => {
  if (e.target.dataset.action === "paginate") {
    onPaginationButtonClick(e, paginationProps)
  }
  onClickHandler(e);
})

window.addEventListener("resize", () => {
  rebuildPaginationPage(paginationProps);
});

// Initial pagination render
renderPaginationPage(paginationData, firstCardIndex);
