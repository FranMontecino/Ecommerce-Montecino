import { useState, useEffect } from 'react'
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import FacebookCircularProgress from '../../MaterialUi/FacebookLoader';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { id } = useParams();
  const [products, SetProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    if (id === undefined) {
      getDocs(itemsCollection).then(snapshot => {

        SetProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
    } else {
      let q = query(itemsCollection, where("Type", "==", id));
      getDocs(q).then(snapshot => {
        SetProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
    }
  }, [id])


  if (products.length > 0) {
    return (
      <ItemList products={products} />
    );
  }
  {
    return (
      <Box sx={{ justifyContent: "center", display: "flex" }}>
        <FacebookCircularProgress/>
      </Box>
    );
  }

};

export default ItemListContainer;