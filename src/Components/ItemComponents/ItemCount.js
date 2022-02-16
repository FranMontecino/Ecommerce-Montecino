import React, { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const ItemCount = ({ stock, initial, setQuantity}) => {

  const [count, setCount] = useState(initial);
  const[rendCounter, setRendCounter]=  useState(true);

  const addItem = () => {
    if (count >= stock) return;
    setCount(count + 1);
  };

  const quitItem = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  const onAdd = () =>{    
    setQuantity(count);
    setRendCounter(false);
  } 
  if (rendCounter) {
    return(
    <Box sx={{ border: 1, display:'flex', flexDirection:"column", width:180, padding:1, borderRadius: 2 }}>
      <Box  sx={{ margin:"auto", width: 200}}>
        <button className="itemBtn" onClick={quitItem}><FontAwesomeIcon icon={faMinus} size="x" /></button>
        <Typography sx={{ marginRight:2, marginLeft:2}} variant="p" fontSize="large"> {count} </Typography>
        <button className="itemBtn" onClick={addItem}><FontAwesomeIcon icon={faPlus} size="x" /></button> 
      </Box>            
      <button className="addItem" onClick={onAdd}>Añadir al Carrito</button> 
    </Box> 
  )
} else{
  return (<></>);
  }         
};

export default ItemCount; 