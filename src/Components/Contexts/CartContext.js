import { createContext, useState, useEffect, useContext} from 'react';

export const CartContext = createContext();
export const UseCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {

    const [addedProducts, setAddedProducts] = useState([]);

    useEffect(() => {
        console.log(addedProducts);
    },[addedProducts])


    const addItem = (item, quantity) => { 
        setAddedProducts(addedProducts.filter(item => item !== undefined ))
        if(insIncart(item.Id)){

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
        let newValue = 0;
        addedProducts.map(product => {
            if(product.item.Id === id) {
            delete addedProducts[newValue];
            } newValue++;
        })
        setAddedProducts(addedProducts.filter(item => item !== undefined && item.lenght !== 0 ))
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
        <CartContext.Provider value = {{addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    )
};