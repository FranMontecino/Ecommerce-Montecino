import React, { useState } from "react";
import swal from 'sweetalert2';

const ItemCount = ({ stock, initial}) => {

  const [count, setCount] = useState(initial);

  const addItem = () => {
    if (count >= stock) return;
    setCount(count + 1);
  };

  const quitItem = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  const onAdd = () =>{
    swal.fire({
        title: "Correcto !",
        text: `Agregaste ${count} articulos al carrito`,
        icon: "success",
        button: "Cerrar",
    });
  };
  
  return (
      <div>
        <div classname="itemCount">
            <button className="itemBtn" onClick={quitItem}>-</button>
            <p className="quantity">{count}</p>
            <button className="itemBtn" onClick={addItem}>+</button>
        </div>
        <button className="addItem" onClick={onAdd}>Añadir al Carrito</button> 
      </div>
  );       
};

export default ItemCount; 