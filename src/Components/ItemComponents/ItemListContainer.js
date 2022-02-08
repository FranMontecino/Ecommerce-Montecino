import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import GetProducts from "../../GetProducts/GetProducts";
import ItemList from "./ItemList";
import Box from "@mui/material/Box";
import swal from "sweetalert";
import ItemCount from "./ItemCount";

/*export class ItemListContainer extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>Bienvenido, {user} <FontAwesomeIcon icon={faHandPeace} size="1x" />!</h1>
        <ItemCount initial={1}/>
      </div>
    );
  };
};*/

const ItemListContainer = () => {
  const[products, SetProducts] = useState([]);
  useEffect(() => {
    GetProducts
    .then(res => {
      SetProducts(res)
    })
    .catch(err => alert('Error al obtener los productos', err))
  },[]);

  return (
      <ItemList products = {products}/> 
  );
};

export default ItemListContainer;