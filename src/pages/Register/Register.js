import React, { useContext, useState } from 'react';
import { Toast } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
    const navigate = useNavigate()
    const {createUser} = useContext(AuthContext)

    const [accepted , setAccepted] = useState(false)

    const handleClick =(e)=>{

        setAccepted(e.target.checked)
        
    }
    const handleEmailPassword =(event)=>{
        event.preventDefault()
        const from = event.target
        const email = from.email.value
        const password = from.password.value
       const name = from.name.value 
       console.log(name, email, password)
       createUser(email,password)
       .then(result =>{
        navigate('/')
        Toast('register success')


       }).catch(error => console.error(error))

    }
    return (
        <Form onSubmit={handleEmailPassword} className="bg-info rounded  p-4">
      <h1>Register here !</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-light">Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className="text-light">Your name</Form.Label>
        <Form.Control type="name" name='name' placeholder="Enter your name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="text-light">Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={handleClick} className="text-black" type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="success" type="submit" disabled = {!accepted}>
        Register
      </Button>
    </Form>
    );
};

export default Register;