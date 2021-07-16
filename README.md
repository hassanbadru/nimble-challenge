# Nimble Technical Exercise (React)
<p>

### Technical Specs / Requirements Met
- [x] When the user clicks a row in the list of candidates, it should expand a list of that candidate's applications.
- [x] If the user clicks a row that is already expanded, it should close the list of that candidate's applications.
- [x] When the user clicks an application line item, bring up a modal/overlay that shows the candidate information and information specific to that application/role
- [x] Search for candidates by name
- [x] Setup candidate page, route & components
- [x] Web App is mobile-responsive
  
## To Run
To install and run:

1. Clone the repo
```sh
git clone https://github.com/hassanbadru/nimble-challenge.git
```
2. In the root directory of the repo, install NPM packages
```sh
npm install
```
3. In the project directory, you can run:
```sh
yarn start
```
or

```sh
npm start
```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



### Demo Screenshots

![Product Screen Shot - original][product-screenshot-original]

![Product Screen Shot - expanded][product-screenshot-expanded]

![Product Screen Shot - Modal][product-screenshot-modal]

### Design Notes & TradeOffs
1. Adapted Brad Frost's Atomic Design approached (https://atomicdesign.bradfrost.com/chapter-2/)
2. Took advantage of Material UI & Icons
3. Context Layer could also load data from an API  
4. No consistent / extensive styling due to focus on functionality
5. No testing done due to time constraint



<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot-original]: public/original.png
[product-screenshot-expanded]: public/expanded.png
[product-screenshot-modal]: public/modal.png
