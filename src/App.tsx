import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Listing from './components/Listing';
import json from './data.json';
import etsy from './etsy.json'

type Data = {
  json: {
    listing_id: number,
    url: string,
    MainImage: {
      url_570xN: string,
    },
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
  }[],
}
const jsonData = {etsy}: Data;
const data = JSON.parse(jsonData);

function App() {
  return (
    <>Voila
    <Listing items={data}/>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
