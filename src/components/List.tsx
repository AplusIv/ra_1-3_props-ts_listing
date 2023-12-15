import React from 'react';

type Props = {
  item: {
    listing_id: number,
    url: string | undefined,
    url_570xN: string | undefined,
    title: string | undefined,
    currency_code: string | undefined,
    price: string | undefined,
    quantity: number | undefined,
  } | undefined
}

const List = ({item}: Props): React.JSX.Element | null => {
  if (item && item.title && item.currency_code && item.price && item.quantity) {
    const title = (item.title.length > 50) ? `${item.title.slice(0, 50)}\u2026`: item.title;
    const level = (item.quantity > 20) ? 'level-high' : (item.quantity > 10) ? 'level-medium' : 'level-low';
    const currencyCode = (item.currency_code === 'EUR') ? `€${item.price}` : (item.currency_code === 'USD') ? `$${item.price}` : `${item.price + ' ' + item.currency_code}`;

    return (
      <div className="item">
        <div className="item-image">
          <a href={item.url}>
            <img src={item.url_570xN} alt={item.title + '\'s pic'}/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{title}</p>
          <p className="item-price">{currencyCode}</p>
          <p className={"item-quantity " + level}>{`${item.quantity} left`}</p>
        </div>
      </div>
    );
  }

  return null;  
}

export default List