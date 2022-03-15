import { createContext, useState, useContext} from 'react';

export const CartContext = createContext();
export const UseCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {

    const [addedProducts, setAddedProducts] = useState([]);

    const addItem = (item, quantity) => { 
        setAddedProducts(addedProducts.filter(item => item !== undefined ))
        if(isIncart(item.Id)){
            let newValue =  addedProducts.findnewValue((prod) => prod.item.Id === item.Id)

            let posibleQuantity = addedProducts[newValue].quantity + quantity;

            if(posibleQuantity < item.Stock){
                addedProducts[newValue].quantity = posibleQuantity
            }  
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

    const isIncart = (id) => { 
        let bool = false;
        addedProducts.map(product => {
            if(product.item.Id === id)  bool = true;
        });
    }

    return (
        <CartContext.Provider value = {{addItem, removeItem, addedProducts, getTotalPrice, itemSumatory, clear }}>
            {children}
        </CartContext.Provider>
    )
};