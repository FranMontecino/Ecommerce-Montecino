import { createContext, useState, useContext} from 'react';

export const CartContext = createContext();
export const UseCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {

    const [addedProducts, setAddedProducts] = useState([]);

    const addItem = (item, quantity) => { 
        setAddedProducts(addedProducts.filter(item => item !== undefined ))
        if(insIncart(item.Id)){            
            let index =  addedProducts.findIndex((prod) => prod.item.Id === item.Id)   

            let PosibleQuantity = addedProducts[index].quantity + quantity;            
            if(PosibleQuantity < item.Stock){
                addedProducts[index].quantity = PosibleQuantity
            }else{
                alert(`El numero de productos (${PosibleQuantity}) que intentas añadir supera el stock disponible`);
            }; 
        }else{
            setAddedProducts([...addedProducts,{item, quantity}]);
        }
    }

    const removeItem = (id) => {
        setAddedProducts(addedProducts.filter(item => item.item.Id !== id))
    }

    const getTotalPrice = () => { 
        let newValue = 0;
        addedProducts.map(item => {
            newValue = newValue + (item.item.Price * item.quantity) ;       
        })
        return newValue;
    }     
       
    const itemSumatory = ()=> {
        let newValue = 0;
        addedProducts.map(item => {
            newValue = newValue + item.quantity;       
        })
        return newValue;
    }

    const clear = () => { 
        setAddedProducts([]);
    }

    const insIncart = (id) => { 
        let bool = false;
        addedProducts.map(product => {
            if(product.item.Id === id)  bool = true;
        });
        return bool;
    }

    return (
        <CartContext.Provider value = {{addItem, removeItem, addedProducts, getTotalPrice, itemSumatory}}>
            {children}
        </CartContext.Provider>
    )
};