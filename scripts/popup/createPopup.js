import { constructElement } from "../utils/utils.js";

// Function to create popup window using pet data
function createPopup(data) {

  const { name, img, type, breed, description } = data;

  const body = document.querySelector("body");

  const popup = constructElement(
    "div",
    {
      classList: ["popup", "popup__close"],
      "data-action": "closePopup"
    }
  );

  const popupWindow = constructElement(
    "div",
    {
      classList: ["popup_window", "popup_window__close"]
    }
  );

  const popupWindowWrapper = constructElement(
    "div",
    {
      classList: ["popup_window_wrapper"]
    }
  );
  popupWindow.append(popupWindowWrapper);

  const crossButton = constructElement(
    "button",
    {
      classList: ["btn", "btn__round", "popup_btn_close"],
      "data-action": "closePopup"
    }
  );
  popupWindowWrapper.append(crossButton);

  const image = constructElement(
    "img",
    {
      classList: ["popup_image"],
      alt: name,
      loading: "lazy",
      src: img
    }
  );
  popupWindowWrapper.append(image);

  const content = constructElement(
    "div",
    {
      classList: ["popup_content"]
    }
  );

  const petName = constructElement(
    "h3",
    {
      classList: ["popup_pet-name"]
    },
    name
  );
  content.append(petName);

  const petTypeText = `${type} - ${breed}`;
  const petType = constructElement(
    "h5",
    {
      classList: ["popup_pet-type"]
    },
    petTypeText
  );
  content.append(petType);

  const petDescription = constructElement(
    "p",
    {
      classList: ["popup_pet-description"]
    },
    description
  );
  content.append(petDescription);

  const petInfoList = constructElement(
    "ul",
    {
      classList: ["popup_pet-info-list"]
    }
  );

  const listItems = ['Age', 'Inoculations', 'Diseases', 'Parasites'];

  listItems.forEach(item => {
    const listItem = constructElement(
      "li",
      {
        classList: ["popup_pet-info-list_item"]
      }
    );

    // If item === string add it as string, else (if it array) convert array to string and add this string
    const infoListItem = data[item.toLowerCase()];

    const itemHeading = document.createElement('b');
    itemHeading.innerText = `${item}: `;
    listItem.append(itemHeading);

    if (typeof infoListItem === "string") {
      listItem.append(infoListItem);
    } else {
      listItem.append(infoListItem.join(', '));
    }

    petInfoList.append(listItem);
  })

  content.append(petInfoList);
  popupWindowWrapper.append(content);

  popup.append(popupWindow);

  return popup;
}

export default createPopup;