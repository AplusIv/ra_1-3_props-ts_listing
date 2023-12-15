import React from 'react'
import List from './List'

type Data = { 
  listing_id: number,
  url: string | undefined,
  url_570xN: string | undefined,
  title: string | undefined,
  currency_code: string | undefined,
  price: string | undefined,
  quantity: number | undefined,
}
type PropsData = {
  items : Data[],
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

const Listing = ({items = []}: PropsData): React.JSX.Element => {
  
  return (
    <>
      <div className="item-list">
        {items.map(item => (<List item={item}  key={item.listing_id}/>))}
      </div>
    </>
  );
}

export default Listing