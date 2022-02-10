import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import GetProducts from "../../GetProducts/GetProducts";
import ItemList from "./ItemList";
import Box from "@mui/material/Box";
import swal from "sweetalert";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";

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
  const { id } = useParams();
  const[products, SetProducts] = useState([]);
  useEffect(() => {
    GetProducts
    .then(res => {
      (id === undefined)?   SetProducts(res) :  SetProducts(res.filter((prod) => prod.Type == id.toLowerCase()));
      })
    .catch(err => console.log('error al obtener productos', err))
  },[id])

  return (
    <ItemList products = {products}/>
  );
};

export default ItemListContainer;