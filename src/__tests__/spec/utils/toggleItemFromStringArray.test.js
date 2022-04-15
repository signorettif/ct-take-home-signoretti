import { toggleItemFromStringArray } from 'utils/toggleItemFromArray';

const mockArray = ['item_one', 'item_two'];

describe('utils/toggleItemFromArray', () => {
  it('adds a new item to array when not present', () => {
    const itemToAdd = 'item_three';

    const newArray = toggleItemFromStringArray(mockArray, itemToAdd);

    expect(newArray.includes(itemToAdd)).toBeTruthy();
  });

  it('removes an item from array when present', () => {
    const itemToBeRemoved = 'item_two';

    const newArray = toggleItemFromStringArray(mockArray, itemToBeRemoved);
    expect(newArray.includes(itemToBeRemoved)).toBeFalsy();
  });
});
