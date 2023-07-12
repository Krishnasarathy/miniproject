import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,

}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function Reg() {

  const handleClick = () => {
    alert('Registered Successfully');
  };
  return (
    <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
          Make talent your  <br />
            <span className="text-primary">competitive advantage</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
          Are you looking to pursue your postgraduate studies and take your academic journey to the next level? Welcome to the world of PG Studies! We offer a comprehensive range of postgraduate programs designed to expand your knowledge, enhance your skills, and propel your career forward.
          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' required/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text' required/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' required/>
              <MDBInput className='input' wrapperClass='mb-4' label='Phone' id='form1' type='number' required/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' required/>

              <Link to="/"><button className="btn btn-primary mb-4 px-5" type="button" onClick={handleClick}>Register</button></Link>

              

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Reg;