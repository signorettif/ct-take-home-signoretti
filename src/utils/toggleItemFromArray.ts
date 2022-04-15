export const toggleItemFromStringArray = (arr: string[], item: string) => {
  const index = arr.indexOf(item);
  const arrCopy = [...arr];

  // Item found, need to remove
  if (index > -1) {
    arrCopy.splice(index, 1);
    return arrCopy;
  }

  // Item not found, need to add
  arrCopy.push(item);
  return arrCopy;
};
