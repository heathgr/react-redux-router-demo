#Notes:

- I made use of React, Redux, and React Router.
- Most of my components are stateless.  I rely on the state tree to determine how things render.
- I implemented state based routing by using the react-router-redux library.
- I used Redux Sagas to handle asynchronous actions with Redux.
- Styles where written using sass they are complied using node-sass.
- I used axios as my http client to fetch some data from the Yahoo Weather and IEX Trading apis.


#Running Locally

To run the project locally perform the following:

1. Clone this repository into the directory of your choice.
2. Run `npm install`.
3. Compile the projects CSS by running `npm run css'.
4. Start the local development server by running 'npm start'.
5. Open http://localhost:3000/ in the browser of your choice.
