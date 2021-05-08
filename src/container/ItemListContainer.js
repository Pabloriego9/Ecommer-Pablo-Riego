import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../component/Item/ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { nombreCategoria } = useParams();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((productos) => {
        if (nombreCategoria) {
          return setItems(productos.filter(producto => producto.editorial === nombreCategoria));
        } else setItems(productos);
      });
  }, [nombreCategoria]);

  return <ItemList items={items} />;
}

export default ItemListContainer;
