import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import { UseCart } from '../Contexts/CartContext';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import { getFirestore, collection, doc, addDoc, updateDoc } from "firebase/firestore";

export default function Cart() {    
    const {addedProducts, removeItem, getTotalPrice, clear } = UseCart();

    const inputs = [
      {label: "Name/Surname", name: "name"},
      {label: "Email", name: "email"},
      {label: "Phone Number", name: "phone"}
    ];
  
    const [formFields, setFormFields] = useState({
      name: "",
      email: "",
      phone: ""
    });

    const updateDB = () => {
      const db = getFirestore(); 
      addedProducts.map((prod) => {  
        updateDoc(doc(db, "items", `${prod.item.Id}`), { Stock: prod.item.Stock - prod.quantity })
      })  
    }

    const onChange = (event) => {
      setFormFields({ ...formFields, [event.target.name]: event.target.value });
    };
  
    const [confirm, setConfirm] = React.useState(true);

    const [orderId, setOrderId] = useState();  

    const db = getFirestore();

    const addOrderToDb = () => {
      var date = new Date();
      const orderCollection = collection(db, "orders")
      const data =
      {
        buyer:
        {
          name: formFields.name,
          phone: formFields.phone,
          email: formFields.email
        },
        date: date,
        items: addedProducts,
        total: getTotalPrice()
      }
      addDoc(orderCollection, data).then((data) => {
        setOrderId(data.id)
      })  
    }  
  
    const handleFormSubmit = () => {
      addOrderToDb();
      updateDB();
      clear();
      setConfirm(true);  
    }    
    if(addedProducts.length > 0) {
    return(
      <><Box sx={{display: "flex", justifyContent: "center" }}>
        <List dense sx={{ maxWidth: 700,  bgcolor: 'background.paper', boxShadow: 1 }}>
          {addedProducts.map((value) => {
            return (
              <ListItem key={value.item.Id} disablePadding>
                <ListItemAvatar sx={{marginLeft: 1}}>
                  <Avatar sx={{ width: 70, height: 70 }} src={value.item.Icon}/>
                </ListItemAvatar>
                <Typography component="h3" sx={{width:800, textAlign : "center", fontSize: 20}}> {value.item.Name}</Typography>
                <Typography component="h3" color="text.secondary" sx={{width:150, textAlign : "center", fontSize: 18}}> {value.quantity} </Typography>
                <Typography component="h3" color="inherit" sx={{width:250, textAlign : "center", fontSize: 18}}> USD${value.item.Price} </Typography>
                <IconButton color = "inherit" onClick= {() => removeItem(value.item.Id)}> <DeleteIcon></DeleteIcon> </IconButton>  
              </ListItem>
            );
          })}
          <Box sx={{display: "flex", marginTop: 3, justifyContent: "flex-end"}}>
            <Typography> Precio Total: USD $ </Typography>
            <Typography sx = {{marginRight: 3}}> {getTotalPrice()} </Typography>
          </Box>
        </List> 
      </Box>
      <Box sx={{ marginRight: 28 }}>
        <FormControl sx={{ position: "absolute" }}>{inputs.map(({ name, label }) => (
          <TextField
            id="outlined-textarea"
            label={label}
            value={formFields[name]}
            name={name}
            onChange={onChange}
            sx={{ margin: 2 }}/>
          ))}
          <Button onClick={handleFormSubmit}> Finalizar Compra </Button>
        </FormControl>
      </Box></>
    );
  }else{
    return(
      <Box sx= {{ display : "flex", flexDirection: "column", justifyContent: "center"}}>
        <Typography color="text.secondary" sx = {{ fontSize:22, textAlign: "center" }}> ¡Tu carrito se encuentra vacío! </Typography>
        <Button sx = {{maxWidth: 500, fontSize:15, marginRight: "auto", marginLeft: "auto"}}variant="contained">   
          <Link to={`/`} style={{ textDecoration: 'none', color: "white" }}> Regresar al Catalogo de Juegos </Link>
        </Button>
        <Collapse in={confirm} sx={{ marginTop: 10, maxWidth: 800, marginRight: "auto", marginLeft: "auto" }}>
          {orderId !== undefined &&
            <Alert action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="medium"
                onClick={() => {
                  setConfirm(false);
                }}>
                <CloseIcon fontSize="inherit"/>
              </IconButton>} sx={{ mb: 15 }}> Su compra fue realizada correctamente,el n° de orden es <strong> {orderId} </strong> 
            </Alert>
          }
        </Collapse>
      </Box>
    );
  };
};