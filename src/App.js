import './App.css';
import NavBar from './Components/NavBarComponents/NavBar';
import ItemListContainer from './Components/ItemComponents/ItemListContainer';

function App() {
  return (
    <div classname="App">
       <NavBar/>
       <ItemListContainer user="Fran"/>
    </div> 
   
  );
}
export default App;
