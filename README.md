# nhentai browser
A react-redux project.  
This web project use [nhentai-api](https://github.com/chuang861012/nhentai-api) to fetch data from nhentai.
## Installation
Download
    git clone git@github.com:chuang861012/nhentai-browser.git
run scripts
    npm run build
    npm start
## Deploy
You can clone the repo and deploy it  without doing anything. 
## Project Introduction
### Server side (back-end)
Use [Express](https://expressjs.com) to built a simple web server.      
The server contains a api to call the api provided by [nhentai.net](https://nhentai.net) .
### Client side (front-end)
Must of the program is in client side javascript.       
The project is based on [React.js](https://reactjs.org/) with [Redux](https://redux.js.org/)
List of packages of this project : 
- [react-redux](https://redux.js.org/)
- [react-lazyload](https://github.com/jasonslyvia/react-lazyload)
- [react-router](https://reacttraining.com/react-router/)
- [redux-promise](https://github.com/redux-utilities/redux-promise)
- [prop-types](https://www.npmjs.com/package/prop-types)
Other packages :  
- [lodash](https://lodash.com/docs/4.17.10)
- [axios](https://github.com/axios/axios)
### Development Environment
I use [webpack](https://webpack.js.org/) for building and development.      
run scripts:        
    npm run build // bundle production files to /dist
### Testing with Jest & enzyme
The test cases are not complete. Still working on it.
### Linter
run scripts:        
    npm run lint