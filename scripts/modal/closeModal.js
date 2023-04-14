import { transitionDuration } from "../utils/utils.js";
import logo from "./logo.js";

function closeModal() {

  const body = document.querySelector("body");
  const burgerButton = document.querySelector(".btn_burger");
  const modal = document.querySelector('.modal'); // Get modal window element

  burgerButton.dataset.action = "openModal";

  body.classList.remove('overflow__hidden'); // Remove overflow hidden from a documents body
  modal.classList.add('modal__close'); // Add modal__close class to close a modal window
  burgerButton.classList.add("events__none");
  burgerButton.classList.remove('btn_burger__open'); // remove open class from burger button to rotate it to initial state
  logo.classList.add('logo__hidden'); // Hide logo on modal window close

  // Remove modal window after closing animation by timeot and set IsModalOpen state to false
  setTimeout(() => {
    modal.remove();
    burgerButton.classList.remove("events__none");
  }, transitionDuration)

}

export default closeModal;