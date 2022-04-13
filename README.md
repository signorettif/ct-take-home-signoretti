- The app is voluntarily over-engineered for the purpose of this exercise
- `useQuery` and relative API structure has been introduced to show a possible state management technique that would scale well in larger products, but could have completely avoided here
- Had to use React 17 since both `react-query` and `Chakra-UI` are still upgrading to new module. See [here](https://github.com/tannerlinsley/react-query/issues/3476) for example

###Possible improvements:

- `404` page, currently `HomePage` component catches all the non signed pages
