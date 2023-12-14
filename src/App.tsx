import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Listing from './components/Listing';
import etsy from './etsy.json'

let jsonData: any;
jsonData = {etsy};

const fixedJsonData = jsonData.filter((item: { state: string }) => item.state === 'active');

type Data = { 
  listing_id: number,
  url: string,
  url_570xN: string,
  title: string,
  currency_code: string,
  price: string,
  quantity: number,
}

let clean: Data[];

clean = fixedJsonData.map((item: { 
  listing_id: number,
   url: string,
   MainImage: { url_570xN: string, },
   title: string,
   currency_code: string,
   price: string,
   quantity: number,
  }) => (
  {
    listing_id: item.listing_id,
    url: item.url,
    url_570xN: item.MainImage.url_570xN,
    title: item.title,
    currency_code: item.currency_code,
    price: item.price,
    quantity: item.quantity,
  }
));

function App() {
  console.log(fixedJsonData);
  
  return (
    <>Voila
    <Listing items={clean}/>
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
