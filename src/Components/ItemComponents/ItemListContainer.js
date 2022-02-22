import { useState, useEffect } from 'react'
import GetProducts from "../../GetProducts/GetProducts";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ItemListContainer = () => {
  const { id } = useParams();
  const[products, SetProducts] = useState([]);
  useEffect(() => {
    GetProducts
    .then(res => {
      (id === undefined)?   SetProducts(res) :  SetProducts(res.filter((prod) => prod.Type == id.toLowerCase()));
      })
    .catch(err => console.log('error al obtener productos', err))
  },[id])  
  if (products.length>0){

  return (
    <ItemList products = {products}/>
  )}return(
    <Box sx={{ justifyContent: "center", display :"flex"}}>
      <CircularProgress/> 
    </Box>
  )
};

export default ItemListContainer;