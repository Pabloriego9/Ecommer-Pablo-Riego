import React from 'react';
import './ItemDetail.css';
// Muestra un contador de unidades, con sus botones de  + y - 

 const ItemCount = ({id,stockUsser,stockTotal,sumar,restar,botonActivo,activo, onAdd, count}) => {
    
    return (
        <>
            <div className="StockdelContador">
            <p id={id} className="cantidad">cantidad en Stock: {stockTotal}</p>
            <div className="btn stock"  >
                <button onClick={restar} disabled={!botonActivo} style= {{backgroundColor: "red"}}>-</button>
                <p id="cantidad">{stockUsser}</p>
                <button onClick={sumar} disabled={!botonActivo}  style= {{backgroundColor:"green"}} >+</button>
            </div>
            <button onClick={()=> onAdd(count)} disabled={!activo} className="btn  shop" style={{backgroundColor:"yellow"}} >Comprar</button>
            </div>
        </>
    )
}
export default ItemCount;