// Function to construct an element
function constructElement(
  type, // type of element (div, img, span, etc.)
  attributes, // object with attributes - classList must be an array, else attributes comes as pairs key + value as string
  text = null // innerText for element, default null
) {
  const element = document.createElement(type);

  for (let key in attributes) {
    if (key === "classList") {
      element.classList.add(...attributes[key]);
    } else {
      element.setAttribute(key, attributes[key]);
    }
  }

  if (text) {
    element.innerText = text;
  }

  return element;
}

export default constructElement;