import { constructElement } from "../utils/utils.js";

// Prepare cards for render
function prepareCards(cardsData) {

  const cardsList = []; // add empty array where we will push pet card elements

  cardsData.forEach((card) => {

    const petCard = constructElement(
      "li",
      {
        classList: ["pet-card"],
        "data-id": card.id,
        "data-action": "openPopup"
      }
    );

    const image = constructElement(
      "img",
      {
        classList: ["pet-card_image"],
        alt: card.name,
        src: card.img,
        loading: "lazy"
      }
    );
    petCard.append(image);

    const petName = constructElement(
      "h4",
      {
        classList: ["pet-card_title"]
      },
      card.name
    );
    petCard.append(petName);

    const btn = constructElement(
      "button",
      {
        classList: ["btn"]
      },
      "Learn more"
    );
    petCard.append(btn);

    cardsList.push(petCard);
  })

  return cardsList;
}

export default prepareCards;