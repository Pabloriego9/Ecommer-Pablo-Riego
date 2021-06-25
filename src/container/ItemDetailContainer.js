import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../component/Item/ItemDetail";
import ItemCountContainer from '../container/ItemCountContainer';

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    (async function () {
      try {
        const call = await fetch("/data.json");
        const productos = await call.json();
        setItem(productos.find(producto => producto.id === +id));
        setLoading(false);
      } catch (err) {
        alert('Error con la pagina');
      }
    })();
  }, [id]);

  if (loading) return <h1>Loading</h1>;

  if (!item) return <h1>No hay  un item con ese ID</h1>;

  const onAdd = (count) => {
    console.log(count)
  }

  return (
  <div className="contador"><ItemDetail item={item} />
  <ItemCountContainer item={item}  onAdd={onAdd}/>
  </div>
  )
}

export default ItemDetailContainer;