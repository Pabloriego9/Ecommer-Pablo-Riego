import React from "react";
import { Link } from "react-router-dom";
const Item = ({ id, nombre, descripcion, precio, imagen }) => {
  return (
    <div className="card" id={id} style={{ width: "20rem" }}>
      <Link to={`/producto/${id}`}>
        <img className="card-img-top" src={imagen} alt="Card image cap" />
      </Link>
      <div className="card-body">
        <p className="card-text">{precio}</p>
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
      </div>
    </div>
  );
};

export default Item;
