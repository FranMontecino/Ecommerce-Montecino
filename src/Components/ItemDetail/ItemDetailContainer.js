import { useState, useEffect } from 'react'
import getProducts from '../../GetProducts/GetProducts';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const[item, setItem] = useState([]);
    const { id } = useParams();
    useEffect(() => {
      getProducts
      .then(res => {
        setItem(res.find((prod) => prod.Id === parseInt(id)));
        })
      .catch(err => console.log('Error al obtener el detalle del producto', err))
    },[])

    return (
     <ItemDetail item={item}/>
    );
};

export default ItemDetailContainer;