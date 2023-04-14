import { transitionDuration } from "../utils/utils.js";

function closePopup() {
  const body = document.querySelector("body");
  const popup = document.querySelector(".popup");
  const popupWindow = document.querySelector(".popup_window");

  popup.classList.add("popup__close");
  popupWindow.classList.add("popup_window__close");
  
  setTimeout(() => {
    popup.remove();
    body.classList.remove("overflow__hidden");
  }, transitionDuration)
}

export default closePopup;