import { useState, useEffect } from 'react'
import getItem from '../../GetProducts/GetItem';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    const[item, setItem] = useState([]);
    useEffect(() => {
      getItem
      .then(res => {
        setItem(res)
    })
      .catch(err => console.log('Error al obtener el detalle del producto', err))
    },[])

    return (
     <ItemDetail item= {item}/>
    );};

export default ItemDetailContainer;