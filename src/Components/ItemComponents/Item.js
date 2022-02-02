import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../../App.css";

const Item = ({product}) => {
    return(

        <Box sx={{border:1, margin:1, padding : 1, display:"flex", flexDirection:"column",  Width:300, maxWidth: 300, minWidth: 300, borderRadius:4}}>
            <Typography sx = {{marginLeft:"auto", fontSize:20, marginRight:"auto",marginBottom:"auto"}}>{product.Name}</Typography>  
            <img src={product.Image} className="productImage"></img> 
            <Box sx = {{display:"flex", justifyContent:"center", gap:5, marginTop:1}}>
                <Button variant="outlined" startIcon={<InfoIcon/>}>Info</Button>
                <Button variant="contained" endIcon={<ShoppingCartIcon />}>USD${product.Price}</Button>
            </Box>
        </Box>
    )
}

export default Item; 