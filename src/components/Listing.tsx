import React from 'react'

// type Props = {
//   items : object[],
// }

type Props = {
  items : {
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

type Item = {
  listing_id: number,
  url: string,
  MainImage: {
    url_570xN: string,
  },
  title: string,
  currency_code: string,
  price: string,
  quantity: number,
}

/* 
listing_id — уникальный идентификатор предложения, число;
url — ссылка на предложение, строка;
MainImage — информация об изображении, объект, нам необходимо использовать свойство url_570xN для получения адреса главной картинки, строка;
title — название предложения, строка;
currency_code — код валюты, строка;
price — цена, строка;
quantity — доступное количество, число.
*/

const Listing = ({items = []}: Props) => {
  // const JSXItems = items.map(item => {(
  //   return <div className="item">
  //             <div className="item-image">
  //               <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
  //                 <img src={item.url_570xN}/>
  //               </a>
  //             </div>
  //             <div className="item-details">
  //               <p className="item-title">Woodland Fairy</p>
  //               <p className="item-price">$3.99</p>
  //               <p className="item-quantity level-medium">12 left</p>
  //             </div>
  //           </div>
  // )})
  return (
    <>
      <div className="item-list">
        {items.map(item => 
            <div className="item" key={item.listing_id}>
              <div className="item-image">
                <a href={item.url}>
                  <img src={item.MainImage.url_570xN} alt={item.title + '\'s pic'}/>
                </a>
              </div>
              <div className="item-details">
                <p className="item-title">{item.title}</p>
                <p className="item-price">{item.currency_code + item.price}</p>
                <p className="item-quantity level-medium">{`${item.quantity} left`}</p>
              </div>
            </div>
  )}
      </div>
    </>
  )
}

export default Listing