function getAction(e) {
  const target = e.target;
  const targetAction = target.dataset.action;

  if (targetAction) {
    return targetAction;
  }

  const parent = target.parentElement;
  const parentAction = parent.dataset.action;
  return parentAction;
}

export default getAction;