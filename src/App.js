import './App.css';
import NavBar from './Components/NavBarComponents/NavBar';
import ItemListContainer from './Components/ItemComponents/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div classname="App">
       <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>    
        </Routes>
    </div>    
  );
}
export default App;
