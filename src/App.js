import './App.css';
import NavBar from './Components/NavBarComponents/NavBar';
import ItemListContainer from './Components/ItemComponents/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';

function App() {
  return (
    <div classname="App">
       <NavBar/>
       <ItemDetailContainer/>
    </div>    
  );
}
export default App;
