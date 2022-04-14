export const toggleItemFromStringArray = (arr: string[], item: string) => {
  const index = arr.indexOf(item);

  // Item found, need to remove
  if (index > -1) {
    arr.splice(index, 1);
    return arr;
  }

  // Item not found, need to add
  arr.push(item);
  return arr;
};
