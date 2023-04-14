import { delay } from "../utils/utils.js";
import createPopup from "./createPopup.js";

const body = document.querySelector("body");

// Function that creates popup window
function makePopup(data) {
  const popup = createPopup(data);
  body.append(popup);

  // after short delay we change body, popup and popup window classes to start animation
  setTimeout(() => {
    const popupWindow = popup.querySelector(".popup_window");
    body.classList.add("overflow__hidden");
    popup.classList.remove("popup__close");
    popupWindow.classList.remove("popup_window__close");
  }, delay)
}

export default makePopup;