function getTargetWithParent(e) {
  const target = e.target;
  const parent = target.parentElement;
  return { target, parent };
}

export default getTargetWithParent;