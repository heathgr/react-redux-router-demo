import React from 'react';

const Home = () => <article>
  <h1>Here Is My Demo</h1>
  <p>This app was written to showcase the use of React, Redux, and React Router.  It was styled using SCSS and makes use of responsive design.  It also fetches data from various APIs to show some useful info.</p>
</article>;
const Temperature = ({ route }) => {
  const { data } = route;

  return <article>
    <h1>Is It Cold Outside?</h1>
    <p>{`The temperature in Salt Lake is ${data} F.`}</p>
  </article>
};
const Stocks = ({ route }) => {
  const { data } = route;

  return <article>
    <h1>Stock Information</h1>
    {
      data.map(
        company => <div key={company.symbol} className='content__stock-row'>
          <div className='content__stock-symbol'>{company.symbol}</div>
          <div className='content__stock-name'>{company.name}</div>
          <div className='content__stock-price'>{company.price}</div>
          <div className='content__stock-change'>{company.change}</div>
        </div>
      )
    }
  </article>
}

const pages = {
  Home,
  Temperature,
  Stocks,
}

const Content = ({ currentRoute }) => {
  const Page = (currentRoute && currentRoute.data) ? pages[currentRoute.component] : null;

  return Page ? <Page route={currentRoute} /> : null;
};

export default Content;
