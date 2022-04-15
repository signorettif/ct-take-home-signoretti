# 🔗 [Live demo available here](https://ct-take-home-signoretti.netlify.app/)

## Develop

1. Install dependencies using `yarn install`
2. Start development server using `yarn start`

## Tests[^1]

1. Run tests using `yarn test`

[^1]: Please note that test coverage is very low as it is and by no means production ready - as per exercise requirements I have just shown how I would approach unit testing (`utils/toggleItemFromArray`) and integration testing (`pages/CarPage`)

## Deploy

⚠️ The project is automatically deployed using Netlify. Any commit to the `master` branch will be picked up, built and (if successful) deployed on https://ct-take-home-signoretti.netlify.app/

If you would like to self host this repository on a dedicated server:

1. Run `yarn build` which will output a built version of the project in `build` folder[^2]
2. Install `serve` (`yarn global add serve`)
3. Serve package from server on opened port from `nginx` / `apache` using command `serve -s build -l PORT_NUMBER`

[^2]: `build` folder is committed to GitHub (worst practice) as per assignment requirements ("also provide a ready-built, ready-to-run version")

## Comments

- The app is voluntarily over-engineered for the purpose of demonstrating skills in this assesment
- `useQuery` and relative API structure has been mocked to show how I would have approached the task if information were to be fetched from a server. This could also be used as a state management technique that would scale well in larger products. Please note I recognise this could have completely avoided here given we're dealing with the import of a `json` file. Also please note that fetching json from source was not convenient given CORS policies on `http://www.cartrawler.com/ctabe/cars.json`.
- I had to resort to React 17 since both `react-query` and `Chakra-UI` are still working on React 18 compatibility. See [here](https://github.com/tannerlinsley/react-query/issues/3476) for a sample issue I faced

### Possible improvements:

- **Improve website's responsiveness**: In a production environment, I would make sure Items resize properly when dealing with mobile phone and I would have hidden the filters sidebar away
- **E2E tests**: In a production environment, I would set up E2E using cypress to make sure buttons, filters, sorts, etc behave as expected
- **CI/CD testing**: In a production environment, I would set up tests to be blocking for the build and deployment of a commit on the main website
- **Icons**: Icons have been taken from `rentalcars.com` and `Feather Icons` and should probably be replaced by proprietary ones / icons that make more sense for given context
- **Lazy load images**: Images could be lazy loaded
