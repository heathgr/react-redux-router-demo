import React from 'react';

const Home = () => <div>This is the home component.</div>;
const Temperature = () => <div>This will show the tempurature in Salt Lake.</div>;
const Stocks = () => <div>This will show some stocks or something.</div>;
const WordOfTheDay = () => <div>This will show the word of the day.</div>;

const pages = {
  Home,
  Temperature,
  Stocks,
  WordOfTheDay,
}

const Content = ({ currentRoute }) => {
  const Page = currentRoute ? pages[currentRoute.component] : null;

  return Page ? <Page /> : null;
};

export default Content;
