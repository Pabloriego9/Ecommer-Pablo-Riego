import React from "react";

export default function ItemDetail({ item: { id, imagen, precio, nombre, descripcion } }) {
  return (
    <div>
      <h3 className="title">hola</h3>
      <div className="card" key={id} style={{ width: "20rem" }}>
        <img className="card-img-top" src={imagen} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">{precio}</p>
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{descripcion}</p>
        </div>
      </div>
    </div>
  );
}
