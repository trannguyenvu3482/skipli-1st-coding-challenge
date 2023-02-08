import { Box, Button, Container, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Header';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  // Handle send code button click
  const handleSendCode = async (e) => {
    try {
      // Check if the phone number is not empty
      if (phone === '') {
        toast.error('Please enter a phone number');
      } else {
        // Send a POST request to the server to send a code to the phone number
        const res = await axios.post('http://localhost:3001/api/create-code', {
          phoneNumber: phone,
        });

        if (res.status === 200) {
          toast.success('A code has been sent to your phone!');
        }
      }
    } catch (error) {
      toast.error(
        'Something went wrong, please check your phone number and try again!'
      );
    }
  };

  // Handle form submit
  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();

      // Check if the phone number and code are not empty
      if (phone === '' || code === '') {
        toast.error('Please enter all the required fields');
      } else {
        // Send a POST request to the server to validate the code
        const res = await axios.post(
          'http://localhost:3001/api/validate-code',
          {
            phoneNumber: phone,
            accessCode: code,
          }
        );

        if (res.status === 200) {
          toast.success('You have successfully logged in!');
        }
      }
    } catch (error) {
      toast.error('Your code is incorrect, please try again!');
    }
  };

  return (
    <div>
      <Header />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Phone verification</h1>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            width: 400,
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
          }}
          onSubmit={handleFormSubmit}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '40px',
            }}
          >
            <TextField
              required
              id="outlined-required"
              label="Phone number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <Button variant="contained" size="large" onClick={handleSendCode}>
              Send Code
            </Button>
          </Box>

          <TextField
            required
            id="outlined-required"
            label="Access code"
            onChange={(e) => setCode(e.target.value)}
            value={code}
            inputProps={{
              maxLength: 6,
              minLength: 1,
            }}
          />
          <Button variant="contained" size="large" type="submit">
            Submit
          </Button>
        </Box>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default Login;
