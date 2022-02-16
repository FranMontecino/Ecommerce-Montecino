import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import ItemCount from '../ItemComponents/ItemCount';
import { Link } from "react-router-dom";


const ItemDetail = ({item}) => {

    const[quantity, setQuantity]= useState(0);

    useEffect(() => {
      let msg = `Has añadido al carrito ${quantity} ejemplar`
      if (quantity !== 0) {
        quantity > 1 ? alert(msg+'es'): alert(msg);  
        }
    },[quantity])

    return(
        <Card sx={{ maxWidth: 500 ,marginTop:"10", marginRight:"auto", marginLeft:"auto", boxShadow:3}}>
            <Typography gutterBottom variant="h3" sx={{ fontSize: 28, textAlign:"center"}} component="div">{item.Name}</Typography>
            <CardMedia component="img" sx={{ width: 350, margin:"auto"}} image={item.Image}/>
            <CardContent>
                <Typography variant="h4" sx={{ fontSize: 15 }}>{item.Description}</Typography>
            </CardContent >
            <CardActions sx= {{justifyContent: 'center', display: "flex"}}>
                <ItemCount stock= {item.Stock} initial = {1} setQuantity = {setQuantity}/>
            </CardActions>
            <CardActions sx= {{justifyContent: 'center', display: "flex"}}>
                <Link to={`/cart`} style={{ textDecoration: 'none' }}><button className="addItem">Finalizar Compra</button></Link>
            </CardActions>
            <CardActions sx= {{justifyContent: 'space-around', display: "flex"}}>    
                <Typography variant="h5" color="text.secondary" sx = {{fontSize: 16}}>Precio: USD$ {item.Price}</Typography>
                <Typography variant="h5" color="text.secondary" sx = {{fontSize: 16}}>Stock: {item.Stock}</Typography>  
            </CardActions>
        </Card>
    );
}
export default ItemDetail; 