import React from 'react'

// type Props = {
//   items : object[],
// }

type Props = {
  items : {
    listing_id: number,
    url: string,
    url_570xN: string,
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
  }[],
}

// type Item = { 
//   listing_id: number,
//   url: string,
//   url_570xN: string,
//   title: string,
//   currency_code: string,
//   price: string,
//   quantity: number,
//   }

// type FullDataProps = {
//   items: {
//     listing_id: number,
//     state ?: string,
//     user_id ?: number,
//     category_id ?: number,
//     title: string,
//     creation_tsz ?: number,
//     ending_tsz ?: number,
//     original_creation_tsz ?: number,
//     last_modified_tsz ?: number,
//     price: string,
//     currency_code: string,
//     quantity: number,
//     sku ?: [],
//     tags ?: string[],
//     category_path ?: string[],
//     category_path_ids ?: number,
//     materials ?: string,
//     shop_section_id ?: number,
//     featured_rank ?: null,
//     state_tsz ?: number,
//     url: string,
//     views ?: number,
//     num_favorers ?: number,
//     shipping_template_id ?: number,
//     processing_min ?: number,
//     processing_max ?: number,
//     who_made ?: string,
//     is_supply ?: string,
//     when_made ?: string,
//     item_weight ?: null,
//     item_weight_unit ?: string,
//     item_length ?: null,
//     item_width ?: null,
//     item_height ?: null,
//     item_dimensions_unit ?: string,
//     is_private ?: boolean,
//     recipient ?: null,
//     occasion ?: null,
//     style ?: null,
//     non_taxable ?: boolean,
//     is_customizable ?: boolean,
//     is_digital ?: boolean,
//     file_data ?: string,
//     should_auto_renew ?: boolean,
//     language ?: string,
//     has_variations ?: boolean,
//     taxonomy_id ?: number,
//     taxonomy_path ?: string[],
//     used_manufacturer ?: boolean,
//     MainImage: {
//       listing_image_id ?: number,
//       hex_code ?: null,
//       red ?: null,
//       green ?: null,
//       blue ?: null,
//       hue ?: null,
//       saturation ?: null,
//       brightness ?: null,
//       is_black_and_white ?: null,
//       creation_tsz ?: null,
//       listing_id ?: number,      
//       rank ?: null,
//       url_75x75 ?: string,
//       url_170x135 ?: string,
//       url_570xN: string,
//       url_fullxfull ?: string,
//       full_height ?: null,
//       full_width ?: null,
//     }
//   }[]
// }

/* 
listing_id — уникальный идентификатор предложения, число;
url — ссылка на предложение, строка;
MainImage — информация об изображении, объект, нам необходимо использовать свойство url_570xN для получения адреса главной картинки, строка;
title — название предложения, строка;
currency_code — код валюты, строка;
price — цена, строка;
quantity — доступное количество, число.
*/

const Listing = ({items = []}: Props): React.JSX.Element => {
  
  return (
    <>
      <div className="item-list">
        {items.map(item => 
            <div className="item" key={item.listing_id}>
              <div className="item-image">
                <a href={item.url}>
                  <img src={item.url_570xN} alt={item.title + '\'s pic'}/>
                </a>
              </div>
              <div className="item-details">
                <p className="item-title">{(item.title.length > 50) ? `${item.title.slice(0, 49)}...`: item.title}</p>
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