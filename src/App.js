import './App.css';
import NavBar from './Components/NavBarComponents/NavBar';
import ItemListContainer from './Components/ItemComponents/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import { Routes, Route } from "react-router-dom";
import { CartProvider } from './Components/Contexts/CartContext'

function App() {
  return (
    <div classname="App">
      <CartProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>    
          </Routes>
      </CartProvider>
    </div>    
  );
}
export default App;
