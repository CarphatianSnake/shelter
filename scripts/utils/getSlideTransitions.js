function getSlideTransitions(direction) {
  const right = "translate__right";
  const left = "translate__left";
  const oldSlide = direction === "right" ? right : left;
  const newSlide = direction === "right" ? left : right;

  return [oldSlide, newSlide];
}

export default getSlideTransitions;