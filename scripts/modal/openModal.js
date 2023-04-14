import { constructElement, getPageName, delay, transitionDuration } from "../utils/utils.js"
import logo from "./logo.js";

function openModal() {

  const body = document.querySelector("body");
  const burgerButton = document.querySelector(".btn_burger");

  burgerButton.dataset.action = "closeModal"; // change data-action attribute to modalClose to close modal on next click on burger button

  const navigation = document.querySelector('.navigation').cloneNode(true); // Deep clone of navigation element node list to add it to modal window
  const navigationList = navigation.querySelector('.navigation_list'); // Get navigation list element
  const navigationLinks = navigationList.querySelectorAll('.navigation_list_item'); // Get all navigation list items

  // Add closing modal features to navigation items inside modal window
  navigationLinks.forEach((link) => {
    link.dataset.action = "closeModal"; // add data-action attribute as modalClose to close modal window on click
    const classList = [...link.classList]; // get array of class names of link
    // Class list includes active class, we enable pointer events on element and removing pointer event on child link
    if (classList.includes("navigation_list_item__active")) {
      link.style = "pointer-events: all";
      link.children[0].classList.add("events__none");
    }
  })

  // Configure modal window class list depending of page where it is
  const modalClassList = ["modal", "modal__close"]; // basic modal class names list
  const pageName = getPageName(); // get page name
  // if we are at pets page, add 'modal__light' class to make modal window light
  if (pageName === 'pets') {
    modalClassList.push("modal__light");
  }

  // Create modal window
  const modal = constructElement(
    "div",
    {
      classList: modalClassList,
      "data-action": "closeModal"
    }
  );

  navigation.append(logo); // append cloned logo node to navigation node list
  modal.append(navigation); // append cloned navigation node to modal window
  body.append(modal); // append modal window documents body

  burgerButton.classList.add("events__none"); // disable pointer event on burger button before open modal animation

  // After short delay on opening modal we are ready to show it
  setTimeout(() => {
    body.classList.add('overflow__hidden'); // add overflow hidden to body to block scroll effects
    modal.classList.remove('modal__close'); // remove 'modal_close' class to show modal window
    burgerButton.classList.add('btn_burger__open'); // add open class to burger button to rotate it
    logo.classList.remove('logo__hidden'); // Show logo on modal window open
  }, delay)

  setTimeout(() => {
    burgerButton.classList.remove("events__none"); // make burger button clickable after animation of modal open ends
  }, transitionDuration)

}

export default openModal;