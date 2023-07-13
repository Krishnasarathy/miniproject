import React from 'react'

import Nav from '../Components/Nav';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import Ap from '../Components/Card';
import Apj from '../Components/Cardd';



const Home = () => {
  return (
    <>
    <Nav />
    
    <div>
      <div id="section1" className="section1">
        <div className='ig1'>
          <h1 className='wel'>Welcome Back!</h1>   
          
        </div>

       
      <br/>
      </div>
      <br/>
        <h1 className='er'>Earn Your Degree</h1>




      


      <div id="section2" className="section">

      <br/>
      <Ap/><br/>
      <Apj/><br/>
          

       





      </div>





    </div>

      
      
      </>
            

      



  )
}

export default Home
