import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFile,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import './Reg.css';

function Appli() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [dob, setDob] = useState('');
  const [ugDegree, setUgDegree] = useState('');
  const [institution, setInstitution] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [altMobileNumber, setAltMobileNumber] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'fname') {
      setFname(value);
    } else if (name === 'lname') {
      setLname(value);
    } else if (name === 'dob') {
      setDob(value);
    } else if (name === 'ugDegree') {
      setUgDegree(value);
    } else if (name === 'institution') {
      setInstitution(value);
    } else if (name === 'aadharNumber') {
      setAadharNumber(value);
    } else if (name === 'mobileNumber') {
      setMobileNumber(value);
    } else if (name === 'altMobileNumber') {
      setAltMobileNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (fname.trim() === '') {
      validationErrors.fname = 'First Name is required';
    }

    if (lname.trim() === '') {
      validationErrors.lname = 'Last Name is required';
    }

    if (dob.trim() === '') {
      validationErrors.dob = 'Date of Birth is required';
    }

    if (ugDegree.trim() === '') {
      validationErrors.ugDegree = 'Name of UG Degree and Branch is required';
    }

    if (institution.trim() === '') {
      validationErrors.institution = 'Name of the Institution is required';
    }

    if (aadharNumber.trim() === '') {
      validationErrors.aadharNumber = 'Aadhar Card Number is required';
    }

    if (mobileNumber.trim() === '') {
      validationErrors.mobileNumber = 'Mobile Number is required';
    }

    if (altMobileNumber.trim() === '') {
      validationErrors.altMobileNumber = 'Alternative Mobile Number is required';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission
      alert('Form submitted successfully!');
    } else {
      alert('Please fill in all the required fields.');
    }
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        <span className="text-primary">Application</span>
      </h1>
      <MDBContainer fluid className='p-4 m-flex' style={{ minHeight: '100vh' }}>
        <MDBRow>
          <MDBCol md='40'>
            <MDBCard className='my-5'>
              <MDBCardBody className='p-5'>
                <form onSubmit={handleSubmit}>
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Name of the Student'
                    id='f_name'
                    name='fname'
                    type='text'
                    size='lg'
                    required
                    value={fname}
                    onChange={handleInputChange}
                    validation={errors.fname ? false : true}
                    errorMessage={errors.fname}
                  />
                  <MDBInput
                    wrapperClass='mb-4'
                    label="Father's Name"
                    id='l_name'
                    name='lname'
                    type='text'
                    size='lg'
                    required
                    value={lname}
                    onChange={handleInputChange}
                    validation={errors.lname ? false : true}
                    errorMessage={errors.lname}
                  />
                  <MDBInput
                    wrapperClass='mb-4'
                    label="Mother's Name"
                    id='mother_name'
                    name='motherName'
                    type='text'
                    size='lg'
                    required
                    
                  />
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Date of Birth'
                    id='dob'
                    name='dob'
                    type='date'
                    size='lg'
                    required
                    value={dob}
                    onChange={handleInputChange}
                    validation={errors.dob ? false : true}
                    errorMessage={errors.dob}
                  />
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Name of UG Degree and Branch'
                    id='ug_degree'
                    name='ugDegree'
                    type='text'
                    size='lg'
                    required
                    value={ugDegree}
                    onChange={handleInputChange}
                    validation={errors.ugDegree ? false : true}
                    errorMessage={errors.ugDegree}
                  />
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Name of the Institution'
                    id='institution'
                    name='institution'
                    type='text'
                    size='lg'
                    required
                    value={institution}
                    onChange={handleInputChange}
                    validation={errors.institution ? false : true}
                    errorMessage={errors.institution}
                  />
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Aadhar Card Number'
                    id='aadhar_number'
                    name='aadharNumber'
                    type='number'
                    size='lg'
                    required
                    value={aadharNumber}
                    onChange={handleInputChange}
                    validation={errors.aadharNumber ? false : true}
                    errorMessage={errors.aadharNumber}
                  />
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Mobile Number'
                    id='mobile_number'
                    name='mobileNumber'
                    type='number'
                    size='lg'
                    required
                    value={mobileNumber}
                    onChange={handleInputChange}
                    validation={errors.mobileNumber ? false : true}
                    errorMessage={errors.mobileNumber}
                  />
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Alternative Mobile Number'
                    id='alt_mobile_number'
                    name='altMobileNumber'
                    type='number'
                    size='lg'
                    required
                    value={altMobileNumber}
                    onChange={handleInputChange}
                    validation={errors.altMobileNumber ? false : true}
                    errorMessage={errors.altMobileNumber}
                  />
                  <MDBFile label='10th Marksheet' id='customFile1' required/>
                  <MDBFile label='12th Marksheet' id='customFile2' required/>
                  <MDBFile label='UG Degree Certificate' id='customFile3' required/><br />
                  <MDBCheckbox
                    name='acceptTerms'
                    id='acceptTerms'
                    label='Accept Terms and Conditions'
                    checked={acceptTerms}
                    onChange={() => setAcceptTerms(!acceptTerms)}
                  /><br />
                  <button className="btn btn-primary mb-4 px-5" type="submit">Apply</button>
                </form>
                <p className="font-monospace">Note:</p>
                <ol>
                  <li>
                    <strong>Title:</strong> Start by clearly stating that the statement is a "Declaration" or "Declaration Form" to ensure its purpose is understood.
                  </li>
                  <li>
                    <strong>Personal Information:</strong> Include the individual's full name, address, contact details, and any other relevant identifying information to establish their identity.
                  </li>
                  <li>
                    <strong>Purpose:</strong> Clearly state the purpose of the form or document being submitted and reference any unique identifiers or reference numbers associated with it.
                  </li>
                  <li>
                    <strong>Statement of Truth:</strong> The core of the declaration is the affirmation that the information provided is true, accurate, and complete. Use clear and unambiguous language to convey this statement, such as "I hereby declare under penalty of perjury that the information provided in this form is true and correct to the best of my knowledge."
                  </li>
                  <li>
                    <strong>Consent:</strong> If required, explicitly state that the individual consents to the use and processing of the information provided in accordance with applicable laws and regulations.
                  </li>
                  <li>
                    <strong>Date and Signature:</strong> Include a space for the individual to write the date of signing and provide their signature. The signature signifies their agreement with the declaration and acknowledges that they understand the legal implications of providing false information.
                  </li>
                  <li>
                    <strong>Witness (if applicable):</strong> Some forms may require a witness to observe the signing of the declaration. In such cases, provide a space for the witness to print their name, sign, and include their contact information.
                  </li>
                </ol>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Appli;
