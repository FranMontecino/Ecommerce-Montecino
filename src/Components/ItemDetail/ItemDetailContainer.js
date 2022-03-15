import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';
import { getFirestore, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const docRef = doc(db, "items", 'S2YAX1z5v3THCFBr36d9');
    getDoc(docRef).then((snapshot) => {

      setItem({ id: snapshot.id, ...snapshot.data() })

    })
  }, [])

  return (
    <ItemDetail item={item}/>
  );
};

export default ItemDetailContainer;