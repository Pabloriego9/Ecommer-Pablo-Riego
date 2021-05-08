import React from 'react';
import Item from './Item';

const ItemList = ( {items} ) => {
    return(
      <div>
        {
    items.map( prod => 
          <Item 
              key={ prod.id }
              {...prod}
           />
    )
}
      </div>
    )
    
} 

export default ItemList;