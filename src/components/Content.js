import React from 'react';

const Home = () => <article>This is the home component.</article>;
const Temperature = () => <article>This will show the tempurature in Salt Lake.</article>;
const Stocks = () => <article>This will show some stocks or something.</article>;
const WordOfTheDay = () => <article>This will show the word of the day.</article>;

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
