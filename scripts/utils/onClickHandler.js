import getAction from "./getAction.js";
import showPopup from "../popup/showPopup.js";
import closePopup from "../popup/closePopup.js";
import closeModal from "../modal/closeModal.js";
import openModal from "../modal/openModal.js";

function onClickHandler(e) {

  const action = getAction(e);

  if (action === "openModal") {
    openModal();
  }

  if (action === "closeModal") {
    closeModal();
  }

  if (action === "openPopup") {
    showPopup(e);
  }
  
  if (action === "closePopup") {
    closePopup();
  }
}

export default onClickHandler;