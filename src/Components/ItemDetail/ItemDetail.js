import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const ItemDetail = ({item}) => {
    return(
        <Card sx={{ maxWidth: 500 ,marginTop:"10", marginRight:"auto", marginLeft:"auto", boxShadow:3}}>
            <CardMedia component="img" sx={{ width: 350, margin:"auto"}} image={item.Image}/>
            <CardContent>
                <Typography gutterBottom variant="h3" sx={{ fontSize: 22, textAlign:"center"}} component="div">{item.Name}</Typography>
                <Typography variant="h4" sx={{ fontSize: 15 }}>{item.Description}</Typography>
            </CardContent >
            <CardActions sx= {{justifyContent: 'space-around', display: "flex"}}>
                <Typography variant="h5" color="text.secondary" sx = {{fontSize: 16}}>Precio: USD$ {item.Price}</Typography>
                <Typography variant="h5" color="text.secondary" sx = {{fontSize: 16}}>Stock: {item.Stock}</Typography>  
            </CardActions>
        </Card>
    );
}
export default ItemDetail; 