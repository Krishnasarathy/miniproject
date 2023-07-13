import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Pages/Login';
import FacLogin from './Pages/Fac';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Reg from './Pages/Reg';
import Home from './Pages/home';
import { Provider } from 'react-redux';
import Pay from './Pages/Pay';
import OD from './Pages/OD';
import Appli from './Pages/Appli';


function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/fac' element={<FacLogin/>}/>
      <Route path='/reg' element={<Reg/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Payment' element={<Pay/>}/>
      <Route path='/OnlineDegree' element={<OD/>}/>
      <Route path='/Application' element={<Appli/>}/>
      


   </Routes>
   
   </BrowserRouter>

    </div>
  );
}

export default App;
