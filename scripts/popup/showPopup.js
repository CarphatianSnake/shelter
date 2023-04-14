import data from "../../src/data/data.js";
import makePopup from "./makePopup.js";
import { getTargetWithParent } from "../utils/utils.js";

function showPopup(e) {
  const { target, parent } = getTargetWithParent(e);
  const targetId = target.dataset.id;
  const parentId = parent.dataset.id;
  const dataId = targetId ? targetId : parentId;
  const cardData = data.find((item) => item.id === dataId);
  makePopup(cardData);
}

export default showPopup;