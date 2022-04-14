# 🔗 [Live demo available here](https://cartrawler-take-home-signoretti.netlify.app/)

## Develop

1. Install dependencies using `yarn install`
2. Start development server using `yarn start`

## Deploy

⚠️ The project is automatically deployed using Netlify. Any commit to the `master` branch will be picked up, built and (if successful) deployed on https://cartrawler-take-home-signoretti.netlify.app/

If you would like to self host this repository on a dedicated server:

1. Run `yarn build` which will output a built version of the project in `build` folder[^1]
2. Install `serve` (`yarn global add serve`)
3. Serve package from server on opened port from `nginx` / `apache` using command `serve -s build -l PORT_NUMBER`

[^1]: `build` folder is committed to GitHub (worst practice) as per assignment requirements ("also provide a ready-built, ready-to-run version")

## Comments

- The app is voluntarily over-engineered for the purpose of demonstrating skills in this assesment
- `useQuery` and relative API structure has been introduced to show a possible state management technique that would scale well in larger products, but could have completely avoided here given we're dealing with the import of a `json` file
- I had to resort to React 17 since both `react-query` and `Chakra-UI` are still working on React 18 compatibility. See [here](https://github.com/tannerlinsley/react-query/issues/3476) for a sample issue I faced

### Possible improvements:

- **Improve website's responsiveness**: In a production environment, I would make sure Items resize properly when dealing with mobile phone and I would have hidden the filters sidebar away
- **E2E tests**: In a production environment, I would set up E2E using cypress to make sure buttons, filters, sorts, etc behave as expected
- **Icons**: Icons have been taken from `rentalcars.com` and `Feather Icons` and should probably be replaced by proprietary ones / icons that make more sense for given context

TODO:

- [] beautify import paths
- [] FIx bug with vendor list
- [] Commenti lore
- [] Unit tests
