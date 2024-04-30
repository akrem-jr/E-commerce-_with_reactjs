import { Outlet } from 'react-router-dom';
import './App.css';
import Navitems from './components/Navitems';
import Banner from './Home/Banner';
import Home from './Home/Home';

function App() {
  return (
    <>
      <Navitems />
     
      <Home/>
    </>
  );
}

export default App;
