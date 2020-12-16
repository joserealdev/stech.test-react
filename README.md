# S.Tech test 

A small frontend application that reimagines the Youtube search page and results
pages but only for live videos.

## Getting Started

```
# Clone this repository
git clone https://github.com/joserealdev/stech.test-react.git
cd stech.test-react/

# Install dependencies
npm i

# Populate the config.json file inside ./src folder
# with the YouTube api key

# Run the project
npm run start
```

## Config file

* **API**: Google API
* **searchEndpoint**: YouTube search endpoint
* **apiKey**: Your secret key
* **requestParams**: Log files path. Find out params specs [here](https://developers.google.com/youtube/v3/docs/search/list)
    * **part**
    * **type**
    * **eventType**
    * **order**

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
