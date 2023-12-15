import './App.css';
import Listing from './components/Listing';
import etsy from './etsy.json'

const fixedJsonData = etsy.filter((item) => item.state === 'active');
const cleanData = fixedJsonData.map((item) => (
  {
    listing_id: item.listing_id,
    url: item.url,
    url_570xN: item.MainImage?.url_570xN, // ? - в первичных данных может не быть MainImage
    title: item.title,
    currency_code: item.currency_code,
    price: item.price,
    quantity: item.quantity,
  }
));

function App() {
 
  return (
    <Listing items={cleanData}/>
  );
}

export default App;
